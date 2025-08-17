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
              <p>Mi camino en el mundo de la belleza comenzó de manera inesperada, y desde entonces descubrí que transformar miradas transforma vidas.
              Soy Venecia Colman, especialista en extensiones y lifting de pestañas, con formación en diseño y cuidado de cejas.</p>
              <p>Desde hace más de 4 años me dedico a realzar la mirada de forma personalizada, cuidando cada detalle para que el resultado sea natural,elegante, duradero y, sobre todo, respetuoso con la salud de las pestañas.</p>
              <p>Me he formado con las mejores técnicas en Chile y Perú, aplicando tendencias y estándares internacionales para ofrecer un trabajo de alta calidad.</p>
              <p>Aunque mi especialidad son las pestañas, también ofrezco servicios de cejas que complementan y armonizan el rostro, creando un look integral.</p>
              <p>Para mí, cada cita es un momento especial: un espacio donde puedes relajarte, sentirte cuidada y verte como siempre soñaste. Me inspira ver cómo una mirada renovada cambia tu expresión y te devuelve esa seguridad que siempre estuvo ahí.</p>
            </div>
          </Grid>
        </Grid>
      </Container>

    </section>
  );
}
 
export default AboutMe;