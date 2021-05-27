import React, { useState } from "react"
import { Dropdown, Icon } from "semantic-ui-react"
import { db } from "../pages/firebase"

const getUsername = () => {
    return db.auth().currentUser.displayName
};

export const UserBanner = ({teamId, ...restProps}) => {
    const [username, setUsername] = useState(getUsername)

    const logOut = () => {
        return db.auth().signOut().then(() => {
            localStorage.clear()
            return window.location.href = '/login'
        })
    };

    return (
        <Dropdown id="user_settings" className="userProfileDropdownBtn" icon={null} 
            style={{marginLeft: 16}} text={ <div>
                <Icon style={{color: 'white'}} name="user" /> <span style={{marginLeft: '10'}} className="usernameText"> {username} </span></div> }>
            <Dropdown.Menu style={{width: '100%'}} >
                <Dropdown.Item style={{textAlign: 'center'}} onClick={logOut} text='Logout'  />
            </Dropdown.Menu>
        </Dropdown>
    )
}