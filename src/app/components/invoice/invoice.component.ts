import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MatTableDataSource } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  vendorid: any;
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

  // ELEMENT_DATA: any = [] = [];
  // data = new MatTableDataSource();
  // displayedColumns: string[] = ['vendorid', 'description', 'price', 'qty','amount'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService) {
    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.vendorid = param['id'];
        this.getVenderInvoiceById(this.vendorid);
      }
    })

    // this.data = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }

  printPage() {
    window.print();
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
        // this.ELEMENT_DATA = res.result;
        // this.data = new MatTableDataSource(this.ELEMENT_DATA);
      }
    }, error => {
      console.log("API Error");
    });
  }

  ngOnInit() {
  }

}
