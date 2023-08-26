import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName: string = 'Hiltop Hotel';
  numberOfRomms = 10;
  hiderooms = false;
  selectedrooms?: RoomList;
  @ViewChild(HeaderComponent) headerComponent?: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildren?: QueryList<HeaderComponent>;

  rooms: Room = {
    TotalRooms: 20,
    AvailableRooms: 10,
    BookedRooms: 5,
  };

  roomlist: RoomList[] = [
    {
      RoomNumber: 1,
      RoomType: 'luxiary full comfertable',
      amenities: 'Air condisoner',
      price: 500,
      photo: 'sts',
      CheckinTime: new Date('12-Nov-2023'),
      CheckoutTime: new Date('12-Nov-2023'),
    },
    {
      RoomNumber: 2,
      RoomType: 'luxiary',
      amenities: 'Air condisoner, proper lighting',
      price: 1500,
      photo: 'sts',
      CheckinTime: new Date('12-Nov-2023'),
      CheckoutTime: new Date('12-Nov-2023'),
    },
    {
      RoomNumber: 3,
      RoomType: 'luxiary gold room',
      amenities: 'Air condisoner',
      price: 700,
      photo: 'sts',
      CheckinTime: new Date('12-Nov-2023'),
      CheckoutTime: new Date('12-Nov-2023'),
    },
  ];
  title = ' this is the title of the the  hotel inventry ';

  toggle() {
    this.hiderooms = !this.hiderooms;
    this.title =
      ' this is the title of the hotel bla bla bla bla bla bla bla bla bla bla';
  }
  select(rooms: RoomList) {
    this.selectedrooms = rooms;
  }
  addRoom() {
    const room: RoomList = {
      RoomNumber: 4,
      RoomType: 'luxiary full comfertable',
      amenities: 'Air condisoner',
      price: 500,
      photo: 'sts',
      CheckinTime: new Date('18-march-2025'),
      CheckoutTime: new Date('18-march-2025'),
    };
    // this.roomlist.push(room)
    this.roomlist = [...this.roomlist, room];
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.headerComponent) {
      this.headerComponent.title = 'Room Viewer';
    }
    if (this.headerChildren) {
      console.log((this.headerChildren.last.title = 'hehy'));
    }
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
}
