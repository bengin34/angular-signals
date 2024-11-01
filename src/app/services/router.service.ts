import { Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RouterService {
  // private routeParamsSubject = new BehaviorSubject<Params>({})
  // routeParams$: Observable<Params> = this.routeParamsSubject.asObservable()

  private routeParams = signal<Params>({})


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.listenToRouteChanges()
   }


   private listenToRouteChanges(){
   this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
   ).subscribe(() => {
    const params = this.activatedRoute.firstChild?.snapshot.params || this.activatedRoute.snapshot.params;
    this.routeParams.set(params)
   })
   }

   getRouteParams(){
    return this.routeParams
   }

}
