import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-tasks',
  imports: [
    NavbarComponent
  ],
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.css'
})
export class CreateTasksComponent {

}
