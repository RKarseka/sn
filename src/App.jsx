import { Header } from './components/header';
import { Nav } from './components/nav/nav';
import { MainPage } from './pages/main';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1>Social newtwork</h1>
      </div>
      <Nav />
      <MainPage />
    </>
  );
}

export default App;
