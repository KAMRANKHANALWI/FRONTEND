import React from "react";
import UsersList from "../components/UsersList"; 

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Zayn Malik', 
            image: 'https://manilashaker.com/wp-content/uploads/2015/03/zayn-malik-confused-photo.jpg', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;