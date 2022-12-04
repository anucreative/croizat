import styles from './styles.module.css'

export function Banner() {
  return (
    <div className={styles.wrapper}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="./sophia.mp4" type="video/mp4" />
      </video>
    </div>
  )
}