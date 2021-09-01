import Heart from '../../public/heart.svg'
import Gillian from '../../public/gillian.svg'
import styles from '../../styles/hero.module.css'


export default function hero() {
    return (
        <div className="row">
              <div className={styles.hero_image}>
        </div>
      <div className={styles.hero}>
        <div className={styles.heroinfo}>
        <h1>Hi there, nice to miss you <Heart className={styles.heart}/>, iam</h1>
        <Gillian className={styles.gillian}/>
      <p>
        Iam a passionate <span> designer</span> and <span>developer</span> with all the
        skill neccessary to design, develop and deploy any mobile
        app & webapp.It would be my pleasure to work with you
      </p>
        <button className={styles.btn}>hire me</button>
        </div>
      </div>
        </div>
    )
}
