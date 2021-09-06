import './App.css';
import './styles/genericStyles.css';

import HeroHeader from './components/HeroHeader';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <MainContent />
    </div>
  );
}

export default App;
