// add bootstrap css 
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'// own css files here

export default function App({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);
  return <Component {...pageProps} />
}