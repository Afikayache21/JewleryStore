import { createContext, useState } from 'react';

// Create the AdminContext
export const AdminContext = createContext();

// Create the AdminContextProvider component
export const AdminContextProvider = ({ children }) => {
    // Define the state for the admin
    const [admin, setAdmin] = useState({username: '', password: ''});

    // Provide the admin and actions to the children components
    return (
        <AdminContext.Provider
            value={ {
                admin,
                setAdmin
            } }
        >
            {children}
        </AdminContext.Provider>
    );
};

