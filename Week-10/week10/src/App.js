import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body_layout from "./components/Body/Body_layout";

function App() {
  return (
    <div className="root_body">
      <Header />
      <Body_layout />
      <Footer />
    </div>
  );
}

export default App;
