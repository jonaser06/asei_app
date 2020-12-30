import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() dialog: boolean;
  @Input() width: number | string;
  @Input() height: number | string;
  @Output() closeDialogEv = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const currentDialogBody: any = document.querySelector(".dialog .dialog-body");
    if (currentDialogBody) {
      currentDialogBody.style.width = this.width + "px";
      this.height ? currentDialogBody.style.height = this.height + "px" : currentDialogBody.style.height = "auto";
    }
    const dialogs = document.querySelectorAll(".dialog");

    if (!dialogs) return;
    dialogs.forEach(d => {
      d.addEventListener("click", (ev: any) => {
        if (ev.target.classList.value === "overlay-dialog") {
          this.closeDialog();
        }
      })
    })

  }

  closeDialog() {
    console.log('test');
    this.closeDialogEv.emit("");
  }
}
