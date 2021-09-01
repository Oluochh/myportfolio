import styles from '../styles/project.module.css'
import Portfolio from './components/portfolio'



export default function project() {

    return (
        <div>
        <div className={styles.project}> 
            <div className={styles.info}>
                <h1>projects</h1>
                <p>This are various projects created using techstack such as react.js, next.js for web development, react-native, kotlin, java
                   for mobile development, figma for ui,ux design and prototyping and adobe suite for designs i.e logos
                </p>
            </div>
            <div>

            <Portfolio className={styles.flexcard}
            skill="Graphic"
            type="Logo design"
            />
            <Portfolio className={styles.flexcard}
            skill="Ux & Ui"
            type="User persona"
            />

            <Portfolio className={styles.flexcard}
            skill="Developer"
            type="fitness app"
            />
            </div>
            </div>
        </div>
    )
}
