import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

//Component Imports
import TopBar from './components/TopBar/TopBar.jsx';
import VersionExplorerTab from './VersionExplorer/VersionExplorerTab.jsx';
import ChangesTabTopBar from './ChangesOfCommitsTab/ChangesTabTopBar.jsx';
import ChangesTab from './ChangesOfCommitsTab/ChangesTab.jsx';


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
      <div className="main-tab-right">
        <div className="main-top-tab demoFulltabRemoveLater">
          <div className="main-top-tab-header"> 
            <span className="main-top-tab-title">CHANGES</span>
            <ChangesTabTopBar/>  
          </div>
          <div className="main-top-tab-content"> 
            <ChangesTab />  
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )  ;