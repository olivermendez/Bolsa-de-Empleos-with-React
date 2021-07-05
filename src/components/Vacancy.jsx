import React from 'react';

const Vacancy = (props) => {
    console.log(props);

    return (

        <div className="card my-3" style={{ boxShadow: '1px 1px 5px grey' }}>
            <div className="card-header bg-primary text-white">
                <h3>{props.vacancy.title}</h3>
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.vacancy.company}</h4>
                <p className="card-text"> {props.vacancy.city}</p>
                <p className="card-text"> {props.vacancy.description}</p>
            </div>
            <div className="card-footer p-2">
                <button className="btn btn-md btn-outline-primary">Apply</button>
                <button className="btn btn-md btn-outline-dark mx-2">Delete</button>
            </div>
        </div>
    )
}

export default Vacancy