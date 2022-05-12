
import { useEffect, useState } from "react"
import LEFT_SIDE_LIST from "./Views/left_side_list"
import {useLocation} from 'react-router-dom'



export default function LeftSide({ hideLeft, setHideLeft }) {
    const location = useLocation();
    const [sideMenuType, setSideMenuType] = useState([])
    const [isActive, setIsActive] = useState(window.location.pathname)

    
    return (
        <>
            {hideLeft && <div className='left-side-res' id='left-side-res'>
                <LEFT_SIDE_LIST
                    menuType={sideMenuType}
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            </div>
            }
            <div className='left-side'>
                <LEFT_SIDE_LIST
                    menuType={sideMenuType}
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            </div>
        </>
    )
}