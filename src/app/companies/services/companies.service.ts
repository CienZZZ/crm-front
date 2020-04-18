import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../model/company.model';
import { environment } from '../../../environments/environment';


@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient ) { }


  index(): Observable<Company[]> {
    return this.http
        .get<Company[]>(`${environment.appApi.baseUrl}/company`);
  }

  show(companyId: number): Observable<Company> {
    return this.http
        .get<Company>(`${environment.appApi.baseUrl}/company/${companyId}`);
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>(`${environment.appApi.baseUrl}/company`, company);
  }

  update(company: Partial<Company>): Observable<Company> {
    return this.http.patch<Company>(`${environment.appApi.baseUrl}/company/${company.id}`, company);
  }


  destroy(id: number): Observable<Company> {
    return this.http.delete<Company>(`${environment.appApi.baseUrl}/company/${id}`);
  }

}
