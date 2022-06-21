import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


export default function Product({item}) {
  return (
    <Container>
        <div className="content">
            <img src={item.img} alt="" key={item.id} />
            <div className="info">
                <div className="icons">
                    <ShoppingCartOutlined />
                    <Search />
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
       
    background-color: #f5fbfd;
    margin: 1rem; 
    position: relative;
   
    .content{
        .info{
            position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background-color: rgba(0,0,0,0.2);
                width: 100%;
                height: 100%;
                cursor: pointer;
                opacity: 0;

            .icons{
                display: flex;
                gap: 1.5rem;
                align-items: center;
                justify-content: center;
                padding-top: 8rem;
                svg{
                    background-color: white;
                    border-radius: 10rem;
                    padding: .5rem;
                    transition: all 1s linear;
                    &:hover{
                        transform: scale(1.1);
                        background-color: #e9f5f5;
                }
                }
                
            }
        }
        img{
            height: 300px;
        }
        &:hover > .info{
        opacity: 1;
    }
    }
    
`;