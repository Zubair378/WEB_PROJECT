import { defineConfig } from 'vite';

export default defineConfig({ base: process.env.VERCEL ? '/' : '/WEB_PROJECT/' });
