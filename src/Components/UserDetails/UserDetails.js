import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const { userId } = useSearchParams();

    // Loading Data from Server
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=8')
            .then(res => res.json())
            .then(data => setUsers(data?.results))
    }, []);

    const order = users.find(items => items._id === userId);
    console.log(order)
    return (
        <div>

            <div class="row">
                <div className="col-lg-7 col-sm-12">
                    <div className="details my-5  justify-content-center">

                        <h2 className="text-info">Name</h2>
                        <hr />
                        <h3><img className="img-fluid img-rounded" src={EaxctItem[0]?.img} /></h3>
                        <h3 className="text-muted">{EaxctItem[0]?.type}</h3>
                        <h4 className="text-muted">Price : {EaxctItem[0]?.price}$</h4>
                        <p>{EaxctItem[0]?.discription}</p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 my-5" >
                    <div className="my-5">
                        <h2>Order Now</h2>
                        <div className="mx-auto my-5">
                            <button onClick={handleButton} className="btn btn-info">Order Now</button>
                            <Link to="/orderdetails"> <button className="btn btn-info">My-orders</button>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default UserDetails;