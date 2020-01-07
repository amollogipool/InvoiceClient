import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MatTableDataSource } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
import { element } from 'protractor';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  vendorid: any;
  invoiceid: any;
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
    // item: null,
    // description: null,
    // price: null,
    // qty: null,
    // discount: null,
    // amount: null, 
    paymthd: null,
    issuedate: null,
    duedate: null,
    subtotal: null,
    sgst: null,
    cgst: null,
    amttax: null,
    paid: null
  }


  itemData: any = {
    item: null,
    description: null,
    price: null,
    qty: null,
    discount: null,
    amount: null,
  }

  subtotalAmount: any = 0;
  amountWithTax: any = 0.00;

  constructor(private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService) {
    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.vendorid = param['id'];
        this.invoiceid = param['id'];
        this.getVenderInvoiceById(this.vendorid);
        this.getInvoiceItemsById(this.invoiceid);
      }
    })
  }


  // getSubtotal(){
  //   var subtotal = 0.00;
  //   this.itemData.forEach(element, function(item, key){
  //     subtotal+=(item.qty * item.price);
  //    return subtotal;
  //   });
  // }
  /**
   * 
* getInventoryById() function to edit card 
* @param id 
* @author Amol Dhamale
*/
  getVenderInvoiceById(id) {
    this.invoiceService.getVenderInvoiceById(id).subscribe(res => {
      if (!res.error) {
        this.invoiceData = res.result;
        console.log("invoice data ", this.invoiceData);
      }
    }, error => {
      console.log("API Error");
    });
  }

  calculateAmount(itemData) {
    for (let i = 0; i < itemData.length; i++) {
      itemData[i].amount = (itemData[i].price * itemData[i].qty) - itemData[i].discount;
      this.itemData.amount = itemData[i].amount;
      this.subtotalAmount+=itemData[i].amount;
    }
  }

  getAmountTax(){
    this.amountWithTax = this.subtotalAmount + (this.subtotalAmount * (this.invoiceData.sgst / 100)) + (this.subtotalAmount * (this.invoiceData.cgst / 100));
    console.log("Amount with taxxx",this.amountWithTax);
  }

  getInvoiceItemsById(id) {
    this.invoiceService.getInvoiceItemsById(id).subscribe(res => {
      if (!res.error) {
        this.itemData = res.result;
        this.calculateAmount(this.itemData);
        this.getAmountTax();
        console.log("items data ", this.itemData);
      }
    }, error => {
      console.log("API Error");
    });
  }

  ngOnInit() {
  }

}
