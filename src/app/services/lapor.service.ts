import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, Query } from '@angular/fire/firestore';
import { orderBy } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Disaster {
  id?: string;
  searchKey: string;
  namaPelapor: string;
  noHP: string;
  jenisBencana: string;
  keterangan: string;
  status: boolean;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class LaporService {

  constructor(
    private firestore: Firestore) { }

  getBencana(): Observable<Disaster[]> {
    const bencanaRef = collection(this.firestore, 'bencana');
    return collectionData(bencanaRef, { idField: 'id'}) as Observable<Disaster[]>;
  }
  getDisasterById(id): Observable<Disaster> {
    const disasterDocRef = doc(this.firestore, `bencana/${id}`);
    return docData(disasterDocRef, { idField: 'id' }) as Observable<Disaster>;
  }

  deleteDisaster(disaster: Disaster) {
    const disasterDocRef = doc(this.firestore, `bencana/${disaster.id}`);
    return deleteDoc(disasterDocRef);
  }

  updateDisaster(disaster: Disaster) {
    const disasterDocRef = doc(this.firestore, `bencana/${disaster.id}`);
    return updateDoc(disasterDocRef, { status: disaster.status });
  }
}
