import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./structures/header/header.component";
import {FooterComponent} from "./structures/footer/footer.component";
import {AsideComponent} from "./structures/aside/aside.component";
import {PokemonListComponent} from "./pages/home/structures/pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pages/home/structures/pokemon-details/pokemon-details.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {LoaderService} from "../services/loader.service";
import {PokemonDataService} from "../services/pokemon.data.service";
import {HomeComponent} from "./pages/home/home.component";
import {ContentComponent} from "./structures/content/content.component";
import {AccordionComponent} from "./components/accordion/accordion.component";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {RedirectGuardService} from "../services/redirect.guard.service";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoaderComponent, AccordionComponent, PaginationComponent, HeaderComponent, ContentComponent, FooterComponent, AsideComponent, PokemonListComponent, PokemonDetailsComponent
  ],
  imports:[BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [RedirectGuardService, LoaderService, PokemonDataService]
})

export class AppModule{}
