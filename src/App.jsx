import { useState, useEffect } from 'react'
import './App.css'
import { products } from './data' 
import ProductCard from './components/ProductCard'


function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)


  const handleSearch = (e) => {
  e.preventDefault();

  if (!searchQuery.trim()) {
    setFilteredProducts(products); 
    return;
  }

  const query = searchQuery.toLowerCase();

  const results = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.sku.toLowerCase().includes(query)
  );

  setFilteredProducts(results);
};


return (
    <>
       {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="/">Products Catalogue</a>
          <form className="nav-search" onSubmit={handleSearch} role="search">
            <input
              className="nav-input"
              type="text"
              placeholder="Search products, SKU, category…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="nav-btn" type="submit">Search</button>
          </form>
        </div>
      </header>

      {/* MAIN */}
      <main className="container" style={{ paddingTop: '20px' }}>
        <div className="product-list">
          {filteredProducts.length ? (
            filteredProducts.map(p => <ProductCard key={p.sku} product={p} />)
          ) : (
            <div>No products found.</div>
          )}
        </div>
      </main>
    </>
  )

}

export default App
