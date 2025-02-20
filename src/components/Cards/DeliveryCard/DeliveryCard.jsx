import React from 'react';
import Image from 'next/image';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import styles from './DeliveryCard.module.scss';

const DeliveryCard = ({category}) => {
  console.log('category:', category);

  return ( 
    <article className={styles.cardBox}>
      <Box className={styles.textBox}>
        <h2 className={styles.title}>{category.title}</h2>
        <p className={styles.description}>{category.description}</p>
      </Box>
      
      <Grid container spacing={2}>
        {category && category.gallery.map((item) => (
          <Grid item xs={12} md={3}>
            <figure className={styles.imgMask}>
              <Image src={item.image} width={2886} height={3606} layout="responsive" />
            </figure> 
          </Grid>
        ))}
      </Grid>
    </article>
   );
}
 
export default DeliveryCard;