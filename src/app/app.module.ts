import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './materials/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxPrintModule } from 'ngx-print';
import { AppComponent } from './app.component';
import { InvoiceService } from './services/invoice.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceformComponent } from './components/invoiceform/invoiceform.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { VendermasterComponent } from './components/vendermaster/vendermaster.component';
import { InvoicemasterComponent } from './components/invoicemaster/invoicemaster.component';
import { MyNavigationComponent } from './components/my-navigation/my-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvoiceformComponent,
    NavigationComponent,
    InvoiceComponent,
    VendermasterComponent,
    InvoicemasterComponent,
    MyNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgxPrintModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [DatePipe,InvoiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [InvoiceformComponent]
})
export class AppModule { }
