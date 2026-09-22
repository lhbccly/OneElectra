/**
 * Copyright-free lifestyle photography (Unsplash License / Pexels License).
 * Free for commercial use — no attribution required.
 * Prefer images without third-party charger brand logos.
 */
import heroNight from './hero-night-charge.jpg'
import heroPlug from './hero-ev-charging.jpg'
import homeWallCharger from './ac-wall-charger.jpg'
import homeGreenWall from './green-wall-charge.jpg'
import commercialPedestal from './visual-story.jpg'
import commercialCta from './cta-backdrop.jpg'
import publicDcNight from './commercial-parking.jpg'
import portableTravel from './portable-travel.jpg'
import factoryOem from './factory-oem.jpg'
import fleetLogistics from './fleet-depot.jpg'
import cableGun from './cable-hand.jpg'

export const lifestyle = {
  hero: heroNight,
  heroAlt: heroPlug,
  residential: homeWallCharger,
  residentialAlt: homeGreenWall,
  commercial: commercialPedestal,
  commercialAlt: commercialCta,
  publicFast: publicDcNight,
  /** Unbranded wallbox / station stand-in (no third-party logo). */
  dcStation: homeWallCharger,
  portable: portableTravel,
  oem: factoryOem,
  logistics: fleetLogistics,
  adapters: cableGun,
  /** Unbranded home wallbox close context. */
  wallboxCloseup: homeWallCharger,
} as const

export type LifestyleKey = keyof typeof lifestyle
