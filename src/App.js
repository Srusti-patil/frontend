import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import UpdateUser from './components/UpdateUser.js';
import CheckUserId from './components/CheckUserId.js';
import Op2 from './components/Op2.js';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
