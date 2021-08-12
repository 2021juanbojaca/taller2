import { Component, OnInit } from '@angular/core';
import { Factura } from './factura.model';
import { Item } from './item.model';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  facturas: Factura[] = [];
  nombre = '';
  precio = 0;
  siExisten: boolean = true;

  ngOnInit(): void {}

  agregarItem(id: number) {
    try {
      if (this.nombre != '' && this.precio != 1) {
        let item = new Item(this.nombre, this.precio, id);
        this.facturas[id].items.push(item);
        this.siExisten = false;
      }
      return;
    } catch (e) {
      console.log('An error ocurred on Agregar Item =>', e);
    }
  }

  agregarFactura() {
    try {
      let factura = new Factura(this.facturas.length + 1, new Date(), []);
      this.facturas.push(factura);
      this.siExisten = false;
    } catch (e) {
      console.log('An error ocurred on Agregar Factura =>', e);
    }
  }
}
