import { Co2ForecastStore } from './co2-forecast.store';
import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

describe(Co2ForecastStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
      providers: [Co2ForecastStore],
    });
    const store = TestBed.inject(Co2ForecastStore);

    return {
      store,
    };
  }

  it('is provided externally', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  });

  describe('records$', () => {
    it('initially emits 0 records', async () => {
      const { store } = setup();

      const records = await firstValueFrom(store.records$.pipe(first()));

      expect(records).toEqual([]);
    });
  });
});
