# Welcome to my portfolio

## Let's get things running

This template is built on top of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

At the root of your project, you'll see a `package.json` file defining our dependencies.

Most of this is boilerplate, but I will call out the following three dependencies:

- `animejs` -> A javascript animation library, used for the grid animation inside of DotGrid.tsx
- `framer-motion` -> A react based animation library, used in a hand full of places (anywhere you see `<motion.el />` style components)
- `tailwind` -> Most styling uses Tailwind utility classes
- `sass` -> Some styling uses plain SCSS and SCSS modules for this project

Now that's out of the way, you can get your project running by first installing dependencies.

From your terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start your project on `localhost:3000`

## The file structure

Because this is a NextJS project, we follow the new NextJS pattern for organizing this project.

Inside of the `app/` directly you'll find 3 files:

- `layout.tsx` -> A file which wraps around every page in our app. Here we import the Poppins font and include it in our page.
- `page.tsx` -> This represents our home route.

Inside of the `styles/` directly you'll find find a global SCSS file and components SCSS Module files.

Inside of the `components/` directory you'll find all of the good stuff.

## Styling

Global styling (colors mainly) are defined in the `styles/globals.scss` using SCSS variables in the `styles/_variables.scss` file.

```
  $primary: rgb(17, 17, 17);
  $opaque: rgb(17, 17, 17, 0.25);
  $primary-light: rgb(35, 35, 35);
  $primary-dark: rgb(8, 8, 8);

  $text: rgb(235, 236, 243);
  $brand: rgb(10, 255, 157);

  $text-xs: 1.6rem;
  $text-sm: 1.8rem;
  $text-md: 2.2rem;
  $text-lg: 3.6rem;
  $text-xl: 5.6rem;
  $text-2xl: 9.6rem;
```

The first six variables are the colors for the app. The last six are font sizes. Play around with these a bit to start making it your own.
