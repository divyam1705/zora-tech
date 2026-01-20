import React from 'react';
import { FaBrain, FaRobot, FaCogs, FaShieldAlt, FaChartLine, FaNetworkWired, FaPlus, FaMinus, FaUserTie, FaHeadset, FaShippingFast, FaCheck, FaTimes } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-autonomous-agents.png';

const AiAgentDevelopment = () => {
    return (
        <ServiceDetailLayout
            title="Autonomous AI Agent Development"
            subtitle="Engineering the Digital Workforce of Tomorrow. Empower your enterprise with intelligent agents that don't just converse—they execute."
            heroImage={heroBg}

            overviewSection={{
                heading: "Moving Beyond Conversations",
                paragraphs: [
                    "While traditional AI provides information, AI Agents provide outcomes. Our development services focus on the transition from \"Retrieval\" to \"Action.\" We build agents equipped with \"memory\" and \"agency\".",
                    "We build bespoke AI Agents that act as cognitive extensions of your team, capable of initiating tasks, reasoning through complex problems, and executing workflows across your entire digital ecosystem."
                ],
                // interactve 3d box or image can go here if we had one ready, leaving generic for now or user can update
                showInteractive3D: true
            }}

            idealFor={[
                "Customer-Centric Enterprises seeking autonomous support resolution",
                "Operations Leaders needing to automate complex supply chain coordination",
                "SaaS Innovators looking to embed 'Agentic' features",
                "Data-Intensive Firms requiring autonomous sorting and analysis"
            ]}

            faqs={[
                { q: "Do you build custom AI models?", a: "Yes. While we leverage foundation models (GPT-4, Claude), we fine-tune them on your proprietary data to create a custom 'Brain' that understands your specific business logic." },
                { q: "Can AI integrate with existing systems?", a: "Absolutely. Our agents are designed to be interoperable. We build secure API connectors to your ERP, CRM, and legacy databases so the agent can read/write data in real-time." },
                { q: "Do you provide ongoing AI support?", a: "Yes. AI models drift over time. We provide 'AgentOps' maintenance packages to monitor performance, update reasoning logic, and ensure the agent stays aligned with your goals." }
            ]}

            benefits={[
                "Operational Continuity: Agents operate 24/7 without fatigue.",
                "Cognitive Load Reduction: Offload complex decision-making.",
                "Elastic Scalability: Scale instantly during peak periods.",
                "Interoperability: Act as 'glue' between isolated systems."
            ]}

            // Custom children sections for the rich content specific to this page
            children={
                <>
                    {/* USE CASE DEEP DIVES */}
                    <section style={{ padding: '4rem 0', background: '#0a0a0a', color: '#fff' }}>
                        <div className="container">
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <div style={{ color: '#ff8163', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>[ SYSTEM CAPABILITIES ]</div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff' }}>Agentic Use Cases</h2>
                                <p style={{ color: '#a0a0a0' }}>Real-world applications of autonomous intelligence.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {[
                                    { title: "The Autonomous SDR", role: "Sales Development", icon: <FaUserTie />, desc: "Researches prospects, personalizes outreach, schedules meetings, and updates CRM—all without human input." },
                                    { title: "Support Sentinel", role: "Customer Success", icon: <FaHeadset />, desc: "Resolves Level 1 & 2 tickets, processes refunds, and initiates RMAs by directly accessing order management systems." },
                                    { title: "Supply Chain Watchdog", role: "Logistics", icon: <FaShippingFast />, desc: "Monitors shipment delays, automatically re-routes orders, and notifies vendors of stock variances in real-time." }
                                ].map((card, i) => (
                                    <div key={i} style={{
                                        padding: '2rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 129, 99, 0.2)',
                                        borderRadius: '16px'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                            <div style={{ fontSize: '2rem', color: '#ff8163' }}>{card.icon}</div>
                                            <span style={{ fontFamily: 'monospace', color: '#ff8163', opacity: 0.7 }}>{card.role}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#fff' }}>{card.title}</h3>
                                        <p style={{ color: '#ccc', lineHeight: 1.6 }}>{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* COMPARISON: Chatbot vs Agent */}
                    <section style={{ padding: '4rem 0', background: '#fff', color: '#1a1a1a' }}>
                        <div className="container">
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>Evolution of AI</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                                {/* Standard Chatbot */}
                                <div style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '12px', border: '1px solid #ddd' }}>
                                    <h3 style={{ color: '#666', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.3rem' }}>
                                        <FaRobot /> Standard LLM Chatbot
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}><FaTimes style={{ color: '#999' }} /> Passive: Waits for user prompts</li>
                                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}><FaTimes style={{ color: '#999' }} /> No Memory: Forgets context easily</li>
                                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}><FaTimes style={{ color: '#999' }} /> Isolated: Cannot access external tools</li>
                                    </ul>
                                </div>
                                {/* Autonomous Agent */}
                                <div style={{ padding: '2rem', background: '#0a1f00', color: '#fff', borderRadius: '12px', border: '1px solid #ff8163', boxShadow: '0 10px 40px rgba(255, 129, 99, 0.15)' }}>
                                    <h3 style={{ color: '#ff8163', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.3rem' }}>
                                        <FaBrain /> Zora Autonomous Agent
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}><FaCheck style={{ color: '#ff8163' }} /> Proactive: Initiates tasks autonomously</li>
                                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}><FaCheck style={{ color: '#ff8163' }} /> Long-Term Memory (RAG + Vector DB)</li>
                                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}><FaCheck style={{ color: '#ff8163' }} /> Agentic: Uses tools (API, Web, DB)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* APPROACH: Blueprint Timeline */}
                    <section style={{ padding: '5rem 0', background: '#050505', color: '#fff' }}>
                        <div className="container">
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <div style={{ color: '#ff8163', fontFamily: 'monospace', letterSpacing: '4px' }}>// EXECUTION_PROTOCOL</div>
                                <h2 style={{ fontSize: '3rem', fontWeight: '800', margin: '1rem 0' }}>The Agentic Lifecycle</h2>
                                <div style={{ width: '60px', height: '3px', background: '#ff8163', margin: '0 auto' }}></div>
                            </div>

                            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '30px' }}>
                                {/* Spine */}
                                <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'rgba(255, 129, 99, 0.3)' }}></div>

                                {[
                                    { title: "Design & Logic Mapping", desc: "Defining decision boundaries, hierarchical logic, and success metrics for the agent." },
                                    { title: "Tooling & Integration", desc: "Building secure API connectors to ERPs, CRMs, and external data sources." },
                                    { title: "Cognitive Architecture", desc: "Implementing Vector Stores (RAG) for long-term memory and context retention." },
                                    { title: "Guardrails & Safety", desc: "Establishing 'Human-in-the-Loop' protocols for high-stakes decision gates." },
                                    { title: "Deployment & Optimization", desc: "Live monitoring of reasoning chains to optimize latency and accuracy." }
                                ].map((step, i) => (
                                    <div key={i} style={{ marginBottom: '3rem', position: 'relative' }}>
                                        {/* Node */}
                                        <div style={{
                                            position: 'absolute', left: '-35px', top: '0', width: '12px', height: '12px',
                                            background: '#ff8163', borderRadius: '50%', boxShadow: '0 0 10px #ff8163'
                                        }}></div>

                                        <div style={{ fontFamily: 'monospace', color: '#ff8163', marginBottom: '0.5rem', fontSize: '0.9rem' }}>STEP 0{i + 1}</div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>{step.title}</h3>
                                        <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            }
        />
    );
};

export default AiAgentDevelopment;
