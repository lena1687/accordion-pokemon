import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list.component';
import { HomeComponent } from '../../home.component';
import { LoaderComponent } from '../../../../components/loader/loader.component';
import { AccordionComponent } from '../../../../components/accordion/accordion.component';
import { PaginationComponent } from '../../../../components/pagination/pagination.component';
import { HeaderComponent } from '../../../../structures/header/header.component';
import { ContentComponent } from '../../../../structures/content/content.component';
import { FooterComponent } from '../../../../structures/footer/footer.component';
import { AsideComponent } from '../../../../structures/aside/aside.component';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { RedirectGuardService } from '../../../../../services/redirect.guard.service';
import { LoaderService } from '../../../../../services/loader.service';
import { PokemonDataService } from '../../../../../services/pokemon.data.service';
import { AppRoutingModule } from '../../../../app-routing.module';

describe('PokemonListComponent', () => {
  let fixture: ComponentFixture<PokemonListComponent>;
  let component: PokemonListComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoaderComponent,
        AccordionComponent,
        PaginationComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        AsideComponent,
        PokemonListComponent,
        PokemonDetailsComponent,
      ],
      providers: [RedirectGuardService, LoaderService, PokemonDataService],
      imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
  });

  it('should fetch and display Pokemon data', waitForAsync(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.items.length).toBeGreaterThan(0);
    const accordionItems =
      fixture.nativeElement.querySelectorAll('.accordion-header');
    expect(accordionItems.length).toBe(component.items.length);
  }));

  it('should show Pokemon image on open', waitForAsync(async () => {
    // show list of Pokemon
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const accordionItem = fixture.nativeElement.querySelector('.accordion');
    const accordionHeader = accordionItem.querySelector('.accordion-header');

    // click on first Pokemon
    accordionHeader.click();
    await fixture.whenStable();
    fixture.detectChanges();

    // check if image is shown
    const image = accordionItem.querySelector('.accordion-content img');
    expect(image).toBeTruthy();
  }));

  it('should go to the next page of Pokemons', waitForAsync(async () => {
    // show list of Pokemon
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const firstPageItems = component.items.slice();
    const pagination = fixture.nativeElement.querySelector('.pagination');
    const nextButton = pagination.querySelector('.pagination-button--next');
    let previousButton = pagination.querySelector('.pagination-button--prev');
    expect(previousButton.disabled).toBe(true);
    // click on next button
    nextButton.click();
    await fixture.whenStable();
    fixture.detectChanges();

    // check if items changed
    expect(component.items.length).toBeGreaterThan(0);
    const accordionItems =
      fixture.nativeElement.querySelectorAll('.accordion-header');
    expect(accordionItems.length).toBe(component.items.length);
    expect(component.items[0].name).not.toEqual(firstPageItems[0].name);
    previousButton = pagination.querySelector('.pagination-button--prev');
    expect(previousButton.disabled).toBe(false);

    // click on previous button
    previousButton.click();
    await fixture.whenStable();
    fixture.detectChanges();

    // check if items changed back
    expect(component.items.length).toBeGreaterThan(0);
    expect(component.items[0].name).toEqual(firstPageItems[0].name);
  }));
});
