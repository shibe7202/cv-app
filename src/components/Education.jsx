import { useState } from "react";
import Input from "./Input.jsx"

function Education() {
    const [info, setInfo] = useState({ school:'Name', major: 'Email', date: 'Phone', submitted: false})

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const formValues = {
            school: formData.get('SchoolName'),
            major: formData.get('TitleofStudy'),
            date: formData.get('DateofStudy')
        }

        setInfo({ school: formValues.school, major: formValues.major, date: formValues.date, submitted: true})
      }

      function handleEdit() {
        setInfo({...info, submitted: false})
    }

    if (!info.submitted) {
        return (
            <div className='education'>
                <h1 className='education-header'>Education</h1>
                <form onSubmit={handleSubmit}>
                    <Input label={"School Name"} parent={'education'}></Input>
                    <Input label={"Title of Study"} parent={'education'}></Input>
                    <Input label={"Date of Study"} parent={'education'}></Input>
                    <div className="buttonWrapper"><button className='submit' type='submit'>Submit</button></div>
                </form>
            </div>
        )
    } else {
        return (
            <div className='education'>
                <h1 className='education-header'>Education</h1>
                <p className="school">School Name: {info.school}</p>
                <p className="major">Title of Study: {info.major}</p>
                <p className="date">Date of Study {info.date}</p>
                <div className="buttonWrapper"><button className='edit' onClick={handleEdit}>Edit</button></div>
            </div>
        )
    }
}

export default Education;