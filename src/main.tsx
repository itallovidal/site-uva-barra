import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { env } from './env';
import { App } from './app';
import './index.css';

// Fix for MDXEditor using Prism in Vite production build
import * as Prism from 'prismjs';
import 'prismjs/themes/prism.css';
(globalThis as any).Prism = Prism;

async function startApp() {
  if (env.VITE_ENABLE_MSW) {
    const { worker } = await import('./mocks/worker');
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

startApp();
