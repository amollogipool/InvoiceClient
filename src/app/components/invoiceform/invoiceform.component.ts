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
  venderid = null;
  panelOpenState = false;

  invoiceForm: any = {
    id: null,
    venderid: null,
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

    // VenderName: null,
    // Email: null,
    // Phno: null,
    // Panno: null,
    // Gstno: null,
    // Address: null,
    // Item: null,
    // Description,
    // price: null,
    // qty: null,
    // discount: null,
    // amount: null,
    // sgst: null,
    // cgst: null,
    // amttax: null,
    // paymthd: null,
    // issuedate: null,
    // duedate: null,
    // paid: null

  VenderName = new FormControl([Validators.required]);
  Email = new FormControl([Validators.required]);
  PhNo = new FormControl([Validators.required]);
  PanNo = new FormControl([Validators.required]);
  GstNo = new FormControl([Validators.required]);
  Address = new FormControl([Validators.required]);

  Item = new FormControl([Validators.required]);
  Description = new FormControl([Validators.required]);
  Price = new FormControl([Validators.required]);
  Qty = new FormControl([Validators.required]);
  Discount = new FormControl([Validators.required]);
  Amount = new FormControl([Validators.required]);
  Sgst = new FormControl([Validators.required]);
  Cgst = new FormControl([Validators.required]);
  Amttax = new FormControl([Validators.required]);
  Paymthd = new FormControl([Validators.required]);
  IssueDate = new FormControl([Validators.required]);
  DueDate = new FormControl([Validators.required]);
  Paid = new FormControl([Validators.required]);

  constructor(private router: Router, private activateRoute: ActivatedRoute, private invoiceService: InvoiceService, private location: Location) {
    this.activateRoute.params.subscribe(param => {
      if (param['method']) {
        this.method = param['method'];
      }
      if (param['id']) {
        this.venderid = null;
      }
      if (this.method == 'edit') {
        this.getVenderById(this.venderid = null);
      }
    })
  }
  step = 0;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  /**
* getInventoryById() function to edit card 
* @param id 
* @author Amol Dhamale
*/
getVenderById(id) {
    this.invoiceService.getVenderById(id).subscribe(res => {
      if (!res.error) {
        this.invoiceForm = res.result;
      }
    }, error => {
      console.log("API Error")
    });
  } 
  submit() {
    if (this.VenderName.valid && this.Email.valid && this.PhNo.valid && this.PanNo.valid && this.GstNo.valid && this.Address.valid && this.Item.valid && this.Description.valid
      && this.Price.valid && this.Qty.valid && this.Discount.valid && this.Amount.valid && this.Sgst.valid && this.Cgst.valid && this.Amttax.valid && this.Paymthd.valid,this.IssueDate.valid,this.DueDate.valid, this.Paid.valid) {
      if (this.method == 'edit') {
        //update API
        this.invoiceService.updateVenderById(this.invoiceForm).subscribe(res => {
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
        this.invoiceService.addNewInvoice(this.invoiceForm).subscribe(res => {
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
