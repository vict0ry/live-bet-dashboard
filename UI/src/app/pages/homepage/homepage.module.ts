import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { BetgridComponent } from './components/betgrid/betgrid.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomepageComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [HomepageComponent, BetgridComponent, CheckoutCartComponent]
})
export class HomepageModule {}
