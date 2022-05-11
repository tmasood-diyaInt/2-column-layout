import { useEffect, useState } from "react"
import { CONSTANTS } from "../../Helpers/Constants"

export default function ToggleButton({ title, state, setState, booleanKey }) {
    const [toggleActive, setToggleActive] = useState(true)

    const functionHandler = () => {
        setToggleActive(!toggleActive)
    }

    useEffect(() => {
        if (booleanKey === CONSTANTS.FIELDS.CREATE_PACKAGE_KEYS.STATUS) {
            if (toggleActive) setState({ ...state, [booleanKey]: "enabled" })
            else setState({...state, [booleanKey]: "disabled"})
        } else {
            setState({ ...state, [booleanKey]: toggleActive })
        }
    }, [toggleActive])

    return (
        <div
            onClick={functionHandler}
            className="toggle-btn">
            <div className={`${toggleActive && "toggle-active-track"} toggle-btn-track`}>
                <div className={`${toggleActive ? "toggle-active" : "toggle-button-disabled"}`}></div>
            </div>
            <p>{title}</p>
        </div>
    )
}