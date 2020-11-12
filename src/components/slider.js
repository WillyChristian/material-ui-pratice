import React, {useState} from 'react';
import '../appStyle.css'

import { Slide } from 'material-auto-rotating-carousel'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import { Button } from '@material-ui/core'

 
const Slider = () =>{
    return (
        <div className="styleDiv1">
            <AutoRotatingCarousel
                landscape={true}
            >
                <Slide 
                    media={<img src='/img/mt03.jpg' alt='MT03' />}
                    title='MT03 é muito linda'
                    subtitle="clique aqui para saber mais"
                />
            </AutoRotatingCarousel>
        </div>
    )
}

export default Slider