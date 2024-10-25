 import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayorDe30 } from "../services/superheroesService.mjs";
 import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";

 export function obtenerSuperPorIdController(req, res) {

     const { id } = req.params;
     const superheroe = obtenerSuperheroePorId(parseInt(id));
     if (superheroe) {
         res.send(renderizarSuperheroe(superheroe));

     } else {
         res.status(400).send({ mensaje: 'Superhéroe no encontrado' });
     }
 }
 export function buscarSuperheroesPorAtributoController(req, res) {
     const { atributo, valor } = req.params;
     const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

     if (superheroes.length > 0) {
         res.send(renderizarListaSuperheroes(superheroes));

     } else {
         res.status(400).send({ mensaje: 'No se encontraron supérheroes con ese atributo' });
     }
 }

 export function obtenerSuperheroesMAyoresDe30Controller(req, res) {
     const superheroes = obtenerSuperheroesMayorDe30();
     res.send(renderizarListaSuperheroes(superheroes));
 }
 }