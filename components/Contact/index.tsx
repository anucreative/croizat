'use client'

import { Button } from '../Button'

import styles from './styles.module.css'



export function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.debug(event.target.children)
  }

  return (
    <section id="contact" className="section">
      <h2>Contact-nous</h2>
      <div className={styles.grid}>
        <div className={styles.column}>
          <form action="/send-data-here" method="post" onSubmit={handleSubmit}>
            <input className={styles.input} type="text" id="name" name="name" placeholder='Prénom / Nom' required />
            <input className={styles.input} id="email" name="email" type="email" placeholder='Adresse e-mail' required />
            <textarea className={styles.input} id="comment" name="comment" placeholder='Tes idées / commentaires' required />
            <Button width="full" type=" submit">Dis-nous</Button>
          </form>

        </div>
        <div className={styles.column}>
          <dl>
            <dt>Email</dt>
            <dd><a href="mailto:accueil@croizat.fr">accueil@croizat.fr</a></dd>

            <dt>Téléphone</dt>
            <dd><a href="tel:06 70 00 75 85">06 70 00 75 85</a></dd>

            <dt>Adresse</dt>
            <dd><a href="https://www.google.com/maps/place/Chamb%C3%A9ry+Escalade/@45.5788932,5.9035098,17z/data=!3m1!4b1!4m5!3m4!1s0x478ba842487b1d97:0x8e8fc89dabfd3faf!8m2!3d45.5788677!4d5.9057889" target="_blank" rel="noreferrer">Gymnase Ambroise Croizat,
              540 Rue du Revard,
              73000 Chambéry</a></dd>
          </dl>
        </div>
      </div>
    </section >
  )
}


