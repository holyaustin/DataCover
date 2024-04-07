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
          title="User Dashboard"
          description="User Dashboard"
        />
        <ViewFiles/>

      </Layout>
    </ThemeUIProvider>
  );
}