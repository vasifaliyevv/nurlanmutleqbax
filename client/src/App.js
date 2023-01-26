import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Index'
import Navbar from './Components/Navbar/Index'
import Footer from './Components/Footer/Index'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={'/teacherdetail/:id'}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
