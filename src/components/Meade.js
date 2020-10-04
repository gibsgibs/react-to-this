import React, { useState } from 'react';
import ConfettiGenerator from '../../node_modules/confetti-js/dist/index';


export function Meade() {

    const [toggled, setToggled] = useState(false);

    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        return () => confetti.clear();
      }, [])

    return(
    <div>
        <div id="canvas" className={toggled ? "" : "invisible"}>
            <canvas id="my-canvas" />
        </div>
        <div id="meade-content" className="container">
            <p className="text-center pt-2 h4">
                This is Meade Carlson. 
            </p>
            <img id="meade-img" className="pb-2" src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/c223.0.503.503a/117889672_336713694380723_8231102276215294385_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=111&amp;_nc_ohc=FP9Kb2ePxj8AX-GumkJ&amp;oh=2517f9b8826b2aea175353f1854362b7&amp;oe=5FA15A98" />
            <p className="text-center h5">She is one of the most multi-talented people I have ever had the pleasure of calling my friend. She's a black belt in karate, a classically trained violinist, and just an all around dope ass person. Despite overwhelming struggles, she persevered through blood sweat and tears, and obtained her degree in Mathematics from Western Oregon University.
            </p>
            <h1 className="text-center">
                Congratulations Meade!
            </h1>
            <p className="pb-2 text-center">
                I always knew you could do it.
            </p>
            <div className="d-flex justify-content-center pb-2">
                <button className="btn btn-success" onClick={() => setToggled(!toggled) }>
                    Celebrate!
                </button>
            </div>
        </div>
    </div>
    )
}