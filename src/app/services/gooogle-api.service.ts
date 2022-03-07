import { Injectable } from '@angular/core';
import {
  google,   // The top level object used to access services
  drive_v3, // For every service client, there is an exported namespace
  Auth,     // Namespace for auth related types
  Common,   // General types used throughout the library
} from 'googleapis';
const CLIENT_ID:string = '';
const CLIENT_SECRET:string = '';
const uriAPi='';

const auth: Auth.GoogleAuth = new google.auth.GoogleAuth();
const drive: drive_v3.Drive = google.drive({
  version: 'v3',
  auth,
});

@Injectable({
  providedIn: 'root'
})
export class GooogleAPIService {
  
  constructor() { }
}
