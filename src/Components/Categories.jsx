import React, { useState } from "react";

const Categories = ({ categoried, filteredMenus }) => {
  const [mainCategory, setMainCategory] = useState('all')
  return (
    <div className="btn-container">
      {
        categoried.map((category, index) => (
          <button
            key={index}
            type="button"
            className={category === mainCategory ? 'filter-btn highlight' : 'filter-btn'}
            onClick={() => {
              setMainCategory(category)
              filteredMenus(category)
            }}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
};

export default Categories;
