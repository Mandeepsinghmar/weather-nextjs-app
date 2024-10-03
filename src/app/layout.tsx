'use client';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import { store } from '../store/store';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='main-bg text-white'>
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
