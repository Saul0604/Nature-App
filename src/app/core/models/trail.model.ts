import { Place } from "./place.model";

export interface Trail{
    id:number;
    placeId:number;
    name:string;
    distanceKm:number;
    estimatedTimeMinutes:number;
    difficulty:string;
    path: string;
    isLoop:boolean;
    place?:Place; // opcional, por si incluyes la navegación
}