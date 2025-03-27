import React from "react";
import { useFilterContext } from "../styles/Context/FilterContext";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

const Sort = () => {
  const { filterProducts, setListView, setGridView, grid_view, Sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "sort-btn active" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "sort-btn" : "sort-btn active"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{filterProducts.length} products available</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort" style={{
            fontSize:"1.65rem"
          }}>Sort : </label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onChange={Sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
