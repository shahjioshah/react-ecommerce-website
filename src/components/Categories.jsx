import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { categories } from "../data";
export default function Categories() {
  return (
    <Container>
        { categories.map((item) => {
            return(
                <CategoryItem item={item} />        
            )
        })}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;