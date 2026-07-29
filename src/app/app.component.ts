import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('ngOnInit');
  }
}
