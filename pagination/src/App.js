import {useState , useEffect} from 'react'
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    await fetch("https://dummyjson.com/products?limit=60")
      .then((data) => data.json())
      .then((response) => {
        setProducts(response.products);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);
  
  const selectedPageHandler = (selectedPage) => {
    setPage(selectedPage);
  }
 
  return <div className="App">
    {
      products.slice(page * 10 -10 , page * 10).map((prod) => {
        return(
         
           <div className='products' key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <p>{prod.title}</p>
          </div>
       
        )
      })
    }
    {
      products.length > 0 && <div className="pagination">
        <span onClick={() => selectedPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>⏮️</span>
        {
          Array(products.length/10).fill().map((_,i) => {
            return (
              <span className={page===i+1 ? "pageSelected" : ""} onClick={() => selectedPageHandler(i+1)}>{i+1}</span>
            ) 
          })
        }
        <span  onClick={() => selectedPageHandler(page+1)} className={page < products.length/10 ? "" : "pagination__disable"}>⏭️</span>
      </div>
    }
  </div>;
}

export default App;
