/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import supportTeam from 'assets/images/support-team.png';

export default function Support() {
  return (
    <Box as="section" id="support" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Meet our support team who always work hardly behind the scenes"
          description="Focus only on the meaning, we take care of the development of this cutting-edge insurance service on the Filecoin Blockchain. Our Support team also are ready to answer any type of question that related to insuring you files on DATA COVER."
        />

        <Box as="figure" sx={styles.thumbWrapper}>
          <Image src='/images/support-team.png' loading="lazy" alt="Support Team" />
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: '#fff',
    pt: [8, null, null, null, 10, 14],
    pb: [0],
  },
  heading: {
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    p: {
      mt: [3],
      maxWidth: [500],
    },
  },
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mb: '-1px',
    img: {
      height: [180, 'auto'],
    },
  },
};
