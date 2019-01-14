import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ContentComponent } from './pages/content/content.component';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
{path: '', component: AboutComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: ContentComponent},
{path: 'register', component: RegisterComponent},
{path: 'faq', component: FaqComponent},
{path: 'customer support', component: CustomersupportComponent},
{path: 'privacy', component: PrivacyComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
