import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports:[
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class MaterialModule{}
