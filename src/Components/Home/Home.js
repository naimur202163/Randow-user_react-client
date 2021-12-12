import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    // Loading Data from Server
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=8')
            .then(res => res.json())
            .then(data => setUsers(data?.results))
    }, []);
    console.log(users)
    return (
        <div>
            <Header />

            <div>

                <div className="container">
                    <div className="row">
                        {
                            users?.map(user =>
                                <div class="col-sm-12 col-lg-4 my-2 ">
                                    <div class="card">
                                        <div  ><img style={{ height: '90%%', width: '80%' }} className="rounded mx-auto d-block mt-4 img-fluid" src={user.picture.large} /></div>
                                        <div class="card-body">
                                            <h4 class="card-title text-muted">Name : {user.name.title}{user.name.first}{user.name.last}</h4>
                                            <h5 class="card-title text-muted">Email:{user.email}</h5>

                                            <p class="card-text">Cell : {user.cell}</p>
                                            <Link className='ms-4' to={`/userdetail/${user._id}`}>
                                                <button className="btn btn-success m-2">update</button>
                                            </Link>
                                            <Link className="ms-5" to={`/userdetails/${user.login.uuid}`}>
                                                <button className="btn btn-success m-2">Details</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>





            </div>

            {/* 1 */}
        </div >
    );
};

export default Home;