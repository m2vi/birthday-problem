import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { IoClose } from 'react-icons/io5';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Birthday Problem</title>
    </Head>
    <Component {...pageProps} />
    <ToastContainer
      position='top-right'
      autoClose={4500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable={true}
      pauseOnHover={true}
      theme='dark'
      icon={false}
      closeButton={(props) => <IoClose className='text-primary-300' {...props} />}
    />
  </>
);

export default MyApp;
