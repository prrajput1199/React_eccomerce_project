import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const HeroSection = ( { mydataObj } ) => {
    let { name } = mydataObj;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              vero blanditiis cupiditate earum perferendis sed laboriosam?
              Asperiores ipsa nam minus.
            </p>
            <NavLink to="/products">
              <Button>Shop now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    width: 150%; /* Makes the image responsive */
    height: auto; /* Maintains aspect ratio */
    max-width: 35rem; /* Limits maximum width */
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h2 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 70%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center; /* Fixed from "centre" */
  }

  figure {
    position: relative;
    top: -1rem; /* Keeps figure slightly above */
    right: -2rem; /* Moves figure slightly outward to the right */
    width: 140%; /* Covers 70% of the right side */
    z-index: 1; /* Keeps it below the image */

    &::after {
      content: " ";
      width: 96%; /* Matches the width of the figure */
      height: 98%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 3rem;
      top: -5rem;
      z-index: -1; /* Keeps the background behind figure and image */
    }
  }

  .img-style {
    min-width: 25rem;
    height: 25rem;
    width: 170%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: " ";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
