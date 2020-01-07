import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from "@angular/forms";
import { Location, DatePipe } from '@angular/common';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoiceform',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class InvoiceformComponent implements OnInit {

  method = 'create';
  vendorid: any;

  invoiceForm: any = {
    id: null,
    vendorid: null,
    vendorname: null,
    email: null,
    phno: null,
    panno: null,
    gstno: null,
    address: null,
    itemArray: null,
    item: null,
    description: null,
    price: null,
    qty: null,
    discount: null,
    amount: null,
    subtotal: null,
    sgst: null,
    cgst: null,
    amttax: null,
    paymthd: null,
    issuedate: null,
    duedate: null,
    paid: null
  }

  PaymentMethod: any = [
    { method: 'Credit Card' },
    { method: 'Cash' },
    { method: 'Cheque' },
    { method: 'UPI' },
    { method: 'PayPal' },
    { method: 'Bank-Wire' }
  ];

  PaidStatus: any = [
    { method: 'YES' },
    { method: 'NO' },
  ];

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};


  VendorName = new FormControl([Validators.required]);
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
  // Amttax = new FormControl([Validators.required]);
  Paymthd = new FormControl([Validators.required]);
  IssueDate = new FormControl([Validators.required]);
  DueDate = new FormControl([Validators.required]);
  Paid = new FormControl([Validators.required]);



  constructor(private router: Router, private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService, private location: Location, public datepipe: DatePipe) {
    this.activatedRoute.params.subscribe(param => {
      if (param['method']) {
        this.method = param['method'];
      }
      if (param['id']) {
        this.vendorid = param['id'];
      }
      if (this.method == 'edit') {
        this.getVenderInvoiceById(this.vendorid);
      }
    })

    if (this.newAttribute.amount != true) {
      // this.Amount.disable();
    }

  }

  // calculateAmount(itemData) {
  //   for (let i = 0; i < itemData.length; i++) {
  //     itemData[i].amount = (itemData[i].price * itemData[i].qty) - itemData[i].discount;
  //     this.itemData.amount = itemData[i].amount;
  //     this.subtotalAmount+=itemData[i].amount;
  //   }
  // }

  // getAmount() {
  //   this.invoiceForm.itemArray.amount = (this.invoiceForm.itemArray.price * this.invoiceForm.itemArray.qty) - this.invoiceForm.itemArray.discount;
  //   this.invoiceForm.amount = (this.invoiceForm.itemArray.price * this.invoiceForm.itemArray.qty) - this.invoiceForm.itemArray.discount;
  // }

  addFieldValue() {
    this.newAttribute.amount = (this.newAttribute.price * this.newAttribute.qty) - this.newAttribute.discount;
    console.log("The amount is:", this.newAttribute);
    if (this.newAttribute.amount == 'NaN') {
      this.newAttribute.amount = '';
    }
    this.fieldArray.push(this.newAttribute)
    this.newAttribute.method='';
    this.newAttribute = {};
    this.invoiceForm.itemArray = this.fieldArray;
    console.log(this.invoiceForm.itemArray);
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  /**
* getInventoryById() function to edit card 
* @param id 
* @author Amol Dhamale
*/
  getVenderInvoiceById(id) {
    this.invoiceService.getVenderInvoiceById(id).subscribe(res => {
      if (!res.error) {
        this.invoiceForm = res.result;
        console.log("invoice form ", this.invoiceForm);
      }
    }, error => {
      console.log("API Error");
    });
  }


  disableFieldsWhileEdit() {
    this.Item.disable();
    this.Description.disable();
    this.Price.disable();
    this.Qty.disable();
    this.Discount.disable();
    this.Amount.disable();
    this.Sgst.disable();
    this.Cgst.disable();
    this.Paymthd.disable();
    this.IssueDate.disable();
    this.DueDate.disable();
    this.Paid.disable();
  }

  submit() {
    this.invoiceForm.issuedate = this.datepipe.transform(this.invoiceForm.issuedate, 'yyyy-MM-dd');
    this.invoiceForm.duedate = this.datepipe.transform(this.invoiceForm.duedate, 'yyyy-MM-dd');
    if (this.VendorName.valid && this.Email.valid && this.PhNo.valid && this.PanNo.valid && this.GstNo.valid && this.Address.valid && this.Item.valid && this.Description.valid
      && this.Price.valid && this.Qty.valid && this.Discount.valid && this.Amount.valid && this.Sgst.valid && this.Cgst.valid && this.Paymthd.valid, this.IssueDate.valid, this.DueDate.valid, this.Paid.valid) {
      if (this.method == 'edit') {
        //update API
        this.invoiceService.addNewInvoiceByVendorId(this.invoiceForm).subscribe(res => {
          if (!res.error) {
            alert('Invoive Created  Successfully');
            this.location.back();
          }
        },
          error => {
            alert('Oops! Something went wrong, Invoice has been not created');
            console.log(error);
          });
      }
      if (this.method == 'create') {
        //Create API.
        this.invoiceForm.itemArray = this.fieldArray;
        console.log(this.invoiceForm);
        this.invoiceService.addNewInvoice(this.invoiceForm).subscribe(res => {
          if (!res.error) {
            alert('Customer Created Successfully');
            console.log(this.invoiceForm);
            // console.log("field array",this.fieldArray);
            this.location.back();
          }
        },
          error => {
            alert('API error while creating Customer!');
            console.log(error);
          });
      }
    } else {
      this.VendorName.markAsTouched();
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
