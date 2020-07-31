import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatCardModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from 'src/app/shared/components/characters/list/characters.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from 'src/app/shared/components/characters/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CharactersDetailsComponent', () => {
    let component: CharactersDetailsComponent;
    let fixture: ComponentFixture<CharactersDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CharactersComponent,
                CharactersDetailsComponent,
                CharactersComponent],
            imports: [
                MatCardModule,
                MatInputModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                CommonModule,
                MatButtonModule,
                MatToolbarModule,
                RouterModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatProgressSpinnerModule,
                HttpClientModule,
                RouterTestingModule
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CharactersDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
