import { app, BrowserWindow , ipcMain} from 'electron';
import started from 'electron-squirrel-startup';
const fs = require('fs');
const path = require('path');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minwidth: 800,
    minheight: 600,
    frame: true,
    frame: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Hide the default Menu bar
  mainWindow.setMenuBarVisibility(true);

  //Handle Window Button action
  ipcMain.on('close-window', () => {
    mainWindow.close();
  });

  ipcMain.handle('minimize-window', () => {
    mainWindow.minimize();
  });

  ipcMain.handle('toggle-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
      return false; // Indicate the window is restored
    } else {
      mainWindow.maximize();
      return true; // Indicate the window is maximized
    }
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
