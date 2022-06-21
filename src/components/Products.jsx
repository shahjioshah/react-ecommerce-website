import React from 'react'
import styled from 'styled-components'
import { popularProducts } from "../data";
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import Product from './Product';


export default function Products() {
  return (
    <Container>
        {popularProducts.map((item) => {
            return(
               <Product item={item} />
            )
        })}
    </Container>
  )
}

const Container = styled.section`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        
`;