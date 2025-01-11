import './App.css';
import { Routes, Route } from "react-router-dom"
import BlogLayout from './layout/BlogLayout';
import AdminLayout from './layout/AdminLayout';
import Home from './page/Home';
import Counter from './page/Counter';
import Setting from './page/Setting';
import Login from './page/Login';

import PrivateRoute from './layout/PrivateRoute';
import Blog from './page/Blog';
import BlogDetail from './page/Blog/BlogDetail';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<BlogLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/blog' element={<Blog/>}>
              
          </Route>
          <Route path='/blog/:id' element={<BlogDetail/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<PrivateRoute> <AdminLayout/></PrivateRoute>}/>
    </Routes>
  );
}

export default App;
