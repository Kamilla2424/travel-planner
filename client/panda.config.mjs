import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets",],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          shiny: { value: 'Shiny, sans-serif' },
          cheesecake: { value: 'Cheesecake, sans-serif' },
          amoresa: { value: 'Amoresa, sans-serif' },
          gellatio: { value: 'Gellatio, sans-serif' },
          maglisto: { value: 'Maglisto, sans-serif' },
          blona: { value: 'Blona, sans-serif' }
        }
      },
      semanticTokens: {
        fonts: {
          heading: { value: '{fonts.cheesecake}'},
          body: { value: '{fonts.blona}'}
        },
      },
    }
  },

  globalCss: {
    body: {
      fontFamily: 'body',
      color: '#fffad6',
      textShadow: '1px 1px 5px #0000009b',
      backgroundImage: 'url(src/images/tropical-image.jpeg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundPosition: 'center',
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});