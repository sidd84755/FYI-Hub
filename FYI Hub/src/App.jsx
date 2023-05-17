import Navbar from "./Components/Navbar"
import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Posts from "./Pages/Posts"

const App = () => {
  return (
    <Box>
      <Navbar/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/posts' element={<Posts/>}/>
        </Routes>
      </BrowserRouter> */}
    </Box>
  )
}

export default App
