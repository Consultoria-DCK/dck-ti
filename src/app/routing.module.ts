import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SomosComponent } from './somos/somos.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: MainComponent },
	{ path: 'dev', component: MainComponent },
	{ path: 'be', loadChildren: () => import('./back-end/back-end.module')
				.then(m => m.BackEndModule),  },
	{ path: 'qa', component: MainComponent },
	{ path: 'aquiyo', component: SomosComponent }
];

@NgModule({
	declarations: [
		MainComponent,
  	FooterComponent,
  	HeaderComponent,
  	SomosComponent
	],
	imports: [
		BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),

//		MDBBootstrapModule.forRoot()
	],
	schemas: [ NO_ERRORS_SCHEMA ],
	exports: [
		RouterModule,
		FooterComponent,
   	 	HeaderComponent,
	],
	providers: [],
})

export class RoutingModule { }
