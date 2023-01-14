import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StyletronProvider } from 'styletron-react';
import App from './App';
import { Client as Styletron } from 'styletron-engine-atomic';

const client = new Styletron({});
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StyletronProvider value={client}>
      <App />
    </StyletronProvider>
  </StrictMode>
);
