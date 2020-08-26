import {ScatterplotLayer, BitmapLayer, PathLayer} from '@deck.gl/layers'
import {MapboxLayer} from "@deck.gl/mapbox"
import mapboxgl from "mapbox-gl"

import belizeSVG from "./bz.svg"

mapboxgl.accessToken = "pk.eyJ1Ijoia3VyYWkwMjEiLCJhIjoiY2tkeW9meWs1MDFyMDJ4cDdsbGRodm50dCJ9.2jdZXPTbHLUWB5XK2Md6ew"

export const map = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/kurai021/cke9zs3au0jvl19mfit26p7cp',
    center: [-70.47, 16.30],
    zoom: 4
})

export const belize = new MapboxLayer({
    id: 'Honduras Britanicas',
    type: BitmapLayer,
    bounds: [-89.262,15.894,-87.450,18.530],
    image: belizeSVG
})

export const costaMisquitia = new MapboxLayer({
    id: 'Costa Misquitia',
    type: PathLayer,
    data: [
        {path: [[-84.197,15.654],[-83.448,15.074],[-83.229,14.070],[-83.429,12.500],[-83.429,11.920],[-83.750,11.100]], color: [124,50,56]}
    ],
    widthScale: 20,
    widthMinPixels: 8,
    roundes: true,
    getPath: d => d.path,
    getColor: d => d.color,
    getWidth: d => 5,
})

export const bermudas = new MapboxLayer({
    id: 'Bermudas',
    type: ScatterplotLayer,
    data: [
        {position: [-64.7526, 32.2721], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const bahamas = new MapboxLayer({
    id: "Bahamas",
    type: ScatterplotLayer,
    data: [
        {position: [-77.752, 24.52], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const anguila = new MapboxLayer({
    id: "Anguila",
    type: ScatterplotLayer,
    data: [
        {position: [-63.0643, 18.1612], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const antigua_barbuda = new MapboxLayer({
    id: "Antigua y Barbuda",
    type: ScatterplotLayer,
    data: [
        {position: [-61.7946, 17.3792], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const islas_virgenes = new MapboxLayer({
    id: "Islas Virgenes",
    type: ScatterplotLayer,
    data: [
        {position: [-64.5614, 18.3346], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const dominica = new MapboxLayer({
    id: "Dominica",
    type: ScatterplotLayer,
    data: [
        {position: [-61.3921, 15.5751], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const montserrat = new MapboxLayer({
    id: "Montserrat",
    type: ScatterplotLayer,
    data: [
        {position: [-62.192, 16.6629], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const sancristobal = new MapboxLayer({
    id: "San Cristobal y Nieves",
    type: ScatterplotLayer,
    data: [
        {position: [-62.7612, 17.2037], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const barbados = new MapboxLayer({
    id: "Barbados",
    type: ScatterplotLayer,
    data: [
        {position: [-59.5405, 13.1565], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const granada = new MapboxLayer({
    id: "Granada",
    type: ScatterplotLayer,
    data: [
        {position: [-61.6431, 12.1164], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const santalucia = new MapboxLayer({
    id: "Santa Lucia",
    type: ScatterplotLayer,
    data: [
        {position: [-60.9937, 13.8653], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const sanvicente = new MapboxLayer({
    id: "San Vicente y Las Granadinas",
    type: ScatterplotLayer,
    data: [
        {position: [-61.1328, 13.2121], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const islascaiman = new MapboxLayer({
    id: "Islas Caiman",
    type: ScatterplotLayer,
    data: [
        {position: [-81.2139, 19.2294], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const guyana = new MapboxLayer({
    id: "Guyana",
    type: ScatterplotLayer,
    data: [
        {position: [-58.97, 4.45], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const jamaica = new MapboxLayer({
    id: "Jamaica",
    type: ScatterplotLayer,
    data: [
        {position: [-77.367, 17.785], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const trinidad_tobago = new MapboxLayer({
    id: "Trinidad y Tobago",
    type: ScatterplotLayer,
    data: [
        {position: [-61.073, 10.282], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const islas_turcas = new MapboxLayer({
    id: "Islas Turcas y Caicos",
    type: ScatterplotLayer,
    data: [
        {position: [-71.4662, 21.5583], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})

export const islas_bahia = new MapboxLayer({
    id: "Islas de la Bahía",
    type: ScatterplotLayer,
    data: [
        {position: [-86.063, 16.454], size: 100}
    ],
    opacity: 0.8,
    radiusScale: 5,  // make the dots visible or darker background
    radiusMinPixels: 5, // make the dots visible or darker background
    getPosition: d => d.position,
    getRadius: d => d.size,
    getColor: [124,50,56]
})