import { Facebook, Instagram, LocationCity, Mail, Phone, Pinterest, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
        <div className="content">
            <div className="col_1">
                <h1>LUMA.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam sint omnis temporibus, quasi, aliquam debitis inventore, tempora suscipit fuga deserunt explicabo tempore praesentium accusamus dicta voluptas sed illo et.</p>
                <div className="icons">
                    <div className="icon">
                        <Facebook />
                    </div>
                    <div className="icon">
                        <Instagram />
                    </div>
                    <div className="icon">
                        <Pinterest />
                    </div>
                    <div className="icon">
                        <YouTube />
                    </div>
                    
                </div>
            </div>
            <div className="col_2">
                <div className="links">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Whishlist</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Term</a></li>
                        <li><a href="#">Men fashion</a></li>
                        <li><a href="#">Women fashion</a></li>
                    </ul>
                </div>
            </div>
            <div className="col_3">
                <div className="contact">
                        <h2>Contact</h2>
                        <div className="col_11">
                            <LocationCity />
                            Lahore
                        </div>
                        <div className="col_11">
                            <Phone />
                            +44 771 5478120 
                        </div>
                        <div className="col_11">
                            <Mail />
                            websoftoie.com
                        </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.footer`
   .content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
        .col_1{
            margin: 1rem 1.5rem;
            .icons{
                display: flex;
                gap: 1rem;
                
                .icon{
                    background-color: teal;
                    width: 40px;
                    height: 40px;
                    border-radius: 10rem;
                    color: white;
                    display: flex;
                   cursor: pointer;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .col_2{
            margin: 1rem 1.5rem;
                .links{
                    
                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: .5rem;
                        list-style: none;
                        li{
                            a{
                                text-decoration: none;
                            }
                        }
                    }
                }
        }
        .col_3{
            margin: 1rem 1.5rem;
            .contact{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                .col_11{
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
            }
        }


   }
`
