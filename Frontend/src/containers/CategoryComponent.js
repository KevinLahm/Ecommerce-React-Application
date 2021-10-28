import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryComponent = () => {
  const categories = useSelector((state) => state.allCategories.categories);
  const renderList = categories.map((category) => {
    const { id, name, image } = category;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/products/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CategoryComponent;
