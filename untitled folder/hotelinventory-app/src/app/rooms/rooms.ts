export interface Room {
    TotalRooms?:number;
    AvailableRooms?:number;
    BookedRooms?: number;

}

export interface RoomList {
    RoomNumber : number;
    RoomType:string;
    amenities: string;
    price: number;
    photo:string;
    CheckinTime:Date;
    CheckoutTime:Date;
}