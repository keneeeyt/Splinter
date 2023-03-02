import React from 'react'
//Create a context object
// a context object as then name state is a data type of an object taht can be used to store information
// that can be shared to others component within the app.

const UserContext = React.createContext();

//THe "Provider" property of createCOntext allows other component to consume/ use the context object and supply
//the necessary information;
export const UserProvider = UserContext.Provider;

export default UserContext;
