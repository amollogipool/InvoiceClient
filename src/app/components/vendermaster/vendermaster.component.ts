import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-vendermaster',
  templateUrl: './vendermaster.component.html',
  styleUrls: ['./vendermaster.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VendermasterComponent implements OnInit {

  color: any = "#3f51b5";

  customers: any = {};

  ELEMENT_DATA: any = [] = [];
  dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['vendorid', 'vendorname', 'email', 'phno', 'panno', 'gstno', 'address', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private router: Router, private activateRoute: ActivatedRoute, private invoiceService: InvoiceService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  }

  /**
* @author Amol Dhamale
* getAllVender() to get the Vender Details.
*/
  getAllVender() {
    this.invoiceService.getAllVender().subscribe(res => {
      if (!res.error) {
        this.ELEMENT_DATA = res.result;
        console.log(this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }, error => {
      console.log("API error", error);
    });
  }

  ngOnInit() {
    this.getAllVender();
  }

  addNewVendor() {
    this.router.navigate(['./dashboard/invoiceform', 'create']);
  }

  viewInvoice(element) {
    this.router.navigate(['./dashboard/invoice', element.vendorid]);
  }

  editVendor(element) {
    this.router.navigate(['./dashboard/invoiceform', 'edit', element.vendorid]);
  }

  deleteVender(element) {
    this.invoiceService.DeleteVenderById(element).subscribe(res => {
      if (!res.error) {
        alert('Record Deleted Successfully');
        this.getAllVender();
      }
    }, error => {
      alert('Oops!! Something Went Wrong');
      console.log(error);
    });
  }

  getInvoices() {
    alert("this works");
  }

}

