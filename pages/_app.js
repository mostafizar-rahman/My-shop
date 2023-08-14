import MainLayout from '@/layouts/MainLayout'
import { store } from '@/redux/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
        <Toaster/>
      </MainLayout>
    </Provider>
  )

}
