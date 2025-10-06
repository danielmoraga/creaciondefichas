let nombreproducto = document.getElementById("nombreproducto")
let titulo_h2_1 = document.getElementById("titulo-H2-1")
let titulo_h3_1 = document.getElementById("titulo-H3-1")
let parrafo_H3_1 = document.getElementById("parrafo-H3-1")
let titulo_h3_2 = document.getElementById("titulo-H3-2")
let parrafo_H3_2 = document.getElementById("parrafo-H3-2")
let titulo_h3_3 = document.getElementById("titulo-H3-3")
let parrafo_H3_3 = document.getElementById("parrafo-H3-3")
let fotovertical = document.getElementById("imagen_vertical")
let tituloh2_2 = document.getElementById("titulo-H2-2")
let parrafo_H2_2 = document.getElementById("parrafo-h2-2")
let parrafo_card_1 = document.getElementById("textocard-1")
let parrafo_card_2 = document.getElementById("textocard-2")
let parrafo_card_3 = document.getElementById("textocard-3")
let parrafo_card_4 = document.getElementById("textocard-4")
let parrafo_card_5 = document.getElementById("textocard-5")
let parrafo_card_6 = document.getElementById("textocard-6")
let tituloh2_3 = document.getElementById("titulo-H2-3")
let parrafo_H2_3 = document.getElementById("parrafo-h2-3")
let tituloh2_4 = document.getElementById("titulo-H2-4")
let parrafo_H2_4 = document.getElementById("parrafo-h2-4")
let tituloh2_5 = document.getElementById("titulo-H2-5")
let tituloh2_6 = document.getElementById("titulo-H2-6")
let fotohorizontal_1 = document.getElementById("imagenhorizontal-1")
let fotohorizontal_2 = document.getElementById("imagenhorizontal-2")
let fotohorizontal_3 = document.getElementById("imagenhorizontal-3")
let fotocuadrada_1 = document.getElementById("imagencuadrada-1")
let fotocuadrada_2 = document.getElementById("imagencuadrada-2")
let fotocuadrada_3 = document.getElementById("imagencuadrada-3")
let parrafo_vineta = document.getElementById("parrafo-vineta")






let crear = document.getElementById("crear")
let salida = document.getElementById("salida")
let limpiar = document.getElementById("limpiar")
let salida_abajo = document.getElementById("salida-abajo")


