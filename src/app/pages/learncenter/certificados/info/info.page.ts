import { Component, OnInit , Renderer2 , ElementRef ,ViewChild} from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';

import jsPDF from "jspdf";
import domtoimage from 'dom-to-image';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { CertificadosService } from '../../../../services/certificados.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  
  certificado : any;
  @ViewChild('canvas_render') canvas_render : ElementRef;
  @ViewChild('contain') contain : ElementRef;
  constructor(public activatedRoute: ActivatedRoute,private authservice : AuthService,private certificadosService: CertificadosService,private redireccionService: RedireccionService) { 

    
  }

  ngOnInit() {
      this.get_certificate()
  }

  volverCerti(){
    this.redireccionService.backpage();
  }
  
  downloadCertificate () {
    const $render_canvas = this.canvas_render.nativeElement;
    const $contain = this.contain.nativeElement;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
        $contain.style.width = '700px'
        $render_canvas.style.width = '730px'
          const options = { height:$render_canvas.height , width: $render_canvas.width};
         domtoimage.toPng($render_canvas ,options )
         .then( dataUrl => {
          $contain.style.width = '100%'
          $render_canvas.style.width = '100%'
         const doc = new jsPDF('l', 'mm', 'a4');
           doc.addImage(dataUrl, 'png',225/6 , 150/7, 225, 150);
           doc.save('pdfDocument.pdf');
           })
           .catch(err => console.log(err))
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





   
  }

  get_certificate(){
    let id_cer = this.activatedRoute.snapshot.paramMap.get('id');
    this.certificadosService.getCertificate(parseInt(id_cer ))
    .then( ( resp:any )=>{
      console.log(resp);
      this.certificado = resp.data
    })
    .catch();
  }

}
