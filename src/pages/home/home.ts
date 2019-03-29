import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentNetwork: Network;

  constructor(public navController: NavController, private network: Network) {
    this.currentNetwork = network;

    // Register event listeners
    document.addEventListener(`offline`, this.onOfflineStatus, false);
    document.addEventListener(`online`, this.onOnlineStatus, false);
  }

  ngOnInit() { }

  onOfflineStatus() {
    alert('Device is now offline. This means the connection type should be "none".');
  }

  onOnlineStatus() {
    alert('Device is now online. See page for connectivity source.');
  }

  showNetworkConnectionTypeButtonClicked() {
    alert('Current Network Connection type: ' + this.currentNetwork.type);
  }

}
