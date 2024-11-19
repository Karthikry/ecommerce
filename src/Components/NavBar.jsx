import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    width: 100%;
    border: 2px solid black;
    margin-top: 10px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Logo = styled.div`
    width: 40px;
    height: 40px;
    background-color: blue;
    border-radius: 50%;
`
const Brandname = styled.h1`
    font-size: 30px;
    font-weight: 200;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 10px;
`
const SearchItems = styled.h1`
     font-size: 30px;
    font-weight: 200;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 10px;
`
const SearchContainer = styled.div`
    width: 70%;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    border: none;
    outline: none;
    font-size: 20px;
`

const Product = styled.span`
    font-size: 30px;
`
const Logout = styled.button`
    font-size: 30px;
    padding: 5px;
    background-color: aqua;
`
const NavBar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
            <Logo></Logo>
            <Brandname>Sock Star</Brandname>
        </Left>

        <Center>
            <SearchItems>Search</SearchItems>
            <SearchContainer>
                <Input placeholder='Search Items'></Input>
                <SearchIcon></SearchIcon>
                
            </SearchContainer>
        </Center>

        <Right>
            <Product>Product</Product>
            <ShoppingCartOutlinedIcon/>
            <Logout>LogOut</Logout>
        </Right>

      </Wrapper>
    </Container>
  );
}

export default NavBar;
