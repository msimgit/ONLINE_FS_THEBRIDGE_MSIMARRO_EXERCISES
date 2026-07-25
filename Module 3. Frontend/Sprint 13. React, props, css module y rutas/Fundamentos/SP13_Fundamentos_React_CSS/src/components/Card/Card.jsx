import styles from "./Card.module.css"

export default function Card({ title, description, featured = false }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {featured && <span className={styles.badge}>⭐ Destacado</span>}
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}