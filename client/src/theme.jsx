import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react';
import './App.css'

const headingRecipe = defineRecipe({
    base: {
        color: '#fffad6',
        fontFamily: 'Gellatio, sans-serif',
        textShadow: '1px 1px 10px #0000004c',
        _hover: {
            textShadow: '1px 1px 15px #ffffff9b',
            cursor: 'pointer',
        }
    },
});

const linkRecipe = defineRecipe({
    base: {
        textShadow: '1px 1px 5px #0000009b',
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none !important',
        outline: 'none !important',
        _hover: {
            textShadow: '1px 1px 15px #ffffff9b',
        }
    },
});

const config = defineConfig({
  theme: {
    breakpoints: {
      1 : '768px',
      2 : '1024px',
      3 : '1280px',
    },
    recipes: {
      heading: headingRecipe,
      link: linkRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);

export default system;