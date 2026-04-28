import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit() {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFeedback('Completeaza toate campurile!');
      setIsSuccess(false);
    } else if (name.trim().length < 3) {
      setFeedback('Numele trebuie sa aiba minim 3 caractere!');
      setIsSuccess(false);
    } else if (!email.includes('@') || email.trim().length <= 10) {
      setFeedback('Email-ul trebuie sa contina @ si sa aiba peste 10 caractere!');
      setIsSuccess(false);
    } else {
      setFeedback('Multumim, ' + name + '! Mesajul a fost trimis.');
      setIsSuccess(true);
    }
  }

  return (
    <div className="section-card">
      <h3>formular de contact</h3>

      <div className="form-field">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="numele tau"
        />
      </div>

      <div className="form-field">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="adresa de email"
        />
      </div>

      <div className="form-field">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="scrie mesajul tau aici..."
          rows="4"
        />
      </div>

      <button className="btn-primary" onClick={handleSubmit}>
        trimite mesajul
      </button>

      {feedback !== '' && (
        <div className={`form-feedback ${isSuccess ? 'success' : 'error'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
}

export default ContactForm;
