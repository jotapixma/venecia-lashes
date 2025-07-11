import Container from "@mui/material/Container";
import ContactForm from "../ContactForm/ContactForm";
import styles from './ContactModule.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactModule = () => {
  
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <Container>
          <div className="title-container" style={{ marginBottom: '24px'}}>
            <h1 className="title">Agenda con Venecia</h1>
            <div className={styles.body}>
              <p>✨¡Tu momento de belleza te está esperando!✨</p>
              <div className={styles.list}>
                <p> Haz clic abajo y agenda tu cita conmigo directamente vía Whatsapp</p>
                <div><WhatsAppIcon/></div>
              </div>
              <a className={styles.link} target="_blank" href='https://api.whatsapp.com/send/?phone=56990173191&amp;text&amp;type=phone_number&amp;app_absent=0'>Agendar</a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
 
export default ContactModule;