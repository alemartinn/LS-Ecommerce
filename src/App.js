import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import WebsiteLayout from './layouts/WebsiteLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import HIW from './pages/HIW'
import Detail from './pages/Detail'
import CartBag from './pages/CartBag'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useVerifyTokenMutation } from './features/actions/usersAPI'
import { setCredentials, logOut } from "./features/user/userSlice"

function App() {
  const {token} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const [verifyToken] = useVerifyTokenMutation()
  useEffect(() => {
    if (token) {
      verifyToken(token).unwrap().then(res => {
        if (res.success) {
          dispatch(setCredentials(res.response))
        }
      }).catch(err => {
        dispatch(logOut())
      })
    }else {
     dispatch(logOut())
    }
  },[token])
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hiw' element={<HIW />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/details/:id' element={<Detail />} />
          <Route path='/cartBag' element={<CartBag />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipes' element={<Recipes />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}
export default App;
