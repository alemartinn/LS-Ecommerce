import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import WebsiteLayout from './layouts/WebsiteLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import HIW from './pages/HIW'
import Detail from './pages/Detail'
import CartBag from './pages/CartBag'
import Modal from './components/Modal'

function App() {
  const { isOpen } = useSelector((store) => store.modal)
  return (
    <BrowserRouter>
      <WebsiteLayout>
        {isOpen && <Modal/>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hiw' element={<HIW />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/cartBag' element={<CartBag />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
