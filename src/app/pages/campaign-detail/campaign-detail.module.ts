import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CampaignDetailPage } from './campaign-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CampaignDetailPage]
})
export class CampaignDetailPageModule {}
