import { Component, OnInit } from '@angular/core';
import { Sport } from '../Models/Sports';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {GetItems } from '../actions/sports.actions';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  items: Sport[] = [];
  data:Observable<Sport[]>;

  constructor(private store:Store<{items:Sport[]}>) {
   this.store.select('items').subscribe((data:any)=>
    {
      console.log(data); 
      this.items = data;
    });
  // this.data = store.select('items');
  // console.log(this.data );
   }

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }



}
