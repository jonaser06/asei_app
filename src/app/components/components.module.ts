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
import { CardDocumentsTiposComponent } from './card-documents-tipos/card-documents-tipos.component';
import { CardDocumentsfilesComponent } from './card-documents-files/card-documents-files.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerGetComponent } from './trainer-get/trainer-get.component';
import { SesionGetComponent } from './sesion-get/sesion-get.component';
import { SesionComponent } from './sesion/sesion.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CardListAdminComponent } from './card-list-admin/card-list-admin.component';
import { InfouserComponent } from './infouser/infouser.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { RouterModule } from '@angular/router';



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
    CardDocumentsTiposComponent,
    CardDocumentsfilesComponent,
    TrainerComponent,
    TrainerGetComponent,
    SesionGetComponent,
    SesionComponent,
    SendNotificationComponent,
    VideoplayerComponent,
    PlaylistComponent,
    CardListAdminComponent,
    InfouserComponent,
    DocumentosComponent,
    MenuAdminComponent
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
    CardDocumentsTiposComponent,
    CardDocumentsfilesComponent,
    TrainerComponent,
    TrainerGetComponent,
    SesionGetComponent,
    SesionComponent,
    SendNotificationComponent,
    VideoplayerComponent,
    PlaylistComponent,
    CardListAdminComponent,
    InfouserComponent,
    DocumentosComponent,
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
