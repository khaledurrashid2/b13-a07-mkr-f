import { createContext, useContext, useState } from "react";

// 1. Create the context
const AppContext = createContext();

// 2. Create a custom hook to use the context easily
export function useApp() {
  return useContext(AppContext);
}

// 3. Create the Provider component that wraps the whole app
export function AppProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  // This function adds a new entry to the timeline
  function addTimelineEntry(type, friendName) {
    const newEntry = {
      id: Date.now(),
      type: type,
      friendName: friendName,
      title: type + " with " + friendName,
      date: new Date().toISOString(),
    };

    setTimeline(function (oldTimeline) {
      return [newEntry, ...oldTimeline];
    });
  }

  return (
    <AppContext.Provider value={{ timeline, addTimelineEntry }}>
      {children}
    </AppContext.Provider>
  );
}
