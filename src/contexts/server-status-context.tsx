import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { env } from "../env";
import { useIsMounted } from "../hooks/use-is-mounted";

interface ServerStatusContextProps {
  serverOnline: boolean | null;
  loading: boolean;
}

const ServerStatusContext = createContext<ServerStatusContextProps>({
  serverOnline: null,
  loading: true,
});

export function ServerStatusProvider({ children }: { children: React.ReactNode }) {
  const [serverOnline, setServerOnline] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useIsMounted()
  const { VITE_URL_SERVER, VITE_DEVELOP } = env;

  useEffect(() => {

    const url =
      VITE_DEVELOP.toLowerCase() === "true"
        ? "http://localhost:3333"
        : VITE_URL_SERVER;

    axios
      .get(`${url}/health`)
      .then(() => {
        if (isMounted.current) {
          setServerOnline(true);
        }
      })
      .catch(() => {
        if (isMounted.current) {
          setServerOnline(false);
        }
      })
      .finally(() => {
        if (isMounted.current) {
          setLoading(false);
        }
      });

  }, [VITE_URL_SERVER, VITE_DEVELOP]);

  return (
    <ServerStatusContext.Provider value={{ serverOnline, loading }}>
      {children}
    </ServerStatusContext.Provider>
  );
}

export const useServerStatus = () => useContext(ServerStatusContext);