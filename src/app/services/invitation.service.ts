// Este servicio queda vacío a propósito.
// La invitación es una sola página con datos fijos (ver data/invitation-data.ts),
// así que no hace falta backend ni HttpClient.
//
// Si en el futuro quieres cargar los datos desde un JSON o una API,
// este sería el lugar para hacerlo, por ejemplo:
//
// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { InvitationData } from '../models/invitation.model';
//
// @Injectable({ providedIn: 'root' })
// export class InvitationService {
//   private http = inject(HttpClient);
//
//   getInvitation() {
//     return this.http.get<InvitationData>('/assets/data/invitation.json');
//   }
// }
