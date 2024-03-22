/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import { transform } from 'framer-motion';

const services = [
  {
    title: 'data loss',
    price: ''
  },
  {
    title: 'theft',
    price: ''
  },
  {
    title: 'corruption',
    price: '',
  },
  {
    title: 'cyber-attacks',
    price: '',
  },
  {
    title: 'All risk coverage',
    price: '',
  },
  {
    title: 'short term cover',
    price: '',
  },
  {
    title: 'long term cover',
    price: '',
  },
  {
    title: 'natural disasters',
    price: ''
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Comprehensive Risk Coverage for Data Owners and Storage Providers (SPs)!"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
