import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  private userService = inject(HttpService<User[]>);

  data = this.userService.getData();
  error = this.userService.getError();
  loading = this.userService.isLoading();

  ngOnInit() {
    this.userService.get('https://jsonplaceholder.typicode.com/users');
  }
}
