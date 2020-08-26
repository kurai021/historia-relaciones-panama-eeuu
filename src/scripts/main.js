import {initReveal} from "./libs/reveal.init.js"
import {map, belize, costaMisquitia, bermudas, bahamas, anguila, antigua_barbuda, islas_virgenes, dominica, montserrat, sancristobal, barbados, granada, santalucia, sanvicente, islascaiman, guyana, jamaica, trinidad_tobago, islas_turcas, islas_bahia} from "./libs/mapDeck.js"

window.onload = function(){
    initReveal()
}

map.on('load', () => {
    map.addLayer(costaMisquitia)
    map.addLayer(belize)
    map.addLayer(bermudas)
    map.addLayer(bahamas)
    map.addLayer(anguila)
    map.addLayer(antigua_barbuda)
    map.addLayer(islas_virgenes)
    map.addLayer(dominica)
    map.addLayer(montserrat)
    map.addLayer(sancristobal)
    map.addLayer(barbados)
    map.addLayer(granada)
    map.addLayer(santalucia)
    map.addLayer(sanvicente)
    map.addLayer(islascaiman)
    map.addLayer(guyana)
    map.addLayer(jamaica)
    map.addLayer(trinidad_tobago)
    map.addLayer(islas_turcas)
    map.addLayer(islas_bahia)
    map.resize()
})