import styles from '../../styles/portfolio.module.css'
import Link from 'next/link'
import Github from '../../public/github.svg'
import Dribble from '../../public/dribbble.svg'
import Behance from '../../public/behance.svg'

export default function portfolio(props) {

const duration = `--i:1`;

    return (
        <div>
             <div className="card_container">
          <div className={styles.container}>
              <div className={styles.card}>
                      {/* background img */}
                  <div className={styles.content}>
                  <div className={styles.contentBx}>
                      <h3>{props.skill} <br/><span>{props.type}</span> </h3>
                  </div>
                  <ul className={styles.sci}>
                      <li className={`styles.${duration}`}> 
                    <Link
                    href ="https://www.behance.net"
                    >
                    <a><Behance className={styles.behance} /></a>
                    </Link>
                    </li>
                    <li className={`styles.${duration}`}> 
                    <Link
                    href ="https://dribbble.com/"
                    >
                    <a><Dribble className={styles.dribble} /></a>
                    </Link>
                    </li>
                    <li className={`styles.${duration}`}> 
                    <Link
                    href ="https://github.com/"
                    >
                    <a><Github className={styles.github} /></a>
                    </Link>
                    </li>
                  </ul>
                  </div>
              </div>
              </div>
          </div>
        </div>
    )
}
