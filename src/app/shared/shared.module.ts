import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableLoadingComponent } from './components/table-loading/table-loading.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    NavigationComponent,
    ToolbarComponent,
    PageWrapperComponent,
    FooterComponent,
    TableLoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    NavigationComponent,
    ToolbarComponent,
    PageWrapperComponent,
    FooterComponent,
    TableLoadingComponent,
  ],
})
export class SharedModule {}
