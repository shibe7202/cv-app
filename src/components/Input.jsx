import { useState } from "react";

function Input({label, parent}) {
    const [text, setText] = useState('')
    const shortLabel = label.replace(/\s/g, '')

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <div className='form-group'>
            <label htmlFor={shortLabel} className={parent + 'Label'}>
                {label}
                {': '}
            </label>
            <input 
                id={shortLabel}
                type="text"
                onChange={handleChange} 
                value={text}
                name={shortLabel}
            />
        </div>
    )
}

export default Input