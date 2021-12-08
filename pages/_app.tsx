import { AppProps  } from 'next/app';
import Link from 'next/link';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
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
          <ul>
            <li>
              <Link href={routes.sessionAtom}>
                sessionAtom
              </Link>
              <ul>
                <li>
                  <Link href={routes.sessionAtomBoolean}>
                    Boolean
                  </Link>
                </li>
                <li>
                  <Link href={routes.sessionAtomDate}>
                    Date
                  </Link>
                </li>
                <li>
                  <Link href={routes.sessionAtomNumber}>
                    Number
                  </Link>
                </li>
                <li>
                  <Link href={routes.sessionAtomString}>
                    String
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <Component {...pageProps} />
      </main>

    </RecoilRoot>
  );
};

export default App;
