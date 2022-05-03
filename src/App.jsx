import { Route, Routes } from 'react-router-dom';
import { Friends } from './pages/friends';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';
import { Timeline } from './pages/timeline';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="messages/*" element={<Messages />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="friends" element={<Friends />} />
      </Route>
    </Routes>
  );
}

export default App;
