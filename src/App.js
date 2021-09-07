import HeroHeader from './components/HeroHeader';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import './App.css';

//DESKTOP CSS
import './styles/genericStylesDesktops.css';
import './styles/heroHeaderDesktops.css';
import './styles/mainContentDesktops.css';
import './styles/footerDesktops.css';

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
