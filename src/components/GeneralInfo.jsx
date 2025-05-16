import { useState } from "react";
import Input from "./Input.jsx"

function GeneralInfo() {
    const [info, setInfo] = useState({ name:'Name', email: 'Email', phone: 'Phone', submitted: false})

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const formValues = {
            name: formData.get('Name'),
            email: formData.get('Email'),
            phone: formData.get('Phone')
        }

        setInfo({ name: formValues.name, email: formValues.email, phone: formValues.phone, submitted: true})
      }

      function handleEdit() {
        setInfo({...info, submitted: false})
    }

    if (!info.submitted) {
        return (
            <div className='generalInfo'>
                <h1 className='generalInfo-header'>General Information</h1>
                <form onSubmit={handleSubmit}>
                    <Input label={"Name"} ></Input>
                    <Input label={"Email"} ></Input>
                    <Input label={"Phone"} ></Input>
                    <div className="buttonWrapper"><button className='submit' type='submit'>Submit</button></div>
                </form>
            </div>
        )
    } else {
        return (
            <div className='generalInfo'>
                <h1 className='generalInfo-header'>General Information</h1>
                <p className="name">Name: {info.name}</p>
                <p className="email">Email: {info.email}</p>
                <p className="phone">Phone {info.phone}</p>
                <div className="buttonWrapper"><button className='edit' onClick={handleEdit}>Edit</button></div>
            </div>
        )
    }
}

export default GeneralInfo;