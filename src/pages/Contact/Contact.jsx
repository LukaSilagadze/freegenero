import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: <FiMapPin />,
    label: 'Address',
    value: '123 Education Ave, San Francisco, CA 94102',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'hello@freegenero.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Contact Us"
            title="Get in Touch"
            subtitle="Have a question or want to learn more? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoSubtitle}>
                Reach out to us through any of the channels below, or fill out
                the form and we will get back to you within 24 hours.
              </p>
              <div className={styles.contactItems}>
                {contactInfo.map((item) => (
                  <div key={item.label} className={styles.contactItem}>
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {submitted && (
                <div className={styles.success}>
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ''}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  className={errors.subject ? styles.inputError : ''}
                />
                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? styles.inputError : ''}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <Button type="submit" size="lg">
                <FiSend /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
