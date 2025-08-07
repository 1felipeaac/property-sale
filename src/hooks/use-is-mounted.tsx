import { useEffect, useRef } from "react";

/**
 * Hook que retorna uma referência indicando se o componente ainda está montado.
 */
export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}
