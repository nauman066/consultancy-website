// client/src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    advisory: "Policy Advisory Services to Government",
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

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

  // Simulate preloader
  const [isLoaded, setIsLoaded] = useState(false);  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
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
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (!validate()) return;

setSubmitStatus('submitting');
try {
  const response = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if ( response.ok ) {
    setSubmitStatus('success');
    setTimeout(() => {
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        advisory: "Policy Advisory Services to Government",
        message: '' 
      });
      setSubmitStatus('');
      setShowForm(false);
    }, 3000);
  } else {
    setSubmitStatus('error');
  }
} catch (err) {
  setSubmitStatus('error');
}

  return (
    <>
      {/* Preloader */}
      {!isLoaded && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#0A0A0A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              width: '100px',
              height: '100px',
              border: '3px solid #4682B4',
              borderRadius: '50%',
              position: 'relative',
              boxShadow: '0 0 30px rgba(70, 130, 180, 0.5)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '60px',
              height: '60px',
              background: 'rgba(168, 230, 207, 0.3)',
              borderRadius: '50%'
            }} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '30%',
              fontSize: '2.5rem',
              color: '#4682B4',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 'bold'
            }}
          >
            Consultancy Firm
          </motion.h1>
        </div>
      )}

      {/* Main Page */}
      <AnimatePresence>
        {isLoaded && (
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#F8F1E9',
            overflowX: 'hidden',
            background: '#0A0A0A'
          }}>
            {/* Hero Section */}
            <section style={{
              height: '100vh',
              background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Glossy Shine Effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                pointerEvents: 'none'
              }} />
              
              {/* Animated Content Container */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ 
                  x: showForm ? -300 : 0,
                  opacity: showForm ? 0.8 : 1
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                style={{
                  position: 'relative',
                  zIndex: 10
                }}
              >
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #E6E6FA 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontFamily: 'Montserrat, sans-serif',
                    marginBottom: '1rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    letterSpacing: '1px'
                  }}
                >
                  We are Specialised in <span style={{ color: '#4682B4' }}>Strategic</span> Advisory
                </motion.h1>

                {/* ✅ SUBHEADING — CENTERED & JUST BELOW MAIN HEADING */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    fontSize: '1.1rem',
                    maxWidth: '700px',
                    lineHeight: '1.6',
                    marginBottom: '2rem', // ✅ Adjusted margin for vertical spacing
                    color: '#F8F1E9',
                    opacity: '0.9',
                    textAlign: 'center' // ✅ Centered!
                  }}
                >
                  Delivering precise strategic solutions for over 25 years, covering 11 practice areas with integrity and client-first advisory.
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  style={{ 
                    display: 'flex', 
                    gap: '20px', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px #4682B4" }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'Montserrat, sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setShowForm(true)}
                  >
                    Enquiry Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #A8E6CF" }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'transparent',
                      color: '#4682B4',
                      border: '2px solid #4682B4',
                      padding: '12px 25px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'Montserrat, sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => document.getElementById('advisory')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Advisory
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Form Container - Appears from Bottom */}
              <AnimatePresence>
                {showForm && (
                  <motion.div
                    initial={{ 
                      y: '100vh',
                      opacity: 0
                    }}
                    animate={{ 
                      y: 0,
                      opacity: 1
                    }}
                    exit={{ 
                      y: '100vh',
                      opacity: 0
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      background: 'rgba(10, 26, 47, 0.95)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      zIndex: 2000,
                      height: '100vh',
                      paddingTop: '100px'
                    }}
                    onClick={() => setShowForm(false)}
                  >
                    <motion.div
                      style={{
                        background: '#1C2526',
                        color: '#F8F1E9',
                        width: '100%',
                        maxWidth: '400px',
                        borderRadius: '12px',
                        padding: '25px',
                        border: '2px solid #4682B4',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setShowForm(false)}
                        style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: 'transparent',
                          border: 'none',
                          color: '#4682B4',
                          fontSize: '1.5rem',
                          cursor: 'pointer'
                        }}
                      >
                        ✕
                      </button>
                      <h3 style={{
                        fontSize: '1.5rem',
                        color: '#4682B4',
                        textAlign: 'center',
                        marginBottom: '15px',
                        letterSpacing: '1px'
                      }}>
                        Get Strategic Consultation
                      </h3>
                      <p style={{
                        fontSize: '0.8rem',
                        textAlign: 'center',
                        marginBottom: '20px',
                        color: '#A8E6CF',
                        opacity: '0.9'
                      }}>
                        Fill in your details and our experts will reach out to you.
                      </p>
                      
                      <form onSubmit={handleSubmit} style={{ zIndex: 10, position: 'relative' }}>
                        <div style={{ marginBottom: '15px' }}>
                          <label style={{ display: 'block', color: '#F8F1E9', fontSize: '0.8rem', marginBottom: '5px' }}>Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '10px',
                              borderRadius: '6px',
                              border: `1px solid ${errors.name ? '#1E90FF' : '#4682B4'}`,
                              background: 'rgba(245, 245, 240, 0.05)',
                              color: '#F8F1E9',
                              fontSize: '0.9rem'
                            }}
                          />
                          {errors.name && (
                            <div style={{ color: '#f44336', fontSize: '0.8rem', marginTop: '5px' }}>{errors.name}</div>
                          )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                          <label style={{ display: 'block', color: '#F8F1E9', fontSize: '0.8rem', marginBottom: '5px' }}>Phone Number *</label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '10px',
                              borderRadius: '6px',
                              border: `1px solid ${errors.phone ? '#1E90FF' : '#4682B4'}`,
                              background: 'rgba(245, 245, 240, 0.05)',
                              color: '#F8F1E9',
                              fontSize: '0.9rem'
                            }}
                          />
                          {errors.phone && (
                            <div style={{ color: '#f44336', fontSize: '0.8rem', marginTop: '5px' }}>{errors.phone}</div>
                          )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                          <label style={{ display: 'block', color: '#F8F1E9', fontSize: '0.8rem', marginBottom: '5px' }}>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '10px',
                              borderRadius: '6px',
                              border: `1px solid ${errors.email ? '#1E90FF' : '#4682B4'}`,
                              background: 'rgba(245, 245, 240, 0.05)',
                              color: '#F8F1E9',
                              fontSize: '0.9rem'
                            }}
                          />
                          {errors.email && (
                            <div style={{ color: '#f44336', fontSize: '0.8rem', marginTop: '5px' }}>{errors.email}</div>
                          )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                          <label style={{ display: 'block', color: '#F8F1E9', fontSize: '0.8rem', marginBottom: '5px' }}>Advisory Type *</label>
                          <select
                            name="advisory"
                            value={formData.advisory}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '10px',
                              borderRadius: '6px',
                              border: '1px solid #4682B4',
                              background: 'rgba(245, 245, 240, 0.05)',
                              color: '#F8F1E9',
                              fontSize: '0.9rem'
                            }}
                          >
                            {advisoryOptions.map(option => (
                              <option key={option} value={option} style={{ background: '#1C2526', color: '#F8F1E9' }}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <label style={{ display: 'block', color: '#F8F1E9', fontSize: '0.8rem', marginBottom: '5px' }}>Message *</label>
                          <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="3"
                            style={{
                              width: '100%',
                              padding: '10px',
                              borderRadius: '6px',
                              border: `1px solid ${errors.message ? '#1E90FF' : '#4682B4'}`,
                              background: 'rgba(245, 245, 240, 0.05)',
                              color: '#F8F1E9',
                              fontSize: '0.9rem',
                              resize: 'vertical'
                            }}
                          />
                          {errors.message && (
                            <div style={{ color: '#f44336', fontSize: '0.8rem', marginTop: '5px' }}>{errors.message}</div>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          disabled={submitStatus === 'submitting'}
                          whileHover={{ boxShadow: "0 0 15px #A8E6CF" }}
                          style={{
                            width: '100%',
                            padding: '10px',
                            background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                            color: '#1C2526',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            opacity: submitStatus === 'submitting' ? 0.7 : 1,
                            transition: 'background 0.3s'
                          }}
                        >
                          {submitStatus === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                        </motion.button>
                        
                        {submitStatus === 'success' && (
                          <div style={{
                            textAlign: 'center',
                            color: '#2E7D32',
                            fontSize: '0.9rem',
                            padding: '10px',
                            marginTop: '15px',
                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                            borderRadius: '6px'
                          }}>
                            Thank you! Your enquiry has been sent.
                          </div>
                        )}
                        
                        {submitStatus === 'error' && (
                          <div style={{
                            textAlign: 'center',
                            color: '#f44336',
                            fontSize: '0.9rem',
                            padding: '10px',
                            marginTop: '15px',
                            backgroundColor: 'rgba(244, 67, 54, 0.1)',
                            borderRadius: '6px'
                          }}>
                            Something went wrong. Please try again.
                          </div>
                        )}
                      </form>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Scroll Down Arrow */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  cursor: 'pointer',
                  color: '#4682B4',
                  fontSize: '24px'
                }}
                onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ▼
              </motion.div>
            </section>

            {/* Stats Section */}
            <section id="stats" style={{
              padding: '60px 20px',
              background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px'
                }}>
                  {[{ value: "25+", label: "Years Experience" },
                     { value: "5000+", label: "Projects Completed" },
                     { value: "24/7", label: "Client Support" },
                     { value: "100%", label: "Confidential" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background: 'rgba(70, 130, 180, 0.1)',
                        border: '2px solid #4682B4',
                        borderRadius: '12px',
                        padding: '20px',
                        textAlign: 'center'
                      }}
                      whileHover={{ 
                        y: -5,
                        borderColor: '#1E90FF',
                        boxShadow: '0 10px 20px rgba(30, 144, 255, 0.3)'
                      }}
                    >
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#4682B4',
                        marginBottom: '10px'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        color: '#F8F1E9'
                      }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Our Firm Section */}
            <section style={{
              padding: '60px 20px',
              background: 'linear-gradient(135deg, #F8F1E9 0%, #FFFFFF 100%)',
              position: 'relative'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '30px',
                  alignItems: 'center'
                }}>
                  <div>
                    <h2 style={{
                      fontSize: '2.5rem',
                      color: '#0A3D62',
                      fontFamily: 'Playfair Display, serif',
                      marginBottom: '20px'
                    }}>
                      About Our Firm
                    </h2>
                    <h3 style={{
                      fontSize: '1.2rem',
                      color: '#0A3D62',
                      fontWeight: '600',
                      marginBottom: '20px'
                    }}>
                      Committed to Strategic Excellence & Client Success
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      color: '#333'
                    }}>
                      Consultancy Firm is a premier strategic advisory firm with a distinguished track record of delivering exceptional strategic solutions. Our experienced advisors and consultants bring together diverse expertise to resolve even the most complex business challenges with precision and dedication.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#333'
                    }}>
                      We follow a client-centric approach, ensuring personalized attention to every case while upholding the highest standards of professional ethics, transparency, and confidentiality.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4682B4" }}
                      style={{
                        background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginTop: '20px'
                      }}
                      onClick={() => window.location.href = '/about'}
                    >
                      Learn More →
                    </motion.button>
                  </div>
                  
                  <div style={{
                    background: '#0A3D62',
                    color: '#F8F1E9',
                    padding: '30px',
                    borderRadius: '12px',
                    position: 'relative',
                    height: '300px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: '#4682B4',
                      color: '#0A3D62',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}>
                      25+
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                      marginBottom: '20px'
                    }}>
                      "Strategic solutions are not about solving problems today, but preparing for opportunities tomorrow. We ensure timely resolution with unwavering commitment."
                    </p>
                    <div style={{
                      fontSize: '0.9rem',
                      textAlign: 'right',
                      color: '#A8E6CF'
                    }}>
                      — OUR FOUNDING PRINCIPLE
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Advisory Services Section */}
            <section id="advisory" style={{
              padding: '60px 20px',
              background: '#0A0A0A'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  color: '#4682B4',
                  fontFamily: 'Playfair Display, serif',
                  textAlign: 'center',
                  marginBottom: '30px'
                }}>
                  Our Advisory Services
                </h2>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px'
                }}>
                  {[
                    {
                      title: "Corporate & Commercial Laws",
                      desc: "Company incorporation (Private, Public, OPC, Section 8) • LLP formation and compliance • Corporate governance & secretarial compliance"
                    },
                    {
                      title: "Civil Litigation & Dispute Resolution",
                      desc: "Civil suits & trials • Injunctions & recovery suits • Declaratory & specific performance suits"
                    },
                    {
                      title: "Criminal Law",
                      desc: "Criminal trials & defence • FIR quashing • Bail & anticipatory bail"
                    },
                    {
                      title: "Arbitration, Mediation & ADR",
                      desc: "Domestic & international arbitration • Institutional arbitration • Drafting arbitration clauses"
                    },
                    {
                      title: "Banking & Finance Laws",
                      desc: "Loan documentation • Debt recovery proceedings • DRT & DRAT matters"
                    },
                    {
                      title: "Insolvency & Bankruptcy",
                      desc: "Corporate Insolvency Resolution Process (CIRP) • Liquidation proceedings • Representation before NCLT & NCLAT"
                    }
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background: '#1C2526',
                        color: '#F8F1E9',
                        padding: '25px',
                        borderRadius: '12px',
                        textAlign: 'left',
                        border: '1px solid #4682B4',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        y: -5,
                        borderColor: '#1E90FF',
                        boxShadow: '0 10px 20px rgba(30, 144, 255, 0.3)'
                      }}
                    >
                      <h3 style={{ 
                        color: '#4682B4', 
                        fontSize: '1.2rem', 
                        marginBottom: '15px' 
                      }}>
                        {service.title}
                      </h3>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        lineHeight: '1.6' 
                      }}>
                        {service.desc}
                      </p>
                      <div style={{ 
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{ color: '#4682B4' }}>Learn More →</span>
                        <span style={{ color: '#4682B4' }}>→</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '30px'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4682B4" }}
                    style={{
                      background: '#0A3D62',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '300px'
                    }}
                    onClick={() => window.location.href = '/advisory'}
                  >
                    View All Advisory Services →
                  </motion.button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer style={{
              background: '#0A0A0A',
              color: 'white',
              padding: '40px 20px 20px',
              marginTop: '30px',
              border: '1px solid #333'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '25px',
                  marginBottom: '30px'
                }}>
                  <div>
                    <h4 style={{ color: '#4682B4', marginBottom: '10px' }}>Quick Links</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                      <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                      <a href="/team" style={{ color: 'white', textDecoration: 'none' }}>Team</a>
                      <a href="/advisory" style={{ color: 'white', textDecoration: 'none' }}>Advisory</a>
                      <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: '#4682B4', marginBottom: '10px' }}>Contact</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span>📞</span>
                      <span>+91 98765 43210</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span>✉️</span>
                      <span>info@consultancyfirm.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>📍</span>
                      <span>New Delhi, India</span>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #4682B4', color: '#A8E6CF' }}>
                  © 2026 Consultancy Firm. All rights reserved.
                </div>
              </div>
            </footer>

            {/* Custom Styles */}
            <style jsx>{`
              body {
                margin: 0;
                font-family: 'Montserrat', sans-serif;
                scroll-behavior: smooth;
              }
              h1, h2, h3 {
                font-family: 'Playfair Display', serif !important;
              }
            `}</style>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}