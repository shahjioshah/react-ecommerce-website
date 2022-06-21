import React from 'react'
import styled from 'styled-components'

export default function CategoryItem({item}) {
  return (
    <Container>
        <div className="content">
            <img src={item.img} alt="" />
            <div className="info">
                <h1>{item.title}</h1>
                <button>Shop Now</button>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    background-color: white;
    display: flex;
    margin: 1rem;
    position: relative;
    cursor: pointer;
    .content{
    img{
        width: 100%;
        height: 100%;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        cursor: pointer;
        padding-top: 12rem;
        h1{
            color: white;
        }
        button{
            display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: .5rem 1rem;
                    background-color: white;
                    border: 2px solid gray;
                    cursor: pointer;
                    color: gray;
                    border: none;
                    font-weight: 600;

                }
        }
    }
`;