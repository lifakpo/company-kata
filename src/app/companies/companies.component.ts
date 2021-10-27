import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  data: any;
  employees: number | undefined;
  companyName: string | undefined;
  revenues: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      wb.SheetNames.forEach(sheet => {
        this.data = XLSX.utils.sheet_to_json(wb.Sheets[sheet]);
      });
    };
    reader.readAsBinaryString(target.files[0]);
  }

  deleteRow(company: any) {
    const index = this.data.indexOf(company);
    this.data.splice(index, 1);
  }

  onSubmit(form: NgForm): void {
    // add only if excel was uploaded and value does not exist
    if (this.data && this.data.indexOf(form.value) == -1) {
      this.data.push(form.value);
    }
  }
}
