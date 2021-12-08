import Link from 'next/link';
import { FC } from 'react';
import { Routes } from '../routes';

const NavRoutes: FC<{ routes: Routes }> = ({ routes }) =>
  typeof routes === 'object'
    ? (
      <ul>
        {Object
          .values(routes)
          .map(({ href, label, routes }, index) => (
            <li key={index}>
              <Link href={href}>
                {label}
              </Link>
              <NavRoutes routes={routes} />
            </li>
          ))
        }
      </ul>
    )
    : null;

export default NavRoutes;
