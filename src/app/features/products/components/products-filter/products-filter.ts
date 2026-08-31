import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface AutosData {
  [marca: string]: string[];
}

@Component({
  selector: 'app-products-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './products-filter.html',
  styleUrl: './products-filter.css',
})
export class ProductsFilter implements OnInit {
  autoForm!: FormGroup;
  marcas: string[] = [];
  modelos: string[] = [];

  // Base de datos de marcas y modelos en Chile
  autosChile: AutosData = {
    'Toyota': ['Yaris', 'RAV4', 'Corolla', 'Hilux', 'Corolla Cross'],
    'Chevrolet': ['Sail', 'Onix', 'Tracker', 'Captiva', 'Silverado'],
    'Hyundai': ['Accent', 'Tucson', 'Grand i10', 'Creta', 'Santa Fe'],
    'Kia': ['Rio', 'Soluto', 'Morning', 'Sportage', 'Seltos'],
    'Suzuki': ['Swift', 'Baleno', 'S-Cross', 'Vitara', 'Jimny'],
    'Nissan': ['Versa', 'Kicks', 'Navara / NP300', 'Qashqai', 'X-Trail'],
    'Peugeot': ['208', '2008', '3008', 'Partner'],
    'Chery': ['Tiggo 2 / 2 Pro', 'Tiggo 3 Pro', 'Tiggo 7 Pro', 'Tiggo 8'],
    'Great Wall (GWM)': ['Poer', 'Haval Jolion', 'Haval H6']
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.marcas = Object.keys(this.autosChile);

    // Inicializar el formulario
    this.autoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: [{ value: '', disabled: true }, Validators.required]
    });

    // Escuchar cambios en el selector de marca
    this.autoForm.get('marca')?.valueChanges.subscribe((marcaSeleccionada: string) => {
      this.onMarcaChange(marcaSeleccionada);
    });
  }

  onMarcaChange(marca: string): void {
    const modeloControl = this.autoForm.get('modelo');

    if (marca && this.autosChile[marca]) {
      this.modelos = this.autosChile[marca];
      modeloControl?.enable();
      modeloControl?.setValue(''); // Resetea el modelo al cambiar de marca
    } else {
      this.modelos = [];
      modeloControl?.setValue('');
      modeloControl?.disable();
    }
  }
}
