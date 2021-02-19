import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {

  fileToUploadstat: any;
  imagestat: any;
  constructor() { }

  ngOnInit() {}

  handleFileInput(event){
    this.fileToUploadstat = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUploadstat);
    reader.onload = () => {
        this.imagestat = reader.result;
    };
  }

  upimg(id){
    (document.querySelector('.input_img') as HTMLElement).click();
    // let fileImg = document.querySelectorAll('.imgfile');
    // console.log(fileImg.length);
    // this.fileImgCap = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(this.fileImgCap);
    // reader.onload = () => {
    //     this.imgCap = reader.result;
    // };
  }
  
  

}
