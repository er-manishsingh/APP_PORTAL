import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { InvoiceSidebarComponent } from '../../shared/components/invoice/invoice-sidebar/invoice-sidebar.component';
import { InvoiceMainComponent } from '../../shared/components/invoice/invoice-main/invoice-main.component';
import { InvoiceListComponent } from '../../shared/components/invoice/invoice-list/invoice-list.component';
import { InvoiceMetricsComponent } from '../../shared/components/invoice/invoice-metrics/invoice-metrics.component';

@Component({
  selector: 'app-invoices',
  imports: [
    PageBreadcrumbComponent,
    InvoiceSidebarComponent,
    InvoiceMainComponent,
    InvoiceListComponent,
    InvoiceMetricsComponent,
  ],
  templateUrl: './invoices.component.html',
  styles: ``
})
export class InvoicesComponent {

}
