import React from "react";
import UsersList from "../components/UsersList"; 

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Zayn Malik', 
            image: 'https://stylesatlife.com/wp-content/uploads/2020/01/Zayn-Malik-Hairstyles-7.jpg', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;