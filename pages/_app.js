import '@/styles/globals.css';
import ContextProvider from '@/utils/Context';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
