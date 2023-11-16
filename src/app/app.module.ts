import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./structures/header/header.component";
import {FooterComponent} from "./structures/footer/footer.component";
import {AsideComponent} from "./structures/aside/aside.component";
import {PokemonListComponent} from "./pages/dashboard/structures/pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pages/dashboard/structures/pokemon-details/pokemon-details.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {LoaderService} from "../services/loader.service";
import {PokemonDataService} from "../services/pokemon.data.service";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ContentComponent} from "./structures/content/content.component";
import {AccordionComponent} from "./components/accordion/accordion.component";

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, LoaderComponent, AccordionComponent, HeaderComponent, ContentComponent, FooterComponent, AsideComponent, PokemonListComponent, PokemonDetailsComponent
  ],
  imports:[BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [LoaderService, PokemonDataService]
})

export class AppModule{}
