import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { MatCardModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from 'src/app/shared/components/characters/list/characters.component';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from 'src/app/shared/components/characters/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/shared/services/api.service';

describe('CharactersComponent', () => {
    let component: CharactersComponent;
    let fixture: ComponentFixture<CharactersComponent>;

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
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharactersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should get data from server', () => {
        inject([ApiService], (apiService) => {
            apiService.get().subscribe(results => {
                expect(results).toBeGreaterThan(0);
            });
        });
    });
    it('should be able to navigate to `/details/:id`', () => {
        inject([Router], (router) => {
            router.navigate(['/details/1'])
            .then(() => {
                expect(router.url).toEqual('/details/1');
              });
        });
    });
});
