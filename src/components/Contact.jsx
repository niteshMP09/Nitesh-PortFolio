import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

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
    <section id="contact" className="bg-slate-800 py-20">
      <div className="max-w-[1200px] mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Get In Touch</h2>
        <p className="text-center text-white text-lg mb-12">
          Open to Full-Time roles, freelance work, and collaboration opportunities
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Contact Information</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              If you have an opportunity in React / Next.js / Full Stack development,
              feel free to reach out. I usually respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-slate-900 p-4 rounded-lg">
                <FaEnvelope className="text-2xl text-indigo-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">Email</h4>
                  <p className="text-slate-300">niteshsikarwar4898@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900 p-4 rounded-lg">
                <FaPhone className="text-2xl text-indigo-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">Phone</h4>
                  <p className="text-slate-300">+91 8109530681</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900 p-4 rounded-lg">
                <FaMapMarkerAlt className="text-2xl text-indigo-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">Location</h4>
                  <p className="text-slate-300">Indore, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full px-8 py-3 rounded-lg font-semibold gradient-bg text-white shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/60 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
              <FaPaperPlane /> {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <p className={`text-center ${statusMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
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
