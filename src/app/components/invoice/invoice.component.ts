import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  vendorid : any;
  isActive = false;
  invoiceData: any = {
    id: null,
    vendorid: null,
    vendorname: null,
    email: null,
    phno: null,
    panno: null,
    gstno: null,
    address: null,

    item: null,
    description: null,
    price: null,
    qty: null,
    discount: null,
    amount: null,
    sgst: null,
    cgst: null,
    amttax: null,
    paymthd: null,
    issuedate: null,
    duedate: null,
    paid: null
  }

  constructor(private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService) {
    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.vendorid = param['id'];
        this.getVenderInvoiceById(this.vendorid);
      }
    })
  }

   /**
* getInventoryById() function to edit card 
* @param id 
* @author Amol Dhamale
*/
getVenderInvoiceById(id) {
  this.invoiceService.getVenderInvoiceById(id).subscribe(res => {
    if (!res.error) {
      this.invoiceData = res.result;
      console.log("invoice form ", this.invoiceData);
    }
  }, error => {
    console.log("API Error");
  });
}

  ngOnInit() {
  }

}
