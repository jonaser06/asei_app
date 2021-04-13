import { Component, OnInit , Renderer2 , ElementRef ,ViewChild} from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';

import jsPDF from "jspdf";
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  @ViewChild('canvas_render') canvas_render : ElementRef;
  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCerti(){
    this.redireccionService.backpage();
  }
  
  downloadCertificate () {
    const $render_canvas = this.canvas_render.nativeElement;
    
   
   
      // console.log(dataUrl);
      // let img = new Image();
      // img.src = dataUrl;
      // console.log(img.height);
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
        const options = { height:520 , width: 570};

        domtoimage.toPng($render_canvas ,options ).then( dataUrl => {
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.addImage(dataUrl, 'png',150/6 , 225/7, 210, 297);
        doc.save('pdfDocument.pdf');
      }).catch(err => console.log(err))
      }else {
        // const options = { height:510 , width: 570};
        const options = { height:$render_canvas.height , width: $render_canvas.width};

        domtoimage.toPng($render_canvas ,options ).then( dataUrl => {
        const doc = new jsPDF('l', 'mm', 'a4');
          //Add image Url to PDF
          doc.addImage(dataUrl, 'png',225/6 , 150/7, 225, 150);
          doc.save('pdfDocument.pdf');
           }).catch(err => console.log(err))
      }
      // let img = new Image();
      // img.src = dataUrl;
      // document.body.appendChild(img);
       
        // let imgWidth = 300;
        // let imgHeight = (canvas.height * imgWidth) / canvas.width;
        // const imgData = canvas.toDataURL("image/png");
        // const pdf = new jsPDF();
        // let position = 0;
        // //   var heightLeft = imgHeight;
        // pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        // pdf.save(`certificado`);
        
      
   
  }

}
