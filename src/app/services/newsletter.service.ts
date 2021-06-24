import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { ApiHandlerService } from './api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
private getEmail= env.API_URL.NewsService.newsletter
  constructor(private apiService:ApiHandlerService) { }
  newsletter(){
    console.log(this.getEmail);
return this.apiService.get(`${this.getEmail}`)
  }
}
