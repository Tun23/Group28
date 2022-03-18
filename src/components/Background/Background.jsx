import React from 'react'
import Image from '../../images/bground.jpg'
import { BackgroundContainer, Bground, Img } from './BackgroundElement'
const Background = () => {
  return (
    <BackgroundContainer>
        <Bground>
            <Img src={Image} type='image/jbg'/>
        </Bground>
    </BackgroundContainer>

  )
}

export default Background