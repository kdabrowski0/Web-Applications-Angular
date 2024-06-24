import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { NavComponent } from './layout/nav/nav.component';
import { UserDetailsComponentComponent } from './layout/user-details-component/user-details-component.component';
import { StoperComponent } from './layout/stoper/stoper.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { ModelsComponent } from './shared/models/models.component';
import { EnumsComponent } from './shared/enums/enums.component';
import { AlertComponent } from './products/alert/alert.component';
import { ProductAmountComponent } from './products/product-amount/product-amount.component';
import { ProductFormatPipe } from './pipes/product-format.pipe';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { LastAddedProductComponent } from './products/last-added-product/last-added-product.component';
registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NavComponent,
    UserDetailsComponentComponent,
    StoperComponent,
    ProductListComponent,
    ProductFormComponent,
    ConfirmationModalComponent,
    ModelsComponent,
    EnumsComponent,
    AlertComponent,
    ProductAmountComponent,
    ProductFormatPipe,
    LastAddedProductComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NavComponent,
    UserDetailsComponentComponent,
    StoperComponent,
    ProductListComponent,
    ProductFormComponent,
    ConfirmationModalComponent,
    ModelsComponent,
    EnumsComponent,
    AlertComponent,
    ProductAmountComponent,
    ProductFormatPipe,
    LastAddedProductComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
})
export class CoreModule {}
