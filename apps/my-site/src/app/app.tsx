import { PageTitle } from '@nxexp/header';
import { useEffect, useState } from 'react';
import { API_URL, ApiResponse } from '@nxexp/api-interface';

export function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    message: 'Loading...',
  });
  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setApiResponse);
  }, []);
  return (
    <div>
      <PageTitle />
      {apiResponse.message}
    </div>
  );
}

export default App;
