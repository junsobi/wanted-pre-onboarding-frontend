import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ToDoPage from './pages/ToDo/ToDoPage';
import TokenChecker from './components/TokenChecker';

const Router = () => {
  return (
    <BrowserRouter>
      <TokenChecker>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Routes>
      </TokenChecker>
    </BrowserRouter>
  );
};

export default Router;
