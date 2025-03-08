import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Wrap your app with BrowserRouter

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>  {/* Enable routing */}
        <App />  {/* Your app is now ready to route */}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
