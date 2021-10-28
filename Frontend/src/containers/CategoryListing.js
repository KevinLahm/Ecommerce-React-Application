import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../redux/actions/productsActions";
import CategoryComponent from "./CategoryComponent";

const CategoryPage = () => {
  const categories = useSelector((state) => state.allCategories.categories);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const response = await axios
      .get("http://localhost:3001/api/v1/categories")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCategories(response.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("Categories :", categories);
  return (
    <div className="ui grid container">
      <CategoryComponent />
    </div>
  );
};

export default CategoryPage;
