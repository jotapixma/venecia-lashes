import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ServiceCard from '../../components/Cards/ServiceCard/ServiceCard';
import data from '@/utils/data.json';
import styles from './Services.module.scss';

console.log('data:', data);

const Support = ({title}) => {
  
  return (  
    <section className={styles.supportPanel}>
      <Container>
        <div className="bootstrap-container">
          <div className="title-container">
            <h2 className="title">{title}</h2>
          </div>
          <Box className={styles.supportBox}>
            <Grid container spacing={2}>
              {data && data.map((item) => (
                <Grid key={item.id} item xs={12} md={4}>
                  <ServiceCard item={item}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </Container>
    </section>
  );
}
 
export default Support;