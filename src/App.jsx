import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio.jsx'
import Home from './Home.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
