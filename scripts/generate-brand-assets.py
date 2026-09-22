"""Generate light/dark One Electra logo marks and favicons from the final PNG."""

from __future__ import annotations

import base64
from io import BytesIO
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "assets" / "brand" / "oneElectraFinalLogo.png"
OUT = ROOT / "src" / "assets" / "brand"
CLIENT = OUT / "client-logo"
PUBLIC = ROOT / "public"
GEN_LIGHT = Path(
    r"C:\Users\Dell\.cursor\projects\d-saad-temp-oneElectra\assets\logo-mark-light-theme.png"
)
GEN_DARK = Path(
    r"C:\Users\Dell\.cursor\projects\d-saad-temp-oneElectra\assets\logo-mark-dark-theme.png"
)

NAVY = (8, 24, 40)
LIME_LIGHT = (132, 204, 22)  # #84CC16
LIME_DARK = (163, 230, 53)  # #A3E635
LIGHT_MARK = (241, 245, 242)  # #F1F5F2
MONO_BLACK = (24, 32, 31)  # #18201F
MONO_WHITE = (241, 245, 242)


def is_bg(r: int, g: int, b: int, a: int, thresh: int = 230) -> bool:
    if a < 20:
        return True
    if r >= thresh and g >= thresh and b >= thresh:
        return True
    if abs(r - g) < 12 and abs(g - b) < 12 and abs(r - b) < 12 and 90 < r < 200:
        return True
    return False


def is_lime(r: int, g: int, b: int) -> bool:
    return g > 140 and 60 < r < 220 and b < 140 and g > r - 10 and g > b + 30


def is_light_body(r: int, g: int, b: int) -> bool:
    return not is_lime(r, g, b) and (r + g + b) > 500


def recolor(im: Image.Image, mode: str) -> Image.Image:
    w, h = im.size
    px = im.load()
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    op = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if is_bg(r, g, b, a):
                continue

            if is_lime(r, g, b):
                if mode == "mono-black":
                    target = MONO_BLACK
                elif mode == "mono-white":
                    target = MONO_WHITE
                elif mode == "dark":
                    target = LIME_DARK
                else:
                    target = LIME_LIGHT
                op[x, y] = (*target, a)
                continue

            if mode == "light":
                target = NAVY
            elif mode == "dark":
                target = LIGHT_MARK
            elif mode == "mono-black":
                target = MONO_BLACK
            else:
                target = MONO_WHITE

            lum = (r + g + b) / 3
            if lum > 50 and not is_light_body(r, g, b):
                t = min(1.0, (lum - 20) / 220)
                alpha = int(a * (1 - t * 0.85))
            else:
                alpha = a

            if alpha > 8:
                op[x, y] = (*target, max(alpha, 0))

    return out


def crop_content(img: Image.Image, pad: int = 0) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    return img.crop((l, t, r, b))


def make_square(img: Image.Image, size: int = 512, pad_ratio: float = 0.12) -> Image.Image:
    c = crop_content(img, pad=0)
    cw, ch = c.size
    side = max(cw, ch)
    pad = int(side * pad_ratio)
    canvas_side = side + pad * 2
    canvas = Image.new("RGBA", (canvas_side, canvas_side), (0, 0, 0, 0))
    ox = (canvas_side - cw) // 2
    oy = (canvas_side - ch) // 2
    canvas.paste(c, (ox, oy), c)
    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def with_solid_bg(img: Image.Image, bg: tuple[int, int, int, int], size: int = 180) -> Image.Image:
    sq = make_square(img, size, pad_ratio=0.16)
    canvas = Image.new("RGBA", (size, size), bg)
    canvas.alpha_composite(sq)
    return canvas


def embed_png_svg(img: Image.Image, svg_path: Path, size: int = 64) -> None:
    buf_img = make_square(img, 256, pad_ratio=0.12)
    bio = BytesIO()
    buf_img.save(bio, format="PNG", optimize=True)
    b64 = base64.b64encode(bio.getvalue()).decode("ascii")
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" role="img">
  <title>One Electra</title>
  <image href="data:image/png;base64,{b64}" width="{size}" height="{size}" preserveAspectRatio="xMidYMid meet"/>
</svg>
"""
    svg_path.write_text(svg, encoding="utf-8")


def main() -> None:
    CLIENT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)

    source = Image.open(SRC).convert("RGBA")
    light = recolor(source, "light")
    dark = recolor(source, "dark")
    mono_b = recolor(source, "mono-black")
    mono_w = recolor(source, "mono-white")

    if GEN_LIGHT.exists():
        gen_l = recolor(Image.open(GEN_LIGHT).convert("RGBA"), "light")
        make_square(gen_l, 512).save(OUT / "logo-mark-light-generated.png")
        print("wrote", OUT / "logo-mark-light-generated.png")
    if GEN_DARK.exists():
        gen_d = recolor(Image.open(GEN_DARK).convert("RGBA"), "dark")
        make_square(gen_d, 512).save(OUT / "logo-mark-generated.png")
        print("wrote", OUT / "logo-mark-generated.png")

    light_sq = make_square(light, 512)
    dark_sq = make_square(dark, 512)
    light_sq.save(OUT / "logo-mark-light.png")
    dark_sq.save(OUT / "logo-mark.png")
    print("wrote", OUT / "logo-mark-light.png")
    print("wrote", OUT / "logo-mark.png")

    embed_png_svg(light, OUT / "logo-mark-light.svg")
    embed_png_svg(dark, OUT / "logo-mark.svg")
    embed_png_svg(light, PUBLIC / "favicon.svg")
    print("wrote SVG marks + public/favicon.svg")

    for size, name in [
        (32, "favicon-32.png"),
        (48, "favicon-48.png"),
        (192, "favicon.png"),
    ]:
        make_square(light, size, pad_ratio=0.14).save(PUBLIC / name)
        print("wrote", PUBLIC / name)

    with_solid_bg(light, (255, 255, 255, 255), 180).save(PUBLIC / "apple-touch-icon.png")
    print("wrote", PUBLIC / "apple-touch-icon.png")

    make_square(light, 512).save(CLIENT / "icon-badge-light.png")
    make_square(dark, 512).save(CLIENT / "icon-badge-dark.png")
    make_square(mono_b, 512).save(CLIENT / "icon-monochrome-black.png")
    make_square(mono_w, 512).save(CLIENT / "icon-monochrome-white.png")
    make_square(light, 512, pad_ratio=0.08).save(CLIENT / "icon-transparent-favicon.png")
    embed_png_svg(light, CLIENT / "icon-transparent-favicon.svg")
    print("wrote client-logo pack")
    print("done")


if __name__ == "__main__":
    main()
