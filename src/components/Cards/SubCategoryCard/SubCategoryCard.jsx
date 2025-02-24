import React from 'react';
import Image from 'next/image';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import styles from './SubCategoryCard.module.scss';

const SubCategoryCard = ({category, isOdd}) => {
  
  return ( 
    <article className={`${styles.cardBox} ${isOdd && styles.bgGray}`}>
      <Container>
        <Grid container spacing={1} alignItems="center" className={isOdd && styles.reverse}>
          <Grid item xs={12} md={6}>
            <Box className={styles.textBox}>
              <h2 className={styles.title}>{category.title}</h2>
              <p className={styles.description}>{category.description}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {category && category.gallery.map((item,index) => (
                <Grid item xs={12} md={6} key={index}>
                  <figure className={styles.imgMask}>
                    <Image src={item.image} width={2886} height={3606} layout="responsive" />
                  </figure> 
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </article>
   );
}
 
export default SubCategoryCard;