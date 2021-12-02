import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgTerminal} from 'ng-terminal';
import {WebsocketService} from '@service/websocket.service';


@Component({
	selector: 'lthn-app-console',
	templateUrl: './console.component.html',
	styleUrls: ['./console.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.Default


})
export class ConsoleComponent implements OnInit, AfterViewInit {
	@ViewChild('term', { static: true }) child: NgTerminal;

	@Input() attach  = 'lethean-wallet-rpc';
	private command: string[] = []
	private sub$;
	constructor(private ws: WebsocketService, private ref: ChangeDetectorRef) {
		this.ref.detach()
		setInterval(() => {
			this.ref.detectChanges();
		}, 1000);

	}

	ngOnInit(): void {
		let that = this;
		this.ref.detectChanges();
		this.ws.connect().subscribe((data) => {
			if(this.attach === data[0]) {
				this.child.write(data[1] + '\r\n');
				that.ref.markForCheck()
			}

		})

			this.changeStream(this.attach)
    }

	getSub(){
		this.sub$ = this.ws.connect();
	}

	changeStream(channel:string){
		this.ws.sendMessage(`daemon:${this.attach}`)
		this.ref.markForCheck()
	}

	ngAfterViewInit() {
		const that = this;
		this.child.write('$ ');
		if(this.child.keyEventInput) {

			this.child.keyEventInput.subscribe((e) => {
				//console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);

				const ev = e.domEvent;
				const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

				if (ev.keyCode === 13) {

					//console.log(`cmd:letheand:${this.command.join('')}`)
					that.ws.sendMessage(`cmd:letheand:${this.command.join('')}\n`)
					this.command = []
					this.child.write('\r\n$ ');
					this.ref.detectChanges();
				} else if (ev.keyCode === 8) {
					 this.command.pop()
					if (this.child.underlying.buffer.active.cursorX > 0) {
						this.child.write('\b \b');
						this.ref.detectChanges();
					}
				} else if (printable) {
					this.command.push(e.key);
					this.child.write(e.key);
					this.ref.detectChanges();
				}
				//console.log(this.command.join(""))
			});
		}
	}
}