import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { skipUntil, takeWhile, takeUntil, mergeMap, map, tap, switchMap, switchMapTo, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements OnInit, AfterViewInit {
  @ViewChild("joystickHandle") private joystickHandleElement: ElementRef;
  joystickStart$: Observable<PointerEvent>;
  joystickStop$: Observable<Event>;
  joystickMove$: Observable<PointerEvent>;
  joystickDrag$: Observable<PointerEvent>;
  // joystickMove$: Observable<PointerEvent>;
  private get HandleElement() {
    return this.joystickHandleElement.nativeElement;
  }

  constructor(private render: Renderer2) { }

  ngAfterViewInit(): void {
    this.joystickStart$ = this.getEventStream(this.HandleElement, "pointerdown");
    this.joystickStop$ = merge(
      this.getEventStream(document, "pointerup"),
      this.getEventStream(document, "pointercancel")
    );
    this.joystickMove$ = this.getEventStream<PointerEvent>(this.HandleElement, "pointermove").pipe(throttleTime(200));
    this.joystickDrag$ = this.joystickStart$.pipe(
      switchMapTo(this.joystickMove$.pipe(takeUntil(this.joystickStop$)))
    );

    this.joystickDrag$.subscribe(x => console.log(x.pageX))
  }

  private getEventStream<T extends Event>(nativeElement: any, eventName: string): Observable<T> {
    return <Observable<T>>fromEvent(nativeElement, eventName)
      .pipe(map(this.stripDefault));
  }

  private stripDefault(event: Event): Event {
    event.preventDefault();
    return event;
  }

  ngOnInit(): void {
  }


}