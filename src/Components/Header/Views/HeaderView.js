import React from 'react'
import { Images } from '../../../Assets/Images/Images'
import { CONSTANTS } from '../../../Helpers/Constants'
import { capitalizeFirstLetter } from '../../../Helpers/Helper'

export default function HeaderView({ logOut, setLogOut, logOutFunction, hideLeft, setHideLeft, userFirstName, userType }) {
    return (
        <div className="header">
            <div className="lefterSide">
                <div className='hamburger-menu' onClick={()=>setHideLeft(!hideLeft)}><img src={Images.hamburger_menu} alt='hamburger'/></div>
                <div className="logo">
                    <img src={Images.user_logo} alt="logo" />
                    
                </div>
            </div>
            <div className="righterSide">
                <span className="userProfile pointerCursor" onClick={() => setLogOut(!logOut)}>
                    <p>{userFirstName ?? 'name'}</p>
                    <p><img src={Images.user_logo} alt='log-out' /></p>
                </span>
                {logOut && <div className='log-out-btn' onClick={logOutFunction}>
                    {CONSTANTS.STRINGS_LIST.LOG_OUT}
                </div>}
            </div>

        </div>
    )
}
