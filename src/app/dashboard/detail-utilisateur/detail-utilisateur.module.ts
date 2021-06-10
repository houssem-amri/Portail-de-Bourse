import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailUtilisateurRoutingModule } from './detail-utilisateur-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { DetailUtilisateurComponent } from './detail-utilisateur.component';

@NgModule({
	declarations: [ DetailUtilisateurComponent ],
	imports: [ CommonModule, DetailUtilisateurRoutingModule, SharedModule ]
})
export class DetailUtilisateurModule {}
