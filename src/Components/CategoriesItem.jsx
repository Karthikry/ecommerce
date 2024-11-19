import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 5px;
    position: relative;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: fill;

`
const Info = styled.div`
position: absolute;
top    :0 ;
left: 0;
height: 100%;
width: 100%;
display:flex ;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
color: white;
    
`
const Button = styled.button`
border: 2px solid black;
background-color: white;
color: grey;
padding: 3px;
font-size: 20px;
border-radius: 5px;

`
const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button> Shop Now </Button>
        </Info>
    </Container>
  );
}

export default CategoriesItem;
