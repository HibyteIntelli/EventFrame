import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CarouselCardListComponent} from "./components/carousel-card-list/carousel-card-list.component";
import {AuthorizationGuard} from "./providers/authorization.guard";

const routes: Routes = [
  {path: 'carousel', component: CarouselCardListComponent, canActivate: [AuthorizationGuard]},
  {path: 'events', component: CardListComponent, canActivate: [AuthorizationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
