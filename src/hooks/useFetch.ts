import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        setLoading(true);

        const response = await fetch(url, { signal });
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }

      return () => controller?.abort();
    })();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
