import Home from "./Home";
import Page from "./Page";
import Page2 from "./Page2";
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
     
       <Router  >
     <div className='header'>
      <Link id="logo" to={'/'}>Logo</Link>
      <div className="puti">
        <Link id="home" to={'/'}>Home</Link>
        <Link id="page" to={'/page'}>Page</Link>
        <Link id="page" to={'/page2'}>page2</Link>
        </div>
      </div>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/page2' element={<Page2/>}/>
        
        

      </Routes>

      
    </Router>
      
   
  );
}

export default App;
