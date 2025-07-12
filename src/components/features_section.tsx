
import { Calendar, Users, MessageSquare, Clock, CheckCircle, Zap, Shield, Smartphone } from 'lucide-react';
import "./features_section.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <Calendar size={32} />,
    title: "Comprehensive Shifts",
    description: "Users can filter available shifts to find what's relevant, access important shift resources like location and contact details, and easily swap shifts with colleagues for greater scheduling flexibility. Managers and admins have additional controls to edit or remove shifts, ensuring schedules stay accurate.",
    color: "#4CAF50"
  },
  {
    icon: <Users size={32} />,
    title: "Shift Management",
    description: "Users can easily filter between available shifts, their own scheduled shifts, and all shifts. Managers and admins have additional filters to view staffed or unstaffed shifts, making it simple to identify coverage gaps and manage schedules efficiently",
    color: "#2196F3"
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Instant Communication",
    description: "Built-in messaging system with shift-specific group chats, push notifications, and company wide communication.",
    color: "#FF9800"
  },
  {
    icon: <Clock size={32} />,
    title: "Real-time Sync",
    description: "Bidirectional synchronization with Google Calendar and Apple Calendar. So users can view schedule conflicts before they accept shifts and managers and admins can create shifts in the app or in their calendar app.",
    color: "#9C27B0"
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Conflict Detection",
    description: "Users can add conflicts directly in ShiftMate or sync conflicts from their Google Calendar. Managers can view available employees to fill shifts, ensuring smooth operations.",
    color: "#F44336"
  },
  // {
  //   icon: <Zap size={32} />,
  //   title: "Automated Workflows",
  //   description: "Set up custom automation rules for shift assignments, notifications, and approval processes to streamline operations.",
  //   color: "#FFEB3B"
  // },
  // {
  //   icon: <Shield size={32} />,
  //   title: "Enterprise Security",
  //   description: "Bank-level security with end-to-end encryption, SSO integration, and comprehensive audit logs for compliance.",
  //   color: "#607D8B"
  // },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile First",
    description: "Native mobile apps for iOS and Android with offline capabilities, ensuring your team stays connected anywhere.",
    color: "#795548"
  }
];

function FeaturesSection() {
  return (
    <div className='features-section' id="features">
      <div className='features-container'>
        <div className='features-header'>
          <h2 className="title">Powerful Features for Modern Teams</h2>
          <p className="subtitle">Everything you need to revolutionize your shift management, all in one intuitive platform</p>
        </div>

        <div className='features-grid'>
          {features.map((feature, index) => (
            <div key={index} className='feature-card'>
              <div className='feature-icon' style={{ backgroundColor: feature.color + '20', color: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='features-cta'>
          <h3>Ready to transform your shift management?</h3>
          <button className='features-cta-btn'>Sign Up Now!</button>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection