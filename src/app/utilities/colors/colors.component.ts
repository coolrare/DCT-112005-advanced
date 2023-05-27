import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  // type: string | null = null;
  type = '';

  time = new Date();
  timer = interval(1000);
  subscription: Subscription | undefined;

  timer$ = interval(1000).pipe(
    tap(n => console.log(n)),
    map(_ => new Date())
  );


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // console.log(params.get('type'));
      this.type = params.get('type') || '';
    });

    // this.subscription = this.timer.subscribe((n) => {
    //   console.log(n);
    //   this.time = new Date();
    // });
  }

  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }
}
