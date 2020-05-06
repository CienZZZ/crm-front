import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Contact } from '../model/contact.model';


@Injectable()
export class ContactsService {

  constructor(private http: HttpClient ) { }


  index(): Observable<Contact[]> {
    return this.http
        .get<Contact[]>(`${environment.appApi.baseUrl}/contact`);
  }

  show(contactId: number): Observable<Contact> {
    return this.http
        .get<Contact>(`${environment.appApi.baseUrl}/contact/${contactId}`);
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.appApi.baseUrl}/contact`, contact);
  }

  update(contact: Partial<Contact>): Observable<Contact> {
    return this.http.patch<Contact>(`${environment.appApi.baseUrl}/contact/${contact.id}`, contact);
  }


  destroy(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.appApi.baseUrl}/contact/${id}`);
  }

}
