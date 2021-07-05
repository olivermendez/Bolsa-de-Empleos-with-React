import React, { useState } from 'react';

const CreateJobFORM = ({ submit }) => {


    const [formData, setFormData] = useState({
        title: "",
        company: "",
        city: "",
        description: ""
    });

    const handleInput = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        //This method is defined inside Home
        //We are passing the reference 
        //This submit() refers to the method in prop and it is called when handleSubmit is called
        submit({ ...formData, id: new Date().toString() });

        console.log("Submitting...")
    }

    return (
        <div className="card my-5">
            <div className="card-body">
                <h4 className="mb-4 bg-success text-white p-2">Create a vacancy</h4>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text" className="form-control"
                            name="title"
                            placeholder="Job Title"
                            value={formData.title}
                            onChange={handleInput}
                            required
                        />

                    </div>

                    <div className="mb-3">
                        <input
                            type="text" className="form-control" name="company"
                            value={formData.company}
                            onChange={handleInput}
                            placeholder="Company Name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text" className="form-control" name="city"
                            value={formData.city}
                            onChange={handleInput}
                            placeholder="City Name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="description"
                            value={formData.description}
                            onChange={handleInput}
                            placeholder="Role Description" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateJobFORM;