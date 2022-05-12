
import { useEffect, useState } from "react"
import LEFT_SIDE_LIST from "./Views/left_side_list"
import {useLocation} from 'react-router-dom'



export default function LeftSide({ hideLeft, setHideLeft }) {
    const [isActive, setIsActive] = useState(window.location.pathname)

    
    return (
        <>
            {hideLeft && <div className='left-side-res' id='left-side-res'>
                <LEFT_SIDE_LIST
                    isActive={isActive}
                    
                />
            </div>
            }
            <div className='left-side'>
                <LEFT_SIDE_LIST
                    isActive={isActive}
                    
                />
            </div>
        </>
    )
}