"""Refresh client-logo SVG wrappers from generated PNGs."""

from __future__ import annotations

import base64
from io import BytesIO
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CLIENT = ROOT / "src" / "assets" / "brand" / "client-logo"


def embed(png_path: Path, svg_path: Path, size: int = 64) -> None:
    im = Image.open(png_path).convert("RGBA")
    bio = BytesIO()
    im.resize((256, 256), Image.Resampling.LANCZOS).save(bio, format="PNG", optimize=True)
    b64 = base64.b64encode(bio.getvalue()).decode("ascii")
    svg_path.write_text(
        f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" role="img">
  <title>One Electra</title>
  <image href="data:image/png;base64,{b64}" width="{size}" height="{size}" preserveAspectRatio="xMidYMid meet"/>
</svg>
""",
        encoding="utf-8",
    )
    print("wrote", svg_path)


def main() -> None:
    mapping = [
        (CLIENT / "icon-badge-light.png", CLIENT / "icon-badge-light.svg"),
        (CLIENT / "icon-badge-dark.png", CLIENT / "icon-badge-dark.svg"),
        (CLIENT / "icon-monochrome-black.png", CLIENT / "icon-monochrome-black.svg"),
        (CLIENT / "icon-monochrome-white.png", CLIENT / "icon-monochrome-white.svg"),
    ]
    for png, svg in mapping:
        embed(png, svg)


if __name__ == "__main__":
    main()
