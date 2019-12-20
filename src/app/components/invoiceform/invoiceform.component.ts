import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from "@angular/forms";
import { Location, DatePipe } from '@angular/common';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoiceform',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.scss']
})
export class InvoiceformComponent implements OnInit {

  method = 'create';
  invoiceid = null;

  invoiceForm: any = {
    id: null,
    vendername: null,
    email: null,
    phno: null,
    panno: null,
    gstno: null,

    issuedate: null,
    duedate: null,
    item: null,
    price: null,
    qty: null,
    discount: null,
    amount: null,
    sgst: null,
    cgst: null,
    paid: null,
  }

  VenderName = new FormControl([Validators.required]);
  Email = new FormControl([Validators.required]);
  PhNo = new FormControl([Validators.required]);
  PanNo = new FormControl([Validators.required]);
  GstNo = new FormControl([Validators.required]);
  IssueDate = new FormControl([Validators.required]);
  DueDate = new FormControl([Validators.required]);
  Item = new FormControl([Validators.required]);
  Price = new FormControl([Validators.required]);
  Qty = new FormControl([Validators.required]);
  Discount = new FormControl([Validators.required]);
  Amount = new FormControl([Validators.required]);
  Sgst = new FormControl([Validators.required]);
  Cgst = new FormControl([Validators.required]);
  Paid = new FormControl([Validators.required]);

  constructor(private router: Router, private activateRoute: ActivatedRoute, private invoiceService: InvoiceService, private location: Location) {
    this.activateRoute.params.subscribe(param => {
      if (param['method']) {
        this.method = param['method'];
      }
      if (param['id']) {
        this.invoiceid = param['id'];
      }
      if (this.method == 'edit') {
        this.getEmployeeById(this.invoiceid);
      }
    })
  }

  /**
* getInventoryById() function to edit card 
* @param id 
* @author Amol Dhamale
*/
  getEmployeeById(id) {
    this.invoiceService.getProductById(id).subscribe(res => {
      if (!res.error) {
        this.invoiceForm = res.result;
      }
    }, error => {
      console.log("API Error")
    });
  }

  submit() {
    if (this.VenderName.valid && this.Email.valid && this.PhNo.valid && this.PanNo.valid && this.GstNo.valid && this.IssueDate.valid && this.DueDate.valid && this.Item.valid
      && this.Price.valid && this.Qty.valid && this.Discount.valid && this.Amount.valid && this.Sgst.valid && this.Cgst.valid && this.Paid.valid) {
      if (this.method == 'edit') {
        //update API
        this.invoiceService.updateProductById(this.invoiceForm).subscribe(res => {
          if (!res.error) {
            alert('Employee Updated Successfully');
            this.location.back();
          }
        },
          error => {
            alert('Oops! Something went wrong, Record has been not updated');
            console.log(error);
          });
      }
      if (this.method == 'create') {
        //Create API
        this.invoiceService.addNewProduct(this.invoiceForm).subscribe(res => {
          if (!res.error) {
            alert('Employee Created Successfully');
            this.location.back();
          }
        },
          error => {
            alert('API error while creating Employee!');
            console.log(error);
          });
      }
    } else {
      this.VenderName.markAsTouched();
      this.Email.markAsTouched();
      this.PhNo.markAsTouched();
      this.PanNo.markAsTouched();
      this.GstNo.markAsTouched();
      this.IssueDate.markAsTouched();
      this.DueDate.markAsTouched();
      this.Item.markAsTouched();
      this.Price.markAsTouched();
      this.Qty.markAsTouched();
      this.Discount.markAsTouched();
      this.Amount.markAsTouched();
      this.Sgst.markAsTouched();
      this.Cgst.markAsTouched();
      this.Paid.markAsTouched();
      alert('Please enter required fields');
    }
  }

  ngOnInit() {
  }

}
