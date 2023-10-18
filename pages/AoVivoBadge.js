// components/AoVivoBadge.js

import { useEffect, useState } from 'react';

const AoVivoBadge = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 1000); // Troque para a velocidade desejada de piscar (em milissegundos)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="aovivo-container">
      <div className={`aovivo-badge${isVisible ? ' visible' : ''}`}>
        AO VIVO
      </div>
    </div>
  );
};

export default AoVivoBadge;
