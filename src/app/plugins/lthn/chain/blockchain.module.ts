import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockchainComponent} from './blockchain.component';
import {ChartModule} from '@module/chart/chart.module';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveComponentModule} from '@ngrx/component';
import {PipesModule} from 'app/pipes/pipes.module';
import {MatIconModule} from '@angular/material/icon';
import {HashRatePipe} from 'app/pipes/crypto/hashrate.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { TxnComponent } from './components/txn.component';

const routes: Routes = [
	{
		path: '',
		component: BlockchainComponent,
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	},
	{
		path: 'txn/:id',
		component: TxnComponent,
		data: {
			title: 'view.chain.txn.title',
			heading: 'view.chain.txn.heading',
			description: 'view.chain.txn.description',
			robots: false
		}
	}
];

@NgModule({
	declarations: [BlockchainComponent, TxnComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ChartModule,
		MatCardModule,
		MatListModule,
		MatButtonModule,
		FlexModule,
		TranslateModule,
		NgxDatatableModule,
		ReactiveComponentModule,
		PipesModule,
		MatIconModule,
		MatToolbarModule,
		MatTooltipModule,
		MatMenuModule
	],
	exports: [RouterModule],
	providers: [HashRatePipe]
})
export class BlockchainModule {
}
