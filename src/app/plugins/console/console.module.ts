import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {NgTerminalModule} from 'ng-terminal';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
	declarations: [ConsoleComponent],
	exports: [
		ConsoleComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		NgTerminalModule,
		FlexModule
	]
})
export class ConsoleModule {}
