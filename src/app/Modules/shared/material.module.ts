import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
