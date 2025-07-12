import { Star, Quote } from 'lucide-react';
import './testimonials_section.css';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        role: "Operations Manager",
        company: "EventPro Solutions",
        content: "ShiftMate has completely transformed how we manage our event staff. The Google Calendar integration alone saved us hours each week. Our team loves the intuitive interface and the conflict detection feature prevents scheduling mishaps.",
        rating: 5,
        avatar: "SJ"
    },
    {
        name: "Michael Chen",
        role: "HR Director",
        company: "Metropolitan Events",
        content: "As someone who manages 150+ part-time employees, ShiftMate is a game-changer. The automated notifications and shift swapping features have reduced our administrative workload by 60%. Best investment we've made this year!",
        rating: 5,
        avatar: "MC"
    },
    {
        name: "Emily Rodriguez",
        role: "Event Coordinator",
        company: "Sunshine Catering",
        content: "The in-app messaging feature is fantastic for last-minute coordination. We've eliminated the chaos of group texts and missed communications. Our staff can now focus on what they do best - delivering amazing events.",
        rating: 5,
        avatar: "ER"
    }
];

function TestimonialsSection() {
    return (
        <div className="testimonials-section" id="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2>What Our Customers Say</h2>
                    <p>Join thousands of event professionals who trust ShiftMate to manage their teams</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">
                                <Quote size={24} />
                            </div>

                            <div className="rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} className="star-filled" />
                                ))}
                            </div>

                            <p className="testimonial-content">"{testimonial.content}"</p>

                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.avatar}
                                </div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                    <p className="company">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials-stats">
                    <div className="stat">
                        <h3>30+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="stat">
                        <h3>100%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className="stat">
                        <h3>50+</h3>
                        <p>Hours Saved Per Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSection;
