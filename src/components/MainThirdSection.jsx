import ThirdSectionPNG from '../images/ImageSection3.png';

function MainThirdSection() {
  return (
    <section className="third_section">
      <div className="sec3_left_content">
        <img src={ ThirdSectionPNG } alt="example: nanny service payment options" />
      </div>
      <div className="sec3_right_content">
        <h2>
          Shared payments made simple
        </h2>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
        </p>
        <a href="https://" className="app_links">Read how Bridget’s share (without Hapu) ended over $15</a>
      </div>
    </section>
  );
}

export default MainThirdSection;
