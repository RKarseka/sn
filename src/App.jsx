import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}

export default App;
