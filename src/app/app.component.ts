import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-reddit-clone';
  sub: Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.sub =
      this.http.get('https://reddit-spring.herokuapp.com/api/auth/test', {responseType: "text"})
        .subscribe(result => {
          console.log("result is ", result)
        }, error => {
          console.log('error is', error);
        })
  }

  ngOnDestroy(): void {

    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
