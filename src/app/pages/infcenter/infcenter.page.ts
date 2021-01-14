import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inf-center',
  templateUrl: './infcenter.page.html',
  styleUrls: ['./infcenter.page.scss'],
})
export class InfCenterPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('0. ngOnInit');
  }

  ionViewDidEnter(){
    console.log('1. ionViewDidEnter');
  }
  ionViewDidLoad(){
    console.log('2. ionViewDidLoad');
  }
  ionViewWillEnter(){
    console.log('3. ionViewWillEnter');
  }
  ionViewWillLeave(){
    console.log('4. ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('5. ionViewDidLeave');
  }
  ionViewWillUnload(){
    console.log('6. ionViewWillUnload');
  }

}
