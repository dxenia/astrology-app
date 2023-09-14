import { useState, useEffect } from 'react';

// Custom reusable hook for fetching API
export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        console.log(' fetch called');

        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (error) {
        // console.error(error);

        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
