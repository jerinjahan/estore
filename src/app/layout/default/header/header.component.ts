import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'layout-header',
	templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          nz-badge {
            margin-right: 20px;
            cursor:pointer;
          }
    
          [nz-icon] {
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 16px;
          }
        `
    ]
})
export class HeaderComponent implements OnInit {

    @ViewChild('stickyMenu') menuElement!: ElementRef;
    
    sticky: boolean = true;
    elementPosition: any;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    ngAfterViewInit(){
        this.elementPosition = this.menuElement.nativeElement.offsetTop+10;
    }
  
    @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.elementPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }
  
  }