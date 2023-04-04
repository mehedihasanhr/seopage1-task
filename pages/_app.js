import store from '@/services/store';
import '@/styles/globals.css';
import ContextProvider from '@/utils/Context';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Provider>
  );
}
