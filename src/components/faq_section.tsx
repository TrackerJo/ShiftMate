import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './faq_section.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    // {
    //     question: "How does the 14-day free trial work?",
    //     answer: "You can start using ShiftMate immediately without providing a credit card. During the 14-day trial, you'll have access to all features. If you decide to continue, you can upgrade to a paid plan at any time."
    // },
    {
        question: "Can I import my existing shift data?",
        answer: "Yes! ShiftMate supports importing data from spreadsheets, Google Calendar, and other popular scheduling tools. Our support team can help you migrate your existing data seamlessly."
    },
    {
        question: "How does the Google Calendar integration work?",
        answer: "ShiftMate syncs bidirectionally with Google Calendar. When you create or modify shifts in ShiftMate, they automatically appear in your Google Calendar. You can also add events from Google Calendar to ShiftMate."
    },
    {
        question: "Is there a mobile app?",
        answer: "Yes, ShiftMate has native mobile apps for both iOS and Android. Your team can view schedules, swap shifts, and communicate on the go. All data syncs in real-time across all devices."
    },
    // {
    //     question: "How secure is my data?",
    //     answer: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with GDPR and SOC 2 standards. Your data is hosted on secure servers with 99.9% uptime guarantee."
    // },
    // {
    //     question: "Can I customize the app for my business?",
    //     answer: "Absolutely! Our Professional and Enterprise plans include custom branding options, custom fields, and integrations with your existing systems. We can tailor ShiftMate to match your specific workflow."
    // },
    {
        question: "What if I need help getting started?",
        answer: "We provide comprehensive onboarding support, including setup assistance, training sessions, and ongoing customer support. Our team is here to ensure you get the most out of ShiftMate."
    },
    {
        question: "How does billing work?",
        answer: "Billing is monthly or annual based on your plan. You can upgrade, downgrade, or cancel at any time. We prorate charges when you change plans, and there are no hidden fees or setup costs."
    }
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <HelpCircle size={40} className="faq-icon" />
                    <h2>Frequently Asked Questions</h2>
                    <p>Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.</p>
                </div>

                <div className="faq-content">
                    <div className="faq-list">
                        {faqData.map((faq, index) => (
                            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="faq-cta">
                        <h3>Still have questions?</h3>
                        <p>Our support team is ready to help you get the most out of ShiftMate</p>
                        <button className="contact-support-btn">Contact Support</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default FAQSection;
