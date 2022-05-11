import React, { useState, useContext } from 'react'
import HeaderView from './Views/HeaderView'
// import { logOut } from '../../Firebase/GeneralHandlers'
import { UserContext } from '../../Context/UserContext'

export default function Header({ hideLeft, setHideLeft }) {
    const { currentUser, setCurrentUser, setChanges } = useContext(UserContext)
    const [logOutBtn, setLogOutBtn] = useState(false)
    const userName = currentUser?.name
    const userType = currentUser?.userType

    return (
        <HeaderView
            userFirstName={userName}
            logOut={logOutBtn}
            setLogOut={setLogOutBtn}
            logOutFunction={() => {}}
            hideLeft={hideLeft}
            setHideLeft={setHideLeft}
            userType={userType}
        />
    )
}
