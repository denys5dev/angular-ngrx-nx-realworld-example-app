import { ApiService } from '@angular-ngrx-nx-realworld-example-app/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SettingsService } from '../settings.service';
import { SettingsEffects } from './settings.effects';

describe('SettingsEffects', () => {
  let actions;
  let effects: SettingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [SettingsEffects, DataPersistence, provideMockActions(() => actions), SettingsService, ApiService]
    });

    effects = TestBed.get(SettingsEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(true).toBeTruthy();
    });
  });
});