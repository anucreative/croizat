import Image, { StaticImageData } from 'next/image';

import Aura from '../../public/partners/aura.png'
import Chambery from '../../public/partners/chambery.jpg'
import CharpentiersDeLepine from '../../public/partners/charpentiers-de-lepine.jpg'
import Cnds from '../../public/partners/cnds.png'
import Ffme from '../../public/partners/ffme.png'
import Geolithe from '../../public/partners/geolithe.png'
import GrandChambery from '../../public/partners/grand-chambery.jpg'
import JeGrimpe from '../../public/partners/je-grimpe.png'
import Montaz from '../../public/partners/montaz.png'
import Opinel from '../../public/partners/opinel.jpg'
import Petzl from '../../public/partners/petzl.png'
import Savoie from '../../public/partners/savoie.png'

import styles from './styles.module.css'


type Partner = {
  name: string,
  url: string,
  image: StaticImageData
}

const PARTNERS: Partner[] = [
  {
    name: 'Grand Chambéry',
    url: 'http://www.chambery-metropole.fr/',
    image: GrandChambery
  },
  {
    name: 'Chambéry',
    url: 'https://chambery.fr',
    image: Chambery
  },
  {
    name: 'PETZL',
    url: 'http://www.petzl.com/fr',
    image: Petzl
  },
  {
    name: 'Montaz',
    url: 'https://www.montaz.com/',
    image: Montaz
  },
  {
    name: 'Aura',
    url: 'http://www.auvergnerhonealpes.fr/',
    image: Aura,
  },
  {
    name: 'CharpentiersDeLepine',
    url: 'http://www.charpentiers-epine.fr/',
    image: CharpentiersDeLepine,
  },
  {
    name: 'Cnds',
    url: 'http://www.cnds.sports.gouv.fr/',
    image: Cnds,
  },
  {
    name: 'Ffme',
    url: 'https://www.ffme.fr/',
    image: Ffme,
  },
  {
    name: 'Geolithe',
    url: 'http://www.geolithe.fr/',
    image: Geolithe,
  },
  {
    name: 'JeGrimpe',
    url: 'http://www.jegrimpe.com/fr/',
    image: JeGrimpe,
  },
  {
    name: 'Opinel',
    url: 'https://www.opinel.com/',
    image: Opinel,
  },
  {
    name: 'Savoie',
    url: 'http://www.savoie.fr/',
    image: Savoie,
  },

]

export function Partners() {
  return (
    <section id="partners">
      <h2>Nos partenaires</h2>

      <ul className={styles.list}>
        {PARTNERS.map((partner) => {
          return (
            <li className={styles.item} key={partner.name} >
              <a href={partner.url} target="_blank" rel="noreferrer">
                <Image className={styles.logo} src={partner.image} alt={partner.name} fill />
              </a>
            </li>
          )
        })}
      </ul>
    </section >
  )
}


