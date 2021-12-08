import { atom, AtomOptions, RecoilState } from 'recoil';
import { createComeback } from '../src';

/**
 * Creates an atom that persists state to sessionStorage
 */
const sessionAtom = <T>(options: AtomOptions<T>, storeKey = 'recoil-comeback'): RecoilState<T> =>
  atom<T>({
    ...options,
    effects_UNSTABLE: [
      // Only use createComeback in browser
      ...(
        typeof window !== 'undefined'
          ? [createComeback(storeKey, sessionStorage)]
          : []
      ),
      // User effects
      ...(
        options.effects_UNSTABLE
          ? options.effects_UNSTABLE
          : []
      ),
    ],
  });

export default sessionAtom;
