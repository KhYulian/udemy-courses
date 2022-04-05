import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customInterval = new Observable((subscriber) => {
      let count = 0;
      setInterval(() => {
        subscriber.next(count++);
        if (count === 3) subscriber.complete();
        if (count > 3) subscriber.error(new Error("Count is greater 3!"));
        // subscriber.error()
        // subscriber.complete()
      }, 1000);
    });

    this.firstObsSubscription = customInterval
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return `Round ${data}`;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          // alert(error.message)
        },
        () => {
          console.log("Completed!");
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
