
import { Mail, Phone, Send, Clock } from 'lucide-react';
import "./contact_section.css";

function ContactSection() {
  return (
    <>
      <div className='contact-section' id="contact">
        <div className='contact-container'>
          <div className='contact-content'>
            <div className='contact-info'>
              <h2 className="title">Get in Touch</h2>
              <p className="description">
                Ready to revolutionize your shift management? Our team is here to help you get started
                and answer any questions you may have.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-info">
                    <h3>Email Support</h3>
                    <p>Get help from our support team</p>
                    <a href="mailto:kazoom.apps+shiftmate@gmail.com">kazoom.apps@gmail.com</a>
                  </div>
                </div>

                {/* <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-info">
                    <h3>Phone Support</h3>
                    <p>Speak with our team directly</p>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </div>
                </div> */}

                {/* <div className="contact-method">
                  <div className="method-icon">
                    <Clock size={24} />
                  </div>
                  <div className="method-info">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday</p>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className='contact-form'>
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>

                <button type="submit" className="submit-btn" onClick={(e) => {
                  e.preventDefault();
                  // Form validation will still work due to required attributes
                  const form = e.currentTarget.closest('form');
                  if (form?.checkValidity()) {
                    // Handle form submission here
                    console.log('Form submitted successfully');
                    // You can add your form submission logic here
                  } else {
                    // This will trigger the browser's built-in validation
                    form?.reportValidity();
                  }
                }}>
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection