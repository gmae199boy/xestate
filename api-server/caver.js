import Caver from 'caver-js';

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/';

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

const ABI = `[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roomId",
				"type": "uint256"
			},
			{
				"name": "_stars",
				"type": "uint8"
			}
		],
		"name": "RegistReview",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_deposit",
				"type": "uint32"
			},
			{
				"name": "_monthly",
				"type": "uint32"
			},
			{
				"name": "_progress",
				"type": "uint8"
			},
			{
				"name": "_roomType",
				"type": "uint8"
			}
		],
		"name": "RegistRoom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_roomId",
				"type": "uint256"
			}
		],
		"name": "ReportRoom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userType",
				"type": "uint8"
			},
			{
				"name": "_userName",
				"type": "string"
			}
		],
		"name": "Signup",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_initNum",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roomId",
				"type": "uint256"
			}
		],
		"name": "GetReviews",
		"outputs": [
			{
				"components": [
					{
						"name": "auth",
						"type": "address"
					},
					{
						"name": "roomIndex",
						"type": "uint256"
					},
					{
						"name": "stars",
						"type": "uint8"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roomId",
				"type": "uint256"
			}
		],
		"name": "GetRoom",
		"outputs": [
			{
				"components": [
					{
						"name": "registLessor",
						"type": "address"
					},
					{
						"name": "addr",
						"type": "string"
					},
					{
						"name": "deposit",
						"type": "uint32"
					},
					{
						"name": "monthlyPayment",
						"type": "uint32"
					},
					{
						"name": "progress",
						"type": "uint8"
					},
					{
						"name": "roomType",
						"type": "uint8"
					},
					{
						"name": "reported",
						"type": "address[]"
					},
					{
						"name": "reviewIndex",
						"type": "uint256[]"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lessees",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lessors",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reviews",
		"outputs": [
			{
				"name": "auth",
				"type": "address"
			},
			{
				"name": "roomIndex",
				"type": "uint256"
			},
			{
				"name": "stars",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rooms",
		"outputs": [
			{
				"name": "registLessor",
				"type": "address"
			},
			{
				"name": "addr",
				"type": "string"
			},
			{
				"name": "deposit",
				"type": "uint32"
			},
			{
				"name": "monthlyPayment",
				"type": "uint32"
			},
			{
				"name": "progress",
				"type": "uint8"
			},
			{
				"name": "roomType",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]`;

const ABI_JSON = JSON.parse(ABI);
const ADDRESS = "0x8599d8f387187baE9543B945EECe5C2332A35421";
export {
    caver,
    ABI_JSON,
    ADDRESS,
};