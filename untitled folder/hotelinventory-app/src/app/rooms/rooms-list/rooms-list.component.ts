import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit,  OnChanges, DoCheck  {
  ngDoCheck(): void {
    console.log("on changes is Called");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
}
  ngOnInit(): void {
    
  }
  @Input() rooms: RoomList[] = [];
  @Input() title = 'Room List ';
  @Output() roomSelected = new EventEmitter<RoomList>();


  seLectroom(rooms: RoomList) {
    this.roomSelected.emit(rooms);
  }
}
