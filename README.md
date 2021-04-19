# hacka
MayaMeet app a meeting management system. Its keeps the record of your upcoming video call meetings.
Its basically a todo type app, where you can add your upcoming meetings, search them by meeting organiser's name, and also delete them when you want to.

![MayaMeetApp](https://user-images.githubusercontent.com/66728108/115178593-41699b00-a0ef-11eb-9fa1-0720bf72a48f.gif)




I have implemented  the backend middelwares using ExpressJS and used Mongoose library to communicate with the MongoDB database hosted on Atlas.
Frontend is simply made with React and some other libraries like axois , react-router-dom .


These are the backend endpoints from which ,this app retrieves and posts data .

//GET list of meetings 
https://hackathon-maya.herokuapp.com/meet-details

//POST a meet detail
https://hackathon-maya.herokuapp.com/meet-details

//DELETE a specific meet detail
https://hackathon-maya.herokuapp.com/meet-details/:id
