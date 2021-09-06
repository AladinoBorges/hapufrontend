import FourthSectionPNG from '../images/ImageSection4.png';

function MainFourthSection() {
  return (
    <section className="fourth_section">
      <h2>
        A framework built for the long term
      </h2>
      <p>
        Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
      </p>
      <a href="https://" className="app_links">
        Read how Hapu’s tribal background defines our app 
      </a>
      <img src={ FourthSectionPNG } alt="example: user billing history" />
    </section>
  );
}

export default MainFourthSection;
