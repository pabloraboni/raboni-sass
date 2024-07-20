import './App.scss'
import { Outlet } from "react-router-dom";

//components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className="pr-container">        
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
