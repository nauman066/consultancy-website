// client/src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function About() {
const [activeTab, setActiveTab] = useState(0);
const [isLoaded, setIsLoaded] = useState(false);
const [hoveredMilestone, setHoveredMilestone] = useState(null);
const [currentInsight, setCurrentInsight] = useState(0);
const insights = [
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
];
// Simulate preloader
useEffect(() => {
const timer = setTimeout(() => setIsLoaded(true), 1500);
return () => clearTimeout(timer);
}, []);
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
border: '3px solid #1E88E5', // Changed from #FF6B35 to blue
borderRadius: '50%',
position: 'relative',
boxShadow: '0 0 30px rgba(30, 136, 229, 0.5)' // Changed from orange to blue
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
color: '#1E88E5', // Changed from #FF6B35 to blue
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
height: '300px',
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
<motion.h1
initial={{ y: 30, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.3 }}
style={{
fontSize: '2.5rem',
fontWeight: 'bold',
background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 100%)',
WebkitBackgroundClip: 'text',
backgroundClip: 'text',
color: 'transparent',
fontFamily: 'Montserrat, sans-serif',
marginBottom: '1rem',
textShadow: '0 2px 4px rgba(0,0,0,0.2)',
letterSpacing: '1px'
}}
>
A Legacy of Strategic Excellence
</motion.h1>
<motion.p
initial={{ y: 30, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.5 }}
style={{
fontSize: '1.1rem',
maxWidth: '700px',
lineHeight: '1.6',
marginBottom: '2rem',
color: '#F8F1E9',
opacity: '0.9'
}}
>
For over 25 years, Consultancy Firm has been at the forefront of strategic advisory, delivering precision, integrity, and results for global enterprises.
</motion.p>
<motion.div
initial={{ y: 30, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.7 }}
style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
>
<motion.button
whileHover={{ scale: 1.05, boxShadow: "0 0 25px #1E88E5" }} // Changed from #FF6B35 to blue
whileTap={{ scale: 0.95 }}
style={{
background: '#1E88E5', // Changed from #FF6B35 to blue
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
onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
>
Our Story
</motion.button>
<motion.button
whileHover={{ scale: 1.05, boxShadow: "0 0 15px #A8E6CF" }}
whileTap={{ scale: 0.95 }}
style={{
background: 'transparent',
color: '#1E88E5', // Changed from #FF6B35 to blue
border: '2px solid #1E88E5', // Changed from #FF6B35 to blue
padding: '12px 25px',
borderRadius: '8px',
fontSize: '16px',
fontWeight: 'bold',
fontFamily: 'Montserrat, sans-serif',
cursor: 'pointer',
transition: 'all 0.3s ease'
}}
onClick={() => window.location.href = '/team'}
>
Meet Our Team
</motion.button>
</motion.div>
{/* Scroll Down Arrow */}
<motion.div
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
style={{
position: 'absolute',
bottom: '30px',
cursor: 'pointer',
color: '#1E88E5', // Changed from #FF6B35 to blue
fontSize: '24px'
}}
onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
>
▼
</motion.div>
</section>
{/* Our Story Section */}
<section id="story" style={{
padding: '60px 20px',
background: '#0A0A0A'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '25px'
}}>
{/* Timeline Column - Extended height for longer timeline */}
<motion.div
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.2 }}
style={{ textAlign: 'center' }}
>
<div style={{
position: 'relative',
height: '250px', // Increased from 200px to 250px for longer timeline
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',
alignItems: 'center'
}}>
{['1999', '2010', '2024'].map((year, i) => (
<div key={year} style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
<div style={{
width: '15px',
height: '15px',
borderRadius: '50%',
background: '#1E88E5', // Changed from #FF6B35 to blue
margin: '0 auto 10px'
}} />
<div style={{
color: '#A8E6CF',
fontSize: '1rem',
fontWeight: 'bold',
marginBottom: '5px'
}}>
{year}
</div>
<div style={{
color: '#F8F1E9',
fontSize: '0.9rem'
}}>
{year === '1999' ? 'Founded' : year === '2010' ? 'Global Expansion' : '25+ Years Excellence'}
</div>
</div>
))}
{/* Timeline line */}
<div style={{
position: 'absolute',
left: '50%',
top: '20px',
bottom: '20px',
width: '2px',
background: 'linear-gradient(to bottom, #1E88E5, #A8E6CF)', // Changed from orange to blue
transform: 'translateX(-50%)'
}} />
</div>
</motion.div>
{/* Story Column */}
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.3 }}
>
<p style={{
color: '#F8F1E9',
fontSize: '1rem',
lineHeight: '1.6',
marginBottom: '15px'
}}>
Founded in 1999, Consultancy Firm began with a simple yet powerful mission: to provide exceptional strategic counsel that empowers businesses and governments to navigate complex global landscapes with confidence.
</p>
<p style={{
color: '#F8F1E9',
fontSize: '1rem',
lineHeight: '1.6',
marginBottom: '15px'
}}>
What started as a small team of passionate advisors has grown into a global powerhouse of strategic expertise, serving clients across industries and jurisdictions with unwavering dedication to excellence.
</p>
<p style={{
color: '#F8F1E9',
fontSize: '1rem',
lineHeight: '1.6'
}}>
Our journey has been marked by a steadfast commitment to innovation, integrity, and client success — building lasting partnerships that drive measurable impact in an ever-changing world.
</p>
</motion.div>
{/* Stats Column */}
<motion.div
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.4 }}
>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
gap: '15px'
}}>
{[
{ number: "25+", desc: "Years of Excellence" },
{ number: "100+", desc: "Strategic Partners" },
{ number: "5000+", desc: "Projects Completed" },
{ number: "22", desc: "Practice Areas" }
].map((stat, i) => (
<motion.div
key={i}
style={{
background: 'rgba(30, 136, 229, 0.1)', // Changed from orange to blue
border: '1px solid #1E88E5', // Changed from #FF6B35 to blue
padding: '15px',
borderRadius: '8px',
textAlign: 'center'
}}
whileHover={{
scale: 1.05,
borderColor: '#E63946',
boxShadow: '0 0 15px rgba(230, 57, 70, 0.3)'
}}
>
<div style={{
fontSize: '1.8rem',
fontWeight: 'bold',
color: '#1E88E5', // Changed from #FF6B35 to blue
marginBottom: '10px'
}}>
{stat.number}
</div>
<div style={{
color: '#F8F1E9',
fontSize: '0.9rem',
fontWeight: '500'
}}>
{stat.desc}
</div>
</motion.div>
))}
</div>
</motion.div>
</div>
</div>
</section>
{/* Strategic Growth Circle */}
<section style={{
padding: '60px 20px',
background: '#0A0A0A',
position: 'relative',
overflow: 'hidden'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{
fontSize: '2rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
fontFamily: 'Montserrat, sans-serif',
marginBottom: '30px'
}}
>
Our Strategic Growth
</motion.h2>
<div style={{
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
position: 'relative',
height: '300px'
}}>
{/* Central Icon */}
<motion.div
initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
style={{
width: '100px',
height: '100px',
borderRadius: '50%',
background: 'linear-gradient(135deg, #1E88E5 0%, #A8E6CF 100%)', // Changed from orange to blue
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
position: 'relative',
zIndex: 20,
boxShadow: '0 0 20px rgba(30, 136, 229, 0.4)' // Changed from orange to blue
}}
>
<div style={{
fontSize: '2rem',
color: '#1C2526',
fontWeight: 'bold'
}}>
GS
</div>
</motion.div>
{/* Circular Timeline */}
<div style={{
position: 'absolute',
width: '300px',
height: '300px',
borderRadius: '50%',
border: '2px dashed rgba(168, 230, 207, 0.3)',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
zIndex: 10
}} />
{/* Milestones */}
{[
{ year: "1999", title: "Firm Founded", desc: "Vision to provide exceptional strategic advisory" },
{ year: "2005", title: "Global Expansion", desc: "Established offices in 3 continents" },
{ year: "2012", title: "Strategic Partnerships", desc: "Formed alliances with 12 global institutions" },
{ year: "2018", title: "Innovation Hub", desc: "Launched AI-driven advisory platform" },
{ year: "2024", title: "25+ Years Excellence", desc: "Serving clients across 45+ countries" }
].map((milestone, index) => {
const angle = (index / 5) * 360;
const radius = 120;
const x = radius * Math.cos((angle - 90) * Math.PI / 180);
const y = radius * Math.sin((angle - 90) * Math.PI / 180);
return (
<motion.div
key={index}
initial={{ opacity: 0, scale: 0.5 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
style={{
position: 'absolute',
top: `calc(50% + ${y}px)`,
left: `calc(50% + ${x}px)`,
transform: 'translate(-50%, -50%)',
width: '80px',
height: '80px',
borderRadius: '50%',
background: '#1C2526',
border: `2px solid ${hoveredMilestone === index ? '#E63946' : '#1E88E5'}`, // Changed from #FF6B35 to blue
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
cursor: 'pointer',
zIndex: 15,
boxShadow: hoveredMilestone === index ? '0 0 20px rgba(230, 57, 70, 0.5)' : '0 0 10px rgba(30, 136, 229, 0.3)' // Changed from orange to blue
}}
onMouseEnter={() => setHoveredMilestone(index)}
onMouseLeave={() => setHoveredMilestone(null)}
>
<div style={{ textAlign: 'center' }}>
<div style={{
fontSize: '1rem',
fontWeight: 'bold',
color: '#1E88E5', // Changed from #FF6B35 to blue
marginBottom: '5px'
}}>
{milestone.year}
</div>
</div>
</motion.div>
);
})}
{/* Milestone Details Panel */}
{hoveredMilestone !== null && (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
style={{
position: 'absolute',
bottom: '0',
width: '100%',
background: 'rgba(0, 0, 0, 0.7)',
borderRadius: '12px',
padding: '15px',
textAlign: 'center',
zIndex: 25
}}
>
<h3 style={{
color: '#1E88E5', // Changed from #FF6B35 to blue
fontSize: '1.2rem',
marginBottom: '10px'
}}>
{[
"Firm Founded",
"Global Expansion",
"Strategic Partnerships",
"Innovation Hub",
"25+ Years Excellence"
][hoveredMilestone]}
</h3>
<p style={{
color: '#FFFFFF',
fontSize: '1rem',
lineHeight: '1.6'
}}>
{[
"Vision to provide exceptional strategic advisory",
"Established offices in 3 continents",
"Formed alliances with 12 global institutions",
"Launched AI-driven advisory platform",
"Serving clients across 45+ countries"
][hoveredMilestone]}
</p>
</motion.div>
)}
</div>
</div>
</section>
{/* Strategic Impact Section */}
<section style={{
padding: '60px 20px',
background: '#0A0A0A'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{
fontSize: '2rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
fontFamily: 'Montserrat, sans-serif',
textAlign: 'center',
marginBottom: '30px'
}}
>
Strategic Impact
</motion.h2>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '25px'
}}>
{[
{
title: "5000+ Projects Completed",
desc: "Delivered strategic solutions across 45+ countries",
icon: "📊"
},
{
title: "95% Client Retention Rate",
desc: "Long-term partnerships built on trust and results",
icon: "📈"
},
{
title: "22 Practice Areas",
desc: "Comprehensive expertise across all strategic domains",
icon: "🌐"
}
].map((metric, i) => (
<motion.div
key={i}
style={{
background: '#1C2526',
color: 'white',
padding: '20px',
borderRadius: '12px',
textAlign: 'center',
border: '2px solid #1E88E5', // Changed from #FF6B35 to blue
cursor: 'pointer',
transition: 'all 0.3s ease'
}}
whileHover={{
y: -5,
borderColor: '#E63946',
boxShadow: '0 10px 20px rgba(230, 57, 70, 0.3)'
}}
>
<div style={{
fontSize: '2.5rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
marginBottom: '15px'
}}>
{metric.icon}
</div>
<div style={{
fontSize: '1.2rem',
fontWeight: 'bold',
color: '#1E88E5', // Changed from #FF6B35 to blue
marginBottom: '5px'
}}>
{metric.title}
</div>
<div style={{
fontSize: '1rem',
lineHeight: '1.6'
}}>
{metric.desc}
</div>
</motion.div>
))}
</div>
</div>
</section>
{/* Core Values Section */}
<section style={{
padding: '60px 20px',
background: '#0A0A0A'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{
fontSize: '2rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
fontFamily: 'Montserrat, sans-serif',
marginBottom: '30px'
}}
>
Our Core Values
</motion.h2>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
gap: '25px'
}}>
{[
{
title: "Strategic Insight",
desc: "Leveraging global intelligence for forward-thinking solutions"
},
{
title: "Client-Centric Approach",
desc: "Partnerships built on trust, transparency, and results"
},
{
title: "Innovation-Driven",
desc: "Integrating AI and data analytics for next-generation advisory"
},
{
title: "Integrity & Excellence",
desc: "Upholding the highest standards of professional ethics"
}
].map((value, i) => (
<motion.div
key={i}
style={{
background: '#1C2526',
color: '#F8F1E9',
padding: '20px',
borderRadius: '12px',
textAlign: 'center',
border: '2px solid #1E88E5', // Changed from #FF6B35 to blue
transition: 'all 0.3s ease'
}}
whileHover={{
y: -5,
borderColor: '#E63946',
boxShadow: '0 10px 20px rgba(230, 57, 70, 0.3)'
}}
>
<h3 style={{
color: '#1E88E5', // Changed from #FF6B35 to blue
fontSize: '1.2rem',
marginBottom: '10px'
}}>
{value.title}
</h3>
<p style={{
fontSize: '1rem',
lineHeight: '1.6'
}}>
{value.desc}
</p>
</motion.div>
))}
</div>
</div>
</section>
{/* Global Presence Section with Pure CSS Globe */}
<section style={{
padding: '60px 20px',
background: '#0A0A0A'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{
fontSize: '2rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
fontFamily: 'Montserrat, sans-serif',
textAlign: 'center',
marginBottom: '30px'
}}
>
Global Strategic Presence
</motion.h2>
<div style={{
display: 'grid',
gridTemplateColumns: '1fr 1fr',
gap: '25px'
}}>
{/* Pure CSS 3D Globe */}
<div style={{
height: '300px',
position: 'relative',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
{/* Globe Base */}
<div style={{
position: 'relative',
width: '250px',
height: '250px',
borderRadius: '50%',
background: 'linear-gradient(135deg, #1C2526 0%, #0A0A0A 100%)',
border: '2px solid #1E88E5', // Changed from #FF6B35 to blue
boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
overflow: 'hidden'
}}>
{/* Globe Lines */}
<div style={{
position: 'absolute',
width: '100%',
height: '100%',
borderRadius: '50%',
border: '1px solid #1E88E5', // Changed from #FF6B35 to blue
top: '0',
left: '0',
boxSizing: 'border-box'
}} />
{/* Latitude Lines */}
{Array.from({ length: 6 }).map((_, i) => (
<div key={i} style={{
position: 'absolute',
width: '100%',
height: '1px',
background: 'rgba(30, 136, 229, 0.3)', // Changed from orange to blue
top: `${15 + i * 35}%`,
left: '0'
}} />
))}
{/* Longitude Lines */}
{Array.from({ length: 12 }).map((_, i) => (
<div key={i} style={{
position: 'absolute',
width: '1px',
height: '100%',
background: 'rgba(30, 136, 229, 0.3)', // Changed from orange to blue
left: `${15 + i * 15}%`,
top: '0'
}} />
))}
{/* Globe Highlight */}
<div style={{
position: 'absolute',
width: '70%',
height: '70%',
borderRadius: '50%',
background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
top: '15%',
left: '15%'
}} />
{/* Rotation Effect */}
<div style={{
position: 'absolute',
width: '100%',
height: '100%',
borderRadius: '50%',
border: '1px solid #1E88E5', // Changed from #FF6B35 to blue
animation: 'globe-rotate 20s linear infinite',
boxSizing: 'border-box',
zIndex: 1
}} />
</div>
{/* Animation Keyframes */}
<style>
{`
@keyframes globe-rotate {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`}
</style>
</div>
{/* Office Information */}
<div style={{
background: '#1C2526',
color: '#F8F1E9',
padding: '20px',
borderRadius: '12px',
border: '2px solid #1E88E5' // Changed from #FF6B35 to blue
}}>
<h3 style={{
color: '#1E88E5', // Changed from #FF6B35 to blue
fontSize: '1.5rem',
marginBottom: '15px'
}}>
Global Offices
</h3>
<div style={{
fontSize: '1rem',
lineHeight: '1.6',
marginBottom: '20px'
}}>
<div style={{ marginBottom: '15px' }}>📍 New Delhi, India</div>
<div style={{ marginBottom: '15px' }}>📍 London, United Kingdom</div>
<div style={{ marginBottom: '15px' }}>📍 Singapore</div>
<div style={{ marginBottom: '15px' }}>📍 New York, USA</div>
</div>
<div style={{
fontSize: '1rem',
lineHeight: '1.6'
}}>
Our global presence enables us to provide seamless strategic advisory services across time zones, cultures, and regulatory environments.
</div>
</div>
</div>
</div>
</section>
{/* Leadership Insights */}
<section style={{
padding: '60px 20px',
background: '#0A0A0A'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{
fontSize: '2rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
fontFamily: 'Montserrat, sans-serif',
marginBottom: '30px'
}}
>
Leadership Insights
</motion.h2>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '25px'
}}>
{insights.map((insight, i) => (
<motion.div
key={i}
style={{
background: '#1C2526',
color: '#F8F1E9',
padding: '20px',
borderRadius: '12px',
textAlign: 'center',
border: '2px solid #1E88E5', // Changed from #FF6B35 to blue
cursor: 'pointer',
transition: 'all 0.3s ease'
}}
whileHover={{
y: -5,
borderColor: '#E63946',
boxShadow: '0 10px 20px rgba(230, 57, 70, 0.3)'
}}
>
<div style={{
fontSize: '2.5rem',
color: '#1E88E5', // Changed from #FF6B35 to blue
marginBottom: '15px'
}}>
{i === 0 ? '📈' : i === 1 ? '🤖' : '🌱'}
</div>
<h3 style={{
color: '#1E88E5', // Changed from #FF6B35 to blue
fontSize: '1.3rem',
marginBottom: '10px'
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
backgroundColor: '#E63946',
boxShadow: '0 0 15px rgba(230, 57, 70, 0.5)'
}}
style={{
background: '#1E88E5', // Changed from #FF6B35 to blue
color: '#1C2526',
border: 'none',
padding: '8px 20px',
borderRadius: '8px',
fontSize: '1rem',
fontWeight: 'bold',
cursor: 'pointer',
marginTop: '15px',
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
{/* Footer */}
<footer style={{
background: '#0A0A0A',
color: 'white',
padding: '40px 20px 20px',
marginTop: '30px',
border: '1px solid #333'
}}>
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
<h3 style={{
color: '#1E88E5', // Changed from #FF6B35 to blue
fontSize: '1.8rem',
fontFamily: 'Montserrat, sans-serif',
marginBottom: '20px',
textAlign: 'center'
}}>
Consultancy Firm
</h3>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
gap: '25px',
marginBottom: '30px'
}}>
<div>
<h4 style={{ color: '#1E88E5', marginBottom: '10px' }}>Quick Links</h4> // Changed from #FF6B35 to blue
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
<a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
<a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
<a href="/team" style={{ color: 'white', textDecoration: 'none' }}>Team</a>
<a href="/advisory" style={{ color: 'white', textDecoration: 'none' }}>Advisory</a>
<a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
</div>
</div>
<div>
<h4 style={{ color: '#1E88E5', marginBottom: '10px' }}>Contact</h4> // Changed from #FF6B35 to blue
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
<div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #1E88E5', color: '#A8E6CF' }}> // Changed from #FF6B35 to blue
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
font-family: 'Montserrat', sans-serif !important;
}
`}</style>
</div>
)}
</AnimatePresence>
</>
);
}