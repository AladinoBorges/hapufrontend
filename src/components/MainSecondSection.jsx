import React, { useState, useLayoutEffect } from 'react';

function MainSecondSection() {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleButtonStatus = () => {
    const { name, email } = userInfo;
    const REGEX = /\S+@\S+\.\S+/;

    const nameValidator = name.length >= 4;
    const emailValidator = REGEX.test(email);

    const isValid = emailValidator && nameValidator;

    if (!isValid) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }

  const handleInputsChange = ({target: { name, value }}) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const apiFetch = (URL, data) => {
    try {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-Type': 'application/json',
        },
      })
      .then((response) => response.json)
      .then((data) => console.log(`Success:\n${data}`))
      .then(() => setUserInfo({ name: '', email: '' }))
      .then (() => setButtonStatus(true));      
    } catch ({ message }) {
      console.error(`Error: ${message}`);
    }
  }

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const apiPostUrl = ' https://api.jungledevs.com/api/v1/challenge-newsletter';

    apiFetch(apiPostUrl, userInfo);
  }

  useLayoutEffect(() => {
    handleButtonStatus();
  });

  return (
    <section className="second_section">
      <h3>
        Are you a parent without a nanny and looking to share?
      </h3>
      <p>
        Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
      </p>
      <form className="forms">
        <input
          type="text"
          value={ userInfo.name }
          name="name"
          id="username"
          placeholder="Your Name"
          className="input"
          onChange={ handleInputsChange }
        />
        <input
          type="text"
          value={ userInfo.email }
          name="email"
          id="user_email"
          placeholder="Your Email"
          className="input"
          onChange={ handleInputsChange }
        />
        <button
          className={buttonStatus ? "btn_disabled navbar" : "btn navbar special"}
          onClick={handleFormSubmission}
          disabled={ buttonStatus }
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default MainSecondSection;
