import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import First from "./Pages/First";
import Result from "./Pages/Result";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<First/>} />
          <Route path="/Result" element={<Result/>} />
        </Routes>
      </Router>
    </div>
  )

}

export default App