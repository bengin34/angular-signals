import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router)

  navigateToDetails(){
    this.router.navigate(['details', 1]);

  }
  navigateToUser(){
    this.router.navigate(['user']);

  }
}