crear.addEventListener("click", function(e) {
      e.preventDefault();

       // Seleccionar todos los inputs y textareas dentro del formulario
    const form = document.getElementById("formulario");
    const campos = form.querySelectorAll("input, textarea");

    // Validar que todos los campos tengan algún valor
    for (let campo of campos) {
        if (campo.value.trim() === "") {
            alert("Por favor, llena todos los campos antes de continuar.");
            campo.focus(); // opcional, para llevar al primer campo vacío
            return; // detenemos la ejecución del botón
        }
    }

        // Obtener valores (esto es solo un ejemplo, asegúrate de tener los otros campos también)
    const parrafoVinetaRaw = document.getElementById("parrafo-vineta").value;

    // Separar por punto y limpiar cada ítem
    const itemsVineta = parrafoVinetaRaw
        .split(".")                            // separar por punto
        .map(item => item.trim())             // quitar espacios alrededor
        .filter(item => item.length > 0);     // quitar vacíos

    // Crear la lista en HTML si hay elementos
    let listaVinetaHTML = "";
    if (itemsVineta.length > 0) {
        listaVinetaHTML = "<ul>\n";
        itemsVineta.forEach(item => {
            listaVinetaHTML += `  <li>${item}</li>\n`;
        });
        listaVinetaHTML += "</ul>\n";
    }

    let html = `
<body>
    <main id="tabs_product-description">
        <!-- Segunda sección - FEATURES -->
        <section id="section-features">
            <div class="title-container">
                <h2 class="title">${titulo_h2_1.value}</h2>
            </div>
            <div class="content-grid">
                <div class="section-feature-group">
                    <div class="feature">
                        <div class="icon">
                            <svg viewBox="0 0 24 24" fill="none" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15" stroke="rgba(68,68,68,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                        <h3 class="feature-title">${titulo_h3_1.value}</h3>
                        <p class="feature-text_desktop">${parrafo_H3_1.value}</p>
                        <p class="feature-text_mobile">${parrafo_H3_1.value}</p>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <svg fill="rgba(68,68,68,1)" version="1.1" id="Capa_1" width="72" height="72" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 334.688 334.688" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path d="M325.125,239.062v-66.938c0-5.259-4.303-9.562-9.562-9.562h-19.125c-5.26,0-13.865,0-19.125,0s-13.865,0-19.125,0h-35.229 c-8.683-14.535-22.548-25.599-39.101-30.562c4.389-2.448,7.392-7.086,7.392-12.47c0-7.918-6.426-14.344-14.344-14.344h-4.781 V86.062h43.031c7.918,0,14.344-6.426,14.344-14.344s-6.426-14.344-14.344-14.344h-43.031c0-5.278-3.185-9.562-9.562-9.562 S153,52.097,153,57.375h-43.031c-7.918,0-14.344,6.426-14.344,14.344s6.426,14.344,14.344,14.344H153v19.125h-4.781 c-7.918,0-14.344,6.426-14.344,14.344c0,5.872,3.538,10.901,8.587,13.12c-11.867,3.959-22.271,11.064-30.255,20.349H38.25v-28.688 c0-10.566-8.559-19.125-19.125-19.125S0,113.746,0,124.312V267.75c0,10.566,8.559,19.125,19.125,19.125 s19.125-8.559,19.125-19.125V229.5h65.264c11.475,21.783,34.31,36.653,60.645,36.653c33.488,0,61.315-24.031,67.301-55.778h26.728 c5.26,0,9.562,4.303,9.562,9.562v19.125c-5.26,0-9.562,4.303-9.562,9.562v19.125c0,5.26,4.303,9.562,9.562,9.562h57.375 c5.26,0,9.562-4.303,9.562-9.562v-19.125C334.688,243.365,330.385,239.062,325.125,239.062z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3 class="feature-title">ç</h3>
                        <p class="feature-text_desktop">${parrafo_H3_2.value}</p>
                        <p class="feature-text_mobile">${parrafo_H3_2.value}</p>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294" stroke="rgba(68,68,68,1)" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z" stroke="rgba(68,68,68,1)" stroke-width="2"></path>
                                    <path d="M12 6V8" stroke="rgba(68,68,68,1)" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M5.63599 8.63574L7.0502 10.05" stroke="rgba(68,68,68,1)" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M18.364 8.63574L16.9498 10.05" stroke="#33363F" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M20.6934 17.3291L18.7615 16.8115" stroke="#33363F" stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M3.30664 17.3291L5.23849 16.8115" stroke="#33363F" stroke-width="2" stroke-linecap="round"></path>
                                </g>
                            </svg>
                        </div>
                        <h3 class="feature-title">${parrafo_H3_3.value}</h3>
                        <p class="feature-text_desktop">${parrafo_H3_3.value}</p>
                        <p class="feature-text_mobile">${parrafo_H3_3.value}</p>
                    </div>
                </div>
                <picture class="main-image">
                    <source media="(max-width: 480px)" srcset="{{media url=wysiwyg/${fotovertical.value}}}">
                    <source media="(max-width: 768px)" srcset="{{media url=wysiwyg/${fotovertical.value}}}">
                    <img src="{{media url=wysiwyg/${fotovertical.value}}}" alt="Imagen de ${nombreproducto.value}">
                </picture>
            </div>
        </section>
        <!-- Tercera sección - BENEFITS -->
        <section id="section-benefits">
            <div class="header">
                <h2 class="title">${tituloh2_3.value}</h2>
                <p class="text">${parrafo_H2_3.value}</p>
                <picture class="main-image">
                    <source media="(max-width: 480px)" srcset="{{media url=wysiwyg/${fotohorizontal_1.value}}}">
                    <source media="(max-width: 768px)" srcset="{{media url=wysiwyg/${fotohorizontal_1.value}}}">
                    <img src="{{media url=wysiwyg/${fotohorizontal_1.value}}}" alt="Imagen de ${nombreproducto.value}">
                </picture>
                <div class="cards-grid">
                    <div class="card">
                        <div class="card-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <p class="card-text">
                            ${parrafo_card_1.value}
                        </p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <p class="card-text">
                            ${parrafo_card_2.value}
                        </p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <p class="card-text">
                            ${parrafo_card_3.value}
                        </p>
                    </div>
                </div>
                <div class="cards-grid">
                    <div class="card">
                        <div class="card-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <p class="card-text">
                            ${parrafo_card_4.value}
                        </p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <p class="card-text">
                            ${parrafo_card_5.value}
                        </p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <p class="card-text">
                            ${parrafo_card_6.value}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Cuarta sección - USABILITY -->
        <section id="section-usability">
            <div class="header">
                <h2 class="title">${tituloh2_4.value}</h2>
                <p class="text">${parrafo_H2_4.value}</p>
            </div>
            <picture class="main-image">
                <source media="(max-width: 480px)" srcset="{{media url=wysiwyg/${fotohorizontal_2.value}}}">
                <source media="(max-width: 768px)" srcset="{{media url=wysiwyg/${fotohorizontal_2.value}}}">
                <img src="{{media url=wysiwyg/${fotohorizontal_2.value}}}" alt="${nombreproducto.value}">
            </picture>
            <h2 class="title">${tituloh2_5.value}</h2>
            <picture class="main-image">
                <source media="(max-width: 480px)" srcset="{{media url=wysiwyg/${fotohorizontal_3.value}}}">
                <source media="(max-width: 768px)" srcset="{{media url=wysiwyg/${fotohorizontal_3.value}}}">
                <img src="{{media url=wysiwyg/${fotohorizontal_3.value}}}" alt="${nombreproducto.value}">
            </picture>
        </section>
        <!-- Quinta sección - ADDITIONAL INFORMATION -->
        <section id="section-additional-info">
            <div class="header">
                <h2 class="title">${tituloh2_6.value}</h2>
            </div>
            <div class="content-grid">
                <div class="section__left-column">
                    <img src="{{media url=wysiwyg/${fotocuadrada_1.value}}}" alt="Imagen que muestra ${nombreproducto.value}">
                </div>
                <div class="section__right-column">
                    <p class="text">${listaVinetaHTML}</p>
                </div>
            </div>
            <div class="images-grid">
                <div class="image1">
                    <img src="{{media url=wysiwyg/${fotocuadrada_2.value}}}" alt="Imagen que muestra ${nombreproducto.value}"s">
                </div>
                <div class="image2">
                    <img src="{{media url=wysiwyg/${fotocuadrada_3.value}}}" alt="Imagen que muestra ${nombreproducto.value}"">
                </div>
            </div>
        </section>
        <!-- ADD TO CART -->
        <div id="section-add-to-cart">
            <div class="bottom-bar">
                <div class="content">
                    <div class="title-row">
                        <h3 class="title__bottom-bar">${nombreproducto.value}"</h3>
                    </div>
                    <div class="product-info">
                        <div class="price-info">
                            <div class="original-price">$199.990</div>
                            <div class="current-price">
                                $179.990
                                <div class="discount">10% OFF</div>
                            </div>
                        </div>
                    </div>
                    <div class="actions">
                        <button class="buy-button">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>`;



    salida.textContent = html;
    salida_abajo.innerHTML=html
    salida.style.display = "none";
  
});

const copiarTexto = async () => {
    const textoACopiar = salida.textContent;
    try {
        await navigator.clipboard.writeText(textoACopiar);
        alert('¡Texto copiado al portapapeles!');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
        alert('Error al copiar el texto.');
    }
};


document.getElementById("limpiar").addEventListener("click", function (e) {
    e.preventDefault();

    // Limpiar todos los textareas dentro del formulario
    const form = document.getElementById("formulario");
    const textareas = form.querySelectorAll("textarea");
    textareas.forEach(textarea => textarea.value = "");

    // Limpiar los divs de salida
    document.getElementById("salida").textContent = "";
    document.getElementById("salida-abajo").innerHTML = "";

    // Mostrar el div de salida por si estaba oculto
    document.getElementById("salida").style.display = "block";
});

