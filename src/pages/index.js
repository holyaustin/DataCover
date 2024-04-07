import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import UltimateFeatures from 'sections/ultimate-feature';
import Faq from 'sections/faq';
import Support from 'sections/support';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
// import PremiumFeature from 'sections/premium-feature';
// import Testimonials from 'sections/testimonials';
// import Blog from 'sections/blog';


export default function IndexPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <SEO
          title="Data Cover - FVM-based Data Insurance Service "
          description="Decentralized Data Insurance Policies and services for Storage providers and user!"
        />
        <Banner />
        <Services />
        <Pricing />
        <UltimateFeatures />
        <CustomerSupport />
        <Support />
        <Faq />
{/**
 *      <PremiumFeature />
        
       
        <Testimonials />
        <Blog />
        <Support />
   */}
      </Layout>
    </ThemeUIProvider>
  );
}
