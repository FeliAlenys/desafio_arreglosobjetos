const propiedadesAlquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      baño: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 5678',
        habitaciones: 3,
        baño: 3,
        costo: 2500,
        smoke: true,
        pets: true
      },
      {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño: 2,
        costo: 2200,
        smoke: false,
        pets: false
      },
      {
        nombre: 'Departamento Loft',
        src: 'https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg',
        descripcion: 'Este elegante departamento estilo Loft con bastante iluminación',
        ubicacion: '6987 Mar Báltico, Santiago, CA 91234',
        habitaciones: 2,
        baño: 1,
        costo: 3000,
        smoke: false,
        pets: false
      },
      {
        nombre: 'Departamentos unicos',
        src: 'https://cdn.pixabay.com/photo/2015/07/08/10/29/appartment-building-835817_1280.jpg',
        descripcion: 'Este departamento se encuentra cerca del centro y se encuentra en descuento',
        ubicacion: '589 Mar Caribe, Santiago, CA 91234',
        habitaciones: 2,
        baño: 2,
        costo: 2000,
        smoke: ftrue,
        pets: true
      },
      {
        nombre: 'Departamento un ambiente',
        src: 'https://cdn.pixabay.com/photo/2017/02/24/12/19/apartment-2094666_1280.jpg',
        descripcion: 'Este departamento de un ambiente está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 1,
        baño: 1,
        costo: 1800,
        smoke: false,
        pets: false
      },

    // Añadir más propiedades según el formato
  ];
  
  // Función para renderizar propiedades
  function renderizarPropiedades(propiedades, contenedorId, maximoPropiedades = propiedades.length) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    const propiedadesMostradas = propiedades.slice(0, maximoPropiedades);
  
    propiedadesMostradas.forEach(prop => {
      const propiedadHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
            <div class="card-body">
              <h5 class="card-title">${prop.nombre}</h5>
              <p class="card-text">${prop.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
              <p><i class="fas fa-bed"></i> ${prop.baño} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
              <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
                <i class="fas ${prop.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
              </p>
              <p class="${prop.pets ? 'text-success' : 'text-danger'}">
                <i class="fas ${prop.pets ? 'fa-paw' : 'fa-ban'}"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
              </p>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += propiedadHTML;
    });
  }
  
  // Llamar a la función para renderizar en la página de inicio (index.html)
  document.addEventListener('DOMContentLoaded', () => {
    renderizarPropiedades(propiedadesVenta, 'venta', 3);  // Renderizar 3 propiedades en venta
    renderizarPropiedades(propiedadesAlquiler, 'alquiler', 3);  // Renderizar 3 propiedades en alquiler
  });
  
  // Llamar a la función para renderizar propiedades cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', () => {
    // Verifica si la página es para propiedades en venta o alquiler
    if (document.getElementById('venta')) {
      renderizarPropiedades(propiedadesVenta, 'venta'); // Renderizar propiedades en venta
    }
  
    // Verifica si el contenedor 'alquiler' está presente en el HTML
  const contenedorAlquiler = document.getElementById('alquiler');
  if (contenedorAlquiler) {
    renderizarPropiedades(propiedadesAlquiler, 'alquiler'); // Renderizar propiedades de alquiler
  }
  });