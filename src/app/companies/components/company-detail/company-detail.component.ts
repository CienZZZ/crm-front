import { Component, Input } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {

  @Input() company: Company;

  constructor() {}

  // TODO: przyciski edit remove itp
}
