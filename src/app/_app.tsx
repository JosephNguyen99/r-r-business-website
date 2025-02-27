// src/pages/_app.tsx
import '../styles/index.css'; // Adjust the path based on your directory structure
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;