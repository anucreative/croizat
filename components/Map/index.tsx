'use client'

import { useEffect, useRef } from 'react';

import { Loader } from '@googlemaps/js-api-loader';

import styles from './styles.module.css'

export function Map() {

  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(googlemap.current, {
        center: { lat: 45.5788, lng: 5.9035 },
        zoom: 15,
        mapId: '63b8beb11338cdbf'
      });
    })
  });

  return (
    <div className={styles.embed} ref={googlemap} />
  );
}


