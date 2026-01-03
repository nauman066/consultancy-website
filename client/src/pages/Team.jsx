// client/src/pages/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      title: "Managing Partner",
      image: "https://via.placeholder.com/300/1C2526/F8F1E9?text=John+Smith",
      bio: "With over 30 years of experience in corporate law, John leads our firm with a vision of excellence and integrity."
    },
    {
      name: "Emily Johnson",
      title: "Senior Counsel",
      image: "https://via.placeholder.com/300/1C2526/F8F1E9?text=Emily+Johnson",
      bio: "Emily specializes in litigation and dispute resolution, bringing a strategic approach to complex legal challenges."
    },
    {
      name: "Michael Brown",
      title: "Partner - Tax & Regulatory",
      image: "https://via.placeholder.com/300/1C2526/F8F1E9?text=Michael+Brown",
      bio: "Michael advises multinational corporations on tax structuring and compliance across multiple jurisdictions."
    },
    {
      name: "Sarah Davis",
      title: "Partner - Corporate & M&A",
      image: "https://via.placeholder.com/300/1C2526/F8F1E9?text=Sarah+Davis",
      bio: "Sarah has led numerous high-profile mergers and acquisitions, helping clients achieve their strategic objectives."
    },
    {
      name: "David Wilson",
      title: "Partner - Real Estate & Infrastructure",
      image: "https://via.placeholder.com/300/1C2526/F8F1E9?text=David+Wilson",
      bio: "David provides comprehensive legal services for real estate development and infrastructure projects."
    },
    {
      name: "Lisa Martinez",
      title: "Partner - Intellectual Property",
      image: "https://via.placeholder.com/300/1C2526/F8F1E9?text=Lisa+Martinez",
      bio: "Lisa protects our clients' intellectual property assets through strategic counseling and enforcement actions."
    }
  ];

  return (
    <div style={{
      background: '#0A0A0A',
      color: '#F8F1E9',
      minHeight: '100vh',
      fontFamily: 'Montserrat, sans-serif',
      overflowX: 'hidden'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* ✅ Logo Placeholder */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            style={{
              marginBottom: '25px'
            }}
          >
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 15px',
              background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1C2526',
              fontWeight: 'bold',
              fontSize: '2rem',
              boxShadow: '0 0 20px rgba(70,130,180,0.4)'
            }}>
              CF
            </div>
            <h4 style={{
              fontSize: '1rem',
              color: '#A8E6CF',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase'
            }}>
              CONSULTANCY FIRM
            </h4>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              color: '#4682B4',
              fontWeight: '700',
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Our Leadership Team
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.9
            }}
          >
            Our team comprises former regulators, policy advisors, investment bankers, and legal experts with proven track records in government negotiations, infrastructure development, and international tax structuring.
          </motion.p>
        </div>

        {/* Glossy Shine */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />
      </section>

      {/* Team Grid */}
      <section style={{
        padding: '60px 20px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '35px'
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: '#1C2526',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #4682B4',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}
              whileHover={{
                y: -8,
                borderColor: '#1E90FF',
                boxShadow: '0 15px 35px rgba(30,144,255,0.25)'
              }}
            >
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{
                padding: '25px',
                background: '#1C2526'
              }}>
                <h3 style={{
                  color: '#4682B4',
                  fontSize: '1.3rem',
                  margin: '0 0 8px 0',
                  fontWeight: '700'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#A8E6CF',
                  fontSize: '1.05rem',
                  margin: '0 0 15px 0',
                  fontWeight: '600'
                }}>
                  {member.title}
                </p>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#E6E6E6'
                }}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0A0A0A',
        color: 'white',
        padding: '40px 20px',
        borderTop: '1px solid #333',
        marginTop: '20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '25px',
            marginBottom: '30px'
          }}>
            <div>
              <h4 style={{ color: '#4682B4', marginBottom: '12px' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="/" style={{ color: '#F8F1E9', textDecoration: 'none', fontSize: '1rem' }}>Home</a>
                <a href="/about" style={{ color: '#F8F1E9', textDecoration: 'none', fontSize: '1rem' }}>About</a>
                <a href="/team" style={{ color: '#F8F1E9', textDecoration: 'none', fontSize: '1rem' }}>Team</a>
                <a href="/advisory" style={{ color: '#F8F1E9', textDecoration: 'none', fontSize: '1rem' }}>Advisory</a>
                <a href="/contact" style={{ color: '#F8F1E9', textDecoration: 'none', fontSize: '1rem' }}>Contact</a>
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
  );
}