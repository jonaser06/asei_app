import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { PopoverController, Platform } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { StatisticsService } from 'src/app/services/statistics.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {

  @Input() card_child : any;
  
  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();
  // @Output() imgFile = new EventEmitter();

  URL = environment.url;
  rol: String;
  constructor(public authService: AuthService, private popoverController : PopoverController, private statisticsService : StatisticsService,private platform: Platform) { 
    this.currentRol ();
  }

  ngOnInit( ) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
        component : PopoverComponent,
        event: ev,
        translucent: true
      });
    await popover.present();
    
    let option = await popover.onWillDismiss();
    option = option.data;

    if(option==1){

      let file = this.URL + '/' + this.card_child.image;

      if(this.platform.is('android')) {
        window.location.href = file;
      }else{
        this.statisticsService.donwloadimg(file).subscribe(data=>saveAs(data, 'image.jpg'))
      }
    }else if(option==2){
      this.editItem(this.card_child.id, this.card_child.title, this.card_child.description, this.card_child.image, this.card_child.month, this.card_child.year);
    }else if(option==3){
      this.deleteItem(this.card_child.id);
    }
  }

  currentRol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
  editItem(id, title, description, image, month, year) {
    let objstat = {
      id,
      title,
      description,
      image,
      month,
      year
    }
    this.editItemEv.emit(objstat);
  }
  deleteItem(id){
    this.deleteItemEv.emit(id);
  }

}
