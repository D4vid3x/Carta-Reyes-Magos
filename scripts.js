window.addEventListener("load", function () {
    let regalos = [
        {
            "nombre": "Fnatic x Lamzu Thorn 4K Special Edition Gaming-Maus",
            "link": "https://www.amazon.es/dp/B0CLVPRZR5/?coliid=I26YTGIM07RG08&colid=3HEOXV46VQYT1" +
                    "&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/raton.jpg"
        }, {
            "nombre": "Viento y Verdad (El Archivo de las Tormentas 5) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B0DJ5HWQ3B/?coliid=IJYW5YXSZXHOE&colid=3HEOXV46VQYT1&" +
                    "psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/vientoyverdad.jpg"
        }, {
            "nombre": "El Hombre Iluminado: Una novela del Cosmere - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B0CKB3FRNW/?coliid=I2NA0BBQOGOSVU&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/iluminado.jpg"
        }, {
            "nombre": "Yumi y el Pintor de Pesadillas - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B0C83X5W7P/?coliid=I38FL6X118KAZ2&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/yumipintor.jpg"
        }, {
            "nombre": "Elantris - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B01DKMR9DA/?coliid=I2WNFF5OE2WSLW&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/elantris.jpg"
        }, {
            "nombre": "El Héroe de las Eras (Mistborn 3) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B00CH2TR7Q/?coliid=I3RV2ZQVJRJFN9&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/heroeeras.jpg"
        }, {
            "nombre": "El Pozo de la Ascensión (Mistborn 2) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B00AR07H9A/?coliid=I1ZATMTRI6U6UA&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/ascension.jpg"
        }, {
            "nombre": "Nacidos de la Bruma 1: El Imperio Final - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B00AR07NXU/?coliid=I3G6S7GVY2BRKQ&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/imperio.jpg"
        }, {
            "nombre": "El Metal Perdido (Wax & Wayne 4) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B0BFZV7Q4B/?coliid=I20GIL6VFXW2B0&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/metalperdido.jpg"
        }, {
            "nombre": "Sombras de Identidad (Wax & Wayne 2) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B01M1UNSLN/?coliid=I114T0OVIBFZX2&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/sombasidentidad.jpg"
        }, {
            "nombre": "Brazales de Duelo (Wax & Wayne 3) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B071ZMVB6Q/?coliid=I3EAPC8H9PQU57&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/brazalesduelo.jpg"
        }, {
            "nombre": "Trenza del Mar Esmeralda - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B0BRYPG3Q8/?coliid=INR78RNNEXUOG&colid=3HEOXV46VQYT1&" +
                    "psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/maresmeralda.jpg"
        }, {
            "nombre": "Aleación de Ley (Wax & Wayne 1) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B009D04QM6/?coliid=I1EO7GRXEAO0NY&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Baja",
            "foto": "./imagenes/aleaciondeley.jpg"
        }, {
            "nombre": "Arcanum Ilimitado - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B075RSTH8W/?coliid=I1GZO801TXTQOW&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/arcanumilimitado.jpg"
        }, {
            "nombre": "El Aliento de los Dioses - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B007ECLVT6/?coliid=I3821SKA6NQ1P2&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/aliento.jpg"
        }, {
            "nombre": "Juramentada (El Archivo de las Tormentas 3) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B07B6CLK7R/?coliid=IZ5ATVQDA0AQI&colid=3HEOXV46VQYT1&" +
                    "psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/juramentada.jpg"
        }, {
            "nombre": "Palabras Radiantes (El Archivo de las Tormentas 2) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B014R3O1CS/?coliid=I3DM7MILCLTCWG&colid=3HEOXV46VQYT1" +
                    "&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/palabras.jpg"
        }, {
            "nombre": "El Camino de los Reyes (El Archivo de las Tormentas 1) - Brandon Sanderson",
            "link": "https://www.amazon.es/dp/B014R3ODUI/?coliid=ITVTW3CKPAW0U&colid=3HEOXV46VQYT1&" +
                    "psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/camino.jpg"
        }, {
            "nombre": "HOMMAND - Bandeja Organizador de Cables Bajo Mesa",
            "link": "https://www.amazon.es/dp/B0B12J34JM/?coliid=IYDDNNEOM1PXN&colid=3HEOXV46VQYT1&" +
                    "psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/cable.jpg"
        }, {
            "nombre": "The Legend of Zelda: Echoes of Wisdom",
            "link": "https://www.amazon.es/dp/B0D7J3PC7H/?coliid=I3SJ4XFUP18AUM&colid=3HEOXV46VQYT1" +
                    "&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/zelda.jpg"
        }, {
            "nombre": "SteelSeries QcK - Alfombrilla de ratón para juegos",
            "link": "https://www.amazon.es/dp/B000UEZ36W/?coliid=I21VTFSTKCZ0O9&colid=3HEOXV46VQYT1" +
                    "&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/alfombrilla.jpg"
        }, {
            "nombre": "Keychron K8 - Teclado Mecánico Inalámbrico",
            "link": "https://www.amazon.es/dp/B0CFXYS8TJ/?coliid=IVF09H68DH7IQ&colid=3HEOXV46VQYT1&" +
                    "psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Media",
            "foto": "./imagenes/teclado.jpg"
        }, {
            "nombre": "Afilador Cuchillos Profesional ",
            "link": "https://www.amazon.es/dp/B0DP9QC377/?coliid=I1MAECJHJNCD3H&colid=3HEOXV46VQYT1" +
                    "&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            "prioridad": "Alta",
            "foto": "./imagenes/afilador.jpg"
        }
    ];

    let contenedor = document.getElementById("contenedor");
    let regalacos = document.querySelector("#regalacos tbody");
    function generarTabla() {

        for (let regalo of regalos) {
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement("td");
            celdaNombre.textContent = regalo.nombre;
            fila.appendChild(celdaNombre);

            let celdaFoto=document.createElement("td");
            let foto=document.createElement("img");
            foto.src=regalo.foto;
            celdaFoto.appendChild(foto);
            fila.appendChild(celdaFoto);

            let celdaLink = document.createElement("td");
            let enlace = document.createElement("a");
            enlace.href = regalo.link;
            enlace.textContent = "Ver página";
            enlace.target = "_blank";
            celdaLink.appendChild(enlace);
            celdaLink.style.textAlign="center";
            fila.appendChild(celdaLink);

            let celdaPrioridad = document.createElement("td");
            celdaPrioridad.textContent = regalo.prioridad;
            celdaPrioridad.style.textAlign="center";
            fila.appendChild(celdaPrioridad);

            regalacos.appendChild(fila);
        }
    };

    generarTabla();
});
