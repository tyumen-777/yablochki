import type { NextPage } from 'next';
import { MainScreen } from '../src/screens/main/MainScreen';
import { BaseLayout } from '../src/components/BaseLayout';
import { SEO } from '../src/components/SEO';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <SEO title='Yablochki'/>
      <MainScreen />
      <div></div>
    </BaseLayout>
  );
};

export default Home;
