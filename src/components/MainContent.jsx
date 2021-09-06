import '../styles/mainContent.css';

import MainFirstSection from './MainFirstSection';
import MainSecondSection from './MainSecondSection';
import MainThirdSection from './MainThirdSection';
import MainFourthSection from './MainFourthSection';
import MainFifthSection from './MainFifthSection';

function MainContent() {
  return (
    <main className="main_content">
      <MainFirstSection />
      <hr />
      <MainSecondSection />
      <hr />
      <MainThirdSection />
      <hr />
      <MainFourthSection />
      <hr />
      <MainFifthSection />
    </main>
  );
}

export default MainContent;
