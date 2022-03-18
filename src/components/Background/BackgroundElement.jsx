import styled from 'styled-components'

export const BackgroundContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const Bground = styled.div`
position: absolute;
top: 0;
right:0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const Img = styled.image`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`
