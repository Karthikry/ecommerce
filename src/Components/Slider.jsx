import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import {slideItems} from './Data'
const Container = styled.div`
  width  : 100% ;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction ==="left" && "20px"};
    right: ${props => props.direction ==="right" && "20px"};
 
    /* i have set the index value as 2 */
    z-index: 2 ;

`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.slideindex*-100}vw);
/* transform: translateX(-200vw); */
`
const Slide = styled.div`
height:100vh;
width: 100vw;
background-color: #${(props)=> props.background};
display: flex;
align-items: center;
`
const  ImageContainer= styled.div`
flex: 1;
height: 100%;
width: 100vw;
`
const Image = styled.img`
height: 90%;
width: 100%;
`
const  Imnocontainer= styled.div`
flex: 1;
padding: 50px;
display:flex ;
flex-direction: column;
align-items: center;
`


const Title = styled.h1`
    font-size: xx-large;
    margin: 20px;
`

const Disc = styled.h1`
    font-size: 50px;
    margin: 20px;

`
const Button = styled.button`
       font-size: larger; 
       padding: 10px;
       background-color: black;
       color: white;
       
`
const Slider = () => {

const [slideindex,setslideindex] = useState(0);

     const handleclick = (direction)=>{
     
        if (direction ==="left") {    
                    // we are changing the index value 
            setslideindex( slideindex > 0 ? slideindex -1 : 2)
        }else{
             setslideindex(slideindex < 2 ? slideindex +1 :0)
        }

     }


    return (
    <Container>

        <Arrow direction="left"  onClick={()=>handleclick("left")} >
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper  slideindex={slideindex}>
                  
         {slideItems.map((item)=>(
           <Slide background={item.bg} >
           <ImageContainer>
              <Image src={item.img}/>
           </ImageContainer>
           <Imnocontainer>
                            <Title> {item.title} </Title>
                            <Disc>{item.desc}</Disc>
                            <Button> shop now </Button>
           </Imnocontainer>
     
       </Slide>

         ))}

        </Wrapper>
        
        <Arrow direction="right"   onClick={()=>handleclick("right")} >
            <ArrowRightOutlined/>
        </Arrow>

    </Container>
  )

}
export default Slider