import "./App.css";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <div
            style={{
              width: "1192px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "50px 0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "30%", marginRight: "20px" }}>
                <Filter />
              </div>
              <div style={{ flex: 1 }}>
                <ProductList showTitle={true} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Pagination />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
