# Contributing

## Building locally

Clone the repo, and:

```sh
npm install
npm run build
```

You can run the development server with:

```sh
npm run dev
```

## Generating webp images

Webp images can be generated automatically:

1. Copy the relevant images inside `public/images/png`

2. Run

```sh
npm run webp
```

3. Now all the images you added should be present in the same position inside `public/images/webp` folder
