import { sessionAtom } from '../../src';

const anyState = sessionAtom({
  key: 'anyState',
  default: null,
});

export default anyState;
