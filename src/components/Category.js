import React from 'react'
import styled from "styled-components";

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney"/>
        <video autoPlay loop muted>
          <source src="/video/disney.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney"/>
        <video autoPlay loop muted>
          <source src="/video/marvel.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disney"/>
        <video autoPlay loop muted>
          <source src="/video/national-geographic.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney"/>
        <video autoPlay loop muted>
          <source src="/video/pixar.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney"/>
        <video autoPlay loop muted>
          <source src="/video/star-wars.mp4" type="video/mp4"/>
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns : repeat(1, 1fr);
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
  border: 3px solid rgba(249, 249, 249, .1);
  
  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }
  
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
                rgb(0 0 0 / 72%) 0 30px 22px -10px;
    
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);
    video {
      opacity: 1;
    }
  }
`