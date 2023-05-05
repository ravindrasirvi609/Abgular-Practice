import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  @ViewChild('name', {static : true}) name?: ElementRef;
  // ngAfterViewInit(): void {
  //   const component = this.vcf.createComponent(RoomsComponent)
  //   component.instance.numberOfRomms = 50;
  // }
  // title = 'hotelinventory-app';
  // @ViewChild ( 'user', {read : ViewContainerRef}) vcf!: ViewContainerRef;

  ngOnInit(){
    if(this.name){
    this.name.nativeElement.innerText = "hiltone hotel"

    }
    
  }
}
