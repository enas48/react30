import React from 'react'

export default function UserFeed({ user }) {
    return (
        <div className="card mx-auto mb-2" style={{ width: "28rem" }}>
            <div className="card-header font-weight-bold">
                User: {user?.login?.username}
            </div>

            <div className="card-body">
                <div className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <h5>{user?.name?.title} {user?.name?.first} {user?.name?.last}</h5>
                        <span>{user?.email}</span>
                    </div>
                    <img src={user?.picture?.medium} className="rounded mb-3 float-right" alt="..." />
                </div>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <p className="font-weight-bold mb-0">User for {user?.registered?.age} years</p>
                        <p className="mb-0">Age: {user?.dob?.age}</p>
                        <p className="mb-0">Nationality: {user?.nat}</p>
                        <p className="mb-0">Phone: {user?.phone}</p>
                    </div>
                    <div>
                        <p className="font-weight-bold mb-0">Address:</p>
                        <p className="mb-0">{user?.location?.street?.number} {user?.location?.street?.name}</p>
                        <p className="mb-0">{user?.location?.state}, {user?.location?.country} - {user?.location?.postcode}</p>
                    </div>

                </div>


            </div>
        </div>
    )
}
