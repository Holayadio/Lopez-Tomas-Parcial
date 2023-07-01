// Función para hacer una petición GET a la API y renderizar los datos en la página
function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var dataList = document.getElementById("dataList");
            dataList.innerHTML = "";
            data.forEach(function (item) {
                var li = document.createElement("li");
                li.textContent = "ID: " + item.id + ", Nombre: " + item.nombre + ", Edad: " + item.edad;
                dataList.appendChild(li);
            });
        }
    };
    xhttp.open("GET", "http://localhost:5077", true);
    xhttp.send();
}

// Función para hacer una petición POST para crear un nuevo registro en la API
function createData() {
    var nameInput = document.getElementById("nameInput").value;
    var ageInput = document.getElementById("ageInput").value;
    var data = {
        nombre: nameInput,
        edad: ageInput
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            getData(); // Actualizar los datos mostrados después de crear uno nuevo
        }
    };
    xhttp.open("POST", "http://localhost:5077", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}

// Función para hacer una petición PUT para actualizar un registro existente en la API
function updateData() {
    var updateIdInput = document.getElementById("updateIdInput").value;
    var updateNameInput = document.getElementById("updateNameInput").value;
    var updateAgeInput = document.getElementById("updateAgeInput").value;
    var data = {
        nombre: updateNameInput,
        edad: updateAgeInput
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getData(); // Actualizar los datos mostrados después de actualizar uno existente
        }
    };
    xhttp.open("PUT", "http://localhost:5077/" + updateIdInput, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}

// Función para hacer una petición DELETE para borrar un registro en la API
function deleteData() {
    var deleteIdInput = document.getElementById("deleteIdInput").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getData(); // Actualizar los datos mostrados después de borrar uno
        }
    };
    xhttp.open("DELETE", "http://localhost:5077/" + deleteIdInput, true);
    xhttp.send();
}

// Llamar a getData() al cargar la página para mostrar los datos iniciales
getData();
