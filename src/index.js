import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Actor from './component/Actor';
import { ADD,ActorADD } from './component/ADD';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import ActorEdit from './PAGE/ActorEdit'
import Director from './component/Director';
import DirectorEdit from './PAGE/DirectorEdit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/:id" element={<App />} />
        <Route path="/actor/edit/:id" element={<ActorEdit />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<ADD />} />
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="/director/:id" element={<Director />} />
        <Route path="/director/edit/:id" element={<DirectorEdit />} />


      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
