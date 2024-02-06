import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const url = 'https://www.energidataservice.dk/proxy/api/datastore_search_sql';

export interface Co2EmissionPrognosisRecord {
  readonly co2Emission: number;
  readonly minutes5UTC: Date;
  readonly priceArea: 'DK1' | 'DK2';
}

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  get(): Observable<readonly Co2EmissionPrognosisRecord[]> {
    return of([]);
  }
}
