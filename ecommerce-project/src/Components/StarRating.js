import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const StarRating = ({ stars, reviews }) => {
  const RatingStar = Array.from({ length: 5 }, (curElement, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <FaStar className="icon"/>
        ) : stars >= number ? (
          <FaStarHalf className="icon"/>
        ) : (
          <AiOutlineStar className="empty-icon icon"/>
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">
        {RatingStar}
        <p>{reviews} Customer Reviews</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.4rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default StarRating;
