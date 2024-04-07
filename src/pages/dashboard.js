import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout2';
import ViewFiles from 'components/ViewFiles';

export default function Dashboard() {
  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <SEO
          title="Add new file"
          description="add a new file"
        />
        <ViewFiles/>

      </Layout>
    </ThemeUIProvider>
  );
}