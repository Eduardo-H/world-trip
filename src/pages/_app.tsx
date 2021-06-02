import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { HeaderContextProvider } from '../contexts/HeaderContext';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';

import '../styles/swiper.scss';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderContextProvider>
        <Header />
        <Component {...pageProps} />
      </HeaderContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
