import React, { useState } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function FormValidation() {

    const breadcrumbItem = [
        {
            name: "Forms",
        },
        {
            name: "Form Validation",
        },
    ]

    const [textInput, setTextInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [textAreaInput, setTextAreaInput] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioSelected, setRadioSelected] = useState('');
    const [minCharactersInput, setMinCharactersInput] = useState('');
    const [charactersRangeInput, setCharactersRangeInput] = useState('');
    const [minNumberInput, setMinNumberInput] = useState('');
    const [rangeInput, setRangeInput] = useState('');
    const [minOptions, setMinOptions] = useState({
        option1: false,
        option2: false,
        option3: false
    });
    const [optionsRange, setOptionsRange] = useState({
        option1: false,
        option2: false,
        option3: false
    });

    const [textInputError, setTextInputError] = useState('');
    const [emailInputError, setEmailInputError] = useState('');
    const [textAreaError, setTextAreaError] = useState('');
    const [checkboxError, setCheckboxError] = useState('');
    const [radioError, setRadioError] = useState('');
    const [minCharactersError, setMinCharactersError] = useState('');
    const [charactersRangeError, setCharactersRangeError] = useState('');
    const [minNumberError, setMinNumberError] = useState('');
    const [rangeError, setRangeError] = useState('');
    const [minOptionsError, setMinOptionsError] = useState('');
    const [optionsRangeError, setOptionsRangeError] = useState('');

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
        setTextInputError('');
    };

    const handleEmailInputChange = (event) => {
        setEmailInput(event.target.value);
        setEmailInputError('');
    };

    const handleTextAreaChange = (event) => {
        setTextAreaInput(event.target.value);
        setTextAreaError('');
    };

    const handleCheckboxChange = (event) => {
        setCheckboxChecked(event.target.checked);
        setCheckboxError('');
    };

    const handleRadioChange = (event) => {
        setRadioSelected(event.target.value);
        setRadioError('');
    };

    const handleMinCharactersChange = (event) => {
        setMinCharactersInput(event.target.value);
        setMinCharactersError('');
    };

    const handleCharactersRangeChange = (event) => {
        setCharactersRangeInput(event.target.value);
        setCharactersRangeError('');
    };

    const handleMinNumberChange = (event) => {
        setMinNumberInput(event.target.value);
        setMinNumberError('');
    };

    const handleRangeChange = (event) => {
        setRangeInput(event.target.value);
        setRangeError('');
    };

    const handleMinOptionsChange = (option) => {
        const updatedOptions = { ...minOptions, [option]: !minOptions[option] };
        setMinOptions(updatedOptions);
        setMinOptionsError('');
    };

    const handleOptionsRangeChange = (option) => {
        const updatedOptions = { ...optionsRange, [option]: !optionsRange[option] };
        setOptionsRange(updatedOptions);
        setOptionsRangeError('');
    };

    const handleSubmit = () => {
        if (textInput.trim() === '') {
            setTextInputError('Text Input is required');
        }
        if (emailInput.trim() === '') {
            setEmailInputError('Email Input is required');
        } else if (!isValidEmail(emailInput)) {
            setEmailInputError('Invalid email format');
        }
        if (textAreaInput.trim() === '') {
            setTextAreaError('Text Area is required');
        }
        if (!checkboxChecked) {
            setCheckboxError('Please select at least one option');
        }
        if (radioSelected === '') {
            setRadioError('Please select an option');
        }
    };

    const handleSecondButtonValidation = () => {
        if (minCharactersInput.length < 8) {
            setMinCharactersError('Minimum 8 characters required');
        }
        if (charactersRangeInput.length < 5 || charactersRangeInput.length > 10) {
            setCharactersRangeError('Characters length should be between 5 and 10');
        }
        if (minNumberInput === '' || parseInt(minNumberInput) < 5) {
            setMinNumberError('Number should be greater than or equal to 5');
        }
        if (rangeInput === '' || parseInt(rangeInput) < 20 || parseInt(rangeInput) > 30) {
            setRangeError('Number should be between 20 and 30');
        }
        const selectedMinOptions = Object.values(minOptions).filter(option => option).length;
        if (selectedMinOptions < 2) {
            setMinOptionsError('Please select at least 2 options');
        }

        const selectedOptionsRange = Object.values(optionsRange).filter(option => option).length;
        if (selectedOptionsRange < 1 || selectedOptionsRange > 2) {
            setOptionsRangeError('Please select between 1 and 2 options');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <Breadcrumb title="Form Validation" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[19.2px] font-medium mb-30'>
                    Basic Validation
                </p>
                <div className='flex flex-col gap-20'>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>Text Input</label>
                        <input className='form-input' type='text' value={textInput} onChange={handleTextInputChange} />
                        {textInputError && <span className="text-danger mt-5 inline-block">{textInputError}</span>}
                    </div>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>Email Input</label>
                        <input className='form-input' type='email' value={emailInput} onChange={handleEmailInputChange} />
                        {emailInputError && <span className="text-danger mt-5 inline-block">{emailInputError}</span>}
                    </div>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>Text Area</label>
                        <textarea className='form-input' rows={5} value={textAreaInput} onChange={handleTextAreaChange} />
                        {textAreaError && <span className="text-danger mt-5 inline-block">{textAreaError}</span>}
                    </div>
                    <div className='form-control mb-10'>
                        <label className='form-label font-medium mb-5 inline-block'>Checkbox</label>
                        <div className='flex flex-wrap gap-20'>
                            <div className="form-check">
                                <input type="checkbox" id='option1' className="form-check-input small" onChange={handleCheckboxChange} />
                                <label htmlFor='option1' className="form-check-label">Option 1</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id='option2' className="form-check-input small" onChange={handleCheckboxChange} />
                                <label htmlFor='option2' className="form-check-label">Option 2</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id='option3' className="form-check-input small" onChange={handleCheckboxChange} />
                                <label htmlFor='option3' className="form-check-label">Option 3</label>
                            </div>
                        </div>
                        {checkboxError && <span className="text-danger mt-5 inline-block">{checkboxError}</span>}
                    </div>
                    <div className='form-control mb-10'>
                        <label className='form-label font-medium mb-5 inline-block'>Radio Button</label>
                        <div className='flex flex-wrap gap-20'>
                            <div className="form-radio">
                                <input type="radio" id="male" name="gender" value="male" className="form-radio-input small" onChange={handleRadioChange} />
                                <label className="form-radio-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" id="female" name="gender" value="female" className="form-radio-input small" onChange={handleRadioChange} />
                                <label className="form-radio-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" id="other" name="gender" value="other" className="form-radio-input small" onChange={handleRadioChange} />
                                <label className="form-radio-label" htmlFor="other">Other</label>
                            </div>
                        </div>
                        {radioError && <span className="text-danger mt-5 inline-block">{radioError}</span>}
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={handleSubmit}>
                            Validate
                        </button>
                    </div>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <p className='text-[16px]/[19.2px] font-medium mb-30'>
                    Advance Validation
                </p>
                <div className='flex flex-col gap-20'>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>Min. 8 Characters</label>
                        <input className='form-input' type='text' value={minCharactersInput} onChange={handleMinCharactersChange} />
                        {minCharactersError && <span className="text-danger mt-5 inline-block">{minCharactersError}</span>}
                    </div>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>Between 5-10 Characters</label>
                        <input className='form-input' type='text' value={charactersRangeInput} onChange={handleCharactersRangeChange} />
                        {charactersRangeError && <span className="text-danger mt-5 inline-block">{charactersRangeError}</span>}
                    </div>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>{'Min. Number ( >= 5 )'}</label>
                        <input className='form-input' type='number' value={minNumberInput} onChange={handleMinNumberChange} />
                        {minNumberError && <span className="text-danger mt-5 inline-block">{minNumberError}</span>}
                    </div>
                    <div className='form-control'>
                        <label className='form-label font-medium mb-5 inline-block'>Between 20-30</label>
                        <input className='form-input' type='number' value={rangeInput} onChange={handleRangeChange} />
                        {rangeError && <span className="text-danger mt-5 inline-block">{rangeError}</span>}
                    </div>
                    <div className='form-control mb-10'>
                        <label className='form-label font-medium mb-5 inline-block'>Select Min. 2 Options</label>
                        <div className='flex flex-wrap gap-20'>
                            <div className="form-check">
                                <input type="checkbox" id='option11' className="form-check-input small" onChange={() => handleMinOptionsChange('Option 1')} />
                                <label htmlFor='option11' className="form-check-label">Option 1</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id='option22' className="form-check-input small" onChange={() => handleMinOptionsChange('Option 2')} />
                                <label htmlFor='option22' className="form-check-label">Option 2</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id='option33' className="form-check-input small" onChange={() => handleMinOptionsChange('Option 3')} />
                                <label htmlFor='option33' className="form-check-label">Option 3</label>
                            </div>
                        </div>
                        {minOptionsError && <span className="text-danger mt-5 inline-block">{minOptionsError}</span>}
                    </div>
                    <div className='form-control mb-10'>
                        <label className='form-label font-medium mb-5 inline-block'>Select Between 1-2 Options</label>
                        <div className='flex flex-wrap gap-20'>
                        <div className="form-check">
                                <input type="checkbox" id='option111' className="form-check-input small" onChange={() => handleOptionsRangeChange('Option 1')} />
                                <label htmlFor='option111' className="form-check-label">Option 1</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id='option222' className="form-check-input small" onChange={() => handleOptionsRangeChange('Option 2')} />
                                <label htmlFor='option222' className="form-check-label">Option 2</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id='option333' className="form-check-input small" onChange={() => handleOptionsRangeChange('Option 3')} />
                                <label htmlFor='option333' className="form-check-label">Option 3</label>
                            </div>
                        </div>
                        {optionsRangeError && <span className="text-danger mt-5 inline-block">{optionsRangeError}</span>}
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={handleSecondButtonValidation}>
                            Validate
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
