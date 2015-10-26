'use strict';

const app = require('app');
const path = require('path');
const dialog = require('dialog');
const NativeImage = require('native-image');

const appName = app.getName();
const template = [{
  label: 'Edit',
  submenu: [{
    label: 'Undo',
    accelerator: 'CmdOrCtrl+Z',
    role: 'undo'
  }, {
    label: 'Redo',
    accelerator: 'Shift+CmdOrCtrl+Z',
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    label: 'Cut',
    accelerator: 'CmdOrCtrl+X',
    role: 'cut'
  }, {
    label: 'Copy',
    accelerator: 'CmdOrCtrl+C',
    role: 'copy'
  }, {
    label: 'Paste',
    accelerator: 'CmdOrCtrl+V',
    role: 'paste'
  }, {
    label: 'Select All',
    accelerator: 'CmdOrCtrl+A',
    role: 'selectall'
  },
]}, {
  label: 'View',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: function(item, focusedWindow) {
      if (focusedWindow)
      focusedWindow.reload();
    }
  }, {
    label: 'Toggle Full Screen',
    accelerator: (function() {
      if (process.platform == 'darwin')
      return 'Ctrl+Command+F';
      else
      return 'F11';
    })(),
    click: function(item, focusedWindow) {
      if (focusedWindow)
      focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
    }
  }, {
    label: 'Toggle Developer Tools',
    accelerator: (function() {
      if (process.platform == 'darwin')
      return 'Alt+Command+I';
      else
      return 'Ctrl+Shift+I';
    })(),
    click: function(item, focusedWindow) {
      if (focusedWindow)
      focusedWindow.toggleDevTools();
    }
  },
]}, {
  label: 'Window',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  },
]}, {
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click: function() {
      require('shell').openExternal('https://github.com/importre/epp')
    }
  },
]}];

var darwinMenu = [{
  label: appName,
  submenu: [{
    label: 'About ' + app.getName(),
    click: function(item, focusedWindow) {
      var file = path.resolve(__dirname, 'assets/epp.png');
      var appIcon = NativeImage.createFromPath(file);
      dialog.showMessageBox(focusedWindow, {
        'type': 'info',
        'title': app.getName(),
        'message': app.getName() + ' ' + app.getVersion(),
        'icon': appIcon,
        'buttons': ['ok']
      });
    }
  }, {
    type: 'separator'
  }, {
    label: 'Hide',
    accelerator: 'Esc',
    selector: 'hide:'
  }, {
    type: 'separator'
  }, {
    label: 'Quit',
    accelerator: 'Cmd+Q',
    click() {
      app.quit();
    }
  }]
}]

var menu = template;
if (process.platform == 'darwin') {
  menu = darwinMenu.concat(template)
}

module.exports = menu;
