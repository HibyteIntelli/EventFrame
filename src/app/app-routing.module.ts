import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailedCardListComponent} from "./components/detailed-card-list/detailed-card-list.component";
import {CarouselCardListComponent} from "./components/carousel-card-list/carousel-card-list.component";
import {CardsExampleComponent} from "./components/cards-example/cards-example.component";
import {AuthorizationGuard} from "./providers/authorization.guard";

const routes: Routes = [
  {path: 'carouselCardList', component: CarouselCardListComponent, canActivate: [AuthorizationGuard]},
  {path: 'detailedCardList', component: DetailedCardListComponent, canActivate: [AuthorizationGuard]},
  {path: '', component: CardsExampleComponent, canActivate: [AuthorizationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
