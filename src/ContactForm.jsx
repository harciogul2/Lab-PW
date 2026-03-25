import { useState } from "react";
 function ContactForm(){
     const [name, setName]= useState('');
     const [email, setEmail]= useState(''); 
     const [message, setMessage]= useState('');
     const [feedback, setFeedback] = useState('');

     function handleSubmit() {
    // trim -> ignora spatiile goale
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFeedback('Completeaza toate campurile!');
    } else 
        if(name.trim().length<3)
            {
                setFeedback('Numele trebuie sa aiba minim 3 caractere!');
             }
             else if (!email.includes('@') || email.trim().length <= 10) 
                {
                     setFeedback('Email-ul trebuie sa contina @ si sa aiba peste 10 caractere!');
         }
         else {
      setFeedback('Multumim, ' + name + '!');
    }
  }
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
      <h3>formular de contact</h3>
      
      {/* input pentru nume */}
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="numele tau" 
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      {/* input pentru email */}
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="adresa de email" 
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      {/* textarea pentru mesaj ==input dar cu mai multe randuri*/}
      <div style={{ marginBottom: '10px' }}>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="scrie mesajul tau aici..." 
          rows="4"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <button onClick={handleSubmit} style={{ padding: '8px 15px', cursor: 'pointer' }}>
        Submit
      </button>

      {/* afisam feedback ul doar daca are ceva text in el */}
      {feedback !== '' && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: feedback.includes('Multumim') ? 'green' : 'red' }}>
          {feedback}
        </p>
      )}
    </div>
  );
 }
export default ContactForm;
