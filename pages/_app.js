import { Provider } from 'react-redux'
import Modal from 'react-modal';
import MainLayout from '@/layouts/MainLayout'
import { store } from '@/redux/store/store'
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  Modal.setAppElement('body');
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
        <Toaster />
      </MainLayout>
    </Provider>
  )

}
