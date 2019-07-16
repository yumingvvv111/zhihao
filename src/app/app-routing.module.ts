import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'search-page', loadChildren: './search-page/search-page.module#SearchPagePageModule' },
  { path: 'prepare-camera', loadChildren: './prepare-camera/prepare-camera.module#PrepareCameraPageModule' },
  { path: 'ask-home', loadChildren: './ask-home/ask-home.module#AskHomePageModule' },
  { path: 'my-setting-home', loadChildren: './my-setting-home/my-setting-home.module#MySettingHomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'face-login', loadChildren: './face-login/face-login.module#FaceLoginPageModule' },
  { path: 'scan-plantplant', loadChildren: './scan-plantplant/scan-plantplant.module#ScanPlantplantPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
