

import "./opportunites_section.css";
import InfoTile from "./info_tile";

function OpportunitiesSection() {
  return (
    <>
      <div className='opportunities-section' id="opportunities">

        <div className='opportunities-div'>
          <h2 className="title">Opportunities</h2>
          <div className="opportunities-tiles">
            <InfoTile
              title="Students"
              description="Find job and volunteer opportunities near you. Our platform allows you to easily find jobs and volunteer opportunities that are close to you."
            />

            <InfoTile
              title="Companies & Organizations"
              description="Post job and volunteer opportunities for students. Our platform allows you to easily find and connect with students who are looking for jobs and volunteer opportunities."
            />
          </div>

        </div>


      </div>

    </>
  )
}

export default OpportunitiesSection