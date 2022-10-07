import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   
import { CmsComponent } from './cms/cms.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [{ path: '',redirectTo:'home', pathMatch:'full'},
{path: 'Signin', component:SigninComponent},
{path: 'Signup', component:SignupComponent},
{path: 'Cms', component:CmsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
