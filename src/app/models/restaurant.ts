import { Review } from './review';

export class Restaurant {
    public name: string;
    public address: {
        city: string,
        area: string,
        street: string,
        number: number
    };
    public type: string;
    public rating: number;
    public averageBill: number;
    public reviews: Review[];
    public openingHoursWeekdays: string;
    public openingHoursWeekends: string;
    public contact: string;
    public details: string;
    public reservations: Date[];
    public photos: string[];
    public addedAt: Date;

    constructor(name: string, address: any, type: string,
        rating: number, averageBill: number,
        openingHoursWeekdays: string, openingHoursWeekends: string, contact: string, details: string) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.rating = rating;
        this.averageBill = averageBill;
        this.reviews = [];
        this.openingHoursWeekdays = openingHoursWeekdays;
        this.openingHoursWeekends = openingHoursWeekends;
        this.contact = contact;
        this.details = details;
        this.reservations = [];
        this.photos = [];
        this.addedAt = new Date();
    }
}
