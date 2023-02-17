import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName: string = 'Hiltop Hotel';
  numberOfRomms = 10;
  hiderooms = false;
  selectedrooms?: RoomList;

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

  toggle() {
    this.hiderooms = !this.hiderooms;
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
}
