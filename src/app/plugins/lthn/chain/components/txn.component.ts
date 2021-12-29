import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '@plugin/lthn/chain/blockchain.service';
import {Transactions} from '@plugin/lthn/chain/interfaces/props/transactions';
import {Observable, Subscription} from 'rxjs';
import { Transaction } from '../interfaces/props/transaction';

@Component({
  selector: 'lthn-app-txn',
  templateUrl: './txn.component.html',
  styleUrls: ['./txn.component.scss']
})
export class TxnComponent implements OnInit {

  public transaction: Transaction;
  private missed_tx: string[];
  constructor(private chain: BlockchainService) { }

  ngOnInit(): void {
    this.chain.getTransactions(['a21c013e2f7b6664a23df1cac62e8fbc15668f49c4185d1fcd9b62cd834db03c']).subscribe((data) => {
      data.txs.forEach((tx) => this.transaction = JSON.parse(tx.as_json))
      this.missed_tx = data.missed_tx
    })
  }

}
