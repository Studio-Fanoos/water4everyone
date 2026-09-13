# Water4Everyone

Nederlandse one-page website voor **Water4Everyone**, een stichting/non-profit initiatief rond duurzame toegang tot schoon drinkwater. Eerste focusregio: Marokko.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger + CustomEase
- Lenis (smooth scroll op desktop)
- MapLibre GL + OpenStreetMap (Impact Map)
- next/image + next/font (Instrument Serif + Manrope)

## Lokaal starten

```bash
npm install
npm run dev -- --port 4321
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Build

```bash
npm run lint
npm run build
npm start -- --port 4321
```

## Content & configuratie

Harde projectfeiten staan centraal in:

- `lib/data/site.ts` — naam, tagline, ANBI/EU flags, donatiebedragen, modelstappen
- `lib/data/locations.ts` — impactlocaties (nu leeg; Marokko als focusregio)
- `lib/data/images.ts` — beeldpaden en alt-teksten

### Locaties later toevoegen

In `lib/data/locations.ts`:

```ts
export const locations: WaterLocation[] = [
  {
    id: "pilot-1",
    name: "Dorpsnaam",
    country: "Marokko",
    lat: 31.0,
    lng: -7.0,
    status: "active",
  },
]
```

### Donaties later koppelen

`components/ui/DonationModule.tsx` isoleert `handleDonation()`.
Zet `donationMode` in `siteConfig` om van mock naar Mollie/Stripe/link te schakelen.

### Contact later koppelen

`handleContactSubmit()` in `ContactSection.tsx` — demo-modus tot er een endpoint is.

## Fotografie

Stockbeelden zijn sfeerbeelden, geen projectfoto's. Zie `CREDITS.md`.

## Deployment

Vercel (production). Na koppeling:

```bash
npx vercel --prod --yes
```
