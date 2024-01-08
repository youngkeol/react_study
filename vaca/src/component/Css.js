import styles from './Css.module.css';

const Css = () => {
    return (
        <div
            className={styles.box}
            style={{
                color: '#ddd',
                paddingTop: "30px"
            }}>Hello</div>
    )
}

export default Css;