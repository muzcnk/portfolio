import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ad Soyad"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınız"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              GÖNDER
            </button>
          </form>
          <div className="contact-info">
            <h3>Bana Ulaşın</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:mertuzuncakmakceng@gmail.com">mertuzuncakmakceng@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaGithub />
                <a href="https://github.com/muzcnk" target="_blank" rel="noopener noreferrer">github.com/muzcnk</a>
              </div>
              <div className="contact-item">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/mert-uzuncakmak/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 