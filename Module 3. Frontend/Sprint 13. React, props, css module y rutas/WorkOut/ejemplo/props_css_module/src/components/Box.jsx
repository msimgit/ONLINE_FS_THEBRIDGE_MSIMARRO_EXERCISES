import styles from "./Box.module.css";

export default function Box({ color, text }) {
    return (
        <div
            className={styles.box}
            style={{ backgroundColor: color }}
        >
        {text}
    </div>
    );
}