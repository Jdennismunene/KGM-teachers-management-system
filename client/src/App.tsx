import { Route, Routes } from "react-router-dom"
import { AppProvider, } from "./context/AppContext"
import Sidebar from "./pages/Sidebar"
import Home from "./pages/Home"


function App() {
  return (
    <>
    <AppProvider>
      <Sidebar />
          <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
        
    </AppProvider>
    </>
  )
}

export default App