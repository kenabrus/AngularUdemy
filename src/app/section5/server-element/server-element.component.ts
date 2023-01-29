import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element!: Server;
  @Input() name!: string;
  @ViewChild('heading') header!: ElementRef;
  @ContentChild('contentParagraph') paragraph!: ElementRef;

  constructor() { }

  ngOnChanges(): void {
    console.log("ngOnChanges()")
  }
  ngOnInit(): void {
    console.log("ngOnInit()")
    console.log("header " + this.header.nativeElement.textContent);
    console.log("content paragraph " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck()")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit()")
    console.log("content paragraph " + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked()")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit()")
    console.log("header " + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked()")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy()")
  }

}
