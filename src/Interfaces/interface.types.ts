export interface IPaintings {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}
export interface IAuthors {
  id: number;
  name: string;
}
export interface ILocations {
  id: number;
  location: string;
}
export interface IPropsCard {
  typeOfScreen: number;
  author: string;
  created: string;
  id: number;
  url: string;
  location: string;
  name: string;
}
export interface IPropsNav {
  typeOfScreen: number;
}
export interface IPropsPagination {
  totalPages: number;
  currentPage: number;
  setPage: Function;
}
export interface IPropsSearchAndFilters {
  typeOfScreen: number;
  setSearchParams: Function;
  setDisp: Function;
}
export interface IPropsFilterMenu {
  disp: boolean;
  typeOfScreen: number;
  setDisp: Function;
  setYearFrom: Function;
  setYearTo: Function;
  setArtist: Function;
  setLocation: Function;
  isLittle: boolean;
  authors: IAuthors[];
  locations: ILocations[];
}
export interface IStates {
  artistOpen: boolean;
  locationOpen: boolean;
  yearsOpen: boolean;
  artistsSelectOpen: boolean;
  locationsSelectOpen: boolean;
}
export interface IData {
  yearFrom: string;
  yearTo: string;
  artist: string;
  location: string;
}
