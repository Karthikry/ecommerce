import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.1);
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 1s ease;
opacity: 0;
`

const Container = styled.div`
flex: 1;
margin: 20px;
min-width: 300px;
height: 350px;
position: relative;
display: flex;
justify-content: center;
align-items: center;

&:hover ${Info}{
    opacity: 1;
}
`
const Circle = styled.div`
height: 300px;
width: 300px;
background-color: white;
border: 2px solid black;
border-radius: 50%;
/* position:absolute ; */
display: flex;
justify-content: center;
align-items: center;
    
`
const Image = styled.img`
height: 70%;
width:70%;
object-fit: fill;
    
`

const Icon = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items:center ;
margin: 10px;

&:hover{
    background-color: bisque;
    transform: scale(1.1);
}
`

const Products = ({item}) => {
  return (
    <Container>
        <Circle>
        <Image src= {item.img}/>
        </Circle>

        <Info>
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
    
            <Icon>
            <SearchOutlined/>
            </Icon>
       
            <Icon>
            <FavoriteBorderOutlined/>
            </Icon>
        </Info>

    </Container>
  );
}

export default Products;
