import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from '../domain/booking-details';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {
  private baseURL="http://localhost:8080/bookingdetailsapi/addbookingdetail";

  constructor(private httpClient:HttpClient) { }

  addrequest(bookingDetails:BookingDetails){
    console.log("in addRequest()");
    return this.httpClient.post<boolean>(this.baseURL,bookingDetails);
  }
}
