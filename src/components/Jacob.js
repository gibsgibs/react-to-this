import React from 'react';
import ConfettiGenerator from '../../node_modules/confetti-js/dist/index';


export function Jacob() {
    
    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
       
        return () => confetti.clear();
      }, [])

    return(
    <div>
        <h1 className="text-center pt-2">
            Happy Birthday Jacob!!!
        </h1>
        <hr />
        <canvas id="my-canvas">
        </canvas>
    </div>
    )
}
