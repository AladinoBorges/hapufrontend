import HeroHeader from './components/HeroHeader';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import './App.css';
import './styles/genericStyles.css';
import './styles/footer.css';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
