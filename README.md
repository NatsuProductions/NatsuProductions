# Natsu Productions

A frontend-only music video studio funnel for VTubers, Utaites, and independent artists. React, TypeScript, Vite, Tailwind, Motion, React Hook Form, and Zod. No backend, serverless functions, or database are required.

## Development

```sh
npm ci
npm run dev
npm run build
npm run lint
node --experimental-strip-types --test tests/inquiry.test.mjs
```

Use Node 22.18+ for the native TypeScript validation tests. Production output is the static `dist` directory; `npm run preview` previews it locally.

## Inquiry setup

Set `VITE_DISCORD_WEBHOOK_URL` in `.env`, using [.env.example](./.env.example) as a reference. Restart Vite after changing environment variables. On your hosting platform, set the same build-time variable and rebuild.

The browser posts directly to Discord. There is no `/api/inquiry` endpoint. Discord's successful empty 204 response is accepted, along with other successful HTTP statuses. Mentions are disabled in the submitted message. Validation, sending feedback, success confirmation, and error states are handled in the frontend. Failed submissions preserve the brief.

As in the original frontend-only integration, the webhook URL is visible in browser requests and the built application. Client validation is for user experience; it is not a server-side security boundary. No live Discord messages are sent by automated checks. A retry after an ambiguous network timeout may duplicate a delivered inquiry.

## Architecture

- [App.tsx](./src/App.tsx): routing, lazy legal pages, reduced motion, and route/hash scrolling.
- [StudioLayout](./src/components/StudioLayout.tsx): navigation, mobile disclosure, skip link, and footer.
- [Studio feature](./src/features/studio/): hero, work, services, process, testimonials, FAQ, and inquiry composition.
- [Inquiry feature](./src/features/inquiry/): shared form for the homepage and `/quote-form`, including accessible errors and submission states.
- [Validation](./src/requests/QuoteRequestSchema.ts): bounded, Unicode-friendly fields.
- [Discord transport](./src/webhooks/SendQuoteRequest.ts): direct browser delivery with a timeout and disabled mentions.

## Content and design

Projects and prices are in [Projects](./src/data/Projects.ts) and [Services](./src/data/Services.ts). Videos load after a visitor presses play. Selecting a service prefills the inquiry brief.

FAQ, process copy, navigation, and approved testimonials belong in [content.ts](./src/features/studio/content.ts). Testimonials currently have an explicit empty state; add only approved client quotes.

See [the design guide](./docs/design-system.md) for colors, typography, components, responsive behavior, and accessibility. Fonts use Google Fonts with local fallbacks. The provided logo is retained.

## Verification

Build and lint validate the application. Native Node tests cover creator aliases, field bounds, invalid dates, and reference URL protocols. Browser submission checks should intercept Discord requests to verify 204 success and failed-delivery feedback without sending real messages.
