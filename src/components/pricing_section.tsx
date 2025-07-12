import { Check, Star } from 'lucide-react';
import './pricing_section.css';

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
    ctaText: string;
}

const pricingPlans: PricingPlan[] = [
    // {
    //     name: "Starter",
    //     price: "$9",
    //     period: "per month",
    //     description: "Perfect for small teams and businesses getting started",
    //     features: [
    //         "Up to 25 employees",
    //         "Basic shift management",
    //         "Google Calendar sync",
    //         "Email support",
    //         "Mobile app access"
    //     ],
    //     ctaText: "Start Free Trial"
    // },
    {
        name: "Professional",
        price: "$29",
        period: "per month",
        description: "Ideal for all types of teams!",
        features: [
            "Advanced shift management",
            "Calendar integrations",
            "In-app messaging",
            "Conflict detection",
            "Mobile apps for iOS and Android",
            "Priority support"
        ],
        popular: true,
        ctaText: "Contact Sales"
    },
    // {
    //     name: "Enterprise",
    //     price: "$99",
    //     period: "per month",
    //     description: "For large organizations with complex scheduling needs",
    //     features: [
    //         "Unlimited employees",
    //         "Custom integrations",
    //         "Advanced analytics",
    //         "API access",
    //         "Custom branding",
    //         "Dedicated support",
    //         "SLA guarantee"
    //     ],
    //     ctaText: "Contact Sales"
    // }
];

function PricingSection() {
    return (
        <div className="pricing-section" id="pricing">
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2>Simple, Transparent Pricing</h2>
                    <p>Choose the plan that fits your team size and needs. All plans include a 14-day free trial.</p>
                </div>

                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    <Star size={16} />
                                    Most Popular
                                </div>
                            )}

                            <div className="pricing-card-header">
                                <h3>{plan.name}</h3>
                                <div className="price">
                                    <span className="price-amount">{plan.price}</span>
                                    <span className="price-period">/{plan.period}</span>
                                </div>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <ul className="features-list">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>
                                        <Check size={20} className="check-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`cta-button ${plan.popular ? 'primary' : 'secondary'}`}>
                                {plan.ctaText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* <div className="pricing-footer">
                    <p>All plans include SSL security, 99.9% uptime guarantee, and mobile apps for iOS and Android.</p>
                </div> */}
            </div>
        </div>
    );
}

export default PricingSection;
