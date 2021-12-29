export interface Transaction {
	status: string,
	version: number;
	unlock_time: number;
	vin: {
		gen: {
			height: number;
			key_offsets: number[];
			k_image: string;
		}
	}[];

	vout: {
		amount: number;
		target: { key: string; }
	}[];

	extra: number[];

	rct_signatures: {
		type: number;
		txnFee: number;
		ecdhInfo: {
			mask: string;
			amount: string;
		}[];
		outPk: string[];
	};


}
