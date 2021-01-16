import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { BulletinListComponent } from './bulletin-list/bulletin-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { PercentCardComponent } from './percent-card/percent-card.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CardItemsComponent } from './card-items/card-items.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [
    AuthMenuComponent,
    BulletinListComponent,
    DialogComponent,
    FooterComponent,
    NavigationTabsComponent,
    PercentCardComponent,
    SocialLinksComponent,
    StatCardComponent,  
    HeaderComponent,
    CardItemsComponent,
    CardSliderComponent,
    PaginadorComponent,
    BuscadorComponent
  ],
  exports: [
    AuthMenuComponent,
    BulletinListComponent,
    DialogComponent,
    FooterComponent,
    NavigationTabsComponent,
    PercentCardComponent,
    SocialLinksComponent,
    StatCardComponent,
    HeaderComponent,
    CardItemsComponent,
    CardSliderComponent,
    PaginadorComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
