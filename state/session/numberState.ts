import { sessionAtom } from '../../src';

const numberState = sessionAtom<number>({
  key: 'numberState',
  default: 0,
});

export default numberState;
