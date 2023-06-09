import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import './components/Quotes.css';
import './App.css';
import { Home } from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import Logo from './components/Logo';

function Layout() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <Logo className="logo" />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
