
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
    createdAt: Date;
    trails: Trail[];
    reviews: Review[];
    photos: Photo[];

}