import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio.jsx'
import Home from './Home.jsx'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/LA1305" element={<Home />} />
        <Route path="/LA1305/:id" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
