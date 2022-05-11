import React from 'react';
import Lottie from 'lottie-react-web';
import AnimationLoader from '../../Assets/Animation/loader.json';

export default function Loader(){

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationLoader,
      };

    return(
        <>
        <div className="dialog">
            <div className="loader">
                <Lottie
                    width = { 150 }
                    height = { 150 }
                    options = {defaultOptions}
                />
            </div>
        </div>
        <div className="overlay"></div>
        </>
    )
}