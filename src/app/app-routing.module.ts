import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ContentComponent } from './pages/content/content.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ErrComponent } from './err/err.component';
import { SupportComponent } from './pages/support/support.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SearchComponent } from './shared/search/search.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { NascarComponent } from './pages/categories/nascar/nascar.component';
import { TravelComponent } from './pages/categories/travel/travel.component';
import { EducationComponent } from './pages/categories/education/education.component';
import { FoodComponent } from './pages/categories/food/food.component';
import { MusicComponent } from './pages/categories/music/music.component';
import { MoviestvComponent } from './pages/categories/moviestv/moviestv.component';
import { FootballComponent } from './pages/categories/football/football.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ImageComponent } from './upload/image/image.component';
import { BollywoodComponent } from './pages/categories/bollywood/bollywood.component';
import { CricketComponent } from './pages/categories/cricket/cricket.component';
import { DiscoveryComponent } from './pages/categories/discovery/discovery.component';
import { FormulaoneComponent } from './pages/categories/formulaone/formulaone.component';
import { PersonalityComponent } from "./pages/personality/personality.component";
import { JackiechanComponent } from './pages/categories/jackiechan/jackiechan.component';
import { LivenationComponent } from './pages/categories/livenation/livenation.component';
import { MlbComponent } from './pages/categories/mlb/mlb.component';
import { MlsComponent } from './pages/categories/mls/mls.component';
import { NbaComponent } from './pages/categories/nba/nba.component';
import { CalendarComponent } from './pages/profile/calendar/calendar.component';
import { TestDisplayComponent } from './test-firebase-subactivity/test-display/test-display.component';
import { SportsComponent } from './pages/categories/sports/sports.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {AuthGuard} from './core/guard/auth.guard';
import { LchartComponent } from './Analytics/lchart/lchart.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'cart', component: ShoppingCartComponent},
{path: 'about', component: AboutComponent},
{path: 'account', component: AccountComponent},
{path: 'content', component: ContentComponent},
{path: 'faq', component: FaqComponent},
{path: 'support', component: SupportComponent},
{path: 'terms', component: ImageComponent},
{path: 'login-register', component: LoginRegisterComponent},
{path: 'profile/:id', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard]},
{path: 'explore', component: ExploreComponent},
{path: 'search', component: SearchComponent, pathMatch: 'prefix', canActivate: [AuthGuard]},
{path: 'forgotpassword', component: ForgotpasswordComponent},
{path: 'nascar', component: NascarComponent},
{path: 'travel', component: TravelComponent},
{path: 'education', component: EducationComponent},
{path: 'food', component: FoodComponent},
{path: 'music', component: MusicComponent},
{path: 'movies', component: MoviestvComponent},
{path: 'football', component: FootballComponent},
{path: 'personality', component: PersonalityComponent},
{path: 'bollywood', component: BollywoodComponent},
{path: 'cricket', component: CricketComponent},
{path: 'discovery', component: DiscoveryComponent},
{path: 'formulaone', component: FormulaoneComponent},
{path: 'jackiechan', component: JackiechanComponent},
{path: 'livenation', component: LivenationComponent},
{path: 'analytics', component: LchartComponent},
{path: 'mlb', component: MlbComponent},
{path: 'mls', component: MlsComponent},
{path: 'nba', component: NbaComponent},
{path: 'calendar', component: CalendarComponent},
{path: 'testDisplay', component: TestDisplayComponent},
{path: 'sports', component: SportsComponent},
{path: 'organization', component: OrganizationComponent},
{path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

