document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.myswiper', {
        // Configuración de Swiper.js
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Mostrar/ocultar menú en dispositivos móviles
    const menuCheckbox = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menuCheckbox.addEventListener('change', function () {
        if (this.checked) {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    });
});




const paquetes = [
    {
        nombre: 'Paquete Aventura en la Selva',
        descripcion: 'Explora la biodiversidad de la selva amazónica con nuestras excursiones guiadas.',
        precio: 'USD 1.500',
        fechasDisponibles: ['Verano 2024', 'Otoño 2024'],
        imagen: 'images/destination1.jpg',
        url: 'destino1.html' 
    },
    {
        nombre: 'Paquete Relax en la Playa',
        descripcion: 'Disfruta de días soleados en nuestras exclusivas playas con tratamientos de spa.',
        precio: 'USD 1.800',
        fechasDisponibles: ['Primavera 2024', 'Verano 2024'],
        imagen: 'images/destination2.jpg',
        url: 'destino2.html' 
    },
    {
        nombre: 'Paquete Cultural en la Ciudad',
        descripcion: 'Sumérgete en la historia y la cultura de una ciudad llena de arte y arquitectura.',
        precio: 'USD 1.400',
        fechasDisponibles: ['Todo el año 2024'],
        imagen: 'images/destination3.jpg',
        url: 'destino3.html'
    },
    {
        nombre: 'Paquete Eco-Turismo en la Montaña',
        descripcion: 'Recorre senderos naturales y descubre paisajes impresionantes en las montañas.',
        precio: 'USD 1.900',
        fechasDisponibles: ['Primavera 2024', 'Verano 2024'],
        imagen: 'images/destination4.jpg',
        url: 'destino4.html' 
    },
    {
        nombre: 'Paquete Gastronómico en el Campo',
        descripcion: 'Experimenta la gastronomía local en un entorno rural pintoresco y acogedor.',
        precio: 'USD 1.000',
        fechasDisponibles: ['Otoño 2024'],
        imagen: 'images/destination5.jpg',
        url: 'destino5.html' 
    }
];


function mostrarPaquetes() {
    const contenedorPaquetes = document.getElementById('paquetes-container');

    paquetes.forEach(paquete => {
        const paqueteHTML = `
            <div class="paquete">
                <img src="${paquete.imagen}" alt="${paquete.nombre}">
                <div class="paquete-info">
                    <h2>${paquete.nombre}</h2>
                    <p>${paquete.descripcion}</p>
                    <p><strong>Precio:</strong> ${paquete.precio}</p>
                    <p><strong>Fechas disponibles:</strong> ${paquete.fechasDisponibles.join(', ')}</p>
                    <a href="${paquete.url}" class="btn">Más información</a>
                </div>
            </div>
        `;
        contenedorPaquetes.innerHTML += paqueteHTML;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarPaquetes();
});



function mostrarOfertaEspecial() {
    const ofertaEspecial = document.createElement('div');
    ofertaEspecial.classList.add('notificacion', 'oferta-especial');
    ofertaEspecial.textContent = '¡Oferta especial! 20% de descuento en el Paquete Aventura en la Selva.';
    document.body.appendChild(ofertaEspecial);


    setTimeout(() => {
        ofertaEspecial.remove();
    }, 5000);
}


function actualizarDisponibilidad() {
    paquetes.forEach(paquete => {

        paquete.disponibilidad = !paquete.disponibilidad;
    });


    const actualizacion = document.createElement('div');
    actualizacion.classList.add('notificacion', 'actualizacion');
    actualizacion.textContent = '¡Actualización de disponibilidad! Algunos paquetes turísticos han sido actualizados.';
    document.body.appendChild(actualizacion);


    setTimeout(() => {
        actualizacion.remove();
    }, 5000);


    mostrarPaquetes();
}


function mostrarPaquetes() {
    const contenedorPaquetes = document.getElementById('paquetes-container');
    contenedorPaquetes.innerHTML = ''; 

    paquetes.forEach(paquete => {
        const paqueteHTML = `
            <div class="paquete">
                <h3>${paquete.nombre}</h3>
                <p><strong>Disponibilidad:</strong> ${paquete.disponibilidad ? 'Disponible' : 'No disponible'}</p>
                <p><strong>Precio:</strong> ${paquete.precio}</p>
            </div>
        `;
        contenedorPaquetes.innerHTML += paqueteHTML;
    });
}


document.addEventListener('DOMContentLoaded', function () {
    mostrarPaquetes();


    setTimeout(() => {
        mostrarOfertaEspecial();
    }, 2000);

    setTimeout(() => {
        actualizarDisponibilidad();
    }, 6000);
});

//var swiper = new swiper(".swiper myswiper", {
//    slidesPerView: 1,
//    centeredSlides:true,
//    loop:true,
//    spaceBetween: 30,
//    grabCursor:true,
//    navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev"
//    },
//    breakpoints : {
//        991: {
//            slidesPerView: 3
//       }
//    }
//});