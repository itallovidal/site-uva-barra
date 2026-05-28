import { useState, useEffect } from 'react';

function HomePage() {
  const [healthStatus, setHealthStatus] = useState<string | null>(null);
  const [healthError, setHealthError] = useState<string | null>(null);

  useEffect(function fetchHealth() {
    async function doFetch() {
      try {
        const response = await fetch('/api/health');
        const data = await response.json();
        setHealthStatus(data.status);
      } catch {
        setHealthError('Failed to reach API');
      }
    }

    doFetch();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the application.</p>
      {healthStatus && <p>API: {healthStatus}</p>}
      {healthError && <p style={{ color: 'red' }}>{healthError}</p>}
    </div>
  );
}

export { HomePage };
