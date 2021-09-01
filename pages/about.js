import styles from '../styles/about.module.css'
import Illustration from '../public/Illustration.svg'
export default function about() {
    return (
        <div>
            <div className={styles.abt}>
            <div className={styles.abtInfo}>
                <h1>A little bit about me</h1>
                <div className={styles.p1}>
                <p>
                    Having been a developer for a year now and graduated 
                    from one of the best institution in the country, i gurantee
                    quality work and desighn
                </p>
                </div>
                <div className={styles.p2}>
                <p>I would really love to share my knowledge and skills creatively to come
                    up with solution for real life problems through programming and designing,
                    I hope we meet soon, See yah!
                </p>
                </div>
            </div>
            <div className={styles.illustration}>
               <Illustration className={styles.illustration}/>
            </div>
            </div>
        </div>
    )
}
