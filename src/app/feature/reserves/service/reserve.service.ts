import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reserve } from 'src/app/shared/models/reserve.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  reserves!: Observable<Reserve[]>;

  private reservesCollection: AngularFirestoreCollection<Reserve>;

  constructor(private readonly afs: AngularFirestore) {
    this.reservesCollection = afs.collection<Reserve>('reserves');
    this.getReserves();
  }

  private getReserves(): void {
    this.reserves = this.reservesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Reserve))
    );
  }

  onDeleteReserves(reserveId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.reservesCollection.doc(reserveId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveReserve(reserve: Reserve, reserveId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = reserveId || this.afs.createId();
        const data = { id, ...reserve };
        const result = await this.reservesCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }



}
