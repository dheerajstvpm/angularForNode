import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angularForNode';
  backendText :any;
  private backendURL = "http://localhost:4000/api"

  constructor(private http: HttpClient) { }

  signupUser() {
    return this.http.get(this.backendURL)
  }

  ngOnInit() {
    this.signupUser().subscribe((res) => {
      console.log(res);

      this.backendText = res;
    })
  }
}
