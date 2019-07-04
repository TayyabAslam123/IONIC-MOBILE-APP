import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //
  { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
 
  { path: 'pak', loadChildren: './pak/pak.module#PakPageModule' },
  { path: 'campaign', loadChildren: './pages/campaign/campaign.module#CampaignPageModule' },
  { path: 'ngo', loadChildren: './pages/ngo/ngo.module#NgoPageModule' },
  { path: 'msg', loadChildren: './pages/msg/msg.module#MsgPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'campaign-detail', loadChildren: './pages/campaign-detail/campaign-detail.module#CampaignDetailPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'menuexample', loadChildren: './pages/menuexample/menuexample.module#MenuexamplePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
