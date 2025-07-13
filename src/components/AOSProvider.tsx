'use client';

import { useEffect, PropsWithChildren } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    AOS.init({
      duration: 600,  
      once: true,      
      mirror: false, 
    });
  }, []);

  return <>{children}</>;
}