import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import AboutMe from '../../components/AboutMe/AboutMe'
// import styles from '@/styles/Home.module.css'

const Home = () => {
  return ( 
    <>
      <Hero/>
      <AboutMe/>
      <Services title="Servicios"/>
    </>
   );
}
 
export default Home;
