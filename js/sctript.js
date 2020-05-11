var casas = [];
var contEstudiantes = 0;

//------------------------------Inicio guardar datos ---------------------------
var calcular = (e) =>{
let casa = document.getElementById("txtcasa").value;
document.getElementById("txtcasa").value = "";
if(casa.trim() != "" && casa.trim()!= null && casa.length == 1){ 

    seleccion = casa.toLocaleUpperCase();

    if(seleccion == "G" || seleccion == "S" || seleccion == "R" || seleccion == "H"){

            if(casa.length < 16){
                casas.push(seleccion);
                contEstudiantes++;
                alert("se registro seleccion");

            }else{

                alert("ya se ingresaron los 16 estudiantes");

            }

    }else{

        alert("Esa casa no existe por favor ingrese otra");

    }
}else{
    alert("Error al ingresar los datos");

}
}
//---------------------------Fin guardar datos -----------------------------------

let calcularDominante = (e) => {

    
    let contEstCasas = [0,0,0,0];
    let porcEstCasas = [0,0,0,0];
    let dominantes = []

    casas.forEach((element, index) =>{

        if(element == "H"){
            contEstCasas[0]++;

        }else if(element == "G"){
            contEstCasas[1]++;


        }else if(element == "R"){
            contEstCasas[2]++;


        }else if(element == "S"){
            contEstCasas[3]++;

        }

    });

     dominantes = dominantes.concat(contEstCasas,"Hufflepuff","Gryffindor","Ravenclaw","Slytherin");
    let k,i,aux, aux2;
    
    for (k = 1; k < 3; k++) {
        for (i = 0; i < (3 - k); i++) {
            if (dominantes[i] > dominantes[i + 1]) {
                aux = dominantes[i];
                dominantes[i] = dominantes[i + 1];
                dominantes[i + 1] = aux;

                aux2 = dominantes[i + 4];
                dominantes[i + 4] = dominantes[i + 5];
                dominantes[i + 5] = aux2;
            }
        }
    }

    contEstCasas.forEach((element, index) => {
        
        porcEstCasas[index] = (element*100)/casas.length;
        
    });

    HTML_TOTAL = `<table border=1>
                    <tr>
                    <th>Nombre casa</th>
                    <th>Cantidad de estudiantes</th>
                    <th>Porcentaje</th>

                    </tr>
                    <tr>
                        <td>Hufflepuff  (H)</td>
                        <td>${contEstCasas[0]}</td>
                        <td>${porcEstCasas[0].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Gryffindor  (G)</td>
                        <td>${contEstCasas[1]}</td>
                        <td>${porcEstCasas[1].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Ravenclaw  (R)</td>
                        <td>${contEstCasas[2]}</td>
                        <td>${porcEstCasas[2].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Slytherin  (S)</td>
                        <td>${contEstCasas[3]}</td>
                        <td>${porcEstCasas[3].toFixed(2)}%</td>
                    </tr>
                   
                </table>`;

                document.getElementById("tbl-casas").innerHTML = HTML_TOTAL;


                alert("la casa "+ dominantes[7] + "  es dominante a la casa " + dominantes[6]+ " y esta es dominante a la casa " + dominantes[5] + " y esta es dominante a la casa " +dominantes[4]);


}



document.getElementById("btnCalcular").addEventListener("click", calcular);
document.getElementById("btnDominantes").addEventListener("click", calcularDominante);
document.getElementById("txtcasa").addEventListener('keypress',  (e) => {
    if(e.charCode == 13){
        calcular(e);
    }
})
