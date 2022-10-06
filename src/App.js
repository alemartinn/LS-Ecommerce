import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import WebsiteLayout from './layouts/WebsiteLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import HIW from './pages/HIW'
import Detail from './pages/Detail'
import CartBag from './pages/CartBag'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hiw' element={<HIW />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/cartBag' element={<CartBag />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}
export default App;
