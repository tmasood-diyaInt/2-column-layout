import { useEffect, useState } from "react";
import { createContext } from "react";
import {UsersAPI} from '../Services/Users';
import { getLocalItems,setItemsLocally } from "../LocalStorage/LocalStorage";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(getLocalItems('user'));
    const [changes, setChanges] = useState(false);

    useEffect(async(
    ) => {
        if (!currentUser || currentUser == {}) {
            setLoading(true);
            const user = await UsersAPI.fetchUser(); 
            if (user) {
            setCurrentUser(user);
            setItemsLocally('user', user);
            }
            setLoading(false);

        }
    }, [currentUser])
    const value = {
        //everything we need anywhere
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        changes,
        setChanges,
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;