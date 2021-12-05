import { AppProps  } from 'next/app';
import Link from 'next/link';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import routes from '../routes';
import '../styles/app.css';

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
              <Link href={routes.test}>
                Test
              </Link>
              <ul>
                <li>
                  <Link href={routes.testString}>
                    String
                  </Link>
                  <ul>
                    <li>
                      <Link href={routes.testStringWrite}>
                        Write
                      </Link>
                    </li>
                    <li>
                      <Link href={routes.testStringRead}>
                        Read
                      </Link>
                    </li>
                  </ul>
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
