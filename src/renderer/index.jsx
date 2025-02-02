import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TopBar from './components/TopBar/TopBar.jsx';
import VersionExplorerTab from './components/VersionExplorer/VersionExplorerTab.jsx';
import './index.css';

const root = createRoot(document.body);
root.render(
  <>
  <div class="app-wrapper">
    <TopBar />
    <div className="main-container">
      <div className="main-tab-left">
        <VersionExplorerTab />
      </div>
      <div className="separator"></div>
      <div className="main-tab-right">tab 02</div>
    </div>
  </div>
  </>
  )  ;