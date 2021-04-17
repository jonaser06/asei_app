import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { CalificationService } from 'src/app/services/calification.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export class CardItemsComponent implements OnInit {

  @Input() news_child : any;

  @Output() idNews = new EventEmitter();
  @Output() idNewsE = new EventEmitter();
  @Output() idNewsR = new EventEmitter();

  URL = environment.url;
  iduser;
  constructor(
    private uiServiceService:UiServiceService,
    private authService: AuthService,
    private redireccionService: RedireccionService,
    private calificationService : CalificationService,
    private router: Router,
    ) {

     }

  ngOnInit() {
    this.current_session();
  }
  current_session(){
    this.authService.get_data()
    .then(resp=>{
      this.iduser = resp['data']['user_id'];
    });
  }
  openNote (ID_NO) {
    const { url } = this.router;
    this.redireccionService.redireccion(`${url}/info/${ID_NO}`)
  }
  openNew(ID_NO){
    this.idNews.emit(ID_NO);
  }
  editNew(ID_NO){
    this.idNewsE.emit(ID_NO);
  }
  removeNew(ID_NO){
    this.idNewsR.emit(ID_NO);
  }

  dialogCalification (ID_NO) {
    this.calificationService.comproved(ID_NO, this.iduser).then ( estado => {
      if( ! estado ) return this.uiServiceService.alert_info('YA CALIFICASTE ESTE POST');
      

      this.calificationService.modalCalificar(ID_NO, this.iduser )
    })
    
  }

}
