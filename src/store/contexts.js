import { createContext } from "react";
import config from "../config";

const ArchiveContext = createContext({
  archive: config.DEFAULT_NETWORK,
  setArchive: () => {},
});

export { ArchiveContext };
