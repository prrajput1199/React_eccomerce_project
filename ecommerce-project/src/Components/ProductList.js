import { useFilterContext } from "../styles/Context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterProducts, grid_view } = useFilterContext();

  return (
    <>{grid_view ? <GridView productList={filterProducts} /> : <ListView productList={filterProducts}/>}</>
  );

};

export default ProductList;
