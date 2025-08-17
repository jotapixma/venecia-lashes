import React from 'react';
import Container from '@mui/material/Container';
import Image from "next/legacy/image";
import FooterWinch from './FooterWinch/FooterWinch';
import RrssItem from './RrssItem/RrssItem';
import Box from '@mui/material/Box';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {

  let items = [
    // {
    //   "id": '1',
    //   "title": 'facebook',
    //   "link": '/',
    // },
    {
      "id": '2',
      "title": 'whatsapp',
      "link": 'https://api.whatsapp.com/send/?phone=56963186991&amp;text&amp;type=phone_number&amp;app_absent=0',
    },
    {
      "id": '3',
      "title": 'instagram',
      "link": 'https://www.instagram.com/venecia_ly',
    },
    // {
    //   "id": '4',
    //   "title": 'linkedin',
    //   "link": '/',
    // }
  ];

  return (  
    <footer className={styles.footer}>
      <Container>
        <div className={styles.gridColumns}>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Contacto</span>
              <li>
                <Link target="_blank" href='https://api.whatsapp.com/send/?phone=56963186991&amp;text&amp;type=phone_number&amp;app_absent=0'>+56 963186991</Link>
              </li>
              <li><a href="mailto:venecia.lylash@gmail.com">venecia.lylash@gmail.com</a></li>
            </ul>
          </div>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Navegación</span>
              <Link href="/servicios">
                <li>Servicios</li>
              </Link>
            </ul>
          </div>
          <div className={styles.itemColumn}>
            <ul className={styles.unorderList}>
              <span>Siguenos</span>
              {items &&
                <Box sx={{ display: 'flex', gap: '1rem', marginTop: '0.8rem' }}>
                  {items.map((item, index) => (
                    <RrssItem item={item} key={index}/>
                  ))}
                </Box>
              }
            </ul>
          </div>
          <div className={styles.itemColumn}>
            <Link href="/">
              <figure className={styles.footerLogo}>
              <Image 
                src="/logotipo-white.png"
                width={2887} height={703} 
                alt="logo"
              />
              </figure>
            </Link>
          </div>
        </div>
        <FooterWinch />

      </Container>
    </footer>
  );
}
 
export default Footer;