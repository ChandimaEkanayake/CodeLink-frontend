import React, { useState } from 'react';
import { MinimizeRounded, CloseRounded, CropSquareRounded } from '@mui/icons-material';
import './TopBar.css';


const TopBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const [isMaximized, setIsMaximized] = useState(false);

  const menuItems = {
    File: ['Open Project', 'Clone Project', 'Open Folder'],
    Edit: ['Undo', 'Redo'],
    Help: ['Documentation']
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleMenuItemClick = (item) => {
    console.log(`Clicked: ${item}`);
    setActiveMenu(null);
  };

  // Handle window actions
  
  const handleCloseApp = () => {
    // Call the close-window method from the main process
    window.electron.ipcRenderer.send('close-window');
  };

  const handleMinimizeApp = () => {
    // Call the minimize-window method from the main process
    window.electron.ipcRenderer.invoke('minimize-window');
  };

  const handleMaximizeApp = () => {
    // Call the maximize-window method from the main process
    window.electron.ipcRenderer.invoke('toggle-maximize');
  };

  return (
    <div className="menu-bar">
      <div className="menu-section">
        {Object.entries(menuItems).map(([menu, items]) => (
          <div key={menu} className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleMenuClick(menu)}
            >
              {menu}
            </button>
            {activeMenu === menu && (
              <div className="dropdown-menu">
                {items.map((item) => (
                  <button
                    key={item}
                    className="dropdown-item"
                    onClick={() => handleMenuItemClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="logo">CODE LINK</div>

      <div className="window-controls">
        <button
          className="window-button"
          id="minimizeBtn"
          onClick={() => handleMinimizeApp()}
        >
          <MinimizeRounded fontSize="inherit" />
        </button>
        <button
          className="window-button"
          id="maximizeBtn"
          onClick={() => handleMaximizeApp()}
        >
          <CropSquareRounded fontSize="inherit" />
        </button>
        <button
          className="window-button close-button"
          id="closeBtn"
          onClick={() => handleCloseApp()}
        >
          <CloseRounded fontSize="inherit" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;