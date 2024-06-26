import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout2';
import ComingSoon from 'components/ComingSoon';

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Analytics"
          description="Analytics"
        />
        <ComingSoon/>

      </Layout>
    </ThemeProvider>
  );
}