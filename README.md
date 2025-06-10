# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Stack

Nuxt/vue - Tailwind 

Tailwind: For a intuitive Design system and a centralized color pallete 

Nuxt: The nuxt arcteture is a consolided for organization 


- Tailwind.scss: it used to contains global components with potential to be used in other components (box-marketplace, button-mindaro-marketplace)

- components/icons: all the svgs should be in this folder to dark mode works in svg icons too 

- webp: all images are in webp for a better otimization 

- pages
-- home
-- details
- components 
dumb children components and galleryProducts.vue

- @nuxt/icon: is a library to access a many icons (https://icones.js.org/collection/all)

## Component commonProduct.vue reusable

CommonProduct.vue accept properties to position label and button, for example:

With description / without description

<img width="256" alt="image" src="https://github.com/user-attachments/assets/be4c5e06-aa6f-4f54-b50e-79df50e25672" />
<img width="256" alt="image" src="https://github.com/user-attachments/assets/967edd14-887c-46a5-bff1-e8e171164985" />

Gradient can be enabled and disabled 

<img width="256" alt="image" src="https://github.com/user-attachments/assets/d0f90cec-959a-4cdb-9eb7-aa02571d6b39" />
<img width="256" alt="image" src="https://github.com/user-attachments/assets/bb6aad28-0027-4419-a71f-6e1dd88dcee8" />

CTA button position 

<img width="256" alt="image" src="https://github.com/user-attachments/assets/a8d4373e-5894-4843-afc9-4d2fe2bf0a9f" />
<img width="256" alt="image" src="https://github.com/user-attachments/assets/65b271cc-0502-44bc-9ee7-a20b9cfb28d9" />


<img width="256" alt="image" src="https://github.com/user-attachments/assets/b05d0c30-1bff-454f-9d95-79d0913134b9" />
<img width="256" alt="image" src="https://github.com/user-attachments/assets/854b2af0-0e69-4e10-be75-ca621210e746" />
<img width="256" alt="image" src="https://github.com/user-attachments/assets/dde1857f-13a9-4e38-8633-7de07a68b3fc" />


It can change by adding it in object:

``
  const mock2 = {
    ....
    buttonPosition: "bottom",
    titlePosition: "top-left",
    isGradient: false,
  };
``


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



