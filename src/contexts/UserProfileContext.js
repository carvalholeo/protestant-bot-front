import { useState, createContext } from "react";

export const UserProfileContext = createContext();

function UserProfileProvider({ children }) {
  const [user, setUser] = useState({});

  function saveUser(user) {
    setUser(user);
  }
  return (
    <UserProfileContext.Provider value ={{ user, saveUser }}>
      {children}
    </UserProfileContext.Provider>
  )
}

export default UserProfileProvider;
