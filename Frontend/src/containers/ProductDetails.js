import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, name, price, description, quantity, id } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:3001/api/v1/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data)); 
  };

  const buyProductDetail = async (id) => {
    let old_qty=quantity;
    let qty=old_qty-1;
    const datas = { quantity:  qty};
    const response = await axios
      .put(`http://localhost:3001/api/v1/products/${id}`, datas)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data)); 
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="" />
              </div>
              <div className="column rp">
                <h1>{name}</h1>
                <h2>
                  <button className="ui teal tag label">${price}</button>
                </h2>
                <h3 className="ui brown block ">Quantity: {quantity}</h3>
                <p>{description}</p>
                {quantity > 0 ? (
                  <div className="ui vertical teal animated button" tabIndex="0" onClick={() => buyProductDetail(id)}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Buy</div>
                </div>
                ) : (
                  <h3 className="ui red header">Product out of stock</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;