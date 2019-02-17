import {Component, OnInit} from '@angular/core';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-oral-examination-protocol',
  templateUrl: './oral-examination-protocol.component.html',
  styleUrls: ['./oral-examination-protocol.component.scss']
})
export class OralExaminationProtocolComponent implements OnInit {

  public title: string = 'Kolloquium "Digital Humanities – Theorie und Praxis"';
  public module: string = 'AM2: Humanities Computing';
  public term: string = 'Wintersemester 2018 / 2019';
  public data;

  constructor() {
  }

  ngOnInit() {
  }

  createPDF() {

    if (!this.data) return;

    let doc = new jsPDF();

    const examinations = this.data.split('\n');

    // Remove first row
    // examinations.shift();

    let i;

    for (let examination of examinations) {

      examination = examination.split(';');

      for (i = 0; i < 4; i++) {

        doc.setFontType('bold');
        doc.setFontSize(14);
        doc.text(20, 20, 'Mündliche Prüfung ' + this.module);

        doc.setFontType('normal');
        doc.setFontSize(10);

        doc.text(20, 30, this.title);
        doc.text(20, 35, this.term);
        doc.text(20, 45, examination[0] + ', ' + examination[1] + ' Uhr');
        doc.text(20, 50, examination[2] + ', ' + examination[3]);
      }

      doc.addPage();
    }

    doc.save('examinations.pdf');
  }

}
