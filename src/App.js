import {Routes, Route} from 'react-router-dom'

import {AuthUser} from 'global/AuthUser'
import EnvSpecificRouter from 'components/EnvSpecificRouter'

import Home from 'pages/home'
import Login from 'pages/login'
import Registration from 'pages/registration'
import Users from 'pages/users'
import Profile from 'pages/profile'

function App() {
  return (
    <AuthUser>
      <EnvSpecificRouter>
        <Routes>
          <Route path={''} element={<Home />} />
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/registration'} element={<Registration />} />
        </Routes>
      </EnvSpecificRouter>
    </AuthUser>
  )
}

export default App
