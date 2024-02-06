import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  Co2EmissionPrognosisRecord,
  Co2EmissionPrognosisRecords,
} from './co2-emission-prognosis-record';
import { Observable } from 'rxjs';

export interface Co2ForecastState {
  readonly records: readonly Co2EmissionPrognosisRecord[];
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  records$: Observable<Co2EmissionPrognosisRecords> = this.select(
    (state) => state.records
  );
  constructor() {
    super(initialState);
  }
}

const initialState: Co2ForecastState = {
  records: [],
};
