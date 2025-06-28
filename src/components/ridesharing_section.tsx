

import "./ridesharing_section.css";
import InfoTile from "./info_tile";

function RidesharingSection() {
  return (
    <>
      <div className='ridesharing-section' id="ridesharing">

        <div className='ridesharing-div'>
          <h2 className="title">Ridesharing</h2>
          <div className="ridesharing-tiles">
            <InfoTile
              title="Students"
              description="Find classmates to carpool with, and share rides to and from school or other school events. Our platform allows you to easily find and connect with other students who are going the same way as you."
            />

            <InfoTile
              title="Parents"
              description="Have peace of mind knowing that your child is safe and secure while traveling to and from school. Our platform helps you know that your child has a ride to and from school."
            />
          </div>

        </div>


      </div>

    </>
  )
}

export default RidesharingSection