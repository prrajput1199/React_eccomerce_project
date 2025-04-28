import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTERED_PRODUCT_DATA":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "select_grid_view":
      return {
        ...state,
        grid_view: true,
      };

    case "select_list_view":
      return {
        ...state,
        grid_view: false,
      };

    case "SORTING_PRODUCTS_STATE":
      // traditioanl way
      // const userOptions = document.querySelector("#sort");
      // const sortValue = userOptions.options[userOptions.selectedIndex].value;
      // console.log("SortValue =>", sortValue);

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS_FUNCTIONS":
      let { filterProducts, sorting_value } = state;
      let newFilteredData;
      let tempFilterProduct = [...filterProducts];

      // better way
      const SortingFunction = (a, b) => {
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      // traditional way
      // if (state.sorting_value === "a-z") {
      //   newFilteredData = tempFilterProduct.sort((a, b) =>
      //     a.name.localeCompare(b.name)
      //   );
      // }

      // if (state.sorting_value === "z-a") {
      //   newFilteredData = tempFilterProduct.sort((a, b) =>
      //     b.name.localeCompare(a.name)
      //   );
      // }

      // if (state.sorting_value === "lowest") {
      //   newFilteredData = tempFilterProduct.sort((a, b) => a.price - b.price);
      // }

      // if (state.sorting_value === "highest") {
      //   newFilteredData = tempFilterProduct.sort((a, b) => b.price - a.price);
      // }

      newFilteredData = tempFilterProduct.sort(SortingFunction);

      return {
        ...state,
        filterProducts: newFilteredData,
      };

    case "GET_SEARCH_VALUE":
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "GET_FILTERED_VALUE":
      const { allProducts } = state;
      const { text, category, company, color } = state.filters;
      let TempFilteredData = [...allProducts];

      if (text) {
        TempFilteredData = TempFilteredData.filter((curEl) => {
          return curEl.name.toLowerCase().includes(text);
        });
      }

      if (category && category !== "All") {
        TempFilteredData = TempFilteredData.filter((curEl) => {
          return curEl.category === category;
        });
      }

      if (company && company !== "All") {
        TempFilteredData = TempFilteredData.filter((curEl) => {
          return curEl.company === company;
        });
      }

      if (color && color !== "All") {
        TempFilteredData = TempFilteredData.filter((curEl) => {
          return curEl.colors.includes(color);
        });
      }

      return {
        ...state,
        filterProducts: TempFilteredData,
      };

    default:
      return {
        ...state,
      };
  }
};

export default FilterReducer;
