import styles from '../styles/contact.module.css'
import Location from '../public/location.svg'
import Whatsapp from '../public/whatapp.svg'
import Form from './components/form'
import Mail from '../public/mail.svg'



export default function contact() {
    return (
        <div>
<div className={styles.contact}>
    <h1  className={styles.headtitle}>Get in touch!</h1>
    <p>Contact me for help or services</p> 
    <div className={styles.contact_links}>
        <div className={styles.links}>
                <Location className={styles.iconLinks}/>
            <p>203 lavington 24</p>
        </div>
        <div className={styles.links}>
            <Whatsapp className={styles.iconLinks}/>
            <p>+254700001111</p>
        </div>
        <div className={styles.links}>
            <Mail className={styles.iconLinks}/>
            <p>gillian@gillian.com</p>
        </div>
    </div>
    <div className={styles.form}>
        <Form/>
        </div>
</div>
        </div>
    )
}