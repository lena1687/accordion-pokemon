import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AsideComponent} from "./aside/aside.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "./loader/loader.component";
import {LoaderService} from "../services/loader.service";
import {PokemonDataService} from "../services/pokemon.data.service";

@NgModule({
  declarations: [
    AppComponent, LoaderComponent, HeaderComponent, FooterComponent, AsideComponent, PokemonListComponent, PokemonDetailsComponent
  ],
  imports:[BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [LoaderService, PokemonDataService]
})

export class AppModule{}
