import FirstSectionIMG from '../images/ImageSection1.png';

function MainFirstSection() {
  return (
    <section className="first_section">
      <div className="main_left_content">
        <h2>
          Share your home,<br/>nanny and costs
        </h2>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="https://" className="app_links">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
        </p>
        <a href="https://" className="app_links">Ready to get started?</a>
      </div>
      <div className="main_right_content">
        <img src={FirstSectionIMG} alt="exemple: Jane's ongoig nanny share" />
      </div>
    </section>
  );
}

export default MainFirstSection;
