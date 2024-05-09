
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// {
//     "guests": [
//       {
//         "id": "1",
//         "name": "Ritika Philip",
//         "email": "ritikaphilip2000@gmail.com",
//         "password": "123"
//       },
//       {
//         "id": "2",
//         "name": "Shivam Raghuwanshi",
//         "email": "shivi11@gmail.com",
//         "password": "shivi11"
//       },
//       {
//         "id": "3",
//         "name": "Twinkle Solanki",
//         "email": "solankitwinkle32@gmail.com",
//         "password": "123"
//       },
//       {
//         "id": "4",
//         "name": "Shivam Raghuwanshi",
//         "email": "shivi@11gmail.com",
//         "password": "shivi"
//       },
//       {
//         "id": "5",
//         "name": "Itsme",
//         "email": "itsme@123gmail.com",
//         "password": "123456"
//       },
//       {
//         "id": "9",
//         "name": "Justin Johnson",
//         "email": "justin12@gmail.com",
//         "password": "007"
//       },
//       {
//         "id": "1577",
//         "name": "Ayush Parmar",
//         "email": "ayu@12",
//         "password": "123"
//       },
//       {
//         "id": "3dc2",
//         "checkin": "2024-05-15",
//         "checkout": "2024-05-22",
//         "guest": "2",
//         "rooms": "5"
//       }
//     ],
//     "stucomplain": [
//       {
//         "complain": "Large no of students in class result in less attention from the teacher ",
//         "ans": "Okay we'll change the batches",
//         "id": "1"
//       },
//       {
//         "complain": "Wifi is not working properly",
//         "ans": "Use ur own hotspot then",
//         "id": "2"
//       },
//       {
//         "complain": "internet not not working properly",
//         "ans": "We are working on it",
//         "id": "3"
//       },
//       {
//         "complain": "there is no internet in my classroom\nand also tv is not working",
//         "ans": "ohhhh i see",
//         "id": "4"
//       },
//       {
//         "complain": "Questions that wasn't covered in the lectures and notes was in exam. ",
//         "ans": "This is what teachers mesant to do Stop being smart and start studying",
//         "id": "5"
//       },
//       {
//         "complain": "Long duration of classes introduce a lack of interest in lessons",
//         "ans": "okkkk ok\n",
//         "id": "6"
//       },
//       {
//         "complain": "no class today",
//         "ans": "",
//         "id": "7"
//       },
//       {
//         "stuid": 1,
//         "complain": "wifi is not working thik krvaa k do ",
//         "ans": "okkkkk we will do something",
//         "id": "8"
//       },
//       {
//         "stuid": 6,
//         "complain": "I will not be able to attend further classes due some urgency",
//         "ans": "",
//         "id": "9"
//       }
//     ],
//     "adminuser": [
//       {
//         "id": "1",
//         "name": "admin",
//         "email": "admin@gmail.com",
//         "contact": 741554555,
//         "password": "admin123"
//       },
//       {
//         "id": "2",
//         "name": "adminisme",
//         "email": "itsme@123gmail.com",
//         "contact": 9685100437,
//         "password": "321"
//       }
//     ]
//   }
