import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../model/company.model';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../services/companies.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Observable<Company>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companiesService: CompaniesService
  ) {}

  ngOnInit() {
    this.company = this.activatedRoute.paramMap.pipe(
      switchMap(params => this.companiesService.getCompany(Number(params.get('id'))))
    );
  }
}
