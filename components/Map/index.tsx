'use client'

import { useEffect, useRef } from 'react';

import { Loader } from '@googlemaps/js-api-loader';
import { Button } from '../Button'

import styles from './styles.module.css'

export function Map() {

  const googlemap = useRef(null);

  useEffect(() => {
    console.debug(window, process.env)
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      new window.google.maps.Map(googlemap.current, {
        center: { lat: 45.5788, lng: 5.9035 },
        zoom: 15,
        mapId: '63b8beb11338cdbf'
      });
    })
  }, []);

  return (
    <>
      <div className={styles.embed} ref={googlemap} />
      <Button href="https://www.google.com/maps/place/Chamb%C3%A9ry+Escalade/@45.5788932,5.9035098,17z/data=!3m1!4b1!4m5!3m4!1s0x478ba842487b1d97:0x8e8fc89dabfd3faf!8m2!3d45.5788677!4d5.9057889" target='_blank'>Voir sur Google Maps</Button>
    </>
  );
}


