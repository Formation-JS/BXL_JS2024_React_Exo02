import './App.css'
import ProductCard from './components/product-card/product-card.jsx';
import Header from './containers/header/header.jsx';
import ProductList from './containers/product/product-list.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Correction</h1>
        <ProductList />

        {/* <ProductCard 
          id={42}
          name='Test'
          ref='4567890123456'
          description={'C\'est un test'}
          category='Exemple'
          price={42.5}
          onSale={false} /> */}
      </main>
    </>
  )
}

export default App
