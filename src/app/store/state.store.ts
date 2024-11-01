import { Injectable, signal, WritableSignal } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class StateStore {

    private isAuth: WritableSignal<boolean> = signal(false)
    private isMaintanence: WritableSignal<boolean> = signal(false)
    private isConnected: WritableSignal<boolean> = signal(navigator.onLine)


    get authStatus(){
        return this.isAuth
    }
    get maintenanceStatus(){
        return this.isMaintanence
    }
    get connectionStatus(){
        return this.isConnected
    }


    setAuthStatus(status:boolean){
        return this.isAuth.set(status)
    }
    setMaintenanceStatus(status:boolean){
        return this.isMaintanence.set(status)
    }
    setConnectionStatus(status:boolean){
        return this.isConnected.set(status)
    }


    constructor() {
        window.addEventListener('online', () => this.setConnectionStatus(true));
        window.addEventListener('offline', () => this.setConnectionStatus(false));
      }

}