import styles from '../styles/service.module.css'
import Servicecard from './components/serviceCard'
import Developer from '../public/developer.svg'
import Graphic from '../public/graphics.svg'
import UxUi from '../public/ui&ux.svg'
export default function service() {
    return (
        <div>
            <div className={styles.sv_card}>
                <h1>My awesome <br /> <span>services</span> </h1>
        <p className={styles.p}>This are the cool stuff i can do to make your ideas into reality with 
            unique and creative designs and productivity</p> 
            <div className={styles.rowCard}>
            <Servicecard
                service="Developer"
                icon={<Developer/>}
                info="Iam a fullstack developer, meaning i work with both the frontend and the backend, test,
                deploy and maintain the app in the cloud"    
                />
                 <Servicecard
                service="Graphic Design"
                icon={<Graphic/>}
                info="I create logos, brand identity and corporate identity for companies, posters and adverts for any business etc"    
                />
                 <Servicecard
                service="Ux & Ui desighn"
                icon={<UxUi/>}
                info="I create simple, interactive and user friendly interface for mobile
                and web applications with prototypes"    
                />
            </div>
            </div>           
        </div>
    )
}
