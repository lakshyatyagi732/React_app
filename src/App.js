// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// logic from here ------>
// let title = "TextUtils";

function App() {
  return (
  
    <div className="root">
      {/* <h1>hey</h1> */}
 
 <div className=" bg-dark text-light">

 <Navbar title="textUtils" about="About us" />
    <TextForm heading="Enter the text to analyze below" />
    
 </div>

  
    </div>

  );
}

export default App;
