import React, {useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import toast, { Toast } from 'react-hot-toast';
import UserContext from '../UserContext';

function Profile() {
    const [avatar, setAvatar] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [friends, setFriends] = useState('');
    const [occupation, setOccupation] = useState('');
    const {user} = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
            fetch(`http://localhost:3003/user/${id}`)
            .then(result => result.json())
            .then(data => {
                setfirstName(data.firstName);
                setLastName(data.lastName);
                setLocation(data.location);
                setOccupation(data.occupation);
                setFriends(data.friends);

            })
    },[id])

  return (
    <div className='xl:container xl:mx-auto'>
        <div className='flex flex-col justify-center items-center space-y-10'>
        <div className='profile-pic'>
            <img src={avatar} />
            <form>
                <input type='file' />
                <button>Change profile picture</button>
            </form>
        </div>
        <div className='information'>
        <h4>{firstName} {" "} {lastName}</h4>
        <h4>{location}</h4>
        <h4>{occupation}</h4>
        <h4>{friends}</h4>
        <button>Edit Information</button>
        </div>
        </div>
    </div>
  )
}

export default Profile