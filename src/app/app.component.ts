import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  })

  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      transmission: "автомат",
      engine: 5.2, 
      year: 2020
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      transmission: "автомат",
      engine: 6.2, 
      year: 2021
    },
    {
      image: "3.png",
      name: "Ferrari California",
      transmission: "автомат",
      engine: 3.9, 
      year: 1997
    },
    {
      image: "4.png",
      name: "Lamborghini Urus",
      transmission: "автомат",
      engine: 4.0, 
      year: 2018
    },
    {
      image: "5.png",
      name: "Audi R8",
      transmission: "автомат",
      engine: 5.2, 
      year: 2016
    },
    {
      image: "6.png",
      name: "Chevrolet Camaro",
      transmission: "автомат",
      engine: 2.0, 
      year: 1990
    },
    {
      image: "7.png",
      name: "Maserati Quattroporte",
      transmission: "автомат",
      engine: 2.0, 
      year: 1999
    },
    {
      image: "8.png",
      name: "Dodge Challenger",
      transmission: "автомат",
      engine: 2.0, 
      year: 1980
    },
    {
      image: "9.png",
      name: "Nissan GT-R",
      transmission: "автомат",
      engine: 2.0, 
      year: 2000
    }
  ]

  constructor(private fb: FormBuilder) {
  }

  goScroll(targer: HTMLElement) {
    targer.scrollIntoView({behavior: "smooth"})
  }

  onSubmit() {
    if (this.priceForm.valid) {
      alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
      this.priceForm.reset()
    }
  }
}
