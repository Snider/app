import { Injectable } from '@angular/core';
export const WS_ENDPOINT = 'ws://localhost:36909';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
	providedIn: 'root'
})
export class WebsocketService {

	private socket$: WebSocketSubject<any>;

	constructor() {}

	public connect(): WebSocketSubject<any> {
		if (!this.socket$ || this.socket$.closed) {
			this.socket$ = webSocket(WS_ENDPOINT);
		}
		return this.socket$;
	}

	public dataUpdates$() {
		return this.connect().asObservable();
	}

	closeConnection() {
		this.connect().complete();
	}

	sendMessage(msg: string) {
		this.socket$.next(msg);
	}


	/**
	import { webSocket } from "rxjs/webSocket";
const subject = webSocket("ws://localhost:8081");

subject.subscribe(
   msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
   err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
   () => console.log('complete') // Called when connection is closed (for whatever reason).
 );
	 */
}
