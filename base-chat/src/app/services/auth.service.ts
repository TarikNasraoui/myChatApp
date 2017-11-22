import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';



@Injectable()
export class AuthService {
  private user : Observable<firebase.user>;
  private authState : any;

  constructor(
  	private afAuth : AngularFireAuth,
  	private db: AngularFireDatabse,
  	private router : Router 
  	) { 
  		this.user = afAuth.authState;
  	}
  	signUp(email: string, password: string, displayName: string) {
  		return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  		.then((user)=>{
  			
  		})
  	}

}
