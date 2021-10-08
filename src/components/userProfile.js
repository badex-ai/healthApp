import React from 'react';



import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {

    const { user } = useAuth0();
    const { name, picture, email } = user;
    

    return (
        <div>
          {name},{picture},{email} 
        </div>
    )
}

export default UserProfile 
    


