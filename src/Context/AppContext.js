import React, { useState } from 'react';

export const AppContext = React.createContext();
const Provider = AppContext.Provider;

const AppProvider = ({ children }) => {
    const clientId = '139086741958-lv1nmqlctmk7eicomatblholk7g43hnd.apps.googleusercontent.com';//process.env.REACT_APP_CLIENT_ID;
    // const jobId = "2750a900-33f6-4a21-a3cf-67dc1b88f821";
    const jobId = "ab817f5b-d849-4245-a89b-af7176486e06";
    // const clientId = "158021832195-7qv0itmfqeoo4h4412ja78ie8dvtdk81.apps.googleusercontent.com";
    // const clientId = "468435128694-h7airr5ad5ek4mtqm99dpdbr6bhq4gsc.apps.googleusercontent.com";
    // const clientId = "149605919534-0upgmt8b6k97dt4c2dcd6e6l6vnaej7i.apps.googleusercontent.com";
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [configurationInfo, setConfigurationInfo] = useState({});
    const [userProfile, setUserProfile] = useState({});

    const data = {
        clientId,
        jobId,
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
        loading,
        setLoading,
        configurationInfo,
        setConfigurationInfo,
        userProfile,
        setUserProfile
    };

    return (
        <Provider value={data}>{children}</Provider>
    )
}

export default AppProvider;