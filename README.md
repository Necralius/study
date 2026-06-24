# Study

Static web app organized for Vercel.

## Project Structure

- `public/` contains the deployable static site.
- `public/assets/css/` contains stylesheets.
- `public/assets/js/` contains browser JavaScript.
- `public/assets/images/` contains image assets.
- `vercel.json` tells Vercel to serve `public/` without a build step.

## Local Development

```sh
npm run dev
```

## Deployment

Import the repository into Vercel. The included `vercel.json` sets `public/` as the output directory and disables the build command.

