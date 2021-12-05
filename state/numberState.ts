import { atom } from 'recoil';
import { createComeback } from '../src';

const numberState = atom<number>({
  key: 'numberState',
  default: 0,
  effects_UNSTABLE: [
    ...( typeof window !== 'undefined'
      ? [createComeback('comeback', sessionStorage)]
      : []
    ),
  ],
});

export default numberState;
