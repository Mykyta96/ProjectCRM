export interface Clients {

  id?: number;
  nomeContatto: string;
  cognomeContatto: string;
  email: string;
  telefono: string;
  ragioneSociale: string;
  partitaIva: string;
  tipoCliente: string;
  pec: string;
  telefonoContatto: string;
  emailContatto: string;
  dataInserimento: string,
  dataUltimoContatto: string,
  fatturatoAnnuale?: number,

  indirizzoSedeOperativa: {
    id?: number;
    via: string;
    civico: string;
    cap: string;
    localita: string;
    comune: {
      id?: number;
      nome: string;
      provincia: {
        id?: number;
        nome: string;
        sigla: string;
       }
  }
}

indirizzoSedeLegale: {
  id?: number;
  via: string;
  civico: string;
  cap: string;
  localita: string;
  comune: {
    id?: number;
    nome: string;
    provincia: {
      id?: number;
      nome: string;
      sigla: string;
     }
}
}


}


// {
//   "ragioneSociale": "Bruno-Romano SPA - TEST",
//   "partitaIva": "14812266616",
//   "tipoCliente": "SRL",
//   "email": "rosalino.caruso@gmail.com",
//   "pec": "antonio.damico@gmail.com",
//   "telefono": "+38 855 62 44 5685",
//   "nomeContatto": "Sarita",
//   "cognomeContatto": "Serr",
//   "telefonoContatto": "380.260.3225",
//   "emailContatto": "armando.martinelli@hotmail.com",
//   "indirizzoSedeOperativa": {
//       "via": "Contrada Gastone 4, Piano 4",
//       "civico": "698",
//       "cap": "38615",
//       "localita": "Vania del friuli",
//       "comune": {
//           "id": 1,
//           "nome": "LASTRA A SIGNA",
//           "provincia": {
//               "id": 1,
//               "nome": "FIRENZE",
//               "sigla": "FI"
//           }
//       }
//   },
//   "indirizzoSedeLegale": {
//       "via": "Strada Ricci 55, Appartamento 58",
//       "civico": "925",
//       "cap": "65995",
//       "localita": "Ivonne umbro",
//       "comune": {
//           "id": 1,
//           "nome": "LASTRA A SIGNA",
//           "provincia": {
//               "id": 1,
//               "nome": "FIRENZE",
//               "sigla": "FI"
//           }
//       }
//   },
//   "dataInserimento": "2019-06-01T08:11:01.911+00:00",
//   "dataUltimoContatto": "2021-03-24T21:32:06.375+00:00"
// }
