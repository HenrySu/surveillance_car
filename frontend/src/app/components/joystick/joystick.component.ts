import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Output } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { skipUntil, takeWhile, takeUntil, mergeMap, map, tap, switchMap, switchMapTo, throttleTime } from 'rxjs/operators';
import { JoystickPosition, Vector2 } from 'src/app/models';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements OnInit, AfterViewInit {
  @ViewChild("joystickHandle") private joystickHandleElement: ElementRef;
  @Output() public joystickPositionPercentageVector$: Observable<Vector2>;
  joystickStart$: Observable<PointerEvent>;
  joystickStop$: Observable<Event>;
  joystickMove$: Observable<PointerEvent>;
  joystickDrag$: Observable<PointerEvent>;
  private get handleElement() {
    return this.joystickHandleElement.nativeElement;
  }

  constructor(private render: Renderer2) { }
  private joystickWidth: number;
  private joystickHeight: number;
  ngAfterViewInit(): void {
    [this.joystickWidth, this.joystickHeight] = [this.handleElement.offsetWidth, this.handleElement.offsetHeight];

    this.joystickStart$ = this.getEventStream(this.handleElement, "pointerdown");
    this.joystickStop$ = merge(
      this.getEventStream(document, "pointerup"),
      this.getEventStream(document, "pointercancel")
    );
    this.joystickMove$ = this.getEventStream<PointerEvent>(this.handleElement, "pointermove");
    this.joystickDrag$ = this.joystickStart$.pipe(
      switchMapTo(this.joystickMove$.pipe(takeUntil(this.joystickStop$)))
    );

    this.joystickPositionPercentageVector$ = this.joystickDrag$.pipe(map(event => this.getPercentageVector(event)));
    this.joystickPositionPercentageVector$.subscribe(x => console.log(x));
  }

  private getPercentageVector(event: PointerEvent): Vector2 {
    const x = this.joystickWidth === 0 ? 0 : event.offsetX / this.joystickWidth;
    const y = this.joystickHeight === 0 ? 0 : event.offsetY / this.joystickHeight;
    return new Vector2(x, y);
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