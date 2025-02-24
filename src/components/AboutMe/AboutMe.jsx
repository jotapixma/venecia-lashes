import React from 'react';
import Grid from "@mui/material/Grid";
import Image from "next/legacy/image";
import Container from "@mui/material/Container";
import styles from './AboutMe.module.scss'

const AboutMe = () => {

  return ( 
    <section className={styles.aboutMe}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <figure className={styles.imgMask}>
              <Image src='/home/about-me.jpeg' width={760} height={896} layout='responsive'/>
            </figure>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.infoPanel}>
              <h2>Sobre mí</h2>
              <p>Venecia es más que una marca; es una celebración de la belleza auténtica y diversa. Nos especializamos en el mantenimiento y extensión de pestañas, pero no nos detenemos ahí. En Venecia, también ofrecemos una selección premium de los mejores productos de pestañas del mercado.</p>
              <p>Nuestra misión es resaltar la belleza natural del rostro a través de productos y servicios que inspiran confianza y autenticidad. Somos una marca con propósito, dedicada a motivarte a vivir tu propio concepto de belleza con calidad y elegancia.Además, en Venecia nos enorgullece ofrecer un servicio al cliente excepcional, asegurándonos de que cada experiencia sea personalizada y satisfactoria.</p>
              <p>Descubre el verdadero potencial de tu belleza con nuestra gama de productos de alta gama, diseñados para realzar cada detalle con precisión y sofisticación.</p>
            </div>
          </Grid>
        </Grid>
      </Container>

    </section>
  );
}
 
export default AboutMe;