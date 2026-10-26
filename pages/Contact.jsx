import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <span className="contact-label">WE ARE HERE FOR YOU</span>

        <h1>Contact Us</h1>

        <p>
          Have a question? We'd love to hear from you.
          Send us a message and we'll be happy to help.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p className="contact-description">
            Our team is ready to help you with your orders,
            products, and any questions you may have.
          </p>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Mail size={22} />
            </div>

            <div>
              <h3>Email Us</h3>
              <p>support@novastore.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Phone size={22} />
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+20 100 000 0000</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <MapPin size={22} />
            </div>

            <div>
              <h3>Our Location</h3>
              <p>Egypt</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Clock size={22} />
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Saturday - Thursday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <p className="form-description">
            Fill in the form below and tell us how we can help.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What is your message about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={18} />
            </button>

            {success && (
              <p className="contact-success" role="status">
                {success}
              </p>
            )}

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;