import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CadastroRemedio from './pages/CadastroRemedio/CadastroRemedio'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-remedio" element={<CadastroRemedio />} />
      </Routes>
    </Router>
  );
}

export default App;
