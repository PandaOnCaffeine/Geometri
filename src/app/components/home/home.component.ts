import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
