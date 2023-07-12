import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setIsSidebarOpen(false);
  };
  const closeAboutSidebar = () => {
    const scrollHeight = window.innerHeight * 0.6;
    window.scrollTo({
      top: scrollHeight,
      behavior: "instant",
    });
    setIsSidebarOpen(false);
  };
  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleAboutDropdown,
        aboutDropdownOpen,
        closeAboutSidebar,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
