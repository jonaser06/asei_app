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
import { MoreNewsComponent } from './more-news/more-news.component';
import { CardCursosComponent } from './card-cursos/card-cursos.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerGetComponent } from './trainer-get/trainer-get.component';
import { SesionGetComponent } from './sesion-get/sesion-get.component';
import { SesionComponent } from './sesion/sesion.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { CardListAdminComponent } from './card-list-admin/card-list-admin.component';



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
    BuscadorComponent,
    MoreNewsComponent,
    CardCursosComponent,
    TrainerComponent,
    TrainerGetComponent,
    SesionGetComponent,
    SesionComponent,
    SendNotificationComponent,
    CardListAdminComponent
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
    BuscadorComponent,
    MoreNewsComponent,
    CardCursosComponent,
    TrainerComponent,
    TrainerGetComponent,
    SesionGetComponent,
    SesionComponent,
    SendNotificationComponent,
    CardListAdminComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
