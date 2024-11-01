import { Component, inject, OnInit } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
routerService = inject(RouterService)
routeParams = this.routerService.getRouteParams()

ngOnInit(){
  console.log('Current Params:' , this.routeParams())
}

}
