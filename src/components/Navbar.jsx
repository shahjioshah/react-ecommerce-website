import React from 'react'
import styled from 'styled-components'
import { Mail, Search, ShoppingCartOutlined,  } from '@material-ui/icons';
import { Badge,  } from '@material-ui/core';

export default function Navbar() {
  return (
    <Nav>
        <div className="section-1">
            <span>EN</span>
            <div className="search">
                <input type="text" />
                <Search />
            </div>
        </div>
        <div className="section-2">
            <h1>LUMA</h1>
        </div>
        <div className="section-3">
            <a href="#">SignUp</a>
            <a href="#">SignIn</a>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
            </Badge>
        </div>
    </Nav>
  )
}
const Nav = styled.nav`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .section-1{
        flex: 1;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-left: 3rem;
        .search{
            display: flex;
            align-items: center;
            border: 1px solid gray;
            padding: 0.1rem .2rem;
            font-size: 1rem;
            input{
                border: none;
                &:focus{
                    outline: none;
                }
            }
            svg{
                font-size: 1.3rem;
                cursor: pointer;
            }
        }
        span{
                font-size: 1.2rem;
            }
    }
    .section-2{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        h1{
            text-align: center;
        }
    }
    .section-3{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        padding-right: 3rem;
        a{
            text-decoration: none;
        }
        svg{
                cursor: pointer;
            }
    }
`;