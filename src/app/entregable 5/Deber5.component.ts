import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: ' Casitas para dormir', 
      price: 15, 
      inventoryStatus: 'In Stock', 
      image: 'https://i5.walmartimages.com/asr/a2c9896a-b5cc-4148-bc85-c8117c334113.5f46f7f478f566a2d8e551919f871631.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
    },
    { 
      name: 'Areneros', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://headless.casaideas.cl/media/catalog/category/Gatos_-_Accesorios_para_gatos.jpg'
    },
    { 
      name: 'Amacas tejidas', 
      price: 30, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.pinimg.com/474x/9d/7a/35/9d7a35a4da536e167ecab3d3dba74951.jpg'
    },
    { 
      name: 'Raton a control remoto', 
      price: 25, 
      inventoryStatus: 'In Stock', 
      image: 'https://maxitec.vteximg.com.br/arquivos/ids/199694-1000-1000/maxitec-vex-robotics-juguetes-para-gatos-raton-robotico-480-4466-1.jpg?v=638251535872200000'
    },
    { 
      name: 'Rascadores', 
      price: 180, 
      inventoryStatus: 'In Stock', 
      image: 'https://amoranimal.com.ec/1709-home_default/connects-kitty-comber.jpg'
    },
    { 
      name: 'Escalones levitantes', 
      price: 45, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://i.etsystatic.com/24872806/r/il/2da0f9/4368866673/il_570xN.4368866673_6z24.jpg'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
