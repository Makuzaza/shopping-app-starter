import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import ProductSingle from "./ProductSingle";

const Products = () => {    

        const dispatch = useDispatch();
        const { products } = useSelector((state) => state.product);

// const products = useSelector((state) => state.product.products);
// store.product.products

        console.log(products);

        useEffect(() => {
            dispatch(getProducts());
        });

    return (
        <div>
          {products.map((product) => (
        <ProductSingle key={product.id} {...product} />
          ))}
        </div>
    )
}

export default Products;