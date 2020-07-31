import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MatCardModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { MockNavComponent } from '../../../tests/mocks/mocks.spec';
import { ReactiveFormsModule } from '@angular/forms';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersComponent } from 'src/app/shared/components/characters/list/characters.component';
import { Character } from 'src/app/shared/models/character';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from 'src/app/shared/components/characters/details/details.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';


describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let datasource = [
        {
            char_id: 1,
            name: 'Walter White',
            birthday: '09-07-1958',
            occupation: [
                'High School Chemistry Teacher',
                'Meth King Pin'
            ],
            img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
            status: 'Presumed dead',
            nickname: 'Heisenberg',
            appearance: [
            ],
            portrayed: 'Bryan Cranston',
            category: 'Breaking Bad',
            better_call_saul_appearance: []
        },
        {
            char_id: 2,
            name: 'Jesse Pinkman',
            birthday: '09-24-1984',
            occupation: [
                'Meth Dealer'
            ],
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
            status: 'Alive',
            nickname: 'Cap n\' Cook',
            appearance: [
            ],
            portrayed: 'Aaron Paul',
            category: 'Breaking Bad',
            better_call_saul_appearance: []
        },
        {
            char_id: 3,
            name: 'Skyler White',
            birthday: '08-11-1970',
            occupation: [
                'House wife',
                'Book Keeper',
                'Car Wash Manager',
                'Taxi Dispatcher'
            ],
            img: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
            status: 'Alive',
            nickname: 'Sky',
            appearance: [
            ],
            portrayed: 'Anna Gunn',
            category: 'Breaking Bad',
            better_call_saul_appearance: []
        }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchComponent,
                CharactersDetailsComponent,
                MockNavComponent,
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
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
