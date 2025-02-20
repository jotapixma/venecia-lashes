import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import styles from './SingleService.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import ContentPanel from './ContentPanel/ContentPanel';
import Image from "next/legacy/image";
import DeliveryCard from '../Cards/DeliveryCard/DeliveryCard';

const SingleService = ({service}) => {

  console.log('service from single service:', service);

  return (  
    <section className={styles.section}>      
      <Container>
        <Grid container spacing={2}>
          {service && service.categories.map((item) => (
            <DeliveryCard category={item}/>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
 
export default SingleService;