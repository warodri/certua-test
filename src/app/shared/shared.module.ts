import { NgModule } from '@angular/core';
import { UxHeaderComponent } from './components/ux-header/ux-header.component';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule,  
    MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { CharactersComponent } from './components/characters/list/characters.component';
import { CharactersDetailsComponent } from './components/characters/details/details.component';

const UX_COMPONENTS: any[] = [
    UxHeaderComponent,
    CharactersComponent,
    CharactersDetailsComponent
];

const UX_MODULES: any[] = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  ReactiveFormsModule,
  RouterModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule
];


@NgModule({
  imports: UX_MODULES,
  declarations: UX_COMPONENTS,
  entryComponents: [],
  exports: [...UX_COMPONENTS, ...UX_MODULES],
})
export class SharedModule {}
