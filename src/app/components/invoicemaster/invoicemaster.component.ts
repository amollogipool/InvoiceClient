import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoicemaster',
  templateUrl: './invoicemaster.component.html',
  styleUrls: ['./invoicemaster.component.scss']
})

export class InvoicemasterComponent implements OnInit {

  // vendorid: any;
  invoices: any = [] = [];
  // ELEMENT_DATA: any = [] = [];
  // dataSource = new MatTableDataSource();

  // public displayedColumns: string[] = ['invoiceid', 'paymthd', 'issuedate', 'duedate', 'subtotal', 'sgst', 'cgst', 'amttax', 'paid', 'action'];
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService) {

    // this.activatedRoute.params.subscribe(param => {
    //   if (param['id']) {
    //     this.vendorid = param['id'];
    //     this.getAllInvoicedata(this.vendorid);
    //   }
    // })

    // this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }


  /**
* getInventoryById() function to edit card 
* @param id 
* @author Amol Dhamale
*/
  getAllInvoicedata() {
    this.invoiceService.getAllInvoicedata().subscribe(res => {
      if (!res.error) {
        this.invoices = res.result;
        console.log("invoice master form ", this.invoices);
        // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      }
    }, error => {
      console.log("API Error");
    });
  }
  ngOnInit() {
    this.getAllInvoicedata();
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // public redirectToDetails = (id: string) => {

  // }

  // public redirectToUpdate = (id: string) => {

  // }

  // public redirectToDelete = (id: string) => {

  // }

}


