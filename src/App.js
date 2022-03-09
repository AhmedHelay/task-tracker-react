import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {render} from 'react-dom'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  render(
    <Router>
      <Routes>
        <Route path={''} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  )
}

export default App
