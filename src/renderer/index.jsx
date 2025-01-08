import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TopBar from './components/TopBar/TopBar.jsx';

const root = createRoot(document.body);
root.render(
    <TopBar />
  )  ;