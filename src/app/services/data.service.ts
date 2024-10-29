import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc , docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export interface product{
  id?
  : string;
  name: string;
  price: number;
  stock: number;
  description: string;
  category: number;

}
export class DataService {

  constructor() { }
}
