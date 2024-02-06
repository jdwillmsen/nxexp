import { TestBed } from '@angular/core/testing';
import { Co2EmissionPrognosisHttp } from './co2-emission-prognosis-http.service';
import { firstValueFrom } from 'rxjs';

describe(Co2EmissionPrognosisHttp.name, () => {
  beforeEach(() => {
    http = TestBed.inject(Co2EmissionPrognosisHttp);
  });

  let http: Co2EmissionPrognosisHttp;

  it('works', async () => {
    const result = await firstValueFrom(http.get());

    expect(result).toEqual([]);
  });
});
