
import { memo } from 'react';
import Hero from 'src/components/hero/hero';
import Layout from 'src/layout/layout';

const IndexPage = () => {
  return (
    <>
   <Layout>
      <Hero/>
   </Layout>
    </>
  );
};

export default memo(IndexPage);