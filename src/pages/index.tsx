
import { Button } from '@mui/material';

import { memo } from 'react';
import Layout from 'src/layout/layout';

const IndexPage = () => {
  return (
    <>
   <Layout>
      <Button>click</Button>
   </Layout>
    </>
  );
};

export default memo(IndexPage);