import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" >
        {/* display item info here  */}
        <h2>{item.title}</h2>
        <img src={item.image} alt="" />
        <h3>{item.brand}</h3>
        <p>{item.price}</p>
      </Flex>
    </>
  );
};
