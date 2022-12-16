import { memo, useEffect } from 'react';
import { Gradient } from '../components/Gradient.js'

function GradientBG(){

    // Create your instance
    const gradient = new Gradient()
    
    // Call `initGradient` with the selector to your canvas
    useEffect(() => {
        gradient.initGradient('#gradient-canvas')
    }, []);

    return(
        <canvas id="gradient-canvas" data-transition-in />
    )
}

export default memo(GradientBG, () => true);