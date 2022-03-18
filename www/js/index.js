/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);

    altura = parseFloat(altura / 100);

    let valor = (peso / (altura * altura)).toPrecision(4);

    let div = document.getElementById("resultado");
    let info = document.getElementById("info");

    if (!valor || valor == "NaN") {
        info.innerHTML = "<br>- Preencha todos os campos!";
        return;
    }

    div.innerHTML = "Seu IMC é de: " + valor;

    info.innerHTML = "<br>- Abaixo de 18,5 = Desnutrição";
    info.innerHTML += "<br>- Entre 18,5 e 24,5 = Peso normal";
    info.innerHTML += "<br>- Entre 25,0 e 29,9 = Sobrepeso";
    info.innerHTML += "<br>- Entre 30,0 e 39,9 = Obesidade";
    info.innerHTML += "<br>- Acima de 40,0 = Obesidade Mórbida";
}