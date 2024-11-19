import React from 'react';
import {popularProduct} from './Data'
import styled from 'styled-components';
import Products from './Products';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
    
`
const Product = () => {
  return (
    <Container>
        {
            popularProduct.map((item) => (
                <Products item = {item} key={item.id}/>
            ))
        }
    </Container>
  );
}

export default Product;
