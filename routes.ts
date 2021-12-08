const routes = {
  sessionAtom: {
    href: '/sessionAtom',
    label: 'sessionAtom',
    routes: {
      boolean: {
        href: '/sessionAtom/boolean',
        label: 'boolean',
      },
      date: {
        href: '/sessionAtom/Date',
        label: 'Date',
      },
      number: {
        href: '/sessionAtom/number',
        label: 'number',
      },
      string: {
        href: '/sessionAtom/string',
        label: 'string',
      },
    },
  },
} as const;

export interface Route {
  href: string;
  label: string;
  routes: Routes;
}

export type Routes = Record<string, Route>;

export default routes;
