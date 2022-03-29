import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  DoCheck,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // emulated is default; also you can set none or shadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input("srvElement") element: {
    type: string;
    name: string;
    content: string;
  };
  @ViewChild("heading", { static: true }) heading: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {
    console.log("TEXT CONTENT " + this.heading.nativeElement.textContent);
  }
  ngOnDestroy(): void {}
}
