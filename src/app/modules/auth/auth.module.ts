import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		MatCardModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule
	]
})
export class AuthModule {
}
