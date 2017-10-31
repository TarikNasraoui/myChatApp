import { Injectable } from '@angular/core';
import { AngularFireDatabase, firebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';






@Injectable()
export class ChatService {

  constructor() { }

}
