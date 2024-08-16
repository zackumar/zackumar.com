import { type PlatformProxy } from 'wrangler';

// When using `wrangler.toml` to configure bindings,
// `wrangler types` will generate types for those bindings
// into the global `Env` interface.
// Need this empty interface so that typechecking passes
// even if no `wrangler.toml` exists.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// interface Env {
//   SANITY_STUDIO_PROJECT_ID: string;
//   SANITY_STUDIO_DATASET: string;
//   SANITY_STUDIO_URL: string;
//   SANITY_STUDIO_STEGA_ENABLED: boolean;
// }

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>;

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}
