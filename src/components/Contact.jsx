import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatusMessage('')

    try {
      const serviceID = 'service_f4lbvjy'
      const templateID = 'template_f914b7v'
      const publicKey = 'NI-Br8T9Xgw_xVfG4'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Nitesh Sikarwar'
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setStatusMessage('✅ Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setStatusMessage('❌ Failed to send message. Please try again or email me directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Open to Full-Time roles, freelance work, and collaboration opportunities
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              If you have an opportunity in React / Next.js / Full Stack development,
              feel free to reach out. I usually respond within 24 hours.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>niteshsikarwar4898@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 8109530681</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Indore, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              <FaPaperPlane /> {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <p className={`status-message ${statusMessage.includes('✅') ? 'success' : 'error'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
