import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const { userId } = useSearchParams();

    // Loading Data from Server
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=8')
            .then(res => res.json())
            .then(data => setUsers(data?.results))
    }, []);

    const user = users.find(items => items._id === userId);
    console.log(user)
    return (
        <div>

            <div class="row">
                <div className="col-lg-7 col-sm-12">
                    <div className="details my-5  justify-content-center">

                        <h2 className="text-info">Name  :{user?.name.title} {user?.name.first} {user?.name.last}</h2>
                        <hr />
                        <h3 className='ms-5 my-5 mt-5'><img style={{ height: '300px', width: '200' }} className="img-fluid img-rounded" src={user?.picture.large} /></h3 >
                        <h3 className="text-muted">Email: {user?.email}</h3>
                        <h4 className="text-muted">Cell: {user?.cell}</h4>
                        <h5 className="text-muted">Country: {user?.location.country}</h5>
                        <h4 className="text-muted">Registered: {user?.registered.date}</h4>
                        <p></p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 my-5" >
                    <div className="my-5">
                        <h2>Hire Now</h2>
                        <div className="mx-auto my-5">
                            {/* <button onClick={handleButton} className="btn btn-info">Order Now</button> */}
                            <Link to="/orderdetails"> <button className="btn btn-info">Heires</button>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default UserDetails;