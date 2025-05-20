import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Mert Uzunçakmak',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi!');
    setFormData({ ...formData, email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section fade-in">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta adresiniz"
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
            />
          </div>
          <button type="submit" className="submit-btn">
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 