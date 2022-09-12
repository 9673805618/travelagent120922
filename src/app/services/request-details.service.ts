import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDetails } from '../domain/request-details';

@Injectable({
  providedIn: 'root'
})
export class RequestDetailsService {
  private baseURL: string ="http://localhost:8080/requestdetailsapi/requestdetails";
  private baseURL2: string ="http://localhost:8080/requestdetailsapi/addrequestdetail";
  private baseURL3: string ="http://localhost:8080/requestdetailsapi/managerrequestdetails";
  private baseURL4: string ="http://localhost:8080/requestdetailsapi/updaterequeststatus";
  private baseURL5: string ="http://localhost:8080/requestdetailsapi/travelagentrequestdetails";
  private baseURL6 : string ="http://localhost:8080/requestdetailsapi/validateslab";
  private baseURL7: string ="http://localhost:8080/requestdetailsapi/travelagentapprovedrequest";
  

  constructor(private httpClient : HttpClient) { }
  viewAllRequest(employeeId:number):Observable<RequestDetails[]>{
    console.log("in viewAllRequest()");
    
    return this.httpClient.get<RequestDetails[]>(this.baseURL+"/"+ employeeId);
  }
  addRequest(requestDetails:RequestDetails) : Observable<boolean>{
    console.log("in addRequest()");
    console.log(requestDetails);
    return this.httpClient.post<boolean>(this.baseURL2,requestDetails);
    
    
  }

  viewManagerRequest(employeeId : number):Observable<RequestDetails[]>{
    console.log("in viewManagerRequest()");
    return this.httpClient.get<RequestDetails[]>(this.baseURL3+"/"+employeeId);
    
  }

  updateRequestStatus(requestDetails:RequestDetails){
    console.log("in updateRequestStatus()");
    return this.httpClient.put<RequestDetails>(this.baseURL4 ,requestDetails);
  }
  viewTravelAgentRequest(requestDetails:RequestDetails) : Observable<RequestDetails[]>{
    console.log("in viewTravelAgentRequest()");
    return this.httpClient.get<RequestDetails[]>(this.baseURL5);
  
    
  }
  validateSlab(requestId : number){
    console.log("in validateSlab()");
    return this.httpClient.get<boolean>(this.baseURL6+"/"+requestId);

  }

  viewTravelAgentApprovedRequest(requestDetails:RequestDetails): Observable<RequestDetails[]>{
    console.log("in viewTravelAgentApprovedRequest()");
    return this.httpClient.get<RequestDetails[]>(this.baseURL7);
    
  }


}
