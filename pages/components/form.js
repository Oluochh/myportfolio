import styles from '../../styles/form.module.css'
import Name_icon from '../../public/name-icon.svg'
import Phone_icon from '../../public/phone-icon.svg'
import Mail_icon from '../../public/mail-icon.svg'
import InputForm from '../components/inputForm.js'

export default function input() {

    const send = () => {


    }

    return (
        <div>
            
            <div className={styles.inputs}>
            <h1>Contact form</h1>
                <form action="">
                <InputForm
                labelname="Full Name"
                placeholderTxt="gillian oluoch"
                icons={<Name_icon/>}
                />
                 <InputForm
                labelname="Phone No"
                placeholderTxt="+254700001111"
                icons={<Phone_icon/>}
                />
                 <InputForm
                labelname="Email"
                placeholderTxt="gillian@gmail.com"
                icons={ <Mail_icon/>}
                />
                 </form>
                <div className={styles.msg}>
                    <label>Message</label>
                    <div>
                    <textarea name="message" id="massage" cols="38" rows="8" placeholder="your message"/>
                    </div>
                  </div>
            <div className={styles.btn_service}>
            <h3>Services</h3>
            <div className={styles.servicesChoice}>
                <div className={styles.btnChoice}>
                    <p>Graphic design</p>
                </div>
                <div className={styles.btnChoice}>
                    <p>Ux & Ui design</p>
                </div>
                <div className={styles.btnChoice}>
                    <p>App development</p>
                </div>
                </div>
                <div className={styles.sendBtn} onClick={send()}>send message</div>
                </div>
            </div>
            
            
        </div>
    )
}
