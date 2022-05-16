import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  const {category} = useParams();
  const {filterData,isLoading,isError} = useSelector((state)=>state);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch filter Products for every ID change
   dispatch(filterProducts(category));
    
  }, [category,dispatch]);
  return isLoading?(<div>Loading....</div>) : isError? (<div>Something went wrong</div>) : (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
      {filterData.map((item)=>{
        return <ProductCard key={item.id} item={item}/>
      })}
    </Grid>
  );
};
