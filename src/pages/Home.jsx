import React, { useState, useEffect } from 'react';
import { posts } from '../data';

import Vacancy from '../components/Vacancy';
import CreateJobFORM from '../components/CreateJobsFORM';

const Home = () => {

    const [vacancies, setVacancies] = useState([]);


    useEffect(() => {
        setVacancies(posts);
        console.log("Called when page is loaded only");
    }, []);

    //Called from CreateJobsFORM component
    const handleSubmit = (formData) => {
        console.log(formData);
        setVacancies([formData, ...vacancies]);
    }

    return (
        <>
            <section>
                <div className="card bg-light">
                    <div className="card-body">
                        <h3 className="card-title">Find your dream job today</h3>
                        <p className="card-text">Apply for any vacancies</p>


                        <section>
                            <CreateJobFORM submit={handleSubmit}></CreateJobFORM>
                        </section>


                        <section>
                            {
                                vacancies.map((vacancy) => {
                                    return (
                                        <Vacancy
                                            vacancy={vacancy}
                                            key={vacancy.id}>
                                        </Vacancy>
                                    );
                                })
                            }
                        </section>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;