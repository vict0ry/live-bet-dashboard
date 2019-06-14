import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
