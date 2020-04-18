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
        .get<Company[]>('${environment.databaseURL}/company');
  }

  show(companyId: number): Observable<Company> {
    return this.http
        .get<Company>('${environment.databaseURL}/company/${companyId}');
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>('${environment.databaseURL}/company', company);
  }

  update(company: Partial<Company>): Observable<Company> {
    return this.http.patch<Company>('${environment.databaseURL}/company/${company.id}', company);
  }


  destroy(id: number): Observable<Company> {
    return this.http.delete<Company>('${environment.databaseURL}/company/${id}');
  }

}
