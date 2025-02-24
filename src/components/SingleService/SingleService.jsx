import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import styles from './SingleService.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import ContentPanel from './ContentPanel/ContentPanel';
import Image from "next/legacy/image";
import SubCategoryCard from '../Cards/SubCategoryCard/SubCategoryCard';

const SingleService = ({service}) => {

  // console.log('service from single service:', service);

  function isOdd(num) {
    return num % 2;
  }

  return (  
    <section className={styles.section}>
      <div className={styles.boxTitle}>
        <h1>{service.title}</h1>      
      </div>
      {service && service.categories.map((item,index) => (
        <SubCategoryCard category={item} key={index} isOdd={isOdd(index)}/>
      ))}
    </section>
  );
}
 
export default SingleService;