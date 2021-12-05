import { atom } from 'recoil';
import { createComeback } from '../src';

const stringState = atom<string>({
  key: 'stringState',
  default: '',
  effects_UNSTABLE: [
    ...( typeof window !== 'undefined'
      ? [createComeback('comeback', sessionStorage)]
      : []
    ),
  ],
});

export default stringState;
