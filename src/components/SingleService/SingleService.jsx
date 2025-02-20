import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import styles from './SingleService.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import ContentPanel from './ContentPanel/ContentPanel';
import Image from "next/legacy/image";

const SingleService = ({service}) => {

  console.log('service from single service:', service);

  return (  
    <section className={styles.section}>      
      <Container>
        <Grid container spacing={2}>
          {service && service.categories.map((item) => (
            <Grid key={item.id} item xs={12} md={4}>
              <article className={styles.cardBox}>
                <figure className={styles.cardBox__mask}>
                  <Image src={item.image} width={2886} height={3606} layout="responsive" />
                </figure>
                <h2 className={styles.cardBox__title}>{item.title}</h2>
              </article>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
 
export default SingleService;