/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from '../components/section-heading';
import FaqItem from '../components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'How do i start using this service?',
    ans: `All you need is a web3 wallet. connect your wallet and select the type of services you desire either as a user or a service provider`,
  },
  {
    id: 2,
    ques: 'How can I ensure that my data is adequately protected with Data Insurance?',
    ans: `To ensure that your data is adequately protected with Data Insurance, it's essential to regularly back up your data, implement robust cybersecurity measures (e.g., encryption, firewalls), and follow best practices for data storage and management. Additionally, review your insurance policy to ensure it meets your specific needs and requirements.`,
  },
  
  {
    id: 3,
    ques: 'What risks are included in Data Insurance coverage?',
    ans: `Data Insurance typically covers risks such as data loss due to hardware failure, accidental deletion, cyber-attacks (e.g., ransomware), natural disasters (e.g., fire, flood), and theft.`,
  },
  {
    id: 4,
    ques: 'How does the claims process work for Data Insurance?',
    ans: `The claims process for Data Insurance typically involves notifying the insurance provider of the data loss or damage, providing relevant documentation and evidence, and working with the insurer to assess the claim and determine coverage.`,
  },
  {
    id: 5,
    ques: 'Are there any exclusions or limitations to Data Insurance coverage?',
    ans: `Data Insurance policies may have exclusions or limitations, such as pre-existing data loss, intentional acts, or failure to implement adequate data security measures. It's essential to review your policy carefully to understand any exclusions or limitations.`,
  },
  {
    id: 6,
    ques: 'What types of data are covered by Data Insurance?',
    ans: `Data Insurance typically covers a wide range of digital assets, including but not limited to documents, databases, multimedia files, software, and user-generated content.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <Box as="section" id="faq" sx={styles.section} >
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Get yours question answer"
          title="Frequently asked question"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, null, 10, 6],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
};
