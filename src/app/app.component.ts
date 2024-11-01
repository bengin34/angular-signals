import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateStore } from './store/state.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'signal-examples';

  private stateStore = inject(StateStore);

  authStatus = this.stateStore.authStatus;
  maintenanceStatus = this.stateStore.maintenanceStatus;
  connectionStatus = this.stateStore.connectionStatus;

  ngOnInit() {
    console.log('Initial States:', {
      auth: this.authStatus(),
      maintenance: this.maintenanceStatus(),
      connection: this.connectionStatus(),
    });
  }

  toggleAuth() {
    this.stateStore.setAuthStatus(!this.authStatus());
  }

  toggleMaintenance() {
    this.stateStore.setMaintenanceStatus(!this.maintenanceStatus());
  }
}
