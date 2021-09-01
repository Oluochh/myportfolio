import styles from '../../styles/inputForm.module.css'


export default function inputForm(props) {
    return (
        <div>
             <div className={styles.inputField}>
                    <label className={styles.inputLabel}>{props.labelname}</label>
                    <div>
                    <span className={styles.inputIcons}> {props.icons}</span>
                    <input className={styles.input} type="text" name="name" placeholder={props.placeholderTxt}/>
                    </div>  
                    </div> 
        </div>
    )

    
}
