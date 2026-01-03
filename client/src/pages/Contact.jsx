// client/src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    advisory: "Policy Advisory Services to Government",
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  
  const advisoryOptions = [
    "Policy Advisory Services to Government",
    "Government Negotiation & Policy Advocacy",
    "Infrastructure & Project Advisory (PMC & DPR)",
    "G2G Treaties, MoUs & Inter-Governmental Advisory",
    "Banking, NBFC & Financial Services Advisory",
    "Registration, Licensing & Regulatory Advisory",
    "Company Registration (India, UK, USA, Canada)",
    "Tax & International Tax Advisory",
    "Wealth Management & Family Office Advisory",
    "Investment Promotion & Incentive Advisory",
    "Expansion, Relocation & Market Entry Advisory"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['info', 'form', 'insights'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight * 0.8 && bottom >= window.innerHeight * 0.2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('submitting');
    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          advisory: formData.advisory,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            advisory: "Policy Advisory Services to Government",
            subject: '',
            message: ''
          });
          setSubmitStatus('');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      {/* Hero Section — height reduced, color updated */}
      <section style={{
        height: '70vh', // ✅ Reduced from 100vh → 70vh
        background: '#0A0A0A', // ✅ Black background
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          Let's Discuss Your Strategic Advisory Needs
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            lineHeight: '1.6',
            marginBottom: '1.5rem', // ✅ Slightly reduced
            color: '#F8F1E9',
            opacity: 0.9
          }}
        >
          Schedule a consultation with our experienced strategic advisors. We're here to help you navigate global business challenges with expertise and insight.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(70, 130, 180, 0.8)" }} // ✅ Blue glow
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)', // ✅ Blue gradient
              color: '#1C2526',
              border: 'none',
              padding: '14px 28px', // Slightly smaller
              borderRadius: '8px',
              fontSize: '17px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enquiry Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 230, 207, 0.6)" }} // ✅ Teal-blue glow
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              color: '#4682B4',
              border: '2px solid #4682B4', // ✅ Blue border
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '17px',
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Consultation
          </motion.button>
        </motion.div>

        {/* Scroll Down Arrow — blue */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '20px', // ✅ Adjusted
            cursor: 'pointer',
            color: '#4682B4', // ✅ Blue
            fontSize: '22px'
          }}
          onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
        >
          ▼
        </motion.div>
      </section>

      {/* Contact Information Section — padding reduced, colors updated */}
      <section id="info" style={{
        padding: '70px 20px', // ✅ 100px → 70px
        background: '#0A0A0A', // ✅ Black
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '2.5rem',
              color: '#4682B4', // ✅ Blue
              fontFamily: 'Playfair Display, serif',
              textAlign: 'center',
              marginBottom: '40px' // ✅ 50px → 40px
            }}
          >
            Get in Touch
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px' // ✅ Slightly smaller
          }}>
            {[
              { 
                title: "Phone", 
                content: [
                  "+91 11 4567 8900",
                  "+91 98765 43210"
                ],
                icon: "📞"
              },
              { 
                title: "Email", 
                content: [
                  "info@consultancyfirm.com",
                  "support@consultancyfirm.com"
                ],
                icon: "✉️"
              },
              { 
                title: "Office", 
                content: [
                  "Wave One, Sector 18",
                  "Noida, Uttar Pradesh - 201301"
                ],
                icon: "📍"
              },
              { 
                title: "Working Hours", 
                content: [
                  "Mon - Fri: 9:00 AM - 6:00 PM",
                  "Sat: 10:00 AM - 2:00 PM"
                ],
                icon: "⏰"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#1C2526',
                  color: '#F8F1E9',
                  padding: '25px', // ✅ Reduced
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '2px solid #4682B4', // ✅ Blue border
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  y: -8, // ✅ Slightly less lift
                  borderColor: '#1E90FF',
                  boxShadow: '0 12px 25px rgba(30, 144, 255, 0.3)' // ✅ Blue shadow
                }}
              >
                <div style={{ 
                  fontSize: '2.3rem', 
                  color: '#4682B4', // ✅ Blue icon
                  marginBottom: '18px'
                }}>
                  {card.icon}
                </div>
                <h3 style={{ 
                  color: '#4682B4', 
                  fontSize: '1.3rem', 
                  marginBottom: '12px',
                  fontWeight: '600'
                }}>
                  {card.title}
                </h3>
                <div style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6' 
                }}>
                  {card.content.map((line, j) => (
                    <p key={j} style={{ margin: '5px 0' }}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section — padding reduced, colors updated */}
      <section id="form" style={{
        padding: '70px 20px', // ✅ 100px → 70px
        background: '#0A0A0A', // ✅ Black
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px' // ✅ 40px → 30px
          }}>
            {/* Form Column */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: '2.5rem',
                  color: '#4682B4', // ✅ Blue
                  fontFamily: 'Playfair Display, serif',
                  marginBottom: '25px' // ✅ Reduced
                }}
              >
                Send Us a Message
              </motion.h2>
              
              <p style={{ 
                color: '#E6E6E6', 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '25px'
              }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '18px', // ✅ Reduced
                  marginBottom: '20px'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#E6E6E6',
                      fontSize: '0.9rem',
                      marginBottom: '5px'
                    }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: `1px solid ${errors.name ? '#f44336' : '#4682B4'}`, // ✅ Blue default
                        background: 'rgba(248, 241, 233, 0.05)',
                        color: '#F8F1E9',
                        fontSize: '1rem'
                      }}
                    />
                    {errors.name && (
                      <div style={{ 
                        color: '#f44336', 
                        fontSize: '0.85rem', 
                        marginTop: '4px' 
                      }}>
                        {errors.name}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#E6E6E6',
                      fontSize: '0.9rem',
                      marginBottom: '5px'
                    }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: `1px solid ${errors.email ? '#f44336' : '#4682B4'}`,
                        background: 'rgba(248, 241, 233, 0.05)',
                        color: '#F8F1E9',
                        fontSize: '1rem'
                      }}
                    />
                    {errors.email && (
                      <div style={{ 
                        color: '#f44336', 
                        fontSize: '0.85rem', 
                        marginTop: '4px' 
                      }}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        color: '#E6E6E6',
                        fontSize: '0.9rem',
                        marginBottom: '5px'
                      }}>Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: `1px solid ${errors.phone ? '#f44336' : '#4682B4'}`,
                          background: 'rgba(248, 241, 233, 0.05)',
                          color: '#F8F1E9',
                          fontSize: '1rem'
                        }}
                      />
                      {errors.phone && (
                        <div style={{ 
                          color: '#f44336', 
                          fontSize: '0.85rem', 
                          marginTop: '4px' 
                        }}>
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label style={{ 
                        display: 'block', 
                        color: '#E6E6E6',
                        fontSize: '0.9rem',
                        marginBottom: '5px'
                      }}>Advisory Type *</label>
                      <select
                        name="advisory"
                        value={formData.advisory}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #4682B4', // ✅ Blue
                          background: 'rgba(248, 241, 233, 0.05)',
                          color: '#F8F1E9',
                          fontSize: '1rem'
                        }}
                      >
                        {advisoryOptions.map(option => (
                          <option key={option} value={option} style={{ background: '#1C2526', color: '#F8F1E9' }}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#E6E6E6',
                      fontSize: '0.9rem',
                      marginBottom: '5px'
                    }}>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: `1px solid ${errors.subject ? '#f44336' : '#4682B4'}`,
                        background: 'rgba(248, 241, 233, 0.05)',
                        color: '#F8F1E9',
                        fontSize: '1rem'
                      }}
                    />
                    {errors.subject && (
                      <div style={{ 
                        color: '#f44336', 
                        fontSize: '0.85rem', 
                        marginTop: '4px' 
                      }}>
                        {errors.subject}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#E6E6E6',
                      fontSize: '0.9rem',
                      marginBottom: '5px'
                    }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: `1px solid ${errors.message ? '#f44336' : '#4682B4'}`,
                        background: 'rgba(248, 241, 233, 0.05)',
                        color: '#F8F1E9',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    />
                    {errors.message && (
                      <div style={{ 
                        color: '#f44336', 
                        fontSize: '0.85rem', 
                        marginTop: '4px' 
                      }}>
                        {errors.message}
                      </div>
                    )}
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(70, 130, 180, 0.7)" // ✅ Blue glow
                  }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)', // ✅ Blue gradient
                    color: '#1C2526',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s',
                    opacity: submitStatus === 'submitting' ? 0.7 : 1
                  }}
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <div style={{ 
                    textAlign: 'center', 
                    color: '#2E7D32', 
                    fontSize: '1.1rem', 
                    padding: '18px',
                    marginTop: '18px',
                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                    borderRadius: '8px'
                  }}>
                    Thank you! Your message has been sent.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div style={{ 
                    textAlign: 'center', 
                    color: '#f44336', 
                    fontSize: '1.1rem', 
                    padding: '18px',
                    marginTop: '18px',
                    backgroundColor: 'rgba(244, 67, 54, 0.15)',
                    borderRadius: '8px'
                  }}>
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
            
            {/* Map Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ 
                  background: '#1C2526',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '350px', // ✅ 400px → 350px
                  position: 'relative',
                  border: '2px solid #4682B4' // ✅ Blue border
                }}
              >
                {/* Simplified Map — blue theme */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #0A3D62 0%, #1C2526 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80%',
                    height: '80%',
                    background: 'rgba(248, 241, 233, 0.05)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      width: '300px',
                      height: '300px',
                      borderRadius: '50%',
                      background: 'rgba(70, 130, 180, 0.15)',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: 'pulseBlue 4s infinite'
                    }} />
                    
                    {/* Office Location Pins — blue */}
                    {[
                      { top: '30%', left: '40%' },
                      { top: '50%', left: '60%' },
                      { top: '70%', left: '35%' }
                    ].map((pin, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        style={{
                          position: 'absolute',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: '#4682B4',
                          boxShadow: '0 0 10px rgba(70, 130, 180, 0.7)',
                          top: pin.top,
                          left: pin.left,
                          animation: 'pulseLocationBlue 2s infinite'
                        }}
                        whileHover={{ 
                          scale: 1.4,
                          backgroundColor: '#1E90FF',
                          boxShadow: '0 0 15px rgba(30, 144, 255, 0.8)'
                        }}
                      />
                    ))}
                    
                    <div style={{ 
                      fontSize: '2.8rem', 
                      color: '#A8E6CF',
                      position: 'relative',
                      zIndex: 10
                    }}>
                      🌍
                    </div>
                  </div>
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '12px',
                  color: '#E6E6E6',
                  fontSize: '1rem'
                }}>
                  <h3 style={{ 
                    color: '#4682B4', 
                    fontSize: '1.2rem',
                    marginBottom: '8px'
                  }}>Visit Our Office</h3>
                  <p>Wave One, Sector 18, Noida, Uttar Pradesh - 201301, India</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  background: '#1C2526',
                  color: '#F8F1E9',
                  padding: '25px', // ✅ Reduced
                  borderRadius: '12px',
                  border: '2px solid #4682B4', // ✅ Blue
                  marginTop: '25px' // ✅ Reduced
                }}
              >
                <h3 style={{ 
                  color: '#4682B4', 
                  fontSize: '1.4rem',
                  marginBottom: '12px'
                }}>Need Immediate Assistance?</h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  marginBottom: '18px'
                }}>
                  For urgent strategic advisory matters, please call us directly or visit our office during working hours.
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{
                    background: 'rgba(70, 130, 180, 0.1)',
                    padding: '10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span>📞</span>
                    <span>+91 11 4567 8900</span>
                  </div>
                  <div style={{
                    background: 'rgba(70, 130, 180, 0.1)',
                    padding: '10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span>✉️</span>
                    <span>info@consultancyfirm.com</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Insights Section — padding reduced, colors updated */}
      <section id="insights" style={{
        padding: '70px 20px', // ✅ 100px → 70px
        background: '#0A0A0A' // ✅ Black
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '2.5rem',
              color: '#4682B4', // ✅ Blue
              fontFamily: 'Playfair Display, serif',
              marginBottom: '40px' // ✅ Reduced
            }}
          >
            Strategic Insights
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px' // ✅ Reduced
          }}>
            {[
              { 
                title: "2024 Global Market Outlook", 
                desc: "Analysis of emerging markets and strategic opportunities for multinational enterprises in the post-pandemic landscape."
              },
              { 
                title: "AI in Strategic Decision Making", 
                desc: "How artificial intelligence is transforming advisory services and enhancing predictive capabilities for business leaders."
              },
              { 
                title: "Sustainable Business Transformation", 
                desc: "Strategies for integrating ESG principles into core business operations while maintaining competitive advantage."
              }
            ].map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#1C2526',
                  color: '#F8F1E9',
                  padding: '25px', // ✅ Reduced
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '2px solid #4682B4', // ✅ Blue
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  y: -8,
                  borderColor: '#1E90FF',
                  boxShadow: '0 12px 25px rgba(30, 144, 255, 0.3)' // ✅ Blue glow
                }}
              >
                <div style={{ 
                  fontSize: '2.3rem', 
                  color: '#4682B4',
                  marginBottom: '18px'
                }}>
                  {i === 0 ? '📈' : i === 1 ? '🤖' : '🌱'}
                </div>
                <h3 style={{ 
                  color: '#4682B4', 
                  fontSize: '1.4rem', 
                  marginBottom: '12px' 
                }}>
                  {insight.title}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6' 
                }}>
                  {insight.desc}
                </p>
                <motion.button
                  whileHover={{ 
                    backgroundColor: '#1E90FF',
                    boxShadow: '0 0 15px rgba(30, 144, 255, 0.5)'
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                    color: '#1C2526',
                    border: 'none',
                    padding: '10px 25px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: '18px',
                    width: '100%'
                  }}
                >
                  Read More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — background & colors updated */}
      <footer style={{
        background: '#0A0A0A',
        color: '#E6E6E6',
        padding: '50px 20px 30px', // ✅ 60px → 50px
        borderTop: '1px solid #333'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            color: '#4682B4',
            fontSize: '2rem',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Consultancy Firm
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '25px', // ✅ Reduced
            marginBottom: '35px' // ✅ Reduced
          }}>
            <div>
              <h4 style={{ color: '#4682B4', marginBottom: '12px' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="/" style={{ color: '#E6E6E6', textDecoration: 'none' }}>Home</a>
                <a href="/about" style={{ color: '#E6E6E6', textDecoration: 'none' }}>About</a>
                <a href="/team" style={{ color: '#E6E6E6', textDecoration: 'none' }}>Team</a>
                <a href="/advisory" style={{ color: '#E6E6E6', textDecoration: 'none' }}>Advisory</a>
                <a href="/contact" style={{ color: '#E6E6E6', textDecoration: 'none' }}>Contact</a>
              </div>
            </div>
            <div>
              <h4 style={{ color: '#4682B4', marginBottom: '12px' }}>Contact</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span>✉️</span>
                <span>info@consultancyfirm.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📍</span>
                <span>New Delhi, India</span>
              </div>
            </div>
            <div>
              <h4 style={{ color: '#4682B4', marginBottom: '12px' }}>Newsletter</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #4682B4',
                    background: 'rgba(248, 241, 233, 0.05)',
                    color: '#F8F1E9'
                  }}
                />
                <motion.button
                  whileHover={{ 
                    backgroundColor: '#1E90FF',
                    boxShadow: '0 0 15px rgba(30, 144, 255, 0.5)'
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                    color: '#1C2526',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '25px', borderTop: '1px solid #4682B4', color: '#A8E6CF' }}>
            © 2026 Consultancy Firm. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Custom Styles — blue animations */}
      <style jsx>{`
        @keyframes pulseBlue {
          0% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.7; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }
        @keyframes pulseLocationBlue {
          0% { box-shadow: 0 0 10px rgba(70, 130, 180, 0.7); }
          50% { box-shadow: 0 0 20px rgba(30, 144, 255, 1); }
          100% { box-shadow: 0 0 10px rgba(70, 130, 180, 0.7); }
        }
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          scroll-behavior: smooth;
        }
        h1, h2, h3 {
          font-family: 'Playfair Display', serif !important;
        }
      `}</style>
    </>
  );
}