import React, { useState } from 'react';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import data from './data';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categoried, setCategoried] = useState(allCategories);

  const filteredMenus = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }


    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);

  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoried={categoried} filteredMenus={filteredMenus} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
