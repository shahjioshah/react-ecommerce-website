import React, {useState} from 'react'

import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components'
import { sliderItems } from "../data";

export default function Slider() {
   const [sliderIndex, SetsliderIndex ] = useState(0);
   const handleSlider = (direction) =>{
          if(direction === "left")
          {
            SetsliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2)
            
            //alert(sliderIndex);
          }
          else{
            SetsliderIndex(sliderIndex < 2 ? sliderIndex+1 : 0)
           // alert(sliderIndex);

          }

   }
  return (
    <Container sliderIndex={sliderIndex}>
         <div className="left-arrow" onClick={() => handleSlider("left")}>
            <ArrowLeftOutlined />
         </div>
         {sliderItems.map((item) =>{
              return(
                <div className="slider">
                <div className="slide">
                     <div className="content">
                         <div className="image">
                           <img src={item.img} alt="" />
                         </div>
                         <div className="info">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <div className="btns">
                             <button>
                                Shop Now  
                                <ArrowRightOutlined />
                             </button>
                         </div>
                         </div>          
                     </div>
                 </div>
                </div>
              )
         })}
         
         
        
         <div className="right-arrow">
            <ArrowRightOutlined onClick={() => handleSlider("right")} />
         </div>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    .left-arrow{
      background-color: #e2c9c9;
      width: 50px;
      height: 50px;
      border-radius: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      cursor: pointer;
      margin: auto;
      z-index: 11;
      opacity: .5;
    }
    .right-arrow{
      background-color: #e2c9c9;
      width: 50px;
      height: 50px;
      border-radius: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      margin: auto;
      bottom: 0;
      cursor: pointer;
      z-index: 12;
      opacity: .5;
    }
    .slider{
      height: 100%;
    .slide{
       height: 100vh;
       width: 100vw;
       transform: translate(${(props) => props.sliderIndex * -100}vw);
       background-color: #f1e0e0;
       transition: all 1s ease-in-out;
      
      .content{ 
          display: flex;
          justify-content: space-between;
          padding: 2rem 5rem;
          .image{
              img{
                height: 40rem;
              }
          }
          .info{
            display: flex;
            flex-direction: column;
            gap: .5rem;
            margin-top: 6rem;
              h1{
                font-size: 4rem;
              }
              p{
                font-size: 1.1rem;
              }
              .btns{
                button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: .3rem 1rem;
                    background-color: transparent;
                    border: 2px solid gray;
                    cursor: pointer;
                }
              }
          }
      }
    }
  }
`;