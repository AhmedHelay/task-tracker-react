import {Routes, Route} from 'react-router-dom'
import {AuthUser} from 'global/AuthUser'
import EnvSpecificRouter from 'components/EnvSpecificRouter'
import Home from 'pages/home'
import Login from 'pages/login'
import Signup from 'pages/signup'

function App() {
  return (
    <AuthUser>
      <EnvSpecificRouter>
        <Routes>
          <Route path={''} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
        </Routes>
      </EnvSpecificRouter>
    </AuthUser>
  )
}

export default App
