
// import React from 'react';
// import { CartProvider } from '../pages/Context/cartContext'
// import Layout from './layout';
// import "./globals.css";

// export default function Home({ Component, pageProps }) {
//   return (
//     <>
//     <html>
//         <CartProvider>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </CartProvider>
//         </html>
//     </>


//   );
// }

import { CartProvider } from '../pages/Context/cartContext'
import { TokenProvider } from './Context/TokenContext';
// import { AuthProvider } from './Context/authcontext';
import '../pages/globals.css';
import Layout from './layout';

export default function App({ Component, pageProps }) {
  return (

    <CartProvider>
      <TokenProvider> 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TokenProvider>
    </CartProvider>
  

  );
}


