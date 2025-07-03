// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
// export default defineConfig(({ command }) => {
//   const isProd = command === 'build';
//   return {
//     base: isProd ? '/Gigaspheresolutions/' : '/Gigaspheresolutions/',
//     plugins: [react()],
//   };
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const isProd = command === 'build';
  return {
    base: isProd ? '/' : '/',
    plugins: [react()],
  };
});
