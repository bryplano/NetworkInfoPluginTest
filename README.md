### Network-Info Test App

This application is meant to be used as a simple testing app for `cordova-plugin-network-information`.

To run the application (an `ionic-angular` v3.9.4 app using `cordova-android` 8.0.0):
- Download the application or clone it to a local directory
- Unzip the file (if needed)
- Run the following commands:
    - `npm install`
    - `npm run build`
    - `ionic cordova platform add android`
    - `ionic cordova run android` (with a physical Android device connected)

The app uses the event listeners to show an alert when there is a connection change from online to offline or vice-versa.

You can also use the button provided to check the current network info "type". See the [plugin repository](https://github.com/apache/cordova-plugin-network-information) for more.

```TypeScript
  onOfflineStatus() {
    alert('Device is now offline. This means the connection type should be "none".');
  }

  onOnlineStatus() {
    alert('Device is now online. See page for connectivity source.');
  }

  showNetworkConnectionTypeButtonClicked() {
    alert('Current Network Connection type: ' + this.currentNetwork.type);
  }
```