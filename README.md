# Lobstars Page

Content license:  CC BY-NC 4.0 Deed
https://creativecommons.org/licenses/by-nc/4.0/

https://lobstars-frisbee.club/

## Get started

We use npm. For supported Node and npm versions, see `package.json` under `engines`.

### Install dependencies

```zsh
npm install
```

### Run the dev server

```zsh
npm start
```

This runs Astro's local development server at `http://localhost:4321/`.

## Cloudflare Workers with Static Assets

Astro builds the site as static HTML and assets in `dist`. `wrangler.jsonc`
configures the `lobstars-website` Worker to serve that directory.

### Preview locally

```zsh
npm ci
npm run workers:dev
```

Wrangler serves the built site locally and will also run any Worker entry
point configured in `wrangler.jsonc`.

### Deploy a branch preview

From the branch you want to preview, sign in and run:

```zsh
npx wrangler login
npm run workers:preview
```

Wrangler names the Preview from the current Git branch and prints its
`workers.dev` URL. On the first run, Wrangler can create the parent Worker.
The Preview can be deployed before the production cutover.

For automatic previews, connect the Worker to the repository in Workers Builds.
Keep `main` as the production branch, set the build command to `npm run build`,
and enable preview builds with `npx wrangler preview` as the preview command.

The contact form submits directly from the browser through EmailJS. If EmailJS
restricts allowed origins, add the preview URL's origin to its allowlist before
testing submissions.

### Validate the production deployment

Check the build and Wrangler configuration with a dry run:

```zsh
npm run build
npx wrangler deploy --dry-run
```

At cutover, run `npx wrangler deploy` after building. The canonical URL is set
in `astro.config.mjs`.
