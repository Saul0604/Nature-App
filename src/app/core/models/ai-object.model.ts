export interface Hotel {
  NombreHotel: string;
  DireccionHotel: string;
  TelefonoHotel: string;
  SitioWebHotel: string;
}

export interface Restaurante {
  NombreRestaurante: string;
  DireccionRestaurante: string;
  TelefonoRestaurante: string;
  SitioWebRestaurante: string;
}

export interface AIAnalysisResponse {
  DatoCurioso: string;
  HotelesCercanos: Hotel[];
  RestaurantesCercanos: Restaurante[];
}
