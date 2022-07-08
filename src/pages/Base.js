import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import config from "../config";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import ArchiveInfo from "../sections/Home/ArchiveInfo";
import { ArchiveContext } from "../store/contexts";

const { SUBSQUID_ARCHIVE_REGISTRY, DEFAULT_ARCHIVE } = config;

export default function Base() {
  const [isArchiveListCollapsed, setIsArchiveListCollapsed] = useState(true);
  const [isMobileMenuCollapsed, setIsMobileMenuCollapsed] = useState(true);
  const [archives, setArchives] = useState([]);
  const toggleIsArchiveListCollapsed = () =>
    setIsArchiveListCollapsed(
      (isArchiveListCollapsed) => !isArchiveListCollapsed
    );
  const toggleIsMobileMenuCollapsed = () =>
    setIsMobileMenuCollapsed((isMobileMenuCollapsed) => !isMobileMenuCollapsed);
  const [archive, setArchive] = useState(DEFAULT_ARCHIVE);
  const contextValue = { archive, setArchive };

  useEffect(() => {
    let isMounted = true;
    try {
      const getArchives = async () => {
        const response = await fetch(SUBSQUID_ARCHIVE_REGISTRY);
        const data = await response.json();

        if (isMounted) {
          setArchives(data.archives);
        }
      };

      getArchives();
    } catch (err) {
      console.log("Error: ", err);
    }

    return () => (isMounted = false);
  }, []);

  return (
    <ArchiveContext.Provider value={contextValue}>
      <div className="app">
        <Header
          isArchiveListCollapsed={isArchiveListCollapsed}
          toggleIsArchiveListCollapsed={toggleIsArchiveListCollapsed}
          toggleIsMobileMenuCollapsed={toggleIsMobileMenuCollapsed}
          isMobileMenuCollapsed={isMobileMenuCollapsed}
          setIsMobileMenuCollapsed={setIsMobileMenuCollapsed}
          archives={archives}
        />
        <main className="app-main">
          <div className="wrapper">
            <div className="page">
              <ArchiveInfo />
              <Outlet />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </ArchiveContext.Provider>
  );
}
