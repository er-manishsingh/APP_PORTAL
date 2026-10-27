import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title: 'Dashboard | Examora | PORTAL',
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title: 'Calendar | Examora | PORTAL'
      },
      {
        path:'profile',
        component:ProfileComponent,
        title: 'Profile | Examora | PORTAL'
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title: 'Form Elements | Examora | PORTAL'
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title: 'Basic Tables | Examora | PORTAL'
      },
      {
        path:'blank',
        component:BlankComponent,
        title: 'Blank Page | Examora | PORTAL'
      },
      // support tickets
      {
        path:'invoice',
        component:InvoicesComponent,
        title: 'Invoices | Examora | PORTAL'
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title: 'Line Chart | Examora | PORTAL'
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title: 'Bar Chart | Examora | PORTAL'
      },
      {
        path:'alerts',
        component:AlertsComponent,
        title: 'Alerts | Examora | PORTAL'
      },
      {
        path:'avatars',
        component:AvatarElementComponent,
        title: 'Avatars | Examora | PORTAL'
      },
      {
        path:'badge',
        component:BadgesComponent,
        title: 'Badges | Examora | PORTAL'
      },
      {
        path:'buttons',
        component:ButtonsComponent,
        title: 'Buttons | Examora | PORTAL'
      },
      {
        path:'images',
        component:ImagesComponent,
        title: 'Images | Examora | PORTAL'
      },
      {
        path:'videos',
        component:VideosComponent,
        title: 'Videos | Examora | PORTAL'
      },
    ]
  },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title: 'Sign In | Examora | PORTAL'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title: 'Sign Up | Examora | PORTAL'
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
    title: 'Page Not Found | Examora | PORTAL'
  },
];
