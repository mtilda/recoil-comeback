import { FC } from 'react';
import { atom, useRecoilState } from 'recoil';

const nameState = atom<string>({
  key: 'name',
  default: '',
});

const Home: FC = () => {
  const [ name, setName ] = useRecoilState(nameState);
  return (
    <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Home;
