import {useState} from 'react'

export default function Profile() {

    const handleId = (e) => {
        setId(e.target.value);
        setSubmitted(false);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
        setSubmitted(false);
    };

    const handleTime = (e) => {
        setTime(e.target.value);
        setSubmitted(false);
    };

    const handleEducation = (e) => {
        setEducation(e.target.value);
        setSubmitted(false);
    };

    const handleExperience = (e) => {
        setExperience(e.target.value);
        setSubmitted(false);
    };

    const handleCertification = (e) => {
        setCertification(e.target.value);
        setSubmitted(false);
    };

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
        setSubmitted(false);
    };

    return (
        <div className='profile'>
           <div>
		        <h1>Profile Completion</h1>
	    </div>  
        <form>
            <label className="label">ID</label>
            <input onChange={handleId} className="input"
            value={id} type="text" />

            <label className="label">Location</label>
            <input onChange={handleLocation} className="input"
            value={location} type="text" />

            <label className="label">Availability</label>
            <input onChange={handleTime} className="input"
            value={time} type="text" />

            <label className="label">Educational Qualification</label>
            <input onChange={handleEducation} className="input"
            value={education} type="text" />

            <label className="label">Experience</label>
            <input onChange={handleExperience} className="input"
            value={experience} type="text" />

            <label className="label">Certification</label>
            <input onChange={handleCertification} className="input"
            value={certification} type="text" />

            <label className="label">Languages</label>
            <input onChange={handleLanguage} className="input"
            value={language} type="text" />

            <button onClick={handleSave} className="btn" type="save">
            Save
            </button>

        </form>
        </div>
    )
}

