import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xvggeoyn", { // Replace with your actual Formspree endpoint if needed
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-success">
        <CheckCircle size={48} color="var(--color-primary)" />
        <h3>Message Sent</h3>
        <p>Thanks for reaching out. I'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="John Doe" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="john@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required placeholder="Let's build something..." />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : (
          <>
            <span>Send Message</span>
            <Send size={16} />
          </>
        )}
      </button>
      {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;
