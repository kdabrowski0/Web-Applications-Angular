import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './layout/nav/nav.component';
import { CarListComponent } from './modules/components/car-list/car-list.component';
import { CarDetailsComponent } from './modules/components/car-details/car-details.component';
import { CarEndpoints } from './features/CarEndpoints.service';
import { CommentsEndpoint } from './features/CommentsEndpoint.service';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarFormComponent } from './modules/components/car-form/car-form.component';
import { CarUpdateService } from './features/CarUpdate.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoadingModalComponent } from './layout/loading-modal/loading-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StatusInterceptor } from './interceptors/status.interceptor';
@NgModule({
  declarations: [
    NavComponent,
    CarListComponent,
    CarDetailsComponent,
    PageNotFoundComponent,
    CarFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    LoadingModalComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [
    CarEndpoints,
    CommentsEndpoint,
    CarUpdateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StatusInterceptor,
      multi: true,
    },
  ],
  exports: [
    NavComponent,
    CarListComponent,
    CarDetailsComponent,
    PageNotFoundComponent,
    CarFormComponent,
  ],
})
export class CoreModule {}
