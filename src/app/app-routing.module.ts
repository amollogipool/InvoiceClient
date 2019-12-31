import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceformComponent } from './components/invoiceform/invoiceform.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VendermasterComponent } from './components/vendermaster/vendermaster.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoicemasterComponent } from './components/invoicemaster/invoicemaster.component';
import { MyNavigationComponent } from './components/my-navigation/my-navigation.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'mynav', component: MyNavigationComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '', component: NavigationComponent,
        children: [
          { path: '', component: VendermasterComponent },
          { path: 'invoiceform/:method', component: InvoiceformComponent },
          { path: 'invoiceform/:method/:id', component: InvoiceformComponent },
          { path: 'invoicemaster', component: InvoicemasterComponent },
          { path: 'invoice/:id', component: InvoiceComponent },
        ]
      },
      // { path: 'invoice/:id', component: InvoiceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
