const button = document.getElementById('NeW');
button.addEventListener('click', () => {
  createBrowserWindow();
});

function createBrowserWindow() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({
    height:100,
    width: 100
  });

  win.loadURL(url.format({

    pathname: path.join(__dirname, 'registrar.html'),
    protocol: 'file',
    slashes: true

  }))
}