import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  AdmissionData = [
    {id: 1, name: 'amol',dateOfBirth:new Date(),address:'pune'},
    {id: 2, name: 'soham',dateOfBirth:new Date(),address:'mumbai'},
    {id: 3, name: 'sandip',dateOfBirth:new Date(),address:'delhi'},
    {id: 4, name: 'sagar',dateOfBirth:new Date(),address:'gujrat'},
    {id: 1, name: 'amol',dateOfBirth:new Date(),address:'pune'},
    {id: 2, name: 'soham',dateOfBirth:new Date(),address:'mumbai'},
    {id: 3, name: 'sandip',dateOfBirth:new Date(),address:'delhi'},
    {id: 4, name: 'sagar',dateOfBirth:new Date(),address:'gujrat'},
    {id: 1, name: 'amol',dateOfBirth:new Date(),address:'pune'},
    {id: 2, name: 'soham',dateOfBirth:new Date(),address:'mumbai'},
    {id: 3, name: 'sandip',dateOfBirth:new Date(),address:'delhi'},
    {id: 4, name: 'sagar',dateOfBirth:new Date(),address:'gujrat'},
    
  ]
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  getAdmissionDetails(){
    return this.AdmissionData;
  }

 GetHttpHeaders() : HttpHeaders {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  return headers;
}

getAllProduct(): Observable<any>{                                
return this.httpClient.get(environment.getAllProduct, {headers: this.GetHttpHeaders()});
}

addNewProduct(param: any): Observable<any> {
return this.httpClient.post( environment.addNewProduct, param, { headers: this.GetHttpHeaders() });
}

getProductById(id): Observable<any> {
return this.httpClient.get(environment.getProductById + '/' + id, { headers: this.GetHttpHeaders() });
}

updateProductById(param: any): Observable<any> {
return this.httpClient.post(environment.updateProductById, param, { headers: this.GetHttpHeaders() });
}

deleteProductById(param: any): Observable<any> {
return this.httpClient.put(environment.deleteProductById, param, { headers: this.GetHttpHeaders() });
}

}
