import { FavoriteBorderOutlined, Search, Send, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

export default function Newsletter() {
  return (
    <Container>
        <div className="content">
            <h1>Newsletter</h1>
            <p>Get timely updates from your favorite products</p>
            <div className="inputs">
                <input type="text"  placeholder='Enter Email'/>
                <button>
                    <Send />
                </button>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    h1{
        font-size: 70px;
        text-align: center;
    }
    p{
        font-size: 20px;
        text-align: center;

    }
    .inputs{
        display: flex;
        align-items: center;
        justify-content: center;
        input{
            border: none;
            padding: .5rem .5rem;
            padding-right: 15rem;
            &:focus{
                outline: none;
            }
        }
        button{
            border: none;
            color: white;
            background-color: teal;
            padding: .5rem 1rem;
            padding-right: 3rem;
            cursor: pointer;
            svg{
                font-size: .8rem;

            }
        }
    }
`;