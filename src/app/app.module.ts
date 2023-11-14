import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {BottomBarComponent} from "./bottom-bar/bottom-bar.component";
import {AsideBarComponent} from "./aside-bar/aside-bar.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";


@NgModule({
  declarations: [
    AppComponent, TopBarComponent, BottomBarComponent, AsideBarComponent, PokemonListComponent, PokemonDetailsComponent
  ],
  imports:[BrowserModule],
  bootstrap: [AppComponent]
})

export class AppModule{}
