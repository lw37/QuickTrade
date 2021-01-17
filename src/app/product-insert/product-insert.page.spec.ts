import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductInsertPage } from './product-insert.page';

describe('ProductInsertPage', () => {
  let component: ProductInsertPage;
  let fixture: ComponentFixture<ProductInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
