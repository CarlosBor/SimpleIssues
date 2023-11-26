import { Injectable } from '@angular/core';
import { CardInfo } from './cardInfo';
import { PaginationElement } from './pagination-element';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppActions from './ngrx/app.actions';
import { AppState } from './ngrx/app.reducer';
@Injectable({
  providedIn: 'root'
})

export class ApiRequestService {

  //https://api.github.com/repos/microsoft/typescript/issues
  //https://api.github.com/repos/run-llama/rags/issues
  url = "https://api.github.com/repositories/20929025/issues?page=50";
  currentRepo: Partial<CardInfo>[] | undefined;
  currentPagination: PaginationElement | undefined;

  private dataUpdated = new Subject<void>();

  getDataUpdatedObservable() {
    return this.dataUpdated.asObservable();
  }

  async getAllIssuesFromRepo(): Promise<Partial<CardInfo>[]> {
    const data = await fetch(this.url);
    console.log("Issues from repo fires");
    let linkHeaders = data.headers.get('Link');
    if(linkHeaders){
      let linkHeadersContent = linkHeaders?.split(',');
      if(!this.currentPagination){
        this.currentPagination = {};
      }
      for(let i=0; i<linkHeadersContent.length;i++){
        let datumArray = linkHeadersContent[i].split(';');
        let direction = datumArray[1].trim().substring(5, datumArray[1].length-2);
        let url = datumArray[0].trim();
        url = url.substring(1, url.length-1);
        console.log(url);
        if(direction=="prev"){
          this.currentPagination.prev = url;
        }else if (direction=="next"){
          this.currentPagination.next = url;
        }else if (direction=="first"){
          this.currentPagination.first = url;
        }else if (direction=="last"){
          this.currentPagination.last = url;
        }
      } 
    }
    // console.log(this.currentPagination);
    return await data.json();
  }

  getPaginationFromRepo(){
    return this.currentPagination;
  }

  async submitInfo(urlText: string) {
    this.url = urlText;
    this.currentRepo = await this.getAllIssuesFromRepo();
    this.dataUpdated.next();
  }
  

  //Fetch API
  fetchApiDataStore():void {
    this.store.select(state=>state.url).subscribe((url)=>{
      console.log(url);
    })
  }

  constructor(private store: Store<AppState>) { }
}
