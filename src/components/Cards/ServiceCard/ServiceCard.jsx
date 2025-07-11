import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './ServiceCard.module.scss';

const SupportCard = ({item}) => {
  const matchesMd = useMediaQuery('(min-width:900px)');

  return (  
    item.slug !== 'lifting' && item.slug !== 'cejas' ? (
      <Link href={`/servicios/${item.slug}`}>
        <article className={styles.cardBox}>
          <figure className={styles.cardBox__mask}>
            <Image src={item.image} width={832} height={1040} layout="responsive" alt="services" />
          </figure>
          <h2 className={styles.cardBox__title}>{item.title}</h2>
        </article>
      </Link>
    ) : (
      <article className={styles.cardBox}>
        <figure className={styles.cardBox__mask}>
          <Image src={item.image} width={832} height={1040} layout="responsive" alt="services" />
        </figure>
        <h2 className={styles.cardBox__title}>{item.title}</h2>
      </article>
    )
  );
}
 
export default SupportCard;