export const saveToLocalStorage = (data, key) => {
    localStorage.setItem(key, data)
}


export const getItemFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const getAccessToken = () => {
    const token = getItemFromStorage('trackItAuth');
    if (!token) {
        return null;
    }

    return `Bearer ${token.token}`;
};
