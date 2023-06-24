import React, { useEffect, useState } from 'react';
import './Profile.css'
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.id) {
      fetch(`https://dummyjson.com/users/${savedUser.id}`)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error('Failed to fetch user data');
          }
        })
        .then((data) => {
          setUser(data);
          localStorage.setItem('user', JSON.stringify({ ...savedUser, ...data }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div className='profile'>
      <h1>Profile</h1>
      {user ? (
        <div>
           
            <img src={user.image} alt={user.username} style={{width:'300px', height:'300px'}}></img>
          <p><h3>Username:</h3> {user.username}</p>
          <p><h3>Email:</h3> {user.email}</p>
          <p><h3>Phone Number:</h3> {user.phone}</p>
           
          <p><h3>Address:</h3> {user.address.address} <span> {user.address.city} City </span> <span>{user.address.state} state</span></p>
          <p><h3>Name:</h3> {user.firstName} {user.maidenName} {user.lastName}</p>
          <p><h3>Gender:</h3> {user.gender}</p>
          <p><h3>BirthDate:</h3> {user.birthDate}</p>
          <p><h3>Eye City:</h3> {user.eyeColor}</p>
          <p><h3>Hair Colour:</h3> {user.hair.color}</p>
          <p><h3>Hair Type:</h3> {user.hair.type}</p>
          <p><h3>Height:</h3> {user.height}cm</p>
          <p><h3>Weight:</h3> {user.weight}Kg</p>
          <p><h3>Blood Group:</h3> {user.bloodGroup}</p>
   <h2>User Credentials information:-</h2>
   <p><h3>Password:</h3> {user.password}</p>
    
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;