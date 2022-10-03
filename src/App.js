import './App.css';
import WebsiteLayout from './layouts/WebsiteLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
