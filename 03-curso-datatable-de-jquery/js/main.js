//  ----------------------------------------------------------------
//  ----------  /03-curso-datatable-de-jquery/js/main.js  ----------
//  ----------------------------------------------------------------


//  -----  Globales  -----
const $tableUsers = $("#table_users");
let dataTable;
let dataTableInitialized = false;
const url = "https://jsonplaceholder.typicode.com/users";



//  -----  Opciones para DataTables  -----
let dataTableOptions = {

    //  -----  configurar Nº de Registros por página  -----
    lengthMenu: [3, 5, 8],

    dom: "Bfrtilp",     //  DOM: botones , filtrado y paginado.

    buttons: [          //  Botones.

        {   //  Boton de Excel
            extend: "excelHtml5",
            text: "<i class='fa-solid fa-file-csv'> </i>",
            titleAttr: "Exportar a Excel",
            className: "btn btn-success me-3"
        },

        {   //  Boton de PDF
            extend: "pdfHtml5",
            text: "<i class='fa-solid fa-file-pdf'> </i>",
            titleAttr: "Exportar a PDF",
            className: "btn btn-danger me-3"
        },

        {   //  Boton de Imprimir
            extend: "print",
            text: "<i class='fa-solid fa-print'> </i>",
            titleAttr: "Imprimir",
            className: "btn btn-info"
        }
    ],

    

    //  -----  Configuración de las columnas -----
    columnDefs: [
        {
            orderable: false,              //  configurar opciones de columnas para ordenar.
            target: [1, 2, 4, 5]           //  en false no se ordenan las columnas 1, 2, 4, 5.
        },
        {
            searchable: false,             //  columnas donde no quiero que busque
            target: [0, 1, 2, 4, 5]
        },
        {
            width: "50px",                  //  Tamaño de columnas
            target: [3]
        }
    ],

    //  -----  Nº de Registros al cargar el documento  -----
    pageLength: 5,

    //  -----  Destruir la Tabla  -----
    destroy: true,

    //  -----  Configuracion del Idioma en Español - language,json  -----
    language: {}, // Se completará con `language.json`.

};



//  -----  Cargar idioma Español desde `language.json`  -----
const loadLanguage = async () => {
    
    try {
        const response = await fetch("./js/language.json");
        const languageData = await response.json();
        dataTableOptions.language = languageData;
    } catch (error) {
        console.error("Error al cargar el idioma:", error);
    }
};



//  -----  Inicialización de la Tabla  -----
const initDataTable = async () => {
    
    if (dataTableInitialized) {
        console.log("Destruyendo instancia previa de DataTable...");
        dataTable.destroy();
    }

    await listUsers();
    dataTable = $("#example").DataTable(dataTableOptions);
    dataTableInitialized = true;
};



//  -----  Listar Usuarios desde la API  -----
const listUsers = async () => {
    
    try {
        
        const response = await fetch(url);
        const users = await response.json();

        //  -----  Verifica si la tabla existe  -----
        if (!$tableUsers) {
            console.error("El elemento #table_users no se encontró en el DOM.");
            return;
        }

        let content = ``;

        //  -----  iteramos y renderizamos los datos  -----
        users.forEach((user, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
                    <td>Activo</td>
                    <td>
                        <button class="btn btn-sm btn-primary">
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-danger">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        //  -----  Añadimos la tabla al DOM  -----
        $tableUsers.html(content);

    } catch (error) {
        console.error("Error al listar usuarios:", error);
    }
};



//  -----  Cuando el DOM este Cargado  -----
document.addEventListener("DOMContentLoaded", async () => {
    
    //  -----  DOM Cargado  -- jQuery Versión  -----
    console.warn("----- Document Loaded ----- jQuery Version:", $.fn.jquery);
        
    await loadLanguage();
    await initDataTable();
});
