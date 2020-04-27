import { AfterViewInit, Component, ElementRef, OnDestroy, Output, Renderer2, ViewChild, RendererStyleFlags2, Input } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { endWith, map, switchMapTo, takeUntil, throttleTime } from 'rxjs/operators';
import { Vector2 } from 'src/app/models';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements AfterViewInit, OnDestroy {
  @ViewChild("joystickHandle") private joystickHandleElement: ElementRef;
  @Output() public joystickPositionPercentageVector$: Observable<Vector2>;
  @Input() public throttleTime:number = 100;
  private unSubscribeVector: any;
  private get handleElement() {
    return this.joystickHandleElement.nativeElement;
  }

  private joystickWidth: number;
  private joystickHeight: number;
  private joystickInitialLeft: number;
  private joystickInitialTop: number;

  constructor(private render: Renderer2) { }
  ngOnDestroy(): void {
    this.unSubscribeVector();
  }

  ngAfterViewInit(): void {
    ({
      offsetWidth: this.joystickWidth,
      offsetHeight: this.joystickHeight,
      offsetLeft: this.joystickInitialLeft,
      offsetTop: this.joystickInitialTop
    } = this.handleElement);

    const joystickStart$ = this.getEventStream(this.handleElement, "pointerdown");
    const joystickStop$ = merge(
      this.getEventStream(document, "pointerup"),
      this.getEventStream(document, "pointercancel")
    );
    const joystickVector$ = this.getEventStream<PointerEvent>(this.handleElement, "pointermove")
      .pipe(map(event => this.getPercentageVector(event)));
    this.joystickPositionPercentageVector$ = joystickStart$.pipe(
      switchMapTo(joystickVector$.pipe(
        throttleTime(this.throttleTime),
        takeUntil(joystickStop$),
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

  private updateJoystickHandlePosition(vector: Vector2): void {
    const left = vector.x * this.joystickWidth / 2.5 + this.joystickInitialLeft;
    const top = -vector.y * this.joystickHeight / 2.5 + this.joystickInitialTop;
    this.render.setStyle(this.handleElement, "left", `${left}px`);
    this.render.setStyle(this.handleElement, "top", `${top}px`);
  }
}