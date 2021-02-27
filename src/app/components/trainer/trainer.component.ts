import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {

  fileToUploadstat: any;
  imagestat: any;
  @Output() trainer = new EventEmitter();
  @Output() imagfile = new EventEmitter();
  constructor(private uiserviceService : UiServiceService) { }

  ngOnInit() {}

  upimg(){ (document.querySelector('.input_img') as HTMLElement).click(); }

  handleFileInput(event){
    this.fileToUploadstat = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUploadstat);
    reader.onload = () => {
        this.imagestat = reader.result;
    };
  } 

  add_trainer(){
    let nombre = (<HTMLInputElement>document.querySelector('.nametxt')).value;
    let resumen = (<HTMLInputElement>document.querySelector('.lastname')).value;
    if(this.imagestat == null ) return this.uiserviceService.alert_info('selecciona una imagen');
    if(nombre.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario un nombre');
    if(resumen.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario un resumen');

    let obj_trainer = { nombre, resumen, foto: this.imagestat };
    let image = this.fileToUploadstat;
    this.trainer.emit(obj_trainer);
    this.imagfile.emit(image);
    
    (<HTMLInputElement>document.querySelector('.nametxt')).value = '';
    (<HTMLInputElement>document.querySelector('.lastname')).value = ''
    this.imagestat = null;

  }
  
  

}
