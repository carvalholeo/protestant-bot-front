import { useState, createContext } from "react";

export const OnlineOfflineContext = createContext();

function OnlineOfflineProvider({ children }) {
  const [online, setOnline] = useState(true);

  function changeOnlineStatus(online) {
    setOnline(online);
  }
  return (
    <OnlineOfflineContext.Provider value={{ online, changeOnlineStatus }}>
      {children}
    </OnlineOfflineContext.Provider>
  )
}

export default OnlineOfflineProvider;
