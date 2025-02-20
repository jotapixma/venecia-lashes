import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Purpose from '../../components/Purpose/Purpose'
import Partners from '../../components/Partners/Partners'
import AboutMe from '../../components/AboutMe/AboutMe'
import Proyects from '../DeliveryTypes/DeliveryTypes'
import ContactModule from '../../components/ContactModule/ContactModule';
// import styles from '@/styles/Home.module.css'

const Home = () => {
  return ( 
    <>
      <Hero/>
      <AboutMe/>
      <Services title="Servicios"/>
      {/* <ContactModule/> */}
      {/* <Proyects/> */}
      {/* <Purpose title="Nuestro propósito"/> */}
      {/* <Partners title="Han confiado en nosotros"/> */}
    </>
   );
}
 
export default Home;
