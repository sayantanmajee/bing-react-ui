import Carousel from "./components/Carousel";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1671372678599-d6267ead7291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] w-screen h-screen bg-cover flex flex-col justify-start items-center overflow-auto"
    >
      <section className="flex flex-col items-center space-y-32 min-w-full px-3 md:p-0 md:min-w-[80%] md:max-w-[80%] overflow-x-hiddens">

        <Header />
        <SearchBar/>

        <Carousel />
      </section>
    </div>
  );
}

export default App;
