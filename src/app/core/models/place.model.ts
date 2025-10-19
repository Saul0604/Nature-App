import { Trail } from "./trail.model";
import { Photo } from "./photo.model";
import { Review } from "./review.model";

export interface Amenity {
    id: number;
    name: string;
}

export interface Place{
    id: number;
    name : string;
    description:string;
    category:string;
    latitude:number;
    longitude:number;
    elevationMeters:number;
    accessible:boolean;
    entryFee:number;
    openingHours:string;
    createdAt?: Date;
    trails?: Trail[];
    reviews?: Review[];
    photos?: Photo[];
    amenities?: Amenity[];
}