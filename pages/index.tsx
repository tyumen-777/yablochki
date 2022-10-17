import type { NextPage } from 'next';
import { MainScreen } from '../src/screens/main/MainScreen';
import { SEO } from '../src/components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO title='Yablochki' />
      <MainScreen />
    </>
  );
};

export default Home;
