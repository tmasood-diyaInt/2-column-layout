import { useState } from 'react'
import Header from '../Header';
import LeftSide from '../LeftSide';


const InstaHOC = (WrapperComponent) => {
    const HOC = () => {
        const [hideLeft, setHideLeft] = useState(false)
        return (
            <>
                <Header
                    hideLeft={hideLeft}
                    setHideLeft={setHideLeft}
                />
                <LeftSide
                    hideLeft={hideLeft}
                    setHideLeft={setHideLeft}
                />
                <WrapperComponent />
            </>
        )
    }
    return HOC
}

export default InstaHOC