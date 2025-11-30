import { TestBed } from '@angular/core/testing';

import { ProductsWithApi } from './products-with-api';

describe('ProductsWithApi', () => {
  let service: ProductsWithApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsWithApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
