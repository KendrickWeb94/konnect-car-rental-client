import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "../node_modules/@fontsource/plus-jakarta-sans/300.css";
import "../node_modules/@fontsource/plus-jakarta-sans/400.css";
import "../node_modules/@fontsource/plus-jakarta-sans/500.css";
import "../node_modules/@fontsource/plus-jakarta-sans/600.css";
import "../node_modules/@fontsource/plus-jakarta-sans/700.css";
import "../node_modules/@fontsource/plus-jakarta-sans/800.css";
import "../node_modules/@fontsource/inter/400.css";
import "../node_modules/@fontsource/inter/500.css";
import "../node_modules/@fontsource/inter/600.css";
import "../node_modules/@fontsource/inter/700.css";
import "../node_modules/@fontsource/inter/800.css";
import "../node_modules/@fontsource/inter/900.css";
import { AuthProvider } from './controllers/auth-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</StrictMode>,
)
