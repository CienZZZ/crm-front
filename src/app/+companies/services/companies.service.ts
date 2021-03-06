import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../model/company.model';
import { environment } from '../../../environments/environment';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient ) { }


  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(`${environment.appApi.baseUrl}/company`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${environment.appApi.baseUrl}/company/${id}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${environment.appApi.baseUrl}/company`, company);
  }

  updateCompany(company: Partial<Company>): Observable<Company> {
    return this.http.patch<Company>(`${environment.appApi.baseUrl}/company/${company.id}`, company);
  }


  destroyCompany(company: Company): Observable<Company> {
    return this.http.delete(`${environment.appApi.baseUrl}/company/${company.id}`)
      .pipe(
        switchMap(() => of(company))
      );
  }

}
