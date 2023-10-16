import React, { useEffect } from 'react';

function videopv1 () {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/652dc34892b09e000852d614/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpar o script quando o componente for desmontado
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="vid_652dc34892b09e000852d614" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img id="thumb_652dc34892b09e000852d614" src="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/652dc34892b09e000852d614/thumbnail.jpg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div id="backdrop_652dc34892b09e000852d614" style={{ position: 'absolute', top: 0, width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}></div>
    </div>
  );
}



export default videopv1 ;
