import { atom } from 'recoil';
import { createComeback } from '../src';

const booleanState = atom<boolean>({
  key: 'booleanState',
  default: false,
  effects_UNSTABLE: [
    ...( typeof window !== 'undefined'
      ? [createComeback('comeback', sessionStorage)]
      : []
    ),
  ],
});

export default booleanState;
