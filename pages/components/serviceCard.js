import styles from '../../styles/serviceCard.module.css'



export default function serviceCard(props) {
    return (
        <div>
              <div className={styles.sv_card}>
              <span> {props.icon}</span>
                <h3>{props.service}</h3>
                   <p>{props.info}</p>
                </div>
        </div>
    )
}
