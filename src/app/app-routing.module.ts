import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenPageComponent } from './open-page/open-page.component';
import { RegisterComponent } from './register/register.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },
  {
    path:'app-open-page',component:OpenPageComponent
  },
  {
    path:'app-search-page',component:SearchPageComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
