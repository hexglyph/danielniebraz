import styles from '../styles/Skills.module.css'


export default function Skills(props) {
    return (
        <div className={styles.skills}>
            {props.text} - {props.level}
        </div>
    )
}