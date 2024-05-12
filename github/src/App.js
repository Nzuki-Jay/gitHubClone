import './App.scss'
import Main from './Pages/Main/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Profile from './Pages/Profile/Profile';


function App() {

  return (
    <>
      <div className='app'>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Main/>} />
              <Route path="/profile" element={<Profile/>} />
            </Route>
          </Routes>     
        </BrowserRouter>

      </div>
      
    
    </>
  )
}

export default App

