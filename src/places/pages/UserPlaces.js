// import React from "react";

// import PlaceList from "../components/PlaceList";

// const DUMMY_PLACES = [
//     {
//         id: 'p1',
//         title: 'Empire State Building',
//         description: 'One of the most famous sky scrapers in the world',
//         imageUrl : 'https://www.esbnyc.com/sites/default/files/styles/on_3_cols_free_height/public/2019-11/Screen%20Shot%202019-11-12%20at%2015.56.59.png?itok=YMjDhMKZ',
//         address: '20 W 34th St., New York, NY 10001, United States',    
//         location: {
//             lat: 40.7480155,
//             lgn: -73.9847686
//         },
//         creator: 'u1'
//     },
//     {
//         id: 'p2',
//         title: 'Empire State Building',
//         description: 'One of the most famous sky scrapers in the world',
//         imageUrl : 'https://www.esbnyc.com/sites/default/files/styles/on_3_cols_free_height/public/2019-11/Screen%20Shot%202019-11-12%20at%2015.56.59.png?itok=YMjDhMKZ',
//         address: '20 W 34th St., New York, NY 10001, United States',    
//         location: {
//             lat: 40.7480155,
//             lgn: -73.9847686
//         },
//         creator: 'u2'
//     },
// ]

// const UserPlaces = () => {
    
//     return <PlaceList items={DUMMY_PLACES} />
// };

// export default UserPlaces;

import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;