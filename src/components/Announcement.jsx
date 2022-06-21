import React from 'react'
import styled from 'styled-components'

export default function Announcement() {
  return (
    <Container>
        <p>Super Deal Free Shipping on Order over $50</p>
    </Container>
  )
}

const Container = styled.div`
    background-color: teal;
    p{
        color: white;
        text-align: center;
        margin: 0;
        padding: 0.5rem 0rem;
    }
`;