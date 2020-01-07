import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  GetHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return headers;
  }

  // addNewInvoiceItems(param: any): Observable<any> {
  //   console.log("Add items from Service", param);
  //   return this.httpClient.post(environment.addNewInvoiceItems, param, { headers: this.GetHttpHeaders() });
  // }

  // deleteInvoiceItemById(param: any): Observable<any> {
  //   return this.httpClient.delete(environment.deleteInvoiceItemById, param);
  // }

  addNewInvoice(param: any): Observable<any> {
    console.log("Add Vendor from Service", param);
    return this.httpClient.post(environment.addNewInvoice, param, { headers: this.GetHttpHeaders() });
  }

  addNewInvoiceByVendorId(param:any): Observable<any> {
   return this.httpClient.post(environment.addNewInvoiceByVendorId, param, { headers: this.GetHttpHeaders() });
  }
  
  getAllInvoice(): Observable<any> {
    return this.httpClient.get(environment.getAllInvoice, { headers: this.GetHttpHeaders() });
  }

  getAllVender(): Observable<any> {
    return this.httpClient.get(environment.getAllVender, { headers: this.GetHttpHeaders() });
  }

  getVenderInvoiceById(id): Observable<any> {
    return this.httpClient.get(environment.getVenderInvoiceById + '/' + id, { headers: this.GetHttpHeaders() });
  }

  getInvoiceItemsById(id): Observable<any> {
    return this.httpClient.get(environment.getInvoiceItemsById + '/' + id, { headers: this.GetHttpHeaders() });
  }
  
  updateVenderById(param: any): Observable<any> {
    return this.httpClient.post(environment.updateVenderById, param, { headers: this.GetHttpHeaders() });
  }

  DeleteVenderById(param: any): Observable<any> {
    return this.httpClient.put(environment.DeleteVenderById, param, { headers: this.GetHttpHeaders() });
  }

  getAllInvoicedata(): Observable<any> {
    return this.httpClient.get(environment.getAllInvoicedata, { headers: this.GetHttpHeaders() });
  }
  

}
