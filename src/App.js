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
import { useEffect, useState } from 'react'
import { useVerifyTokenMutation } from './features/actions/usersAPI'
import { setCredentials, logOut } from "./features/user/userSlice"
import ProfileLayout from './layouts/ProfileLayout'
import MyRecipes from './components/dashboard/MyRecipes'
import ControlPanel from './components/dashboard/ControlPanel'
import UserPanel from './components/dashboard/UserPanel'
import RecipesPanel from './components/dashboard/RecipesPanel'
import UsersPanel from './components/dashboard/UsersPanel'
import MyProfile from './components/dashboard/MyProfile'
import NewRecipe from './components/NewRecipe'
import Products from './pages/Products'

function App() {
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.user)
  const [token,setToken] = useState(null)
  const [verifyToken] = useVerifyTokenMutation()
  useEffect(() => {
    setToken(localStorage.getItem("token"))
    if (token) {
      verifyToken(token).unwrap().then(res => {
        if (res.success) {
          dispatch(setCredentials(res.response))
        }
      }).catch(err => {
        dispatch(logOut())
      })
    }
  },[token])
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/hiw' element={<HIW />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/details/:id' element={<Detail />} />
          <Route path='/cartBag' element={<CartBag />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/dashboard'
            element={<ProfileLayout/>}>
            <Route index element={<MyProfile />} />
            <Route path="recipes" element={<MyRecipes/>}>
              <Route path="create" element={<NewRecipe />} />
              <Route path="edit" element={<p>edit recipe</p>} />
            </Route>
            <Route path="control-panel" element={<ControlPanel/>}>
              <Route path="users" element={<UsersPanel/>} />
              <Route path="users/:id" element={<UserPanel />} />
              <Route path="recipes" element={<RecipesPanel/>} />
            </Route>
            </Route>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}
export default App;
