import { useState } from "react";
import Input from "./Input.jsx"

function Experience() {
    const [info, setInfo] = useState({ companyName:'Company Name', position: 'Position', responsibilities: 'Responsibilities', dates:'Dates', submitted: false})

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const formValues = {
            companyName: formData.get('CompanyName'),
            position: formData.get('PositionTitle'),
            responsibilities: formData.get('Responsibilities'),
            date: formData.get('DatesWorked')
        }

        setInfo({ companyName: formValues.companyName, position: formValues.position, responsibilities: formValues.responsibilities , dates: formValues.date, submitted: true})
      }

      function handleEdit() {
        setInfo({...info, submitted: false})
    }

    if (!info.submitted) {
        return (
            <div className='experience'>
                <h1 className='experience-header'>Experience</h1>
                <form onSubmit={handleSubmit}>
                    <Input label={"Company Name"} parent={'experience'}></Input>
                    <Input label={"Position Title"} parent={'experience'}></Input>
                    <Input label={"Responsibilities"} parent={'experience'}></Input>
                    <Input label={"Dates Worked"} parent={'experience'}></Input>
                    <div className="buttonWrapper"><button className='submit' type='submit'>Submit</button></div>
                </form>
            </div>
        )
    } else {
        return (
            <div className='experience'>
                <h1 className='experience-header'>Experience</h1>
                <p className="company">Company Name: {info.companyName}</p>
                <p className="position">Position: {info.position}</p>
                <p className="responsibilities">Responsibilities: {info.responsibilities}</p>
                <p className="dates">Dates Worked: {info.dates}</p>
                <div className="buttonWrapper"><button className='edit' onClick={handleEdit}>Edit</button></div>
            </div>
        )
    }
}

export default Experience;