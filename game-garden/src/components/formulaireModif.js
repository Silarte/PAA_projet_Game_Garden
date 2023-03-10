import * as React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './form.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Formulaire soumis !');
    console.log(`Prénom : ${firstName}`);
    console.log(`Nom : ${lastName}`);
    console.log(`Pseudo : ${username}`);
    console.log(`Email : ${email}`);
  }

  function handleCancel() {
    history.goBack();
  }

  return (
    <div className="form-wrapper">
      <h2>Formulaire</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name-input">Prénom :</label>
        <input
          id="first-name-input"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label htmlFor="last-name-input">Nom :</label>
        <input
          id="last-name-input"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />

        <label htmlFor="username-input">Pseudo :</label>
        <input
          id="username-input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="email-input">Email :</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="button" className="cancel-button" onClick={handleCancel}>
          Annuler
        </button>
        <button type="submit" className="save-button">Sauvegarder</button>
      </form>
    </div>
  );
}
