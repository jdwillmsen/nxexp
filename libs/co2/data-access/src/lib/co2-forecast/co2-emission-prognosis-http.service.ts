import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Co2EmissionPrognosisRecord } from './co2-emission-prognosis-record';

const url = 'https://www.energidataservice.dk/proxy/api/datastore_search_sql';

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  get(): Observable<readonly Co2EmissionPrognosisRecord[]> {
    return of([]);
  }
}
