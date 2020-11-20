import React from 'react';
import ReactDOM from 'react-dom';
import GifApp from './GifExpertApp';
import './index.sass';

const varitas = [
  {nombre: 'Harry Potter',	cantidad: 0},
  {nombre: 'Hermione Granger',	cantidad: 0},
  {nombre: 'Lord Voldemort',	cantidad: 6},
  {nombre: 'Albus Dumbledore sauco',	cantidad: 0},
  {nombre: 'Ron Weasley',	cantidad: 12},
  {nombre: 'Luna Lovegood recta',	cantidad: 3},
  {nombre: 'Severus Snape',	cantidad: 8},
  {nombre: 'Sirius Black',	cantidad: 3},
  {nombre: 'Fleur Delacour',	cantidad: 8},
  {nombre: 'Ginny Weasley',	cantidad: 0},
  {nombre: 'Cedric Diggory',	cantidad: 2},
  {nombre: 'Fenrir Greyback',	cantidad: 3},
  {nombre: 'Bellatrix Lestrange curva',	cantidad: 6},
  {nombre: 'Death Eaters',	cantidad: 4},
  {nombre: 'Alastor Moody',	cantidad: 1},
  {nombre: 'Percy Ignatius Weasley',	cantidad: 2},
  {nombre: 'Kingsley Shcklebolt',	cantidad: 2},
  {nombre: 'Cho Chang',	cantidad: 2},
  {nombre: 'Death Eaters Skull',	cantidad: 0},
  {nombre: 'Alecto Carrow',	cantidad: 0},
  {nombre: 'Filius Flitwick',	cantidad: 2},
  {nombre: 'Xenophilius Lovegood',	cantidad: 2},
  {nombre: 'Parvati Patil',	cantidad: 0},
  {nombre: 'Lucius Malfoy',	cantidad: 3},
  {nombre: 'Minerva McGonagall',	cantidad: 0},
  {nombre: 'Pius Thicknesse',	cantidad: 2},
  {nombre: 'Rufus Scrimgeour',	cantidad: 0},
  {nombre: 'Nigel',	cantidad: 0},
  {nombre: 'Narcissa Malfoy	', cantidad: 0},
  {nombre: 'James Potter',	cantidad: 3},
  {nombre: 'Bellatrix Lestrange recta',	cantidad: 6},
  {nombre: 'Remus Lupin',	cantidad: 4},
  {nombre: 'Nymphadora Tonks',	cantidad: 1},
  {nombre: 'Undead Division',	cantidad: 0},
  {nombre: 'Bernadette',	cantidad: 0},
  {nombre: 'Skeleton snake',	cantidad: 0},
  {nombre: 'Queenie Goldstein',	cantidad: 2},
  {nombre: 'Seraphina Picquery',	cantidad: 4},
  {nombre: 'porpentina goldstein',	cantidad: 3},
  {nombre: 'Newt Scamander',	cantidad: 10},
  {nombre: 'Percival Graves',	cantidad: 5},
  {nombre: 'Gellert Grinderwald',	cantidad: 6},
  {nombre: 'Sibyll Trelawney',	cantidad: 2},
  {nombre: 'Neville Longbottom',	cantidad: 5},
  {nombre: 'Death Eaters Otra',	cantidad: 0},
  {nombre: 'Luna Flor',	cantidad: 10},
  {nombre: 'Draco Malfoy',	cantidad: 1},
  {nombre: 'George Weasley',	cantidad: 7},
  {nombre: 'Fred Weasley',	cantidad: 7},
  {nombre: 'Mundungus Fletcher',	cantidad: 0},
  {nombre: 'seamus finnigan',	cantidad: 0},
  {nombre: 'Arthur Weasley',	cantidad: 2},
  {nombre: 'Horace Slughorn',	cantidad: 0},
  {nombre: 'Madam Pomfrey',	cantidad: 0},
  {nombre: 'Molly Weasley',	cantidad: 5},
  {nombre: 'William Weasley',	cantidad: 2},
  {nombre: 'Jane Umbridge',	cantidad: 2},
  {nombre: 'Victor Krum',	cantidad: 3},
  {nombre: 'Abernathy',	cantidad: 2},
  {nombre: 'Skender',	cantidad: 0},
  {nombre: 'Spielman',	cantidad: 0},
  {nombre: 'Yusuf Kama',	cantidad: 0},
  {nombre: 'Dumbledore joven',	cantidad: 9},
  {nombre: 'Leta Lestrange',	cantidad: 0},
  {nombre: 'Nicolas Flamel',	cantidad: 3},
  {nombre: 'Theseus Scamander',	cantidad: 0},
  {nombre: 'Dean Thomas',	cantidad: 0},
  {nombre: 'Yaxley',	cantidad: 0},
  {nombre: 'Gregorovitch',	cantidad: 2},
  {nombre: 'Vincent Crabbe',	cantidad: 3},
  {nombre: 'Scabior',	cantidad: 0},
  {nombre: 'Katie Bell',	cantidad: 0},
  {nombre: 'Gregory Goyle',	cantidad: 4},
  {nombre: 'Pomona Sprout',	cantidad: 2},
  {nombre: 'Oliver Wood',	cantidad: 2},
  {nombre: 'Lavender Brown',	cantidad: 0},
  {nombre: 'Albus Potter',	cantidad: 0},
  {nombre: 'Scorpius Malfoy',	cantidad: 1},
  {nombre: 'Hippocampus',	cantidad: 0},
]

ReactDOM.render(
<div>
  {/* <GifApp/> */}
  <div style={{fontWeight: 'bold'}}>
    Varitas disponibles:
  </div>
  <hr/>
  <div>
    <div style={{fontWeight: 'bolder'}}>
      ({varitas.length} varitas disponibles)
    </div>
    {varitas.map(varita => (<div>{varita.cantidad > 0 && varita.nombre + ','}</div>))}
  </div>
</div>,
  document.getElementById('root')
);
