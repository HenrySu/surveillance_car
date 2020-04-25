import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { skipUntil, takeWhile, takeUntil, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements OnInit, AfterViewInit {
  @ViewChild("joystickHandle") private joystickHandleElement: ElementRef;
  joystickStart$: Observable<PointerEvent>;
  joystickStop$: Observable<PointerEvent>;
  joystickMove$: Observable<PointerEvent>;
  joystickDrag$: Observable<PointerEvent>;
  // joystickMove$: Observable<PointerEvent>;
  private get HandleElement() {
    return this.joystickHandleElement.nativeElement;
  }

  constructor(private render: Renderer2) { }

  ngAfterViewInit(): void {
    this.joystickStart$ = fromEvent(this.HandleElement, "pointerdown");
    this.joystickStop$ = fromEvent(this.HandleElement, "pointerup");
    this.joystickMove$ = fromEvent(this.HandleElement, "pointermove");

    this.joystickDrag$ = this.joystickStart$.pipe(
      mergeMap(_=> this.joystickMove$.pipe(takeUntil(this.joystickStop$)))
    );
  }

  ngOnInit(): void {
  }


}
