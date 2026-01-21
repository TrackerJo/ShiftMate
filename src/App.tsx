







import './App.css'
import Header from './components/header'
import TitleSection from './components/title_section'
import FeaturesSection from './components/features_section'
import PricingSection from './components/pricing_section'
import TestimonialsSection from './components/testimonials_section'
import CTASection from './components/cta_section'
import FAQSection from './components/faq_section'
import ContactSection from './components/contact_section'
import Footer from './components/footer'
import Section from './components/section'

function App() {
  return (
    <>
      <Header />
      <TitleSection />
      <FeaturesSection />
      {/* <Section title='Easy Shift Management' tiles={[
        {
          title: "Filter Shifts",
          description: "Quickly filter shifts available to you, making it easy to find what you need. Managers and Admins can filter shifts by staffed or unstaffed to easily see what shifts need to be filled."
        },
        {
          title: "Shift Resources",
          description: "Access important resources related to your shifts, such as location details, contact information, or any other relevant information."
        },
        {
          title: "Edit and Remove Shifts",
          description: "Easily edit or remove shifts as needed, ensuring that your schedule is always up-to-date and accurate."
        },
        {
          title: "Swap Shifts",
          description: "Effortlessly swap shifts with colleagues, allowing for greater flexibility in your schedule. This feature is particularly useful for employees who need to adjust their work hours or cover for each other."
        },
      ]} id='shift-management' />
      <Section title='Syncs to Google Calendar' tiles={[
        {
          title: "Sync Shifts",
          description: "Automatically sync your shifts to your Google Calendar, ensuring you never miss an important event."
        },
        {
          title: "Add Shifts from Calender to ShiftMate",
          description: "Easily add shifts from your Google Calendar to ShiftMate, allowing you to manage your schedule in one place."
        }
      ]} id='syncs-to-google-calendar' />
      <Section title='Conflict Management' tiles={[
        {
          title: "Integrated with Apple or Google Calendars",
          description: "Employees can sync their Apple or Google Calendars with ShiftMate, allowing them to see their personal schedules alongside their work shifts. This integration helps prevent scheduling conflicts and ensures that employees are aware of their commitments outside of work."
        },
        {
          title: "Add Conflicts on ShiftMate or Google Calendar",
          description: "Easily add conflicts to your schedule, whether through ShiftMate or directly in your Google Calendar. This flexibility allows you to manage your time effectively and avoid double-booking."
        },
        {
          title: "View Available Employees",
          description: "Quickly view which employees are available to cover shifts, making it easy to find replacements when needed. This feature is especially useful for managers and admins who need to ensure that shifts can be filled efficiently."
        }
      ]} id='conflict-management' />
      <Section title='Seamless Communication' tiles={[
        {
          title: "In-App Messaging",
          description: "Communicate with your team members directly within the app, ensuring that important messages are never missed. Group chats automatically created for each shift, allowing for easy coordination and discussion among team members."
        },
        {
          title: "Push Notifications",
          description: "Get real-time push notifications for critical updates, ensuring that you stay connected and informed at all times. Whenever a shift is created, or edited, all relevant employees receive a notification, keeping everyone in the loop."
        }
      ]} id='communication' /> */}
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
