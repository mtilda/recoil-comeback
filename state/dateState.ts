import { atom } from 'recoil';
import { createComeback } from '../src';

const dateState = atom<Date>({
  key: 'dateState',
  default: new Date(),
  effects_UNSTABLE: [
    ...( typeof window !== 'undefined'
      ? [createComeback('comeback', sessionStorage)]
      : []
    ),
  ],
});

export default dateState;
