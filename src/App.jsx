import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddPost from './pages/AddPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="posts/new" element={<AddPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
