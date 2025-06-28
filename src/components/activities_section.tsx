

import "./activities_section.css";
import InfoTile from "./info_tile";

function ActivitiesSection() {
  return (
    <>
      <div className='activities-section' id="activities">

        <div className='activities-div'>
          <h2 className="title">Activity Management</h2>
          <div className="activities-tiles">
            <InfoTile
              title="Students"
              description="Easily manage your activities and events with our intuitive interface. All events automatically sync with your device calendar, so your all your events are in one place."
            />
            <InfoTile
              title="Coaches & Staff"
              description="Our platform allows you to create and manage your activities's events with ease. Easily create one-time or recurring events on the website or app, or add events directly from google sheets. Seasons over? Easily move all your events to the next season with a single click."
            />
            <InfoTile
              title="Parents"
              description="Stay up to date with your child's activities and events. Our platform allows you to easily view all of your child's events in one place, and sync them with your device calendar."
            />
          </div>

        </div>


      </div>

    </>
  )
}

export default ActivitiesSection