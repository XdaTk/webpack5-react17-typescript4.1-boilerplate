import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './scenes/home';
import { Profile } from './scenes/profile';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
