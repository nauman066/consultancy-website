// client/src/pages/Advisory.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Advisory() {
  const [selectedAdvisory, setSelectedAdvisory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // === Advisory Services (1–10) — with images ===
  const advisoryList = [
    {
      id: 1,
      title: "Policy Advisory Services to Government",
      image: "/advisory-images/Policy Advisory Services to Government.jpeg",
      content: `I. Policy Formulation & Development Advisory
- Advisory on formulation of new policies across sectors
- Policy visioning and long-term strategic frameworks
- Drafting of policy documents, white papers, and concept notes
- Alignment of policies with national priorities and development goals
- Inter-sectoral and cross-ministry policy coordination

II. Policy Review, Reform & Rationalization
- Review of existing policies and regulatory frameworks
- Identification of policy gaps, overlaps, and implementation challenges
- Policy reform and simplification advisory
- Regulatory impact assessment (RIA) and cost-benefit analysis
- Recommendations for ease of doing business and governance reforms

III. Sector-Specific Policy Advisory
- Infrastructure, urban and rural development policies
- Industrial, manufacturing, and investment policies
- Banking, finance, and capital market policies
- Agriculture, food security, and irrigation policies
- Energy, renewables, and climate policies
- Defence, railways, and transport policies
- Healthcare, education, and social sector policies
- Digital, IT, and e-governance policies

IV. Fiscal, Economic & Financial Policy Advisory
- Public finance and budgetary policy advisory
- Subsidy rationalization and fiscal sustainability advisory
- Financial sector policy reforms and market development
- PPP and private investment policy frameworks
- Asset monetization and infrastructure financing policy advisory

V. Federal, Inter-Governmental & Cooperative Federalism Advisory
- Centre–State policy alignment advisory
- Inter-state coordination and cooperative federalism frameworks
- Policy advisory for federal fiscal and administrative matters
- Advisory on devolution, grants, and shared responsibilities

VI. Legal, Regulatory & Institutional Policy Advisory
- Policy alignment with constitutional and legal frameworks
- Institutional capacity assessment and reform advisory
- Governance structure and institutional mechanism design
- Regulatory framework development and reform advisory

VII. Evidence-Based & Data-Driven Policy Advisory
- Policy research and data analysis
- Use of economic modeling and scenario analysis
- Impact evaluation and outcome assessment
- International benchmarking and best-practice studies

VIII. Policy Implementation & Monitoring Advisory
- Translation of policy into programs and schemes
- Implementation roadmaps and action plans
- Monitoring & Evaluation (M&E) framework design
- Mid-course correction and policy recalibration advisory

IX. Stakeholder Consultation & Consensus Building
- Design and facilitation of stakeholder consultations
- Industry, civil society, and expert engagement
- Public consultation and feedback analysis
- Consensus-building and communication strategy advisory

X. Crisis, Reform & Special Assignment Advisory
- Advisory during policy reforms and transitions
- Crisis-response policy advisory
- Rapid policy assessment and decision support
- Confidential advisory for sensitive policy matters`,
      clients: 245,
      projects: 567
    },
    {
      id: 2,
      title: "Government Negotiation & Policy Advocacy",
      image: "/advisory-images/Government Negotiation & Policy Advocacy.jpeg",
      content: `I. Policy Advocacy & Government Relations Advisory
- Advisory on Central and State Government industrial, sectoral, and investment policies
- Interpretation and impact assessment of existing and proposed policies
- Representation support and structured engagement with government authorities
- Advisory on policy reform suggestions and industry feedback mechanisms

II. Government Negotiation & Facilitation
- Strategic advisory for negotiations with Central and State Governments
- Preparation of negotiation strategy, briefing notes, and position papers
- Facilitation of meetings with ministries, departments, and state authorities
- Support in discussions related to incentives, approvals, and policy concessions

III. Industry-Specific Policy & Incentive Advisory
- Advisory on state-specific industrial policies and sector incentives
- Identification of eligible subsidies, incentives, and benefits
- Structuring investment proposals aligned with government priorities
- Advisory on production-linked incentives (PLI), export incentives, and sector schemes
- Support for negotiations on land, infrastructure, utilities, and fiscal benefits

IV. Hassle-Free Business Setup & Entry Advisory
- Location & State Selection Advisory
- Entity Setup & Regulatory Approvals
- Investment Promotion & Government Liaison
- Land, Infrastructure & Utility Negotiation Advisory
- Compliance, Risk & Policy Alignment Advisory
- Expansion, Relocation & Pan-India Growth Advisory
- Advisory for HNIs & Family Offices`,
      clients: 189,
      projects: 423
    },
    {
      id: 3,
      title: "Infrastructure & Project Advisory (PMC & DPR)",
      image: "/advisory-images/Infrastructure & Project Advisory (PMC & DPR).jpeg",
      content: `I. Project Management Consultancy (PMC) Services
- End-to-end PMC services for Central and State Government projects
- Project planning, scheduling, and milestone management
- Cost estimation, budgeting, and financial control
- Procurement and contract management support
- Quality assurance, monitoring, and reporting
- Risk management and mitigation planning
- Coordination with government departments, contractors, and stakeholders
- Project monitoring, evaluation, and closure support

II. Detailed Project Report (DPR) Preparation & Feasibility Studies
- Preparation of Detailed Project Reports (DPRs) for government projects
- Techno-economic feasibility studies
- Financial modeling and viability analysis
- Environmental and social impact assessment support
- Cost-benefit analysis and funding structure advisory
- Assistance with approvals from relevant ministries and authorities

III. Government Advisory & Consultancy Services
- Policy, Program & Scheme Advisory
- Procurement, Tender & Contract Advisory

IV. Public-Private Partnership (PPP) Advisory
- PPP Project Structuring & Advisory
- Transaction & Implementation Advisory

V. Government Liaison & Regulatory Advisory
- Liaison with Central and State Government departments
- Advisory on statutory approvals, clearances, and licenses

VI. Business Setup Advisory Across All States in India
- Business Structuring & Entry Advisory
- Pan-India Registration & Compliance Support
- Location & Expansion Advisory

VII. Government Scheme & Incentive Advisory
- Advisory on Central and State Government schemes and subsidies
- Assistance with applications, documentation, and approvals

VIII. Integrated End-to-End Consultancy Support
- Concept-to-commissioning advisory for government projects
- Single-point coordination for multi-disciplinary consulting services`,
      clients: 312,
      projects: 789
    },
    {
      id: 4,
      title: "G2G Treaties, MoUs & Inter-Governmental Advisory",
      image: "/advisory-images/G2G Treaties, MoUs & Inter-Governmental Advisory.jpeg",
      content: `I. G2G Strategy & Diplomatic Advisory
- Strategic advisory for Government-to-Government engagements
- Identification and prioritization of bilateral and multilateral cooperation areas
- Alignment of treaties and MoUs with national, state, and sectoral priorities
- Stakeholder mapping and engagement strategy

II. Treaty & MoU Structuring Advisory
- Centre–State & Inter-State Agreements
- International Treaties & Bilateral / Multilateral MoUs

III. Negotiation Support & Facilitation
- Negotiation strategy development and mandate preparation
- Technical, financial, and legal input support during negotiations
- Scenario analysis, risk assessment, and fallback positioning

IV. Drafting, Review & Documentation Support
- Drafting of treaties, MoUs, and inter-governmental agreements
- Review and harmonization of draft texts across stakeholders

V. Regulatory, Legal & Policy Alignment Advisory
- Advisory on alignment with Indian laws, constitutional provisions, and rules
- Compatibility assessment with international law and obligations

VI. Sector-Specific G2G Advisory
- Infrastructure, urban development, and smart cities
- Defence cooperation and strategic infrastructure
- Banking, finance, and financial cooperation
- Energy, renewables, and climate cooperation

VII. Post-Signing Implementation & Monitoring Advisory
- Translation of treaties and MoUs into actionable programs
- Institutional and governance framework setup
- Monitoring, reporting, and performance review mechanisms

VIII. Multilateral & Development Partner Engagement
- Advisory on engagement with multilateral institutions (World Bank, ADB, AIIB, etc.)
- Development finance and technical assistance agreement advisory

IX. Confidentiality, Sensitivity & Protocol Advisory
- Advisory on diplomatic protocol and confidentiality requirements
- Sensitive negotiation handling and information management`,
      clients: 156,
      projects: 342
    },
    {
      id: 5,
      title: "Banking, NBFC & Financial Services Advisory",
      image: "/advisory-images/Banking, NBFC & Financial Services Advisory.jpeg",
      content: `I. Advisory Services for the Cooperative Banking Sector
- Revival & Turnaround Advisory
- Mergers, Amalgamations & Takeover Advisory
- Capital Raising & Private Placement Advisory
- Governance & Regulatory Compliance Advisory
- Credit, Risk & Asset Quality Advisory
- Financial Management & Profitability Advisory
- Technology & Digital Transformation Advisory
- Human Resources & Change Management

II. Consultancy Services for Tender-Related Guidance & Advisory
- Tender Identification & Qualification
- Tender Strategy & Bid Advisory
- Documentation & Submission Support
- Evaluation & Post-Award Advisory

III. Wealth Management Advisory Services
- Wealth Structuring & Planning
- Investment & Portfolio Advisory
- Institutional, HNI & Family Office Advisory

IV. Taxation Advisory Services
- Domestic Tax Advisory
- Indirect Tax Advisory

V. Global & International Tax Advisory
- Cross-Border Tax Structuring
- Transfer Pricing Advisory
- Global Mobility & Expatriate Tax
- BEPS & Global Compliance`,
      clients: 224,
      projects: 518
    },
    {
      id: 6,
      title: "Registration, Licensing & Regulatory Advisory",
      image: "/advisory-images/Registration, Licensing & Regulatory Advisory.jpeg",
      content: `I. Banking & Cooperative Banking Advisory
- Banking License & Regulatory Advisory
- Cooperative Bank Registration & Advisory

II. Non-Banking Financial Company (NBFC) Advisory
- NBFC Registration & Licensing
- NBFC Compliance & Strategic Advisory

III. Housing Finance Company (HFC) Advisory
- HFC Registration & Licensing (RBI)
- HFC Compliance & Operational Advisory

IV. Microfinance & NBFC-MFI Advisory
- Microfinance Institution Registration
- Regulatory Compliance & Growth Advisory

V. Nidhi Company Registration & Advisory
- Advisory on formation and registration of Nidhi companies
- Compliance with Nidhi Rules, deposit norms, and member requirements

VI. Alternative Investment Fund (AIF) Advisory (SEBI)
- AIF Registration Advisory
- AIF Compliance & Operations

VII. Non-Convertible Debentures (NCDs) & Debt Advisory
- NCD Structuring & Issuance Advisory
- Post-Issuance Compliance

VIII. End-to-End Regulatory & Compliance Support
- Liaison with RBI, SEBI, MCA, NABARD, NHB (where applicable), and Stock Exchanges
- Preparation of regulatory policies, manuals, and filings`,
      clients: 456,
      projects: 1024
    },
    {
      id: 7,
      title: "Tax & International Tax Advisory",
      image: "/advisory-images/Tax & International Tax Advisory.jpeg",
      content: `I. Domestic Tax Advisory
- Direct tax advisory for individuals, corporates, banks, and financial institutions
- Tax planning and compliance support
- Capital gains, investment, and transaction tax advisory
- Tax audit and assessment support
- Representation before tax authorities

II. Indirect Tax Advisory
- GST advisory and compliance
- GST implications for banking and wealth management services
- Input tax credit optimization
- Litigation and dispute resolution support

III. Global & International Tax Advisory
- Cross-Border Tax Structuring
- International tax planning and structuring
- Advisory on cross-border investments and remittances
- DTAA interpretation and application
- Withholding tax advisory

IV. Transfer Pricing Advisory
- Transfer pricing policy design and documentation
- Benchmarking and compliance support
- Advisory on inter-company and cross-border transactions
- Audit and litigation support

V. Global Mobility & Expatriate Tax
- Expatriate and global employee tax advisory
- Payroll and social security advisory
- Tax equalization and protection policies

VI. BEPS & Global Compliance
- BEPS impact assessment and advisory
- Country-by-Country Reporting (CbCR)
- FATCA / CRS compliance advisory
- Global disclosure and reporting support`,
      clients: 321,
      projects: 876
    },
    {
      id: 8,
      title: "Wealth Management & Family Office Advisory",
      image: "/advisory-images/Wealth Management & Family Office Advisory.jpeg",
      content: `I. Wealth Management Advisory Services
- Comprehensive wealth assessment and goal-based planning
- Asset allocation and portfolio structuring advisory
- Risk profiling and investment suitability assessment
- Succession and inheritance planning

II. Investment & Portfolio Advisory
- Advisory on mutual funds, bonds, PMS, AIFs, and alternatives
- Capital markets and structured product advisory
- ESG and sustainable investment advisory
- Portfolio review and rebalancing

III. Institutional, HNI & Family Office Advisory
- Wealth advisory for HNIs, UHNWIs, trusts, and institutions
- Family office structuring and advisory
- Endowment, corpus, and retirement planning

IV. Advisory Services for High Net Worth Individuals (HNIs) & Family Offices
- Comprehensive Wealth Advisory
- Investment & Capital Markets Advisory
- Succession, Estate & Legacy Planning

V. Family Office Setup & Management Advisory
- Family Office Structuring
- Ongoing Family Office Advisory

VI. Overseas Office & Company Setup Advisory
- Jurisdiction Selection & Structuring
- Overseas Company Incorporation & Office Setup

VII. Overseas Bank Account Opening Advisory
- Banking & Financial Infrastructure Advisory
- Account Opening Procedure & Compliance

VIII. Cross-Border Tax & Regulatory Advisory
- International Tax Advisory
- Global Regulatory & Compliance Advisory

IX. Global Mobility & Residency Advisory
- Advisory on global mobility and residency planning
- Business and investor visa advisory

X. Risk Management & Confidentiality Advisory
- Asset protection and risk mitigation structuring
- Confidentiality and privacy advisory`,
      clients: 128,
      projects: 345
    },
    {
      id: 9,
      title: "Investment Promotion & Incentive Advisory",
      image: "/advisory-images/Investment Promotion & Incentive Advisory.jpeg",
      content: `I. Investment Promotion & Government Liaison
- Advisory on engaging with State Investment Promotion Boards
- Assistance with Memorandums of Understanding (MoUs) with State Governments
- Support for investment proposals, project notes, and presentations
- Ongoing liaison with state and central authorities during project setup

II. Industry-Specific Policy & Incentive Advisory
- Advisory on state-specific industrial policies and sector incentives
- Identification of eligible subsidies, incentives, and benefits
- Structuring investment proposals aligned with government priorities
- Advisory on production-linked incentives (PLI), export incentives, and sector schemes

III. Land, Infrastructure & Utility Negotiation Advisory
- Advisory and facilitation for land acquisition or allotment
- Negotiation support for industrial land, power, water, and logistics
- Infrastructure development and connectivity advisory
- Support for special dispensation and fast-track approvals

IV. Compliance, Risk & Policy Alignment Advisory
- Regulatory mapping and compliance readiness assessment
- Advisory on environmental, labor, and local compliance requirements
- Risk assessment related to policy changes and regulatory exposure
- Dispute prevention and resolution strategy advisory

V. Expansion, Relocation & Pan-India Growth Advisory
- Advisory for business expansion across multiple states
- Relocation advisory for domestic and global businesses
- Support for branch, plant, and office setup across India
- Advisory on restructuring operations for policy and tax efficiency`,
      clients: 278,
      projects: 654
    },
    {
      id: 10,
      title: "Expansion, Relocation & Market Entry Advisory",
      image: "/advisory-images/Expansion, Relocation & Market Entry Advisory.jpeg",
      content: `I. Business Setup Advisory Across All States in India
- Business Structuring & Entry Advisory
- Pan-India Registration & Compliance Support
- Location & Expansion Advisory

II. Government Scheme & Incentive Advisory
- Advisory on Central and State Government schemes and subsidies
- Assistance with applications, documentation, and approvals
- Incentive structuring and compliance advisory

III. Policy Advocacy & Government Relations Advisory
- Advisory on Central and State Government industrial, sectoral, and investment policies
- Interpretation and impact assessment of existing and proposed policies
- Representation support and structured engagement with government authorities

IV. Government Negotiation & Facilitation
- Strategic advisory for negotiations with Central and State Governments
- Preparation of negotiation strategy, briefing notes, and position papers
- Facilitation of meetings with ministries, departments, and state authorities

V. Industry-Specific Policy & Incentive Advisory
- Advisory on state-specific industrial policies and sector incentives
- Identification of eligible subsidies, incentives, and benefits
- Structuring investment proposals aligned with government priorities

VI. Hassle-Free Business Setup & Entry Advisory
- Location & State Selection Advisory
- Entity Setup & Regulatory Approvals
- Investment Promotion & Government Liaison`,
      clients: 345,
      projects: 821
    }
  ];

  // ✅ Company Registration — 7 clean, image-less cards (as per your spec)
  const companyRegistrationList = [
    {
      id: 11,
      title: "✅ 1. Company Structure & Advisory",
      content: `Advice on the best legal structure (e.g., Ltd/Private Limited, LLC, Corporation, LLP).  
Guidance on tax-efficient setup and regulatory requirements.  
Consulting on cross-border and NRI/foreign ownership issues.`,
      links: [{ url: "https://sterlinxglobal.com", label: "sterlinxglobal.com" }]
    },
    {
      id: 12,
      title: "✅ 2. Name Reservation & Document Preparation",
      content: `Company name availability check & reservation.  
Preparation of incorporation documents (Articles/Memorandum/Operating Agreements).  
Filing of all forms required by the relevant government authority.`,
      links: [{ url: "https://growdigitally.in", label: "growdigitally.in" }]
    },
    {
      id: 13,
      title: "✅ 3. Government Filing & Registration",
      content: `Submission of incorporation paperwork to the relevant authority:  
• UK – Companies House registration  
• USA – State-level LLC/Corporation filings  
• Canada – Federal or provincial incorporation  
• India – MCA SPICe+ filings and ROC registration`,
      links: [
        { url: "https://ykgglobal.com", label: "ykgglobal.com" },
        { url: "https://growdigitally.in", label: "growdigitally.in" }
      ]
    },
    {
      id: 14,
      title: "🇬🇧 UK / 🇺🇸 USA / 🇨🇦 Canada / 🇮🇳 India-Specific Services",
      content: `**🇬🇧 UK**: Ltd/LLP registration, VAT/PAYE setup, registered office, compliance  
**🇺🇸 USA**: LLC/Corp formation, EIN, registered agent, annual filings  
**🇨🇦 Canada**: Incorporation, NUANS, BN/GST, compliance  
**🇮🇳 India**: Pvt Ltd/OPC/LLP, DSC, PAN/TAN, GST, MCA compliance`,
      links: [
        { url: "https://growdigitally.in", label: "growdigitally.in" },
        { url: "https://ykgglobal.com", label: "ykgglobal.com" },
        { url: "https://wikipedia.org", label: "Wikipedia" }
      ]
    },
    {
      id: 15,
      title: "📦 Post-Incorporation & Ongoing Support",
      content: `**🧾 4. Compliance & Secretarial**: Annual returns, board minutes, statutory registers  
**💼 5. Tax & Accounting**: Filings, bookkeeping  
**💳 6. Banking Setup**: Business bank accounts, merchant services  
**🏢 7. Virtual Office**: Local address, mail handling  
**📑 8. Foreign/NRI Support**: Remote incorporation, FEMA compliance`,
      links: [
        { url: "https://companyincorp.uk", label: "companyincorp.uk" },
        { url: "https://bookmyllc.in", label: "bookmyllc.in" },
        { url: "https://growdigitally.in", label: "growdigitally.in" }
      ]
    },
    {
      id: 16,
      title: "📌 Optional Value-Added Services",
      content: `• Trademark & IP registration  
• CFO/Accounting outsourcing  
• Legal drafting (contracts, SHA)  
• Expansion support (subsidiaries, branches)  
• Industry-specific business licensing`,
      links: []
    },
    {
      id: 17,
      title: "📌 Core Registration Process (India, UK, USA, Canada)",
      content: `End-to-end advisory for company setup across all 4 jurisdictions:  
1. Structure advisory → 2. Name reservation → 3. Docs & filing → 4. Post-incorporation support  
Remote support for NRIs & foreign promoters. No travel required.`,
      links: []
    }
  ];

  // Simulate preloader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter advisory services only (1–10)
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredServices(advisoryList);
    } else {
      setFilteredServices(
        advisoryList.filter(service =>
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  useEffect(() => {
    setFilteredServices(advisoryList);
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
            {/* Header Section — height increased to 500px */}
            <section style={{
              height: '500px',
              background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                pointerEvents: 'none'
              }} />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  marginBottom: '15px'
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  border: '1px solid #1E90FF'
                }}>
                  OUR EXPERTISE
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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
                Advisory Services
              </motion.h1>

              {/* ✅ GLOWING NAV BUTTONS — added as requested */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginTop: '1rem',
                  justifyContent: 'center'
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(70, 130, 180, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    document.getElementById('advisory-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                    color: '#1C2526',
                    fontWeight: 'bold',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '1.05rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(70, 130, 180, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  📋 Advisory Services
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(70, 130, 180, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    document.getElementById('company-registration-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                    color: '#1C2526',
                    fontWeight: 'bold',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '1.05rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(70, 130, 180, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  🏢 Company Registration
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontSize: '1.2rem',
                  maxWidth: '700px',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  color: '#F8F1E9',
                  opacity: '0.9'
                }}
              >
                Comprehensive strategic advisory across 11 specialized practice areas, delivering excellence and results for every client.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  width: '80%',
                  maxWidth: '800px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                  borderRadius: '50px',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(10, 10, 10, 0.6)',
                  borderRadius: '50px',
                  padding: '15px',
                  border: '1px solid #333',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    color: '#4682B4',
                    fontSize: '1.2rem',
                    marginLeft: '15px',
                    marginRight: '15px'
                  }}>
                    🔍
                  </div>
                  <input
                    type="text"
                    placeholder="Search advisory services, sectors, or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '50px',
                      border: 'none',
                      background: 'transparent',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </motion.div>
            </section>

            {/* Advisory Services Section — ID added for scroll */}
            <section id="advisory-section" style={{
              padding: '80px 20px',
              background: '#0A0A0A',
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
                    color: '#4682B4',
                    fontFamily: 'Montserrat, sans-serif',
                    textAlign: 'center',
                    marginBottom: '50px'
                  }}
                >
                  Our Advisory Services
                </motion.h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px'
                }}>
                  {filteredServices.map(service => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      style={{
                        background: '#1C2526',
                        color: '#F8F1E9',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: '2px solid #4682B4',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        height: '450px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                      }}
                      whileHover={{
                        y: -10,
                        borderColor: '#1E90FF',
                        boxShadow: '0 15px 30px rgba(30, 144, 255, 0.3)'
                      }}
                      onClick={() => setSelectedAdvisory(service)}
                    >
                      <div style={{ height: '250px', overflow: 'hidden' }}>
                        <img
                          src={service.image}
                          alt={service.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://via.placeholder.com/350x250/1C2526/F8F1E9?text=${encodeURIComponent(service.title)}`;
                          }}
                        />
                      </div>
                      <div style={{
                        padding: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '200px'
                      }}>
                        <h3 style={{
                          margin: 0,
                          color: '#4682B4',
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          textAlign: 'center',
                          lineHeight: '1.4',
                          marginBottom: '15px'
                        }}>
                          {service.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '15px',
                          width: '100%',
                          justifyContent: 'center',
                          marginBottom: '10px'
                        }}>
                          <div style={{
                            background: 'rgba(70, 130, 180, 0.2)',
                            padding: '5px 10px',
                            borderRadius: '8px'
                          }}>
                            <span style={{ color: '#4682B4' }}>{service.clients}</span> Clients
                          </div>
                          <div style={{
                            background: 'rgba(70, 130, 180, 0.2)',
                            padding: '5px 10px',
                            borderRadius: '8px'
                          }}>
                            <span style={{ color: '#4682B4' }}>{service.projects}</span> Projects
                          </div>
                        </div>
                        {/* ✅ View Details button REMOVED */}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Company Registration Section — ID added for scroll */}
            <section id="company-registration-section" style={{
              padding: '80px 20px',
              background: '#0A0A0A',
              position: 'relative',
              marginTop: '50px'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontSize: '2.5rem',
                    color: '#4682B4',
                    fontFamily: 'Montserrat, sans-serif',
                    textAlign: 'center',
                    marginBottom: '50px'
                  }}
                >
                  Company Registration Services
                </motion.h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px'
                }}>
                  {companyRegistrationList.map(service => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      style={{
                        background: '#1C2526',
                        color: '#F8F1E9',
                        borderRadius: '12px',
                        padding: '25px',
                        border: '2px solid #4682B4',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        height: 'auto',
                        minHeight: '280px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        cursor: 'pointer'
                      }}
                      whileHover={{
                        y: -8,
                        borderColor: '#1E90FF',
                        boxShadow: '0 15px 30px rgba(30, 144, 255, 0.3)'
                      }}
                      onClick={() => setSelectedAdvisory(service)}
                    >
                      <h3 style={{
                        margin: 0,
                        color: '#4682B4',
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        lineHeight: '1.4',
                        marginBottom: '20px',
                        textAlign: 'left'
                      }}>
                        {service.title}
                      </h3>

                      <div style={{
                        fontSize: '1.05rem',
                        lineHeight: '1.7',
                        color: '#E6E6E6',
                        fontFamily: 'Georgia, serif',
                        whiteSpace: 'pre-wrap'
                      }}>
                        {service.content}
                      </div>

                      {service.links && service.links.length > 0 && (
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '10px',
                          marginTop: '20px'
                        }}>
                          {service.links.map((link, idx) => (
                            <motion.a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.98 }}
                              style={{
                                background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                                color: '#1C2526',
                                fontWeight: '600',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 2px 8px rgba(70,130,180,0.4)'
                              }}
                            >
                              {link.label}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer style={{
              background: '#0A0A0A',
              color: 'white',
              padding: '60px 20px 30px',
              marginTop: '50px',
              border: '1px solid #333'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h3 style={{
                  color: '#4682B4',
                  fontSize: '2rem',
                  fontFamily: 'Montserrat, sans-serif',
                  textAlign: 'center',
                  marginBottom: '30px'
                }}>
                  Consultancy Firm
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  marginBottom: '40px'
                }}>
                  <div>
                    <h4 style={{ color: '#4682B4', marginBottom: '15px' }}>Quick Links</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.05rem' }}>Home</a>
                      <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.05rem' }}>About</a>
                      <a href="/team" style={{ color: 'white', textDecoration: 'none', fontSize: '1.05rem' }}>Team</a>
                      <a href="/advisory" style={{ color: 'white', textDecoration: 'none', fontSize: '1.05rem' }}>Advisory</a>
                      <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.05rem' }}>Contact</a>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: '#4682B4', marginBottom: '15px' }}>Contact</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span>📞</span>
                      <span style={{ fontSize: '1.05rem' }}>+91 98765 43210</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span>✉️</span>
                      <span style={{ fontSize: '1.05rem' }}>info@consultancyfirm.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span>📍</span>
                      <span style={{ fontSize: '1.05rem' }}>New Delhi, India</span>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #4682B4', color: '#A8E6CF', fontSize: '1.05rem' }}>
                  © 2026 Consultancy Firm. All rights reserved.
                </div>
              </div>
            </footer>

            {/* Modal */}
            <AnimatePresence>
              {selectedAdvisory && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(10, 26, 47, 0.95)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2000
                  }}
                  onClick={() => setSelectedAdvisory(null)}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    style={{
                      background: '#1C2526',
                      color: '#F8F1E9',
                      width: '90%',
                      maxWidth: '1000px',
                      maxHeight: '85vh',
                      borderRadius: '16px',
                      padding: '35px',
                      border: '2px solid #4682B4',
                      overflowY: 'auto',
                      position: 'relative',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedAdvisory(null)}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'transparent',
                        border: 'none',
                        color: '#4682B4',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        zIndex: 100
                      }}
                    >
                      ✕
                    </button>
                    <h2 style={{
                      color: '#4682B4',
                      marginBottom: '25px',
                      fontSize: '2.2rem',
                      textAlign: 'center',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '700'
                    }}>
                      {selectedAdvisory.title}
                    </h2>

                    <div style={{ display: 'flex', gap: '35px', marginBottom: '25px' }}>
                      {/* Image only if exists (i.e., for advisory cards 1–10) */}
                      {selectedAdvisory.image && (
                        <div style={{ flex: '0 0 300px' }}>
                          <img
                            src={selectedAdvisory.image}
                            alt={selectedAdvisory.title}
                            style={{
                              width: '100%',
                              height: '350px',
                              borderRadius: '10px',
                              objectFit: 'cover',
                              border: '1px solid #4682B4'
                            }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://via.placeholder.com/300x350/1C2526/F8F1E9?text=${encodeURIComponent(selectedAdvisory.title)}`;
                            }}
                          />
                        </div>
                      )}

                      <div style={{
                        lineHeight: '1.8',
                        fontSize: '1.15rem',
                        flex: 1,
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'Georgia, serif',
                        color: '#E6E6E6',
                        padding: '10px 0'
                      }}>
                        {selectedAdvisory.content}
                      </div>
                    </div>

                    {/* Links in modal */}
                    {selectedAdvisory.links && selectedAdvisory.links.length > 0 && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginTop: '20px',
                        justifyContent: 'center'
                      }}>
                        {selectedAdvisory.links.map((link, idx) => (
                          <motion.a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(70,130,180,0.6)' }}
                            style={{
                              background: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)',
                              color: '#1C2526',
                              fontWeight: 'bold',
                              padding: '10px 20px',
                              borderRadius: '8px',
                              fontSize: '1rem',
                              textDecoration: 'none',
                              display: 'inline-block',
                              boxShadow: '0 0 10px rgba(70,130,180,0.3)'
                            }}
                          >
                            {link.label}
                          </motion.a>
                        ))}
                      </div>
                    )}

                    {/* Stats only for advisory cards (with clients/projects) */}
                    {selectedAdvisory.clients !== undefined && (
                      <div style={{
                        display: 'flex',
                        gap: '25px',
                        marginTop: '25px',
                        justifyContent: 'center',
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(70, 130, 180, 0.3)'
                      }}>
                        <div style={{
                          background: 'rgba(70, 130, 180, 0.15)',
                          padding: '15px 25px',
                          borderRadius: '10px',
                          textAlign: 'center',
                          border: '1px solid #4682B4'
                        }}>
                          <div style={{ color: '#4682B4', fontWeight: 'bold', fontSize: '1.3rem' }}>{selectedAdvisory.clients}</div>
                          <div style={{ fontSize: '1.1rem', marginTop: '5px' }}>Clients</div>
                        </div>
                        <div style={{
                          background: 'rgba(70, 130, 180, 0.15)',
                          padding: '15px 25px',
                          borderRadius: '10px',
                          textAlign: 'center',
                          border: '1px solid #4682B4'
                        }}>
                          <div style={{ color: '#4682B4', fontWeight: 'bold', fontSize: '1.3rem' }}>{selectedAdvisory.projects}</div>
                          <div style={{ fontSize: '1.1rem', marginTop: '5px' }}>Projects</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

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