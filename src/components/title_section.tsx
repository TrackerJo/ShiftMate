import "./title_section.css";
import Logo from '../assets/logo.png'

function TitleSection() {
  return (
    <div className='title-section' id="title">

      <div className='title-div'>
        <h2>ShiftMate</h2>
        <img src={Logo} alt="" className="logo" />
        <p>Improving Shift Scheduling for Event Hosts!<br></br>Built for employees by an employee!</p>
      </div>


    </div>
  )
}

export default TitleSection