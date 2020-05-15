import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.sass']
})
export class MainFooterComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor() {
    this.checkoutForm = new FormGroup({
      name: new FormControl(),
      series: new FormControl('The Mandalorian')
    });
  }

  ngOnInit(): void {
    console.log('MainFooterComponent::ngOnInit()');
  }

  onSubmit(customerData) {
    console.log('Your order has been submitted', customerData);
    console.log('Name:' + this.checkoutForm.get('name').value);
    console.log('Series:' + this.checkoutForm.get('series').value);
  }

}

@NgModule({
  declarations: [ MainFooterComponent ],
  imports: [ FormsModule, ReactiveFormsModule ]
})
class MainFooterModule {}
