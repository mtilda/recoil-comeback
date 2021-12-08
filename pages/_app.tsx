import { FC } from 'react';
import { AppProps  } from 'next/app';
import { RecoilRoot } from 'recoil';
import NavRoutes from '../components/NavRoutes';
import routes from '../routes';
import '../styles/app.css';
import '../styles/switch.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>

      <header>
        <h1>Recoil comeback</h1>
      </header>

      <aside className='box'>
        <nav>
          <NavRoutes routes={routes} />
        </nav>
      </aside>

      <main>
        <Component {...pageProps} />
      </main>

    </RecoilRoot>
  );
};

export default App;
