import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatStepperModule,
	
  } from '@angular/material';
  import {CdkTableModule} from '@angular/cdk/table';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Serviços
import { ReceitasService } from './service/receitas/receitas.service';
import { RegistarService } from './service/registar/registar.service';
import { AuthenticationService } from './service/login/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { MedicoGuard } from './guards/medico.guard';
import { UtenteGuard } from './guards/utente.guard';


import { AppRoutingModule } from './app-routing.module'

// Componentes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { ReceitaComponent } from './receita/receita.component';
import { AppComponent } from './app.component';
import { MedicamentosComponent } from './medicamento/medicamentos/medicamentos.component';
//Receitas
import { ReceitasListarComponent } from './receita/receitas-listar/receitas-listar.component';


@NgModule({
	exports: [
	  CdkTableModule,
	  MatAutocompleteModule,
	  MatButtonModule,
	  MatButtonToggleModule,
	  MatCardModule,
	  MatCheckboxModule,
	  MatChipsModule,
	  MatStepperModule,
	  MatDatepickerModule,
	  MatDialogModule,
	  MatExpansionModule,
	  MatGridListModule,
	  MatIconModule,
	  MatInputModule,
	  MatListModule,
	  MatMenuModule,
	  MatNativeDateModule,
	  MatPaginatorModule,
	  MatProgressBarModule,
	  MatProgressSpinnerModule,
	  MatRadioModule,
	  MatRippleModule,
	  MatSelectModule,
	  MatSidenavModule,
	  MatSliderModule,
	  MatSlideToggleModule,
	  MatSnackBarModule,
	  MatSortModule,
	  MatTableModule,
	  MatTabsModule,
	  MatToolbarModule,
	  MatTooltipModule,
	]
  })
  export class AppMaterialModule { }


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		ReceitaComponent,
		RegistarComponent,
		MedicamentosComponent,
		ReceitasListarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
		ModalModule.forRoot(),
		FormsModule,
		HttpClientModule,
		AppMaterialModule,
		BrowserAnimationsModule


	],
	providers: [
		AuthGuard,
		MedicoGuard,
		UtenteGuard,
		AuthenticationService,
		ReceitasService,
		RegistarService
	],

	bootstrap: [AppComponent]
})
export class AppModule { }
