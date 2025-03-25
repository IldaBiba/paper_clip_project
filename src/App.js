import { Route, BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import Home from './views/Home';
import './App.css';
import SignIn from './views/SignIn';
import Layout from './Layout/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
