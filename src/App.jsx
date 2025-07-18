import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
// import Create from './pages/Create';
// import Edit from './pages/Edit';
// import Blog from './pages/Blog';
// import Navabr from './pages/components/Navbar';
// import Card from './pages/components/card';
// import LearningUseState from './pages/LearningUseState';

// Project - CRUD
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/>
       {/* <Route path = '/create' element = {<Create/>}/>
       <Route path = '/blog' element = {<Blog/>}/>
       <Route path = '/edit' element = {<Edit/>}/>
       <Route path = '/learning-usestate' element={<LearningUseState/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}
/*
*/
export default App;

