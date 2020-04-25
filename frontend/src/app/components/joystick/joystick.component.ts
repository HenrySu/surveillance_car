import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Output, OnDestroy } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { skipUntil, takeWhile, takeUntil, mergeMap, map, tap, switchMap, switchMapTo, throttleTime, endWith } from 'rxjs/operators';
import { JoystickPosition, Vector2 } from 'src/app/models';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements AfterViewInit, OnDestroy {
  @ViewChild("joystickHandle") private joystickHandleElement: ElementRef;
  @Output() public joystickPositionPercentageVector$: Observable<Vector2>;
  joystickStart$: Observable<PointerEvent>;
  joystickStop$: Observable<Event>;
  unSubscribeVector: any;
  private get handleElement() {
    return this.joystickHandleElement.nativeElement;
  }
  
  private joystickWidth: number;
  private joystickHeight: number;

  constructor(private render: Renderer2) { }
  ngOnDestroy(): void {
    this.unSubscribeVector();
  }

  ngAfterViewInit(): void {
    [this.joystickWidth, this.joystickHeight] = [this.handleElement.offsetWidth, this.handleElement.offsetHeight];

    this.joystickStart$ = this.getEventStream(this.handleElement, "pointerdown");
    this.joystickStop$ = merge(
      this.getEventStream(document, "pointerup"),
      this.getEventStream(document, "pointercancel")
    );
    const joystickVector$ = this.getEventStream<PointerEvent>(this.handleElement, "pointermove")
      .pipe(map(event => this.getPercentageVector(event)));
    this.joystickPositionPercentageVector$ = this.joystickStart$.pipe(
      switchMapTo(joystickVector$.pipe(
        takeUntil(this.joystickStop$),
        endWith(new Vector2(0, 0)//the stop vector
        )))
    );

    this.unSubscribeVector = this.joystickPositionPercentageVector$.subscribe(vector => this.updateJoystickHandlePosition(vector));
  }

  private getPercentageVector(event: PointerEvent): Vector2 {
    const x = this.joystickWidth === 0 ? 0 : (event.offsetX / this.joystickWidth - 0.5) * 2;
    const y = this.joystickHeight === 0 ? 0 : (0.5 - event.offsetY / this.joystickHeight) * 2;
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

  private updateJoystickHandlePosition(vector:Vector2):void{

  }
}