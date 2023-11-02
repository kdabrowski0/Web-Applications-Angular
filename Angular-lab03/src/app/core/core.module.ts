import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { NavComponent } from './layout/nav/nav.component';
import { UserDetailsComponentComponent } from './layout/user-details-component/user-details-component.component';
import { StoperComponent } from './layout/stoper/stoper.component';
import { ShoppingListComponentComponent } from './tasks/shopping-list-component/shopping-list-component.component';
import { AddProductComponentComponent } from './tasks/add-product-component/add-product-component.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './tasks/product.service';
import { AlertComponent } from './tasks/alert/alert.component';
import { AlertService } from './tasks/alert/alert.service'; 

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NavComponent,
    UserDetailsComponentComponent,
    StoperComponent,
    ShoppingListComponentComponent,
    AddProductComponentComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [ProductService , AlertService],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NavComponent,
    UserDetailsComponentComponent,
    StoperComponent,
    ShoppingListComponentComponent,
    AddProductComponentComponent,
    AlertComponent,
  ]
})
export class CoreModule { }
