import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData,sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select,Grid } from "./Styled";

export const Products = () => {
  const dispatch = useDispatch();
  const {products,isLoading,isError} = useSelector((state)=>state)
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(getProductsData())
    
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
    dispatch(sortProducts(e.target.value))
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      {isLoading?<div>...Loading</div>:isError?<div>Something Went Wrong</div>: <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {products.map((item)=>{
          return <ProductCard key={item.id} item={item}/>
        })}
      </Grid>}
     
    </>
  );
};
