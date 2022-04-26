import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef:ElementRef,private renderer: Renderer2) { }

  ngOnInit(){

    //commented for hostlistener implementation
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }

  //mouseenter is the event occuring on DOM
  @HostListener('mouseenter') mouseover(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }

  //mouseleave is the event occuring on DOM
  @HostListener('mouseleave') mouseLeave(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }

}
