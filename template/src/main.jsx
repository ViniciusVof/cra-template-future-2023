import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';

export function Main() {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}
