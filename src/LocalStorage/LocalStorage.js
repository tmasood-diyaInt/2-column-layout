export const getLocalItems = (item) => {
    const fetchedItem = JSON.parse(localStorage.getItem(item))
    return fetchedItem;
}

export const setItemsLocally = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item))
}

export const removeItemsLocally = (key)=>{
    localStorage.removeItem(key)
}

export const clearItemsLocally = ()=>{
    localStorage.clear()
}