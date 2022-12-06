import React from "react";

function useLocalStorage(itemName, initialValue) {
const [error, setError] = React.useState(false);

const [loading, setLoading] = React.useState(true);

const [item, setItem] = React.useState(initialValue);
React.useEffect(() => {
    try {
    // simulamos que se esta cargando la data de la BD
    setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
        } else {
        parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
    }, 1000);
    } catch (error) {
    setError(error);
    }
});

const saveItem = (newItem) => {
    try {
    const jsonItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, jsonItem);
    setItem(newItem);
    } catch (error) {
    setError(error);
    }
};

return {
    item,
    saveItem,
    loading,
    error,
};
}

export {useLocalStorage};
