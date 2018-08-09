/*var Web3 = require('web3');*/
! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = t, r.i = function(e) {
        return e
    }, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 3)
}([function(e, t) {
    e.exports = {
        contractName: "EtherBags",
        abi: [
        {
            "anonymous": false,
            "inputs": [
            {
                "indexed": false,
                "name": "bagId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "multiplier",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "oldPrice",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newPrice",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "prevOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "newOwner",
                "type": "address"
            }
            ],
            "name": "BagSold",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "multiplier",
                "type": "uint256"
            }
            ],
            "name": "createBag",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "bagId",
                "type": "uint256"
            }
            ],
            "name": "deleteBag",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "payout",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "bagId",
                "type": "uint256"
            }
            ],
            "name": "purchase",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "bagId",
                "type": "uint256"
            },
            {
                "name": "multiplier",
                "type": "uint256"
            }
            ],
            "name": "setBagMultiplier",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "_startingPrice",
                "type": "uint256"
            }
            ],
            "name": "setStartingPrice",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "_timeout",
                "type": "uint256"
            }
            ],
            "name": "setTimeout",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "contractOwner",
            "outputs": [
            {
                "name": "",
                "type": "address"
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
                "name": "bagId",
                "type": "uint256"
            }
            ],
            "name": "getBag",
            "outputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "sellingPrice",
                "type": "uint256"
            },
            {
                "name": "nextSellingPrice",
                "type": "uint256"
            },
            {
                "name": "level",
                "type": "uint256"
            },
            {
                "name": "multiplier",
                "type": "uint256"
            },
            {
                "name": "purchasedAt",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBagCount",
            "outputs": [
            {
                "name": "bagCount",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "startingPrice",
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
            "inputs": [],
            "name": "timeout",
            "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
        ],
       // bytecode: "606060405262015180600255655af3107a400060035534156200002157600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200008260966200008864010000000002620005e2176401000000009004565b62000298565b62000092620001c3565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515620000ef57600080fd5b6080604051908101604052803073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001838152602001600081525090506004805480600101828162000141919062000202565b9160005260206000209060040201600083909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050505050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b815481835581811511620002325760040281600402836000526020600020918201910162000231919062000237565b5b505050565b6200029591905b808211156200029157600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160009055506004016200023e565b5090565b90565b61147580620002a86000396000f3006060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630f73b4f4146100eb57806341f64b851461010e5780634476e9a91461013157806363bd1d4a1461016a57806370dea79a1461017f5780638558c0af146101a8578063bc537bae146101cb578063c58a34cc146101e0578063ce606ee014610203578063d6fbf20214610258578063e1ed7fcb14610281578063e308c213146102ad578063e662ff9714610333578063eb79ec7c14610348578063efef39a11461035d578063f3548cd314610375575b600080fd5b34156100f657600080fd5b61010c600480803590602001909190505061039e565b005b341561011957600080fd5b61012f6004808035906020019091905050610404565b005b341561013c57600080fd5b610168600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104c2565b005b341561017557600080fd5b61017d610505565b005b341561018a57600080fd5b6101926105dc565b6040518082815260200191505060405180910390f35b34156101b357600080fd5b6101c960048080359060200190919050506105e2565b005b34156101d657600080fd5b6101de610718565b005b34156101eb57600080fd5b610201600480803590602001909190505061080a565b005b341561020e57600080fd5b610216610870565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026357600080fd5b61026b610896565b6040518082815260200191505060405180910390f35b341561028c57600080fd5b6102ab600480803590602001909190803590602001909190505061089c565b005b34156102b857600080fd5b6102ce6004808035906020019091905050610927565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390f35b341561033e57600080fd5b610346610b31565b005b341561035357600080fd5b61035b610c23565b005b6103736004808035906020019091905050610d15565b005b341561038057600080fd5b610388611162565b6040518082815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fa57600080fd5b8060038190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046057600080fd5b60048181548110151561046f57fe5b9060005260206000209060040201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160009055505050565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056157600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505015156105da57600080fd5b565b60025481565b6105ea61137a565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064657600080fd5b6080604051908101604052803073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001838152602001600081525090506004805480600101828161069691906113b9565b9160005260206000209060040201600083909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b1e352426040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b15156107f857600080fd5b5af1151561080557600080fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086657600080fd5b8060028190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108fa57600080fd5b60048381548110151561090957fe5b90600052602060002090600402019050818160020181905550505050565b600080600080600080600060048881548110151561094157fe5b906000526020600020906004020190508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169650610a0181608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505061116f565b9350610a8c81608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611221565b9550610b1781608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611241565b945080600201549250806003015491505091939550919395565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b8d57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e555c1a36040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b1515610c1157600080fd5b5af11515610c1e57600080fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c7f57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b1515610d0357600080fd5b5af11515610d1057600080fd5b505050565b6000806000806000806000600488815481101515610d2f57fe5b906000526020600020906004020196508660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1695503394508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610da457600080fd5b610dad8561126b565b1515610db857600080fd5b610e4187608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611221565b9350833410151515610e5257600080fd5b610e67610e6085605a6112a4565b60646112df565b9250610e7334856112fa565b9150610efe87608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505061116f565b9050610f0b816001611313565b8760010181905550848760000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504287600301819055503073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141515610fd5578573ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501515610fd457600080fd5b5b7fe8a01f1153a51225311b9dae279b4438dcfa3b4507176fb5ab01915632437cc3888860020154866110868b608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611221565b8a8a604051808781526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001965050505050505060405180910390a18473ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050151561115857600080fd5b5050505050505050565b6000600480549050905090565b60006111818260600151600254611313565b42111515611195578160200151905061121c565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6111f23073ffffffffffffffffffffffffffffffffffffffff163160026112df565b9081150290604051600060405180830381858888f19350505050151561121757600080fd5b600090505b919050565b60008061122d8361116f565b90506112398382611331565b915050919050565b6000806112576112508461116f565b6001611313565b90506112638382611331565b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60008060008414156112b957600091506112d8565b82840290508284828115156112ca57fe5b041415156112d457fe5b8091505b5092915050565b60008082848115156112ed57fe5b0490508091505092915050565b600082821115151561130857fe5b818303905092915050565b600080828401905083811015151561132757fe5b8091505092915050565b60008060006003549150600090505b8381101561136f576113606113598387604001516112a4565b60646112df565b91508080600101915050611340565b819250505092915050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b8154818355818115116113e6576004028160040283600052602060002091820191016113e591906113eb565b5b505050565b61144691905b8082111561144257600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160009055506004016113f1565b5090565b905600a165627a7a72305820268a9e3b378d951fbcf25bf266e1392686aa9d65326faae0f8c0b00edfc374240029",
       // deployedBytecode: "0x606060405262015180600255655af3107a400060035534156200002157600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200008260966200008864010000000002620005e2176401000000009004565b62000298565b62000092620001c3565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515620000ef57600080fd5b6080604051908101604052803073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001838152602001600081525090506004805480600101828162000141919062000202565b9160005260206000209060040201600083909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050505050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b815481835581811511620002325760040281600402836000526020600020918201910162000231919062000237565b5b505050565b6200029591905b808211156200029157600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160009055506004016200023e565b5090565b90565b61147580620002a86000396000f3006060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630f73b4f4146100eb57806341f64b851461010e5780634476e9a91461013157806363bd1d4a1461016a57806370dea79a1461017f5780638558c0af146101a8578063bc537bae146101cb578063c58a34cc146101e0578063ce606ee014610203578063d6fbf20214610258578063e1ed7fcb14610281578063e308c213146102ad578063e662ff9714610333578063eb79ec7c14610348578063efef39a11461035d578063f3548cd314610375575b600080fd5b34156100f657600080fd5b61010c600480803590602001909190505061039e565b005b341561011957600080fd5b61012f6004808035906020019091905050610404565b005b341561013c57600080fd5b610168600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104c2565b005b341561017557600080fd5b61017d610505565b005b341561018a57600080fd5b6101926105dc565b6040518082815260200191505060405180910390f35b34156101b357600080fd5b6101c960048080359060200190919050506105e2565b005b34156101d657600080fd5b6101de610718565b005b34156101eb57600080fd5b610201600480803590602001909190505061080a565b005b341561020e57600080fd5b610216610870565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026357600080fd5b61026b610896565b6040518082815260200191505060405180910390f35b341561028c57600080fd5b6102ab600480803590602001909190803590602001909190505061089c565b005b34156102b857600080fd5b6102ce6004808035906020019091905050610927565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390f35b341561033e57600080fd5b610346610b31565b005b341561035357600080fd5b61035b610c23565b005b6103736004808035906020019091905050610d15565b005b341561038057600080fd5b610388611162565b6040518082815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fa57600080fd5b8060038190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046057600080fd5b60048181548110151561046f57fe5b9060005260206000209060040201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160009055505050565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056157600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505015156105da57600080fd5b565b60025481565b6105ea61137a565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064657600080fd5b6080604051908101604052803073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001838152602001600081525090506004805480600101828161069691906113b9565b9160005260206000209060040201600083909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b1e352426040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b15156107f857600080fd5b5af1151561080557600080fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086657600080fd5b8060028190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108fa57600080fd5b60048381548110151561090957fe5b90600052602060002090600402019050818160020181905550505050565b600080600080600080600060048881548110151561094157fe5b906000526020600020906004020190508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169650610a0181608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505061116f565b9350610a8c81608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611221565b9550610b1781608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611241565b945080600201549250806003015491505091939550919395565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b8d57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e555c1a36040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b1515610c1157600080fd5b5af11515610c1e57600080fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c7f57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b1515610d0357600080fd5b5af11515610d1057600080fd5b505050565b6000806000806000806000600488815481101515610d2f57fe5b906000526020600020906004020196508660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1695503394508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610da457600080fd5b610dad8561126b565b1515610db857600080fd5b610e4187608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611221565b9350833410151515610e5257600080fd5b610e67610e6085605a6112a4565b60646112df565b9250610e7334856112fa565b9150610efe87608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505061116f565b9050610f0b816001611313565b8760010181905550848760000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504287600301819055503073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141515610fd5578573ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501515610fd457600080fd5b5b7fe8a01f1153a51225311b9dae279b4438dcfa3b4507176fb5ab01915632437cc3888860020154866110868b608060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050611221565b8a8a604051808781526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001965050505050505060405180910390a18473ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050151561115857600080fd5b5050505050505050565b6000600480549050905090565b60006111818260600151600254611313565b42111515611195578160200151905061121c565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6111f23073ffffffffffffffffffffffffffffffffffffffff163160026112df565b9081150290604051600060405180830381858888f19350505050151561121757600080fd5b600090505b919050565b60008061122d8361116f565b90506112398382611331565b915050919050565b6000806112576112508461116f565b6001611313565b90506112638382611331565b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60008060008414156112b957600091506112d8565b82840290508284828115156112ca57fe5b041415156112d457fe5b8091505b5092915050565b60008082848115156112ed57fe5b0490508091505092915050565b600082821115151561130857fe5b818303905092915050565b600080828401905083811015151561132757fe5b8091505092915050565b60008060006003549150600090505b8381101561136f576113606113598387604001516112a4565b60646112df565b91508080600101915050611340565b819250505092915050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b8154818355818115116113e6576004028160040283600052602060002091820191016113e591906113eb565b5b505050565b61144691905b8082111561144257600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160009055506004016113f1565b5090565b905600a165627a7a72305820268a9e3b378d951fbcf25bf266e1392686aa9d65326faae0f8c0b00edfc374240029",
        //sourceMap: "19293:5111:0:-;;;19750:8;19725:33;;19840:12;19809:43;;20214:88;;;;;;;;20265:10;20249:13;;:26;;;;;;;;;;;;;;;;;;20282:14;20292:3;20282:9;;;;;:14;;;:::i;:::-;19293:5111;;20308:220;20379:14;;:::i;:::-;20172:13;;;;;;;;;;;20158:27;;:10;:27;;;20150:36;;;;;;;;20396:103;;;;;;;;;20416:4;20396:103;;;;;;20436:1;20396:103;;;;20458:10;20396:103;;;;20490:1;20396:103;;;20379:120;;20508:4;:14;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;20518:3;20508:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20308:220;;:::o;19293:5111::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
       // deployedSourceMap: "26:4570:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1285:116;;;;;;;;;;;;;;;;;;;;;;;;;;2124:88;;;;;;;;;;;;;;;;;;;;;;;;;;3361:90;;;;;;;;;;;;;;325:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;974:211;;;;;;;;;;;;;;;;;;;;;;;;;;1189:92;;;;;;;;;;;;;;;;;;;;;;;;;;260:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;406:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1405:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1568:457;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2216:1141;;;;;;;;;;;;;;;;;;2029:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1285:116;755:13;;;;;;;;;;;741:27;;:10;:27;;;733:36;;;;;;;;1382:14;1366:13;:30;;;;1285:116;:::o;2124:88::-;755:13;;;;;;;;;;;741:27;;:10;:27;;;733:36;;;;;;;;2196:4;2201:5;2196:11;;;;;;;;;;;;;;;;;;;;;2189:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2124:88;:::o;3361:90::-;755:13;;;;;;;;;;;741:27;;:10;:27;;;733:36;;;;;;;;3410:13;;;;;;;;;;;:22;;:36;3433:4;:12;;;3410:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3361:90::o;325:33::-;;;;:::o;974:211::-;1044:14;;:::i;:::-;755:13;;;;;;;;;;;741:27;;:10;:27;;;733:36;;;;;;;;1061:98;;;;;;;;;1080:4;1061:98;;;;;;1099:1;1061:98;;;;1120:10;1061:98;;;;1151:1;1061:98;;;1044:115;;1166:4;:14;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;1176:3;1166:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;974:211;;:::o;1189:92::-;755:13;;;;;;;;;;;741:27;;:10;:27;;;733:36;;;;;;;;1268:8;1258:7;:18;;;;1189:92;:::o;260:28::-;;;;;;;;;;;;;:::o;406:42::-;;;;:::o;1405:159::-;1497:15;755:13;;;;;;;;;;;741:27;;:10;:27;;;733:36;;;;;;;;1515:4;1520:5;1515:11;;;;;;;;;;;;;;;;;;;;1497:29;;1549:10;1532:3;:14;;:27;;;;1405:159;;;:::o;1568:457::-;1625:13;1644:20;1670:24;1700:13;1719:18;1743:19;1773:15;1791:4;1796:5;1791:11;;;;;;;;;;;;;;;;;;;;1773:29;;1817:3;:9;;;;;;;;;;;;1809:17;;1840:16;1852:3;1840:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:11;:16::i;:::-;1832:24;;1877:23;1896:3;1877:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:18;:23::i;:::-;1862:38;;1925:27;1948:3;1925:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:22;:27::i;:::-;1906:46;;1971:3;:14;;;1958:27;;2005:3;:15;;;1991:29;;1568:457;;;;;;;;:::o;2216:1141::-;2270:15;2306:16;2340;2577:20;2777:15;2859:22;2928:13;2288:4;2293:5;2288:11;;;;;;;;;;;;;;;;;;;;2270:29;;2325:3;:9;;;;;;;;;;;;2306:28;;2359:10;2340:29;;2450:8;2438:20;;:8;:20;;;;2430:29;;;;;;;;2540:25;2556:8;2540:15;:25::i;:::-;2532:34;;;;;;;;2600:23;2619:3;2600:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:18;:23::i;:::-;2577:46;;2727:12;2714:9;:25;;2706:34;;;;;;;;2803:49;2816:30;2829:12;2843:2;2816:12;:30::i;:::-;2848:3;2803:12;:49::i;:::-;2777:76;;2884:37;2897:9;2908:12;2884;:37::i;:::-;2859:62;;2944:16;2956:3;2944:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:11;:16::i;:::-;2928:32;;2978:22;2991:5;2998:1;2978:12;:22::i;:::-;2966:3;:9;;:34;;;;3018:8;3006:3;:9;;;:20;;;;;;;;;;;;;;;;;;3050:3;3032;:15;;:21;;;;3140:4;3120:25;;:8;:25;;;;3116:72;;;3155:8;:17;;:26;3173:7;3155:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3116:72;3223:89;3231:5;3238:3;:14;;;3254:12;3268:23;3287:3;3268:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:18;:23::i;:::-;3293:8;3303;3223:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3319:8;:17;;:33;3337:14;3319:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2216:1141;;;;;;;;:::o;2029:91::-;2073:16;2104:4;:11;;;;2097:18;;2029:91;:::o;3601:184::-;3653:7;3680:38;3693:3;:15;;;3710:7;;3680:12;:38::i;:::-;3672:3;:47;;3668:113;;;3736:3;:9;;;3729:16;;;;3668:113;3773:1;3766:8;;3601:184;;;;:::o;3789:152::-;3848:7;3863:13;3879:16;3891:3;3879:11;:16::i;:::-;3863:32;;3908:28;3925:3;3930:5;3908:16;:28::i;:::-;3901:35;;3789:152;;;;:::o;3945:173::-;4008:7;4023:13;4039:33;4052:16;4064:3;4052:11;:16::i;:::-;4070:1;4039:12;:33::i;:::-;4023:49;;4085:28;4102:3;4107:5;4085:16;:28::i;:::-;4078:35;;3945:173;;;;:::o;4493:101::-;4553:4;4587:1;4572:17;;:3;:17;;;;4565:24;;4493:101;;;:::o;4684:173::-;4742:7;4797:9;4766:1;4761;:6;4757:35;;;4784:1;4777:8;;;;4757:35;4813:1;4809;:5;4797:17;;4836:1;4831;4827;:5;;;;;;;;:10;4820:18;;;;;;4851:1;4844:8;;4684:173;;;;;;:::o;4939:265::-;4997:7;5086:9;5102:1;5098;:5;;;;;;;;5086:17;;5198:1;5191:8;;4939:265;;;;;:::o;5317:110::-;5375:7;5402:1;5397;:6;;5390:14;;;;;;5421:1;5417;:5;5410:12;;5317:110;;;;:::o;5489:129::-;5547:7;5562:9;5578:1;5574;:5;5562:17;;5597:1;5592;:6;;5585:14;;;;;;5612:1;5605:8;;5489:129;;;;;:::o;4122:287::-;4194:7;4209:20;4257:9;4232:13;;4209:36;;4269:1;4257:13;;4252:127;4276:5;4272:1;:9;4252:127;;;4311:61;4324:42;4337:12;4351:3;:14;;;4324:12;:42::i;:::-;4368:3;4311:12;:61::i;:::-;4296:76;;4283:3;;;;;;;4252:127;;;4392:12;4385:19;;4122:287;;;;;;:::o;26:4570::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
       // source: "pragma solidity ^0.4.18;\n\ncontract EtherBags {\n  // Bag sold event\n  event BagSold(\n    uint256 bagId,\n    uint256 multiplier,\n    uint256 oldPrice,\n    uint256 newPrice,\n    address prevOwner,\n    address newOwner\n  );\n\n  // Address of the contract creator\n  address public contractOwner;\n\n  // Default timeout is 4 hours\n  uint256 public timeout = 24 hours;\n\n  // Default starting price is 0.005 ether\n  uint256 public startingPrice = 0.0001 ether;\n\n  Bag[] private bags;\n\n  struct Bag {\n    address owner;\n    uint256 level;\n    uint256 multiplier; // Multiplier must be rate * 100. example: 1.5x == 150\n    uint256 purchasedAt;\n  }\n\n  /// Access modifier for contract owner only functionality\n  modifier onlyContractOwner() {\n    require(msg.sender == contractOwner);\n    _;\n  }\n\n  function EtherBags() public {\n    contractOwner = msg.sender;\n    createBag(150);\n    createBag(150);\n    createBag(150);\n    createBag(200);\n    createBag(200);\n    createBag(200);\n }\n\n  function createBag(uint256 multiplier) public onlyContractOwner {\n    Bag memory bag = Bag({\n      owner: this,\n      level: 0,\n      multiplier: multiplier,\n      purchasedAt: 0\n    });\n\n    bags.push(bag);\n  }\n\n  function setTimeout(uint256 _timeout) public onlyContractOwner {\n    timeout = _timeout;\n  }\n\n  function setStartingPrice(uint256 _startingPrice) public onlyContractOwner {\n    startingPrice = _startingPrice;\n  }\n\n  function setBagMultiplier(uint256 bagId, uint256 multiplier) public onlyContractOwner {\n    Bag storage bag = bags[bagId];\n    bag.multiplier = multiplier;\n  }\n\n  function getBag(uint256 bagId) public view returns (\n    address owner,\n    uint256 sellingPrice,\n    uint256 nextSellingPrice,\n    uint256 level,\n    uint256 multiplier,\n    uint256 purchasedAt\n  ) {\n    Bag storage bag = bags[bagId];\n\n    owner = bag.owner;\n    level = getBagLevel(bag);\n    sellingPrice = getBagSellingPrice(bag);\n    nextSellingPrice = getNextBagSellingPrice(bag);\n    multiplier = bag.multiplier;\n    purchasedAt = bag.purchasedAt;\n  }\n\n  function getBagCount() public view returns (uint256 bagCount) {\n    return bags.length;\n  }\n\n  function deleteBag(uint256 bagId) public onlyContractOwner {\n    delete bags[bagId];\n  }\n\n  function purchase(uint256 bagId) public payable {\n    Bag storage bag = bags[bagId];\n\n    address oldOwner = bag.owner;\n    address newOwner = msg.sender;\n\n    // Making sure token owner is not sending to self\n    require(oldOwner != newOwner);\n\n    // Safety check to prevent against an unexpected 0x0 default.\n    require(_addressNotNull(newOwner));\n    \n    uint256 sellingPrice = getBagSellingPrice(bag);\n\n    // Making sure sent amount is greater than or equal to the sellingPrice\n    require(msg.value >= sellingPrice);\n\n    // Take a transaction fee\n    uint256 payment = uint256(SafeMath.div(SafeMath.mul(sellingPrice, 95), 100));\n    uint256 purchaseExcess = SafeMath.sub(msg.value, sellingPrice);\n\n    uint256 level = getBagLevel(bag);\n    bag.level = SafeMath.add(level, 1);\n    bag.owner = newOwner;\n    bag.purchasedAt = now;\n\n    // Pay previous tokenOwner if owner is not contract\n    if (oldOwner != address(this)) {\n      oldOwner.transfer(payment);\n    }\n\n    // Trigger BagSold event\n    BagSold(bagId, bag.multiplier, sellingPrice, getBagSellingPrice(bag), oldOwner, newOwner);\n\n    newOwner.transfer(purchaseExcess);\n  }\n\n  function payout() public onlyContractOwner {\n    contractOwner.transfer(this.balance);\n  }\n\n  /*** PRIVATE FUNCTIONS ***/\n\n  // If a bag hasn't been purchased in over $timeout,\n  // reset its level back to 0 but retain the existing owner\n  function getBagLevel(Bag bag) private view returns (uint256) {\n    if (now <= (SafeMath.add(bag.purchasedAt, timeout))) {\n      return bag.level;\n    } else {\n      return 0;\n    }\n  }\n\n  function getBagSellingPrice(Bag bag) private view returns (uint256) {\n    uint256 level = getBagLevel(bag);\n    return getPriceForLevel(bag, level);\n  }\n\n  function getNextBagSellingPrice(Bag bag) private view returns (uint256) {\n    uint256 level = SafeMath.add(getBagLevel(bag), 1);\n    return getPriceForLevel(bag, level);\n  }\n\n  function getPriceForLevel(Bag bag, uint256 level) private view returns (uint256) {\n    uint256 sellingPrice = startingPrice;\n\n    for (uint256 i = 0; i < level; i++) {\n      sellingPrice = SafeMath.div(SafeMath.mul(sellingPrice, bag.multiplier), 100);\n    }\n\n    return sellingPrice;\n  }\n\n  /// Safety check on _to address to prevent against an unexpected 0x0 default.\n  function _addressNotNull(address _to) private pure returns (bool) {\n    return _to != address(0);\n  }\n}\n\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}",
       sourcePath: "C:/fakepath/daytraercode.sol",
       ast: {
        attributes: {
            absolutePath: "C:fakepath/daytraedrcode.sol",
            exportedSymbols: {
                EtherBags: [516],
                SafeMath: [612]
            }
        },
        children: [{
            attributes: {
                literals: ["solidity", "^", "0.4", ".18"]
            },
            id: 1,
            name: "PragmaDirective",
            src: "0:24:0"
        }, {
            attributes: {
                baseContracts: [null],
                contractDependencies: [null],
                contractKind: "contract",
                documentation: null,
                fullyImplemented: !0,
                linearizedBaseContracts: [516],
                name: "EtherBags",
                scope: 613
            },
            children: [{
                attributes: {
                    anonymous: !1,
                    name: "BagSold"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            indexed: !1,
                            name: "bagId",
                            scope: 15,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 2,
                            name: "ElementaryTypeName",
                            src: "88:7:0"
                        }],
                        id: 3,
                        name: "VariableDeclaration",
                        src: "88:13:0"
                    }, {
                        attributes: {
                            constant: !1,
                            indexed: !1,
                            name: "multiplier",
                            scope: 15,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 4,
                            name: "ElementaryTypeName",
                            src: "107:7:0"
                        }],
                        id: 5,
                        name: "VariableDeclaration",
                        src: "107:18:0"
                    }, {
                        attributes: {
                            constant: !1,
                            indexed: !1,
                            name: "oldPrice",
                            scope: 15,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 6,
                            name: "ElementaryTypeName",
                            src: "131:7:0"
                        }],
                        id: 7,
                        name: "VariableDeclaration",
                        src: "131:16:0"
                    }, {
                        attributes: {
                            constant: !1,
                            indexed: !1,
                            name: "newPrice",
                            scope: 15,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 8,
                            name: "ElementaryTypeName",
                            src: "153:7:0"
                        }],
                        id: 9,
                        name: "VariableDeclaration",
                        src: "153:16:0"
                    }, {
                        attributes: {
                            constant: !1,
                            indexed: !1,
                            name: "prevOwner",
                            scope: 15,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "address",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "address",
                                type: "address"
                            },
                            id: 10,
                            name: "ElementaryTypeName",
                            src: "175:7:0"
                        }],
                        id: 11,
                        name: "VariableDeclaration",
                        src: "175:17:0"
                    }, {
                        attributes: {
                            constant: !1,
                            indexed: !1,
                            name: "newOwner",
                            scope: 15,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "address",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "address",
                                type: "address"
                            },
                            id: 12,
                            name: "ElementaryTypeName",
                            src: "198:7:0"
                        }],
                        id: 13,
                        name: "VariableDeclaration",
                        src: "198:16:0"
                    }],
                    id: 14,
                    name: "ParameterList",
                    src: "82:136:0"
                }],
                id: 15,
                name: "EventDefinition",
                src: "69:150:0"
            }, {
                attributes: {
                    constant: !1,
                    name: "contractOwner",
                    scope: 516,
                    stateVariable: !0,
                    storageLocation: "default",
                    type: "address",
                    value: null,
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        name: "address",
                        type: "address"
                    },
                    id: 16,
                    name: "ElementaryTypeName",
                    src: "260:7:0"
                }],
                id: 17,
                name: "VariableDeclaration",
                src: "260:28:0"
            }, {
                attributes: {
                    constant: !1,
                    name: "timeout",
                    scope: 516,
                    stateVariable: !0,
                    storageLocation: "default",
                    type: "uint256",
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        name: "uint256",
                        type: "uint256"
                    },
                    id: 18,
                    name: "ElementaryTypeName",
                    src: "325:7:0"
                }, {
                    attributes: {
                        argumentTypes: null,
                        hexvalue: "34",
                        isConstant: !1,
                        isLValue: !1,
                        isPure: !0,
                        lValueRequested: !1,
                        subdenomination: "hours",
                        token: "number",
                        type: "int_const 14400",
                        value: "4"
                    },
                    id: 19,
                    name: "Literal",
                    src: "350:7:0"
                }],
                id: 20,
                name: "VariableDeclaration",
                src: "325:32:0"
            }, {
                attributes: {
                    constant: !1,
                    name: "startingPrice",
                    scope: 516,
                    stateVariable: !0,
                    storageLocation: "default",
                    type: "uint256",
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        name: "uint256",
                        type: "uint256"
                    },
                    id: 21,
                    name: "ElementaryTypeName",
                    src: "405:7:0"
                }, {
                    attributes: {
                        argumentTypes: null,
                        hexvalue: "302e303035",
                        isConstant: !1,
                        isLValue: !1,
                        isPure: !0,
                        lValueRequested: !1,
                        subdenomination: "ether",
                        token: "number",
                        type: "int_const 5000000000000000",
                        value: "0.005000"
                    },
                    id: 22,
                    name: "Literal",
                    src: "436:11:0"
                }],
                id: 23,
                name: "VariableDeclaration",
                src: "405:42:0"
            }, {
                attributes: {
                    constant: !1,
                    name: "bags",
                    scope: 516,
                    stateVariable: !0,
                    storageLocation: "default",
                    type: "struct EtherBags.Bag storage ref[] storage ref",
                    value: null,
                    visibility: "private"
                },
                children: [{
                    attributes: {
                        length: null,
                        type: "struct EtherBags.Bag storage ref[] storage pointer"
                    },
                    children: [{
                        attributes: {
                            contractScope: null,
                            name: "Bag",
                            referencedDeclaration: 35,
                            type: "struct EtherBags.Bag storage pointer"
                        },
                        id: 24,
                        name: "UserDefinedTypeName",
                        src: "452:3:0"
                    }],
                    id: 25,
                    name: "ArrayTypeName",
                    src: "452:5:0"
                }],
                id: 26,
                name: "VariableDeclaration",
                src: "452:18:0"
            }, {
                attributes: {
                    canonicalName: "EtherBags.Bag",
                    name: "Bag",
                    scope: 516,
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        constant: !1,
                        name: "owner",
                        scope: 35,
                        stateVariable: !1,
                        storageLocation: "default",
                        type: "address",
                        value: null,
                        visibility: "internal"
                    },
                    children: [{
                        attributes: {
                            name: "address",
                            type: "address"
                        },
                        id: 27,
                        name: "ElementaryTypeName",
                        src: "492:7:0"
                    }],
                    id: 28,
                    name: "VariableDeclaration",
                    src: "492:13:0"
                }, {
                    attributes: {
                        constant: !1,
                        name: "level",
                        scope: 35,
                        stateVariable: !1,
                        storageLocation: "default",
                        type: "uint256",
                        value: null,
                        visibility: "internal"
                    },
                    children: [{
                        attributes: {
                            name: "uint256",
                            type: "uint256"
                        },
                        id: 29,
                        name: "ElementaryTypeName",
                        src: "511:7:0"
                    }],
                    id: 30,
                    name: "VariableDeclaration",
                    src: "511:13:0"
                }, {
                    attributes: {
                        constant: !1,
                        name: "multiplier",
                        scope: 35,
                        stateVariable: !1,
                        storageLocation: "default",
                        type: "uint256",
                        value: null,
                        visibility: "internal"
                    },
                    children: [{
                        attributes: {
                            name: "uint256",
                            type: "uint256"
                        },
                        id: 31,
                        name: "ElementaryTypeName",
                        src: "530:7:0"
                    }],
                    id: 32,
                    name: "VariableDeclaration",
                    src: "530:18:0"
                }, {
                    attributes: {
                        constant: !1,
                        name: "purchasedAt",
                        scope: 35,
                        stateVariable: !1,
                        storageLocation: "default",
                        type: "uint256",
                        value: null,
                        visibility: "internal"
                    },
                    children: [{
                        attributes: {
                            name: "uint256",
                            type: "uint256"
                        },
                        id: 33,
                        name: "ElementaryTypeName",
                        src: "609:7:0"
                    }],
                    id: 34,
                    name: "VariableDeclaration",
                    src: "609:19:0"
                }],
                id: 35,
                name: "StructDefinition",
                src: "475:158:0"
            }, {
                attributes: {
                    name: "onlyContractOwner",
                    visibility: "internal"
                },
                children: [{
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 36,
                    name: "ParameterList",
                    src: "723:2:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 725,
                                    type: "function (bool) pure",
                                    value: "require"
                                },
                                id: 37,
                                name: "Identifier",
                                src: "732:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    commonType: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                    },
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: "==",
                                    type: "bool"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        member_name: "sender",
                                        referencedDeclaration: null,
                                        type: "address"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 722,
                                            type: "msg",
                                            value: "msg"
                                        },
                                        id: 38,
                                        name: "Identifier",
                                        src: "740:3:0"
                                    }],
                                    id: 39,
                                    name: "MemberAccess",
                                    src: "740:10:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 17,
                                        type: "address",
                                        value: "contractOwner"
                                    },
                                    id: 40,
                                    name: "Identifier",
                                    src: "754:13:0"
                                }],
                                id: 41,
                                name: "BinaryOperation",
                                src: "740:27:0"
                            }],
                            id: 42,
                            name: "FunctionCall",
                            src: "732:36:0"
                        }],
                        id: 43,
                        name: "ExpressionStatement",
                        src: "732:36:0"
                    }, {
                        id: 44,
                        name: "PlaceholderStatement",
                        src: "774:1:0"
                    }],
                    id: 45,
                    name: "Block",
                    src: "726:54:0"
                }],
                id: 46,
                name: "ModifierDefinition",
                src: "697:83:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !0,
                    modifiers: [null],
                    name: "EtherBags",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 47,
                    name: "ParameterList",
                    src: "802:2:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 48,
                    name: "ParameterList",
                    src: "812:0:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "address"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 17,
                                    type: "address",
                                    value: "contractOwner"
                                },
                                id: 49,
                                name: "Identifier",
                                src: "818:13:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "sender",
                                    referencedDeclaration: null,
                                    type: "address"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 722,
                                        type: "msg",
                                        value: "msg"
                                    },
                                    id: 50,
                                    name: "Identifier",
                                    src: "834:3:0"
                                }],
                                id: 51,
                                name: "MemberAccess",
                                src: "834:10:0"
                            }],
                            id: 52,
                            name: "Assignment",
                            src: "818:26:0"
                        }],
                        id: 53,
                        name: "ExpressionStatement",
                        src: "818:26:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_200_by_1",
                                        typeString: "int_const 200"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 54,
                                name: "Identifier",
                                src: "850:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "323030",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 200",
                                    value: "200"
                                },
                                id: 55,
                                name: "Literal",
                                src: "860:3:0"
                            }],
                            id: 56,
                            name: "FunctionCall",
                            src: "850:14:0"
                        }],
                        id: 57,
                        name: "ExpressionStatement",
                        src: "850:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_200_by_1",
                                        typeString: "int_const 200"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 58,
                                name: "Identifier",
                                src: "870:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "323030",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 200",
                                    value: "200"
                                },
                                id: 59,
                                name: "Literal",
                                src: "880:3:0"
                            }],
                            id: 60,
                            name: "FunctionCall",
                            src: "870:14:0"
                        }],
                        id: 61,
                        name: "ExpressionStatement",
                        src: "870:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_200_by_1",
                                        typeString: "int_const 200"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 62,
                                name: "Identifier",
                                src: "890:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "323030",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 200",
                                    value: "200"
                                },
                                id: 63,
                                name: "Literal",
                                src: "900:3:0"
                            }],
                            id: 64,
                            name: "FunctionCall",
                            src: "890:14:0"
                        }],
                        id: 65,
                        name: "ExpressionStatement",
                        src: "890:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_200_by_1",
                                        typeString: "int_const 200"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 66,
                                name: "Identifier",
                                src: "910:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "323030",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 200",
                                    value: "200"
                                },
                                id: 67,
                                name: "Literal",
                                src: "920:3:0"
                            }],
                            id: 68,
                            name: "FunctionCall",
                            src: "910:14:0"
                        }],
                        id: 69,
                        name: "ExpressionStatement",
                        src: "910:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_150_by_1",
                                        typeString: "int_const 150"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 70,
                                name: "Identifier",
                                src: "930:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313530",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 150",
                                    value: "150"
                                },
                                id: 71,
                                name: "Literal",
                                src: "940:3:0"
                            }],
                            id: 72,
                            name: "FunctionCall",
                            src: "930:14:0"
                        }],
                        id: 73,
                        name: "ExpressionStatement",
                        src: "930:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_150_by_1",
                                        typeString: "int_const 150"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 74,
                                name: "Identifier",
                                src: "950:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313530",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 150",
                                    value: "150"
                                },
                                id: 75,
                                name: "Literal",
                                src: "960:3:0"
                            }],
                            id: 76,
                            name: "FunctionCall",
                            src: "950:14:0"
                        }],
                        id: 77,
                        name: "ExpressionStatement",
                        src: "950:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_150_by_1",
                                        typeString: "int_const 150"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 78,
                                name: "Identifier",
                                src: "970:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313530",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 150",
                                    value: "150"
                                },
                                id: 79,
                                name: "Literal",
                                src: "980:3:0"
                            }],
                            id: 80,
                            name: "FunctionCall",
                            src: "970:14:0"
                        }],
                        id: 81,
                        name: "ExpressionStatement",
                        src: "970:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_150_by_1",
                                        typeString: "int_const 150"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 82,
                                name: "Identifier",
                                src: "990:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313530",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 150",
                                    value: "150"
                                },
                                id: 83,
                                name: "Literal",
                                src: "1000:3:0"
                            }],
                            id: 84,
                            name: "FunctionCall",
                            src: "990:14:0"
                        }],
                        id: 85,
                        name: "ExpressionStatement",
                        src: "990:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_125_by_1",
                                        typeString: "int_const 125"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 86,
                                name: "Identifier",
                                src: "1010:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313235",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 125",
                                    value: "125"
                                },
                                id: 87,
                                name: "Literal",
                                src: "1020:3:0"
                            }],
                            id: 88,
                            name: "FunctionCall",
                            src: "1010:14:0"
                        }],
                        id: 89,
                        name: "ExpressionStatement",
                        src: "1010:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_125_by_1",
                                        typeString: "int_const 125"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 90,
                                name: "Identifier",
                                src: "1030:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313235",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 125",
                                    value: "125"
                                },
                                id: 91,
                                name: "Literal",
                                src: "1040:3:0"
                            }],
                            id: 92,
                            name: "FunctionCall",
                            src: "1030:14:0"
                        }],
                        id: 93,
                        name: "ExpressionStatement",
                        src: "1030:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_125_by_1",
                                        typeString: "int_const 125"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 94,
                                name: "Identifier",
                                src: "1050:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313235",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 125",
                                    value: "125"
                                },
                                id: 95,
                                name: "Literal",
                                src: "1060:3:0"
                            }],
                            id: 96,
                            name: "FunctionCall",
                            src: "1050:14:0"
                        }],
                        id: 97,
                        name: "ExpressionStatement",
                        src: "1050:14:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_rational_125_by_1",
                                        typeString: "int_const 125"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 126,
                                    type: "function (uint256)",
                                    value: "createBag"
                                },
                                id: 98,
                                name: "Identifier",
                                src: "1070:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "313235",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 125",
                                    value: "125"
                                },
                                id: 99,
                                name: "Literal",
                                src: "1080:3:0"
                            }],
                            id: 100,
                            name: "FunctionCall",
                            src: "1070:14:0"
                        }],
                        id: 101,
                        name: "ExpressionStatement",
                        src: "1070:14:0"
                    }],
                    id: 102,
                    name: "Block",
                    src: "812:277:0"
                }],
                id: 103,
                name: "FunctionDefinition",
                src: "784:305:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    name: "createBag",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "multiplier",
                            scope: 126,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 104,
                            name: "ElementaryTypeName",
                            src: "1112:7:0"
                        }],
                        id: 105,
                        name: "VariableDeclaration",
                        src: "1112:18:0"
                    }],
                    id: 106,
                    name: "ParameterList",
                    src: "1111:20:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 109,
                    name: "ParameterList",
                    src: "1157:0:0"
                }, {
                    attributes: {
                        arguments: [null]
                    },
                    children: [{
                        attributes: {
                            argumentTypes: null,
                            overloadedDeclarations: [null],
                            referencedDeclaration: 46,
                            type: "modifier ()",
                            value: "onlyContractOwner"
                        },
                        id: 107,
                        name: "Identifier",
                        src: "1139:17:0"
                    }],
                    id: 108,
                    name: "ModifierInvocation",
                    src: "1139:17:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [111]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "bag",
                                scope: 126,
                                stateVariable: !1,
                                storageLocation: "memory",
                                type: "struct EtherBags.Bag memory",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    contractScope: null,
                                    name: "Bag",
                                    referencedDeclaration: 35,
                                    type: "struct EtherBags.Bag storage pointer"
                                },
                                id: 110,
                                name: "UserDefinedTypeName",
                                src: "1163:3:0"
                            }],
                            id: 111,
                            name: "VariableDeclaration",
                            src: "1163:14:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !0,
                                lValueRequested: !1,
                                names: ["owner", "level", "multiplier", "purchasedAt"],
                                type: "struct EtherBags.Bag memory",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 35,
                                    type: "type(struct EtherBags.Bag storage pointer)",
                                    value: "Bag"
                                },
                                id: 112,
                                name: "Identifier",
                                src: "1180:3:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 733,
                                    type: "contract EtherBags",
                                    value: "this"
                                },
                                id: 113,
                                name: "Identifier",
                                src: "1199:4:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "30",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 0",
                                    value: "0"
                                },
                                id: 114,
                                name: "Literal",
                                src: "1218:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 105,
                                    type: "uint256",
                                    value: "multiplier"
                                },
                                id: 115,
                                name: "Identifier",
                                src: "1239:10:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "30",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 0",
                                    value: "0"
                                },
                                id: 116,
                                name: "Literal",
                                src: "1270:1:0"
                            }],
                            id: 117,
                            name: "FunctionCall",
                            src: "1180:98:0"
                        }],
                        id: 118,
                        name: "VariableDeclarationStatement",
                        src: "1163:115:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_struct$_Bag_$35_memory_ptr",
                                        typeString: "struct EtherBags.Bag memory"
                                    }],
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "push",
                                    referencedDeclaration: null,
                                    type: "function (struct EtherBags.Bag storage ref) returns (uint256)"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 26,
                                        type: "struct EtherBags.Bag storage ref[] storage ref",
                                        value: "bags"
                                    },
                                    id: 119,
                                    name: "Identifier",
                                    src: "1285:4:0"
                                }],
                                id: 121,
                                name: "MemberAccess",
                                src: "1285:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 111,
                                    type: "struct EtherBags.Bag memory",
                                    value: "bag"
                                },
                                id: 122,
                                name: "Identifier",
                                src: "1295:3:0"
                            }],
                            id: 123,
                            name: "FunctionCall",
                            src: "1285:14:0"
                        }],
                        id: 124,
                        name: "ExpressionStatement",
                        src: "1285:14:0"
                    }],
                    id: 125,
                    name: "Block",
                    src: "1157:147:0"
                }],
                id: 126,
                name: "FunctionDefinition",
                src: "1093:211:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    name: "setTimeout",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "_timeout",
                            scope: 138,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 127,
                            name: "ElementaryTypeName",
                            src: "1328:7:0"
                        }],
                        id: 128,
                        name: "VariableDeclaration",
                        src: "1328:16:0"
                    }],
                    id: 129,
                    name: "ParameterList",
                    src: "1327:18:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 132,
                    name: "ParameterList",
                    src: "1371:0:0"
                }, {
                    attributes: {
                        arguments: [null]
                    },
                    children: [{
                        attributes: {
                            argumentTypes: null,
                            overloadedDeclarations: [null],
                            referencedDeclaration: 46,
                            type: "modifier ()",
                            value: "onlyContractOwner"
                        },
                        id: 130,
                        name: "Identifier",
                        src: "1353:17:0"
                    }],
                    id: 131,
                    name: "ModifierInvocation",
                    src: "1353:17:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 20,
                                    type: "uint256",
                                    value: "timeout"
                                },
                                id: 133,
                                name: "Identifier",
                                src: "1377:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 128,
                                    type: "uint256",
                                    value: "_timeout"
                                },
                                id: 134,
                                name: "Identifier",
                                src: "1387:8:0"
                            }],
                            id: 135,
                            name: "Assignment",
                            src: "1377:18:0"
                        }],
                        id: 136,
                        name: "ExpressionStatement",
                        src: "1377:18:0"
                    }],
                    id: 137,
                    name: "Block",
                    src: "1371:29:0"
                }],
                id: 138,
                name: "FunctionDefinition",
                src: "1308:92:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    name: "setStartingPrice",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "_startingPrice",
                            scope: 150,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 139,
                            name: "ElementaryTypeName",
                            src: "1430:7:0"
                        }],
                        id: 140,
                        name: "VariableDeclaration",
                        src: "1430:22:0"
                    }],
                    id: 141,
                    name: "ParameterList",
                    src: "1429:24:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 144,
                    name: "ParameterList",
                    src: "1479:0:0"
                }, {
                    attributes: {
                        arguments: [null]
                    },
                    children: [{
                        attributes: {
                            argumentTypes: null,
                            overloadedDeclarations: [null],
                            referencedDeclaration: 46,
                            type: "modifier ()",
                            value: "onlyContractOwner"
                        },
                        id: 142,
                        name: "Identifier",
                        src: "1461:17:0"
                    }],
                    id: 143,
                    name: "ModifierInvocation",
                    src: "1461:17:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 23,
                                    type: "uint256",
                                    value: "startingPrice"
                                },
                                id: 145,
                                name: "Identifier",
                                src: "1485:13:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 140,
                                    type: "uint256",
                                    value: "_startingPrice"
                                },
                                id: 146,
                                name: "Identifier",
                                src: "1501:14:0"
                            }],
                            id: 147,
                            name: "Assignment",
                            src: "1485:30:0"
                        }],
                        id: 148,
                        name: "ExpressionStatement",
                        src: "1485:30:0"
                    }],
                    id: 149,
                    name: "Block",
                    src: "1479:41:0"
                }],
                id: 150,
                name: "FunctionDefinition",
                src: "1404:116:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    name: "setBagMultiplier",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bagId",
                            scope: 172,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 151,
                            name: "ElementaryTypeName",
                            src: "1550:7:0"
                        }],
                        id: 152,
                        name: "VariableDeclaration",
                        src: "1550:13:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "multiplier",
                            scope: 172,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 153,
                            name: "ElementaryTypeName",
                            src: "1565:7:0"
                        }],
                        id: 154,
                        name: "VariableDeclaration",
                        src: "1565:18:0"
                    }],
                    id: 155,
                    name: "ParameterList",
                    src: "1549:35:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 158,
                    name: "ParameterList",
                    src: "1610:0:0"
                }, {
                    attributes: {
                        arguments: [null]
                    },
                    children: [{
                        attributes: {
                            argumentTypes: null,
                            overloadedDeclarations: [null],
                            referencedDeclaration: 46,
                            type: "modifier ()",
                            value: "onlyContractOwner"
                        },
                        id: 156,
                        name: "Identifier",
                        src: "1592:17:0"
                    }],
                    id: 157,
                    name: "ModifierInvocation",
                    src: "1592:17:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [160]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "bag",
                                scope: 172,
                                stateVariable: !1,
                                storageLocation: "storage",
                                type: "struct EtherBags.Bag storage pointer",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    contractScope: null,
                                    name: "Bag",
                                    referencedDeclaration: 35,
                                    type: "struct EtherBags.Bag storage pointer"
                                },
                                id: 159,
                                name: "UserDefinedTypeName",
                                src: "1616:3:0"
                            }],
                            id: 160,
                            name: "VariableDeclaration",
                            src: "1616:15:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !0,
                                isPure: !1,
                                lValueRequested: !1,
                                type: "struct EtherBags.Bag storage ref"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 26,
                                    type: "struct EtherBags.Bag storage ref[] storage ref",
                                    value: "bags"
                                },
                                id: 161,
                                name: "Identifier",
                                src: "1634:4:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 152,
                                    type: "uint256",
                                    value: "bagId"
                                },
                                id: 162,
                                name: "Identifier",
                                src: "1639:5:0"
                            }],
                            id: 163,
                            name: "IndexAccess",
                            src: "1634:11:0"
                        }],
                        id: 164,
                        name: "VariableDeclarationStatement",
                        src: "1616:29:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !0,
                                    member_name: "multiplier",
                                    referencedDeclaration: 32,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 160,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 165,
                                    name: "Identifier",
                                    src: "1651:3:0"
                                }],
                                id: 167,
                                name: "MemberAccess",
                                src: "1651:14:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 154,
                                    type: "uint256",
                                    value: "multiplier"
                                },
                                id: 168,
                                name: "Identifier",
                                src: "1668:10:0"
                            }],
                            id: 169,
                            name: "Assignment",
                            src: "1651:27:0"
                        }],
                        id: 170,
                        name: "ExpressionStatement",
                        src: "1651:27:0"
                    }],
                    id: 171,
                    name: "Block",
                    src: "1610:73:0"
                }],
                id: 172,
                name: "FunctionDefinition",
                src: "1524:159:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "getBag",
                    payable: !1,
                    scope: 516,
                    stateMutability: "view",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bagId",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 173,
                            name: "ElementaryTypeName",
                            src: "1703:7:0"
                        }],
                        id: 174,
                        name: "VariableDeclaration",
                        src: "1703:13:0"
                    }],
                    id: 175,
                    name: "ParameterList",
                    src: "1702:15:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "owner",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "address",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "address",
                                type: "address"
                            },
                            id: 176,
                            name: "ElementaryTypeName",
                            src: "1744:7:0"
                        }],
                        id: 177,
                        name: "VariableDeclaration",
                        src: "1744:13:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "sellingPrice",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 178,
                            name: "ElementaryTypeName",
                            src: "1763:7:0"
                        }],
                        id: 179,
                        name: "VariableDeclaration",
                        src: "1763:20:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "nextSellingPrice",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 180,
                            name: "ElementaryTypeName",
                            src: "1789:7:0"
                        }],
                        id: 181,
                        name: "VariableDeclaration",
                        src: "1789:24:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "level",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 182,
                            name: "ElementaryTypeName",
                            src: "1819:7:0"
                        }],
                        id: 183,
                        name: "VariableDeclaration",
                        src: "1819:13:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "multiplier",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 184,
                            name: "ElementaryTypeName",
                            src: "1838:7:0"
                        }],
                        id: 185,
                        name: "VariableDeclaration",
                        src: "1838:18:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "purchasedAt",
                            scope: 229,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 186,
                            name: "ElementaryTypeName",
                            src: "1862:7:0"
                        }],
                        id: 187,
                        name: "VariableDeclaration",
                        src: "1862:19:0"
                    }],
                    id: 188,
                    name: "ParameterList",
                    src: "1738:147:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [190]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "bag",
                                scope: 229,
                                stateVariable: !1,
                                storageLocation: "storage",
                                type: "struct EtherBags.Bag storage pointer",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    contractScope: null,
                                    name: "Bag",
                                    referencedDeclaration: 35,
                                    type: "struct EtherBags.Bag storage pointer"
                                },
                                id: 189,
                                name: "UserDefinedTypeName",
                                src: "1892:3:0"
                            }],
                            id: 190,
                            name: "VariableDeclaration",
                            src: "1892:15:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !0,
                                isPure: !1,
                                lValueRequested: !1,
                                type: "struct EtherBags.Bag storage ref"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 26,
                                    type: "struct EtherBags.Bag storage ref[] storage ref",
                                    value: "bags"
                                },
                                id: 191,
                                name: "Identifier",
                                src: "1910:4:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 174,
                                    type: "uint256",
                                    value: "bagId"
                                },
                                id: 192,
                                name: "Identifier",
                                src: "1915:5:0"
                            }],
                            id: 193,
                            name: "IndexAccess",
                            src: "1910:11:0"
                        }],
                        id: 194,
                        name: "VariableDeclarationStatement",
                        src: "1892:29:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "address"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 177,
                                    type: "address",
                                    value: "owner"
                                },
                                id: 195,
                                name: "Identifier",
                                src: "1928:5:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "owner",
                                    referencedDeclaration: 28,
                                    type: "address"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 190,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 196,
                                    name: "Identifier",
                                    src: "1936:3:0"
                                }],
                                id: 197,
                                name: "MemberAccess",
                                src: "1936:9:0"
                            }],
                            id: 198,
                            name: "Assignment",
                            src: "1928:17:0"
                        }],
                        id: 199,
                        name: "ExpressionStatement",
                        src: "1928:17:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 183,
                                    type: "uint256",
                                    value: "level"
                                },
                                id: 200,
                                name: "Identifier",
                                src: "1951:5:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_struct$_Bag_$35_storage_ptr",
                                            typeString: "struct EtherBags.Bag storage pointer"
                                        }],
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 418,
                                        type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                        value: "getBagLevel"
                                    },
                                    id: 201,
                                    name: "Identifier",
                                    src: "1959:11:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 190,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 202,
                                    name: "Identifier",
                                    src: "1971:3:0"
                                }],
                                id: 203,
                                name: "FunctionCall",
                                src: "1959:16:0"
                            }],
                            id: 204,
                            name: "Assignment",
                            src: "1951:24:0"
                        }],
                        id: 205,
                        name: "ExpressionStatement",
                        src: "1951:24:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 179,
                                    type: "uint256",
                                    value: "sellingPrice"
                                },
                                id: 206,
                                name: "Identifier",
                                src: "1981:12:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_struct$_Bag_$35_storage_ptr",
                                            typeString: "struct EtherBags.Bag storage pointer"
                                        }],
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 437,
                                        type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                        value: "getBagSellingPrice"
                                    },
                                    id: 207,
                                    name: "Identifier",
                                    src: "1996:18:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 190,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 208,
                                    name: "Identifier",
                                    src: "2015:3:0"
                                }],
                                id: 209,
                                name: "FunctionCall",
                                src: "1996:23:0"
                            }],
                            id: 210,
                            name: "Assignment",
                            src: "1981:38:0"
                        }],
                        id: 211,
                        name: "ExpressionStatement",
                        src: "1981:38:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 181,
                                    type: "uint256",
                                    value: "nextSellingPrice"
                                },
                                id: 212,
                                name: "Identifier",
                                src: "2025:16:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_struct$_Bag_$35_storage_ptr",
                                            typeString: "struct EtherBags.Bag storage pointer"
                                        }],
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 460,
                                        type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                        value: "getNextBagSellingPrice"
                                    },
                                    id: 213,
                                    name: "Identifier",
                                    src: "2044:22:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 190,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 214,
                                    name: "Identifier",
                                    src: "2067:3:0"
                                }],
                                id: 215,
                                name: "FunctionCall",
                                src: "2044:27:0"
                            }],
                            id: 216,
                            name: "Assignment",
                            src: "2025:46:0"
                        }],
                        id: 217,
                        name: "ExpressionStatement",
                        src: "2025:46:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 185,
                                    type: "uint256",
                                    value: "multiplier"
                                },
                                id: 218,
                                name: "Identifier",
                                src: "2077:10:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "multiplier",
                                    referencedDeclaration: 32,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 190,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 219,
                                    name: "Identifier",
                                    src: "2090:3:0"
                                }],
                                id: 220,
                                name: "MemberAccess",
                                src: "2090:14:0"
                            }],
                            id: 221,
                            name: "Assignment",
                            src: "2077:27:0"
                        }],
                        id: 222,
                        name: "ExpressionStatement",
                        src: "2077:27:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 187,
                                    type: "uint256",
                                    value: "purchasedAt"
                                },
                                id: 223,
                                name: "Identifier",
                                src: "2110:11:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "purchasedAt",
                                    referencedDeclaration: 34,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 190,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 224,
                                    name: "Identifier",
                                    src: "2124:3:0"
                                }],
                                id: 225,
                                name: "MemberAccess",
                                src: "2124:15:0"
                            }],
                            id: 226,
                            name: "Assignment",
                            src: "2110:29:0"
                        }],
                        id: 227,
                        name: "ExpressionStatement",
                        src: "2110:29:0"
                    }],
                    id: 228,
                    name: "Block",
                    src: "1886:258:0"
                }],
                id: 229,
                name: "FunctionDefinition",
                src: "1687:457:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "getBagCount",
                    payable: !1,
                    scope: 516,
                    stateMutability: "view",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 230,
                    name: "ParameterList",
                    src: "2168:2:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bagCount",
                            scope: 238,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 231,
                            name: "ElementaryTypeName",
                            src: "2192:7:0"
                        }],
                        id: 232,
                        name: "VariableDeclaration",
                        src: "2192:16:0"
                    }],
                    id: 233,
                    name: "ParameterList",
                    src: "2191:18:0"
                }, {
                    children: [{
                        attributes: {
                            functionReturnParameters: 233
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !0,
                                isPure: !1,
                                lValueRequested: !1,
                                member_name: "length",
                                referencedDeclaration: null,
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 26,
                                    type: "struct EtherBags.Bag storage ref[] storage ref",
                                    value: "bags"
                                },
                                id: 234,
                                name: "Identifier",
                                src: "2223:4:0"
                            }],
                            id: 235,
                            name: "MemberAccess",
                            src: "2223:11:0"
                        }],
                        id: 236,
                        name: "Return",
                        src: "2216:18:0"
                    }],
                    id: 237,
                    name: "Block",
                    src: "2210:29:0"
                }],
                id: 238,
                name: "FunctionDefinition",
                src: "2148:91:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    name: "deleteBag",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bagId",
                            scope: 251,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 239,
                            name: "ElementaryTypeName",
                            src: "2262:7:0"
                        }],
                        id: 240,
                        name: "VariableDeclaration",
                        src: "2262:13:0"
                    }],
                    id: 241,
                    name: "ParameterList",
                    src: "2261:15:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 244,
                    name: "ParameterList",
                    src: "2302:0:0"
                }, {
                    attributes: {
                        arguments: [null]
                    },
                    children: [{
                        attributes: {
                            argumentTypes: null,
                            overloadedDeclarations: [null],
                            referencedDeclaration: 46,
                            type: "modifier ()",
                            value: "onlyContractOwner"
                        },
                        id: 242,
                        name: "Identifier",
                        src: "2284:17:0"
                    }],
                    id: 243,
                    name: "ModifierInvocation",
                    src: "2284:17:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "delete",
                                prefix: !0,
                                type: "tuple()"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !0,
                                    type: "struct EtherBags.Bag storage ref"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 26,
                                        type: "struct EtherBags.Bag storage ref[] storage ref",
                                        value: "bags"
                                    },
                                    id: 245,
                                    name: "Identifier",
                                    src: "2315:4:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 240,
                                        type: "uint256",
                                        value: "bagId"
                                    },
                                    id: 246,
                                    name: "Identifier",
                                    src: "2320:5:0"
                                }],
                                id: 247,
                                name: "IndexAccess",
                                src: "2315:11:0"
                            }],
                            id: 248,
                            name: "UnaryOperation",
                            src: "2308:18:0"
                        }],
                        id: 249,
                        name: "ExpressionStatement",
                        src: "2308:18:0"
                    }],
                    id: 250,
                    name: "Block",
                    src: "2302:29:0"
                }],
                id: 251,
                name: "FunctionDefinition",
                src: "2243:88:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "purchase",
                    payable: !0,
                    scope: 516,
                    stateMutability: "payable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bagId",
                            scope: 380,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 252,
                            name: "ElementaryTypeName",
                            src: "2353:7:0"
                        }],
                        id: 253,
                        name: "VariableDeclaration",
                        src: "2353:13:0"
                    }],
                    id: 254,
                    name: "ParameterList",
                    src: "2352:15:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 255,
                    name: "ParameterList",
                    src: "2383:0:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [257]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "bag",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "storage",
                                type: "struct EtherBags.Bag storage pointer",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    contractScope: null,
                                    name: "Bag",
                                    referencedDeclaration: 35,
                                    type: "struct EtherBags.Bag storage pointer"
                                },
                                id: 256,
                                name: "UserDefinedTypeName",
                                src: "2389:3:0"
                            }],
                            id: 257,
                            name: "VariableDeclaration",
                            src: "2389:15:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !0,
                                isPure: !1,
                                lValueRequested: !1,
                                type: "struct EtherBags.Bag storage ref"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 26,
                                    type: "struct EtherBags.Bag storage ref[] storage ref",
                                    value: "bags"
                                },
                                id: 258,
                                name: "Identifier",
                                src: "2407:4:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 253,
                                    type: "uint256",
                                    value: "bagId"
                                },
                                id: 259,
                                name: "Identifier",
                                src: "2412:5:0"
                            }],
                            id: 260,
                            name: "IndexAccess",
                            src: "2407:11:0"
                        }],
                        id: 261,
                        name: "VariableDeclarationStatement",
                        src: "2389:29:0"
                    }, {
                        attributes: {
                            assignments: [263]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "oldOwner",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "address",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "address",
                                    type: "address"
                                },
                                id: 262,
                                name: "ElementaryTypeName",
                                src: "2425:7:0"
                            }],
                            id: 263,
                            name: "VariableDeclaration",
                            src: "2425:16:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !0,
                                isPure: !1,
                                lValueRequested: !1,
                                member_name: "owner",
                                referencedDeclaration: 28,
                                type: "address"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 257,
                                    type: "struct EtherBags.Bag storage pointer",
                                    value: "bag"
                                },
                                id: 264,
                                name: "Identifier",
                                src: "2444:3:0"
                            }],
                            id: 265,
                            name: "MemberAccess",
                            src: "2444:9:0"
                        }],
                        id: 266,
                        name: "VariableDeclarationStatement",
                        src: "2425:28:0"
                    }, {
                        attributes: {
                            assignments: [268]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "newOwner",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "address",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "address",
                                    type: "address"
                                },
                                id: 267,
                                name: "ElementaryTypeName",
                                src: "2459:7:0"
                            }],
                            id: 268,
                            name: "VariableDeclaration",
                            src: "2459:16:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                member_name: "sender",
                                referencedDeclaration: null,
                                type: "address"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 722,
                                    type: "msg",
                                    value: "msg"
                                },
                                id: 269,
                                name: "Identifier",
                                src: "2478:3:0"
                            }],
                            id: 270,
                            name: "MemberAccess",
                            src: "2478:10:0"
                        }],
                        id: 271,
                        name: "VariableDeclarationStatement",
                        src: "2459:29:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 725,
                                    type: "function (bool) pure",
                                    value: "require"
                                },
                                id: 272,
                                name: "Identifier",
                                src: "2549:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    commonType: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                    },
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: "!=",
                                    type: "bool"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 263,
                                        type: "address",
                                        value: "oldOwner"
                                    },
                                    id: 273,
                                    name: "Identifier",
                                    src: "2557:8:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 268,
                                        type: "address",
                                        value: "newOwner"
                                    },
                                    id: 274,
                                    name: "Identifier",
                                    src: "2569:8:0"
                                }],
                                id: 275,
                                name: "BinaryOperation",
                                src: "2557:20:0"
                            }],
                            id: 276,
                            name: "FunctionCall",
                            src: "2549:29:0"
                        }],
                        id: 277,
                        name: "ExpressionStatement",
                        src: "2549:29:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 725,
                                    type: "function (bool) pure",
                                    value: "require"
                                },
                                id: 278,
                                name: "Identifier",
                                src: "2651:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "bool",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_address",
                                            typeString: "address"
                                        }],
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 515,
                                        type: "function (address) pure returns (bool)",
                                        value: "_addressNotNull"
                                    },
                                    id: 279,
                                    name: "Identifier",
                                    src: "2659:15:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 268,
                                        type: "address",
                                        value: "newOwner"
                                    },
                                    id: 280,
                                    name: "Identifier",
                                    src: "2675:8:0"
                                }],
                                id: 281,
                                name: "FunctionCall",
                                src: "2659:25:0"
                            }],
                            id: 282,
                            name: "FunctionCall",
                            src: "2651:34:0"
                        }],
                        id: 283,
                        name: "ExpressionStatement",
                        src: "2651:34:0"
                    }, {
                        attributes: {
                            assignments: [285]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "sellingPrice",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 284,
                                name: "ElementaryTypeName",
                                src: "2696:7:0"
                            }],
                            id: 285,
                            name: "VariableDeclaration",
                            src: "2696:20:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_struct$_Bag_$35_storage_ptr",
                                        typeString: "struct EtherBags.Bag storage pointer"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 437,
                                    type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                    value: "getBagSellingPrice"
                                },
                                id: 286,
                                name: "Identifier",
                                src: "2719:18:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 257,
                                    type: "struct EtherBags.Bag storage pointer",
                                    value: "bag"
                                },
                                id: 287,
                                name: "Identifier",
                                src: "2738:3:0"
                            }],
                            id: 288,
                            name: "FunctionCall",
                            src: "2719:23:0"
                        }],
                        id: 289,
                        name: "VariableDeclarationStatement",
                        src: "2696:46:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 725,
                                    type: "function (bool) pure",
                                    value: "require"
                                },
                                id: 290,
                                name: "Identifier",
                                src: "2825:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    },
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: ">=",
                                    type: "bool"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        member_name: "value",
                                        referencedDeclaration: null,
                                        type: "uint256"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 722,
                                            type: "msg",
                                            value: "msg"
                                        },
                                        id: 291,
                                        name: "Identifier",
                                        src: "2833:3:0"
                                    }],
                                    id: 292,
                                    name: "MemberAccess",
                                    src: "2833:9:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 285,
                                        type: "uint256",
                                        value: "sellingPrice"
                                    },
                                    id: 293,
                                    name: "Identifier",
                                    src: "2846:12:0"
                                }],
                                id: 294,
                                name: "BinaryOperation",
                                src: "2833:25:0"
                            }],
                            id: 295,
                            name: "FunctionCall",
                            src: "2825:34:0"
                        }],
                        id: 296,
                        name: "ExpressionStatement",
                        src: "2825:34:0"
                    }, {
                        attributes: {
                            assignments: [298]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "payment",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 297,
                                name: "ElementaryTypeName",
                                src: "2896:7:0"
                            }],
                            id: 298,
                            name: "VariableDeclaration",
                            src: "2896:15:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !0
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }],
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    type: "type(uint256)",
                                    value: "uint256"
                                },
                                id: 299,
                                name: "ElementaryTypeNameExpression",
                                src: "2914:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                        }, {
                                            typeIdentifier: "t_rational_100_by_1",
                                            typeString: "int_const 100"
                                        }],
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        member_name: "div",
                                        referencedDeclaration: 567,
                                        type: "function (uint256,uint256) pure returns (uint256)"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 612,
                                            type: "type(library SafeMath)",
                                            value: "SafeMath"
                                        },
                                        id: 300,
                                        name: "Identifier",
                                        src: "2922:8:0"
                                    }],
                                    id: 301,
                                    name: "MemberAccess",
                                    src: "2922:12:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        isStructConstructorCall: !1,
                                        lValueRequested: !1,
                                        names: [null],
                                        type: "uint256",
                                        type_conversion: !1
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: [{
                                                typeIdentifier: "t_uint256",
                                                typeString: "uint256"
                                            }, {
                                                typeIdentifier: "t_rational_92_by_1",
                                                typeString: "int_const 92"
                                            }],
                                            isConstant: !1,
                                            isLValue: !1,
                                            isPure: !1,
                                            lValueRequested: !1,
                                            member_name: "mul",
                                            referencedDeclaration: 549,
                                            type: "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        children: [{
                                            attributes: {
                                                argumentTypes: null,
                                                overloadedDeclarations: [null],
                                                referencedDeclaration: 612,
                                                type: "type(library SafeMath)",
                                                value: "SafeMath"
                                            },
                                            id: 302,
                                            name: "Identifier",
                                            src: "2935:8:0"
                                        }],
                                        id: 303,
                                        name: "MemberAccess",
                                        src: "2935:12:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 285,
                                            type: "uint256",
                                            value: "sellingPrice"
                                        },
                                        id: 304,
                                        name: "Identifier",
                                        src: "2948:12:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            hexvalue: "3932",
                                            isConstant: !1,
                                            isLValue: !1,
                                            isPure: !0,
                                            lValueRequested: !1,
                                            subdenomination: null,
                                            token: "number",
                                            type: "int_const 92",
                                            value: "92"
                                        },
                                        id: 305,
                                        name: "Literal",
                                        src: "2962:2:0"
                                    }],
                                    id: 306,
                                    name: "FunctionCall",
                                    src: "2935:30:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        hexvalue: "313030",
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        subdenomination: null,
                                        token: "number",
                                        type: "int_const 100",
                                        value: "100"
                                    },
                                    id: 307,
                                    name: "Literal",
                                    src: "2967:3:0"
                                }],
                                id: 308,
                                name: "FunctionCall",
                                src: "2922:49:0"
                            }],
                            id: 309,
                            name: "FunctionCall",
                            src: "2914:58:0"
                        }],
                        id: 310,
                        name: "VariableDeclarationStatement",
                        src: "2896:76:0"
                    }, {
                        attributes: {
                            assignments: [312]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "purchaseExcess",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 311,
                                name: "ElementaryTypeName",
                                src: "2978:7:0"
                            }],
                            id: 312,
                            name: "VariableDeclaration",
                            src: "2978:22:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }, {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }],
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "sub",
                                    referencedDeclaration: 587,
                                    type: "function (uint256,uint256) pure returns (uint256)"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 612,
                                        type: "type(library SafeMath)",
                                        value: "SafeMath"
                                    },
                                    id: 313,
                                    name: "Identifier",
                                    src: "3003:8:0"
                                }],
                                id: 314,
                                name: "MemberAccess",
                                src: "3003:12:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "value",
                                    referencedDeclaration: null,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 722,
                                        type: "msg",
                                        value: "msg"
                                    },
                                    id: 315,
                                    name: "Identifier",
                                    src: "3016:3:0"
                                }],
                                id: 316,
                                name: "MemberAccess",
                                src: "3016:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 285,
                                    type: "uint256",
                                    value: "sellingPrice"
                                },
                                id: 317,
                                name: "Identifier",
                                src: "3027:12:0"
                            }],
                            id: 318,
                            name: "FunctionCall",
                            src: "3003:37:0"
                        }],
                        id: 319,
                        name: "VariableDeclarationStatement",
                        src: "2978:62:0"
                    }, {
                        attributes: {
                            assignments: [321]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "level",
                                scope: 380,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 320,
                                name: "ElementaryTypeName",
                                src: "3047:7:0"
                            }],
                            id: 321,
                            name: "VariableDeclaration",
                            src: "3047:13:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_struct$_Bag_$35_storage_ptr",
                                        typeString: "struct EtherBags.Bag storage pointer"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 418,
                                    type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                    value: "getBagLevel"
                                },
                                id: 322,
                                name: "Identifier",
                                src: "3063:11:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 257,
                                    type: "struct EtherBags.Bag storage pointer",
                                    value: "bag"
                                },
                                id: 323,
                                name: "Identifier",
                                src: "3075:3:0"
                            }],
                            id: 324,
                            name: "FunctionCall",
                            src: "3063:16:0"
                        }],
                        id: 325,
                        name: "VariableDeclarationStatement",
                        src: "3047:32:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !0,
                                    member_name: "level",
                                    referencedDeclaration: 30,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 257,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 326,
                                    name: "Identifier",
                                    src: "3085:3:0"
                                }],
                                id: 328,
                                name: "MemberAccess",
                                src: "3085:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                        }, {
                                            typeIdentifier: "t_rational_1_by_1",
                                            typeString: "int_const 1"
                                        }],
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        member_name: "add",
                                        referencedDeclaration: 611,
                                        type: "function (uint256,uint256) pure returns (uint256)"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 612,
                                            type: "type(library SafeMath)",
                                            value: "SafeMath"
                                        },
                                        id: 329,
                                        name: "Identifier",
                                        src: "3097:8:0"
                                    }],
                                    id: 330,
                                    name: "MemberAccess",
                                    src: "3097:12:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 321,
                                        type: "uint256",
                                        value: "level"
                                    },
                                    id: 331,
                                    name: "Identifier",
                                    src: "3110:5:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        hexvalue: "31",
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        subdenomination: null,
                                        token: "number",
                                        type: "int_const 1",
                                        value: "1"
                                    },
                                    id: 332,
                                    name: "Literal",
                                    src: "3117:1:0"
                                }],
                                id: 333,
                                name: "FunctionCall",
                                src: "3097:22:0"
                            }],
                            id: 334,
                            name: "Assignment",
                            src: "3085:34:0"
                        }],
                        id: 335,
                        name: "ExpressionStatement",
                        src: "3085:34:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "address"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !0,
                                    member_name: "owner",
                                    referencedDeclaration: 28,
                                    type: "address"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 257,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 336,
                                    name: "Identifier",
                                    src: "3125:3:0"
                                }],
                                id: 338,
                                name: "MemberAccess",
                                src: "3125:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 268,
                                    type: "address",
                                    value: "newOwner"
                                },
                                id: 339,
                                name: "Identifier",
                                src: "3137:8:0"
                            }],
                            id: 340,
                            name: "Assignment",
                            src: "3125:20:0"
                        }],
                        id: 341,
                        name: "ExpressionStatement",
                        src: "3125:20:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "=",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !0,
                                    member_name: "purchasedAt",
                                    referencedDeclaration: 34,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 257,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 342,
                                    name: "Identifier",
                                    src: "3151:3:0"
                                }],
                                id: 344,
                                name: "MemberAccess",
                                src: "3151:15:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 724,
                                    type: "uint256",
                                    value: "now"
                                },
                                id: 345,
                                name: "Identifier",
                                src: "3169:3:0"
                            }],
                            id: 346,
                            name: "Assignment",
                            src: "3151:21:0"
                        }],
                        id: 347,
                        name: "ExpressionStatement",
                        src: "3151:21:0"
                    }, {
                        attributes: {
                            falseBody: null
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "!=",
                                type: "bool"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 263,
                                    type: "address",
                                    value: "oldOwner"
                                },
                                id: 348,
                                name: "Identifier",
                                src: "3239:8:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "address",
                                    type_conversion: !0
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_contract$_EtherBags_$516",
                                            typeString: "contract EtherBags"
                                        }],
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        type: "type(address)",
                                        value: "address"
                                    },
                                    id: 349,
                                    name: "ElementaryTypeNameExpression",
                                    src: "3251:7:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 733,
                                        type: "contract EtherBags",
                                        value: "this"
                                    },
                                    id: 350,
                                    name: "Identifier",
                                    src: "3259:4:0"
                                }],
                                id: 351,
                                name: "FunctionCall",
                                src: "3251:13:0"
                            }],
                            id: 352,
                            name: "BinaryOperation",
                            src: "3239:25:0"
                        }, {
                            children: [{
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        isStructConstructorCall: !1,
                                        lValueRequested: !1,
                                        names: [null],
                                        type: "tuple()",
                                        type_conversion: !1
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: [{
                                                typeIdentifier: "t_uint256",
                                                typeString: "uint256"
                                            }],
                                            isConstant: !1,
                                            isLValue: !1,
                                            isPure: !1,
                                            lValueRequested: !1,
                                            member_name: "transfer",
                                            referencedDeclaration: null,
                                            type: "function (uint256)"
                                        },
                                        children: [{
                                            attributes: {
                                                argumentTypes: null,
                                                overloadedDeclarations: [null],
                                                referencedDeclaration: 263,
                                                type: "address",
                                                value: "oldOwner"
                                            },
                                            id: 353,
                                            name: "Identifier",
                                            src: "3274:8:0"
                                        }],
                                        id: 355,
                                        name: "MemberAccess",
                                        src: "3274:17:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 298,
                                            type: "uint256",
                                            value: "payment"
                                        },
                                        id: 356,
                                        name: "Identifier",
                                        src: "3292:7:0"
                                    }],
                                    id: 357,
                                    name: "FunctionCall",
                                    src: "3274:26:0"
                                }],
                                id: 358,
                                name: "ExpressionStatement",
                                src: "3274:26:0"
                            }],
                            id: 359,
                            name: "Block",
                            src: "3266:41:0"
                        }],
                        id: 360,
                        name: "IfStatement",
                        src: "3235:72:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }, {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }, {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }, {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }, {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                    }, {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 15,
                                    type: "function (uint256,uint256,uint256,uint256,address,address)",
                                    value: "BagSold"
                                },
                                id: 361,
                                name: "Identifier",
                                src: "3342:7:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 253,
                                    type: "uint256",
                                    value: "bagId"
                                },
                                id: 362,
                                name: "Identifier",
                                src: "3350:5:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !0,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "multiplier",
                                    referencedDeclaration: 32,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 257,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 363,
                                    name: "Identifier",
                                    src: "3357:3:0"
                                }],
                                id: 364,
                                name: "MemberAccess",
                                src: "3357:14:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 285,
                                    type: "uint256",
                                    value: "sellingPrice"
                                },
                                id: 365,
                                name: "Identifier",
                                src: "3373:12:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_struct$_Bag_$35_storage_ptr",
                                            typeString: "struct EtherBags.Bag storage pointer"
                                        }],
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 437,
                                        type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                        value: "getBagSellingPrice"
                                    },
                                    id: 366,
                                    name: "Identifier",
                                    src: "3387:18:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 257,
                                        type: "struct EtherBags.Bag storage pointer",
                                        value: "bag"
                                    },
                                    id: 367,
                                    name: "Identifier",
                                    src: "3406:3:0"
                                }],
                                id: 368,
                                name: "FunctionCall",
                                src: "3387:23:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 263,
                                    type: "address",
                                    value: "oldOwner"
                                },
                                id: 369,
                                name: "Identifier",
                                src: "3412:8:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 268,
                                    type: "address",
                                    value: "newOwner"
                                },
                                id: 370,
                                name: "Identifier",
                                src: "3422:8:0"
                            }],
                            id: 371,
                            name: "FunctionCall",
                            src: "3342:89:0"
                        }],
                        id: 372,
                        name: "ExpressionStatement",
                        src: "3342:89:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }],
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "transfer",
                                    referencedDeclaration: null,
                                    type: "function (uint256)"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 268,
                                        type: "address",
                                        value: "newOwner"
                                    },
                                    id: 373,
                                    name: "Identifier",
                                    src: "3438:8:0"
                                }],
                                id: 375,
                                name: "MemberAccess",
                                src: "3438:17:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 312,
                                    type: "uint256",
                                    value: "purchaseExcess"
                                },
                                id: 376,
                                name: "Identifier",
                                src: "3456:14:0"
                            }],
                            id: 377,
                            name: "FunctionCall",
                            src: "3438:33:0"
                        }],
                        id: 378,
                        name: "ExpressionStatement",
                        src: "3438:33:0"
                    }],
                    id: 379,
                    name: "Block",
                    src: "2383:1093:0"
                }],
                id: 380,
                name: "FunctionDefinition",
                src: "2335:1141:0"
            }, {
                attributes: {
                    constant: !1,
                    implemented: !0,
                    isConstructor: !1,
                    name: "payout",
                    payable: !1,
                    scope: 516,
                    stateMutability: "nonpayable",
                    superFunction: null,
                    visibility: "public"
                },
                children: [{
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 381,
                    name: "ParameterList",
                    src: "3495:2:0"
                }, {
                    attributes: {
                        parameters: [null]
                    },
                    children: [],
                    id: 384,
                    name: "ParameterList",
                    src: "3523:0:0"
                }, {
                    attributes: {
                        arguments: [null]
                    },
                    children: [{
                        attributes: {
                            argumentTypes: null,
                            overloadedDeclarations: [null],
                            referencedDeclaration: 46,
                            type: "modifier ()",
                            value: "onlyContractOwner"
                        },
                        id: 382,
                        name: "Identifier",
                        src: "3505:17:0"
                    }],
                    id: 383,
                    name: "ModifierInvocation",
                    src: "3505:17:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }],
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "transfer",
                                    referencedDeclaration: null,
                                    type: "function (uint256)"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 17,
                                        type: "address",
                                        value: "contractOwner"
                                    },
                                    id: 385,
                                    name: "Identifier",
                                    src: "3529:13:0"
                                }],
                                id: 387,
                                name: "MemberAccess",
                                src: "3529:22:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "balance",
                                    referencedDeclaration: null,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 733,
                                        type: "contract EtherBags",
                                        value: "this"
                                    },
                                    id: 388,
                                    name: "Identifier",
                                    src: "3552:4:0"
                                }],
                                id: 389,
                                name: "MemberAccess",
                                src: "3552:12:0"
                            }],
                            id: 390,
                            name: "FunctionCall",
                            src: "3529:36:0"
                        }],
                        id: 391,
                        name: "ExpressionStatement",
                        src: "3529:36:0"
                    }],
                    id: 392,
                    name: "Block",
                    src: "3523:47:0"
                }],
                id: 393,
                name: "FunctionDefinition",
                src: "3480:90:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "getBagLevel",
                    payable: !1,
                    scope: 516,
                    stateMutability: "view",
                    superFunction: null,
                    visibility: "private"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bag",
                            scope: 418,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "struct EtherBags.Bag memory",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                contractScope: null,
                                name: "Bag",
                                referencedDeclaration: 35,
                                type: "struct EtherBags.Bag storage pointer"
                            },
                            id: 394,
                            name: "UserDefinedTypeName",
                            src: "3741:3:0"
                        }],
                        id: 395,
                        name: "VariableDeclaration",
                        src: "3741:7:0"
                    }],
                    id: 396,
                    name: "ParameterList",
                    src: "3740:9:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 418,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 397,
                            name: "ElementaryTypeName",
                            src: "3772:7:0"
                        }],
                        id: 398,
                        name: "VariableDeclaration",
                        src: "3772:7:0"
                    }],
                    id: 399,
                    name: "ParameterList",
                    src: "3771:9:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "<=",
                                type: "bool"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 724,
                                    type: "uint256",
                                    value: "now"
                                },
                                id: 400,
                                name: "Identifier",
                                src: "3791:3:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isInlineArray: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        isStructConstructorCall: !1,
                                        lValueRequested: !1,
                                        names: [null],
                                        type: "uint256",
                                        type_conversion: !1
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: [{
                                                typeIdentifier: "t_uint256",
                                                typeString: "uint256"
                                            }, {
                                                typeIdentifier: "t_uint256",
                                                typeString: "uint256"
                                            }],
                                            isConstant: !1,
                                            isLValue: !1,
                                            isPure: !1,
                                            lValueRequested: !1,
                                            member_name: "add",
                                            referencedDeclaration: 611,
                                            type: "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        children: [{
                                            attributes: {
                                                argumentTypes: null,
                                                overloadedDeclarations: [null],
                                                referencedDeclaration: 612,
                                                type: "type(library SafeMath)",
                                                value: "SafeMath"
                                            },
                                            id: 401,
                                            name: "Identifier",
                                            src: "3799:8:0"
                                        }],
                                        id: 402,
                                        name: "MemberAccess",
                                        src: "3799:12:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            isConstant: !1,
                                            isLValue: !0,
                                            isPure: !1,
                                            lValueRequested: !1,
                                            member_name: "purchasedAt",
                                            referencedDeclaration: 34,
                                            type: "uint256"
                                        },
                                        children: [{
                                            attributes: {
                                                argumentTypes: null,
                                                overloadedDeclarations: [null],
                                                referencedDeclaration: 395,
                                                type: "struct EtherBags.Bag memory",
                                                value: "bag"
                                            },
                                            id: 403,
                                            name: "Identifier",
                                            src: "3812:3:0"
                                        }],
                                        id: 404,
                                        name: "MemberAccess",
                                        src: "3812:15:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 20,
                                            type: "uint256",
                                            value: "timeout"
                                        },
                                        id: 405,
                                        name: "Identifier",
                                        src: "3829:7:0"
                                    }],
                                    id: 406,
                                    name: "FunctionCall",
                                    src: "3799:38:0"
                                }],
                                id: 407,
                                name: "TupleExpression",
                                src: "3798:40:0"
                            }],
                            id: 408,
                            name: "BinaryOperation",
                            src: "3791:47:0"
                        }, {
                            children: [{
                                attributes: {
                                    functionReturnParameters: 399
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !0,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        member_name: "level",
                                        referencedDeclaration: 30,
                                        type: "uint256"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 395,
                                            type: "struct EtherBags.Bag memory",
                                            value: "bag"
                                        },
                                        id: 409,
                                        name: "Identifier",
                                        src: "3855:3:0"
                                    }],
                                    id: 410,
                                    name: "MemberAccess",
                                    src: "3855:9:0"
                                }],
                                id: 411,
                                name: "Return",
                                src: "3848:16:0"
                            }],
                            id: 412,
                            name: "Block",
                            src: "3840:31:0"
                        }, {
                            children: [{
                                attributes: {
                                    functionReturnParameters: 399
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        hexvalue: "30",
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        subdenomination: null,
                                        token: "number",
                                        type: "int_const 0",
                                        value: "0"
                                    },
                                    id: 413,
                                    name: "Literal",
                                    src: "3892:1:0"
                                }],
                                id: 414,
                                name: "Return",
                                src: "3885:8:0"
                            }],
                            id: 415,
                            name: "Block",
                            src: "3877:23:0"
                        }],
                        id: 416,
                        name: "IfStatement",
                        src: "3787:113:0"
                    }],
                    id: 417,
                    name: "Block",
                    src: "3781:123:0"
                }],
                id: 418,
                name: "FunctionDefinition",
                src: "3720:184:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "getBagSellingPrice",
                    payable: !1,
                    scope: 516,
                    stateMutability: "view",
                    superFunction: null,
                    visibility: "private"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bag",
                            scope: 437,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "struct EtherBags.Bag memory",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                contractScope: null,
                                name: "Bag",
                                referencedDeclaration: 35,
                                type: "struct EtherBags.Bag storage pointer"
                            },
                            id: 419,
                            name: "UserDefinedTypeName",
                            src: "3936:3:0"
                        }],
                        id: 420,
                        name: "VariableDeclaration",
                        src: "3936:7:0"
                    }],
                    id: 421,
                    name: "ParameterList",
                    src: "3935:9:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 437,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 422,
                            name: "ElementaryTypeName",
                            src: "3967:7:0"
                        }],
                        id: 423,
                        name: "VariableDeclaration",
                        src: "3967:7:0"
                    }],
                    id: 424,
                    name: "ParameterList",
                    src: "3966:9:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [426]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "level",
                                scope: 437,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 425,
                                name: "ElementaryTypeName",
                                src: "3982:7:0"
                            }],
                            id: 426,
                            name: "VariableDeclaration",
                            src: "3982:13:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_struct$_Bag_$35_memory_ptr",
                                        typeString: "struct EtherBags.Bag memory"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 418,
                                    type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                    value: "getBagLevel"
                                },
                                id: 427,
                                name: "Identifier",
                                src: "3998:11:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 420,
                                    type: "struct EtherBags.Bag memory",
                                    value: "bag"
                                },
                                id: 428,
                                name: "Identifier",
                                src: "4010:3:0"
                            }],
                            id: 429,
                            name: "FunctionCall",
                            src: "3998:16:0"
                        }],
                        id: 430,
                        name: "VariableDeclarationStatement",
                        src: "3982:32:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 424
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_struct$_Bag_$35_memory_ptr",
                                        typeString: "struct EtherBags.Bag memory"
                                    }, {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 501,
                                    type: "function (struct EtherBags.Bag memory,uint256) view returns (uint256)",
                                    value: "getPriceForLevel"
                                },
                                id: 431,
                                name: "Identifier",
                                src: "4027:16:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 420,
                                    type: "struct EtherBags.Bag memory",
                                    value: "bag"
                                },
                                id: 432,
                                name: "Identifier",
                                src: "4044:3:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 426,
                                    type: "uint256",
                                    value: "level"
                                },
                                id: 433,
                                name: "Identifier",
                                src: "4049:5:0"
                            }],
                            id: 434,
                            name: "FunctionCall",
                            src: "4027:28:0"
                        }],
                        id: 435,
                        name: "Return",
                        src: "4020:35:0"
                    }],
                    id: 436,
                    name: "Block",
                    src: "3976:84:0"
                }],
                id: 437,
                name: "FunctionDefinition",
                src: "3908:152:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "getNextBagSellingPrice",
                    payable: !1,
                    scope: 516,
                    stateMutability: "view",
                    superFunction: null,
                    visibility: "private"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bag",
                            scope: 460,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "struct EtherBags.Bag memory",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                contractScope: null,
                                name: "Bag",
                                referencedDeclaration: 35,
                                type: "struct EtherBags.Bag storage pointer"
                            },
                            id: 438,
                            name: "UserDefinedTypeName",
                            src: "4096:3:0"
                        }],
                        id: 439,
                        name: "VariableDeclaration",
                        src: "4096:7:0"
                    }],
                    id: 440,
                    name: "ParameterList",
                    src: "4095:9:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 460,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 441,
                            name: "ElementaryTypeName",
                            src: "4127:7:0"
                        }],
                        id: 442,
                        name: "VariableDeclaration",
                        src: "4127:7:0"
                    }],
                    id: 443,
                    name: "ParameterList",
                    src: "4126:9:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [445]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "level",
                                scope: 460,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 444,
                                name: "ElementaryTypeName",
                                src: "4142:7:0"
                            }],
                            id: 445,
                            name: "VariableDeclaration",
                            src: "4142:13:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }, {
                                        typeIdentifier: "t_rational_1_by_1",
                                        typeString: "int_const 1"
                                    }],
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    member_name: "add",
                                    referencedDeclaration: 611,
                                    type: "function (uint256,uint256) pure returns (uint256)"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 612,
                                        type: "type(library SafeMath)",
                                        value: "SafeMath"
                                    },
                                    id: 446,
                                    name: "Identifier",
                                    src: "4158:8:0"
                                }],
                                id: 447,
                                name: "MemberAccess",
                                src: "4158:12:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "uint256",
                                    type_conversion: !1
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_struct$_Bag_$35_memory_ptr",
                                            typeString: "struct EtherBags.Bag memory"
                                        }],
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 418,
                                        type: "function (struct EtherBags.Bag memory) view returns (uint256)",
                                        value: "getBagLevel"
                                    },
                                    id: 448,
                                    name: "Identifier",
                                    src: "4171:11:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 439,
                                        type: "struct EtherBags.Bag memory",
                                        value: "bag"
                                    },
                                    id: 449,
                                    name: "Identifier",
                                    src: "4183:3:0"
                                }],
                                id: 450,
                                name: "FunctionCall",
                                src: "4171:16:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "31",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 1",
                                    value: "1"
                                },
                                id: 451,
                                name: "Literal",
                                src: "4189:1:0"
                            }],
                            id: 452,
                            name: "FunctionCall",
                            src: "4158:33:0"
                        }],
                        id: 453,
                        name: "VariableDeclarationStatement",
                        src: "4142:49:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 443
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "uint256",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_struct$_Bag_$35_memory_ptr",
                                        typeString: "struct EtherBags.Bag memory"
                                    }, {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 501,
                                    type: "function (struct EtherBags.Bag memory,uint256) view returns (uint256)",
                                    value: "getPriceForLevel"
                                },
                                id: 454,
                                name: "Identifier",
                                src: "4204:16:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 439,
                                    type: "struct EtherBags.Bag memory",
                                    value: "bag"
                                },
                                id: 455,
                                name: "Identifier",
                                src: "4221:3:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 445,
                                    type: "uint256",
                                    value: "level"
                                },
                                id: 456,
                                name: "Identifier",
                                src: "4226:5:0"
                            }],
                            id: 457,
                            name: "FunctionCall",
                            src: "4204:28:0"
                        }],
                        id: 458,
                        name: "Return",
                        src: "4197:35:0"
                    }],
                    id: 459,
                    name: "Block",
                    src: "4136:101:0"
                }],
                id: 460,
                name: "FunctionDefinition",
                src: "4064:173:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "getPriceForLevel",
                    payable: !1,
                    scope: 516,
                    stateMutability: "view",
                    superFunction: null,
                    visibility: "private"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "bag",
                            scope: 501,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "struct EtherBags.Bag memory",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                contractScope: null,
                                name: "Bag",
                                referencedDeclaration: 35,
                                type: "struct EtherBags.Bag storage pointer"
                            },
                            id: 461,
                            name: "UserDefinedTypeName",
                            src: "4267:3:0"
                        }],
                        id: 462,
                        name: "VariableDeclaration",
                        src: "4267:7:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "level",
                            scope: 501,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 463,
                            name: "ElementaryTypeName",
                            src: "4276:7:0"
                        }],
                        id: 464,
                        name: "VariableDeclaration",
                        src: "4276:13:0"
                    }],
                    id: 465,
                    name: "ParameterList",
                    src: "4266:24:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 501,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 466,
                            name: "ElementaryTypeName",
                            src: "4313:7:0"
                        }],
                        id: 467,
                        name: "VariableDeclaration",
                        src: "4313:7:0"
                    }],
                    id: 468,
                    name: "ParameterList",
                    src: "4312:9:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [470]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "sellingPrice",
                                scope: 501,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 469,
                                name: "ElementaryTypeName",
                                src: "4328:7:0"
                            }],
                            id: 470,
                            name: "VariableDeclaration",
                            src: "4328:20:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                overloadedDeclarations: [null],
                                referencedDeclaration: 23,
                                type: "uint256",
                                value: "startingPrice"
                            },
                            id: 471,
                            name: "Identifier",
                            src: "4351:13:0"
                        }],
                        id: 472,
                        name: "VariableDeclarationStatement",
                        src: "4328:36:0"
                    }, {
                        children: [{
                            attributes: {
                                assignments: [474]
                            },
                            children: [{
                                attributes: {
                                    constant: !1,
                                    name: "i",
                                    scope: 501,
                                    stateVariable: !1,
                                    storageLocation: "default",
                                    type: "uint256",
                                    value: null,
                                    visibility: "internal"
                                },
                                children: [{
                                    attributes: {
                                        name: "uint256",
                                        type: "uint256"
                                    },
                                    id: 473,
                                    name: "ElementaryTypeName",
                                    src: "4376:7:0"
                                }],
                                id: 474,
                                name: "VariableDeclaration",
                                src: "4376:9:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "30",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 0",
                                    value: "0"
                                },
                                id: 475,
                                name: "Literal",
                                src: "4388:1:0"
                            }],
                            id: 476,
                            name: "VariableDeclarationStatement",
                            src: "4376:13:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "<",
                                type: "bool"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 474,
                                    type: "uint256",
                                    value: "i"
                                },
                                id: 477,
                                name: "Identifier",
                                src: "4391:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 464,
                                    type: "uint256",
                                    value: "level"
                                },
                                id: 478,
                                name: "Identifier",
                                src: "4395:5:0"
                            }],
                            id: 479,
                            name: "BinaryOperation",
                            src: "4391:9:0"
                        }, {
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: "++",
                                    prefix: !1,
                                    type: "uint256"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 474,
                                        type: "uint256",
                                        value: "i"
                                    },
                                    id: 480,
                                    name: "Identifier",
                                    src: "4402:1:0"
                                }],
                                id: 481,
                                name: "UnaryOperation",
                                src: "4402:3:0"
                            }],
                            id: 482,
                            name: "ExpressionStatement",
                            src: "4402:3:0"
                        }, {
                            children: [{
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        operator: "=",
                                        type: "uint256"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 470,
                                            type: "uint256",
                                            value: "sellingPrice"
                                        },
                                        id: 483,
                                        name: "Identifier",
                                        src: "4415:12:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            isConstant: !1,
                                            isLValue: !1,
                                            isPure: !1,
                                            isStructConstructorCall: !1,
                                            lValueRequested: !1,
                                            names: [null],
                                            type: "uint256",
                                            type_conversion: !1
                                        },
                                        children: [{
                                            attributes: {
                                                argumentTypes: [{
                                                    typeIdentifier: "t_uint256",
                                                    typeString: "uint256"
                                                }, {
                                                    typeIdentifier: "t_rational_100_by_1",
                                                    typeString: "int_const 100"
                                                }],
                                                isConstant: !1,
                                                isLValue: !1,
                                                isPure: !1,
                                                lValueRequested: !1,
                                                member_name: "div",
                                                referencedDeclaration: 567,
                                                type: "function (uint256,uint256) pure returns (uint256)"
                                            },
                                            children: [{
                                                attributes: {
                                                    argumentTypes: null,
                                                    overloadedDeclarations: [null],
                                                    referencedDeclaration: 612,
                                                    type: "type(library SafeMath)",
                                                    value: "SafeMath"
                                                },
                                                id: 484,
                                                name: "Identifier",
                                                src: "4430:8:0"
                                            }],
                                            id: 485,
                                            name: "MemberAccess",
                                            src: "4430:12:0"
                                        }, {
                                            attributes: {
                                                argumentTypes: null,
                                                isConstant: !1,
                                                isLValue: !1,
                                                isPure: !1,
                                                isStructConstructorCall: !1,
                                                lValueRequested: !1,
                                                names: [null],
                                                type: "uint256",
                                                type_conversion: !1
                                            },
                                            children: [{
                                                attributes: {
                                                    argumentTypes: [{
                                                        typeIdentifier: "t_uint256",
                                                        typeString: "uint256"
                                                    }, {
                                                        typeIdentifier: "t_uint256",
                                                        typeString: "uint256"
                                                    }],
                                                    isConstant: !1,
                                                    isLValue: !1,
                                                    isPure: !1,
                                                    lValueRequested: !1,
                                                    member_name: "mul",
                                                    referencedDeclaration: 549,
                                                    type: "function (uint256,uint256) pure returns (uint256)"
                                                },
                                                children: [{
                                                    attributes: {
                                                        argumentTypes: null,
                                                        overloadedDeclarations: [null],
                                                        referencedDeclaration: 612,
                                                        type: "type(library SafeMath)",
                                                        value: "SafeMath"
                                                    },
                                                    id: 486,
                                                    name: "Identifier",
                                                    src: "4443:8:0"
                                                }],
                                                id: 487,
                                                name: "MemberAccess",
                                                src: "4443:12:0"
                                            }, {
                                                attributes: {
                                                    argumentTypes: null,
                                                    overloadedDeclarations: [null],
                                                    referencedDeclaration: 470,
                                                    type: "uint256",
                                                    value: "sellingPrice"
                                                },
                                                id: 488,
                                                name: "Identifier",
                                                src: "4456:12:0"
                                            }, {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: !1,
                                                    isLValue: !0,
                                                    isPure: !1,
                                                    lValueRequested: !1,
                                                    member_name: "multiplier",
                                                    referencedDeclaration: 32,
                                                    type: "uint256"
                                                },
                                                children: [{
                                                    attributes: {
                                                        argumentTypes: null,
                                                        overloadedDeclarations: [null],
                                                        referencedDeclaration: 462,
                                                        type: "struct EtherBags.Bag memory",
                                                        value: "bag"
                                                    },
                                                    id: 489,
                                                    name: "Identifier",
                                                    src: "4470:3:0"
                                                }],
                                                id: 490,
                                                name: "MemberAccess",
                                                src: "4470:14:0"
                                            }],
                                            id: 491,
                                            name: "FunctionCall",
                                            src: "4443:42:0"
                                        }, {
                                            attributes: {
                                                argumentTypes: null,
                                                hexvalue: "313030",
                                                isConstant: !1,
                                                isLValue: !1,
                                                isPure: !0,
                                                lValueRequested: !1,
                                                subdenomination: null,
                                                token: "number",
                                                type: "int_const 100",
                                                value: "100"
                                            },
                                            id: 492,
                                            name: "Literal",
                                            src: "4487:3:0"
                                        }],
                                        id: 493,
                                        name: "FunctionCall",
                                        src: "4430:61:0"
                                    }],
                                    id: 494,
                                    name: "Assignment",
                                    src: "4415:76:0"
                                }],
                                id: 495,
                                name: "ExpressionStatement",
                                src: "4415:76:0"
                            }],
                            id: 496,
                            name: "Block",
                            src: "4407:91:0"
                        }],
                        id: 497,
                        name: "ForStatement",
                        src: "4371:127:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 468
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                overloadedDeclarations: [null],
                                referencedDeclaration: 470,
                                type: "uint256",
                                value: "sellingPrice"
                            },
                            id: 498,
                            name: "Identifier",
                            src: "4511:12:0"
                        }],
                        id: 499,
                        name: "Return",
                        src: "4504:19:0"
                    }],
                    id: 500,
                    name: "Block",
                    src: "4322:206:0"
                }],
                id: 501,
                name: "FunctionDefinition",
                src: "4241:287:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "_addressNotNull",
                    payable: !1,
                    scope: 516,
                    stateMutability: "pure",
                    superFunction: null,
                    visibility: "private"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "_to",
                            scope: 515,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "address",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "address",
                                type: "address"
                            },
                            id: 502,
                            name: "ElementaryTypeName",
                            src: "4637:7:0"
                        }],
                        id: 503,
                        name: "VariableDeclaration",
                        src: "4637:11:0"
                    }],
                    id: 504,
                    name: "ParameterList",
                    src: "4636:13:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 515,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "bool",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "bool",
                                type: "bool"
                            },
                            id: 505,
                            name: "ElementaryTypeName",
                            src: "4672:4:0"
                        }],
                        id: 506,
                        name: "VariableDeclaration",
                        src: "4672:4:0"
                    }],
                    id: 507,
                    name: "ParameterList",
                    src: "4671:6:0"
                }, {
                    children: [{
                        attributes: {
                            functionReturnParameters: 507
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "!=",
                                type: "bool"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 503,
                                    type: "address",
                                    value: "_to"
                                },
                                id: 508,
                                name: "Identifier",
                                src: "4691:3:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    isStructConstructorCall: !1,
                                    lValueRequested: !1,
                                    names: [null],
                                    type: "address",
                                    type_conversion: !0
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: [{
                                            typeIdentifier: "t_rational_0_by_1",
                                            typeString: "int_const 0"
                                        }],
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        type: "type(address)",
                                        value: "address"
                                    },
                                    id: 509,
                                    name: "ElementaryTypeNameExpression",
                                    src: "4698:7:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        hexvalue: "30",
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        subdenomination: null,
                                        token: "number",
                                        type: "int_const 0",
                                        value: "0"
                                    },
                                    id: 510,
                                    name: "Literal",
                                    src: "4706:1:0"
                                }],
                                id: 511,
                                name: "FunctionCall",
                                src: "4698:10:0"
                            }],
                            id: 512,
                            name: "BinaryOperation",
                            src: "4691:17:0"
                        }],
                        id: 513,
                        name: "Return",
                        src: "4684:24:0"
                    }],
                    id: 514,
                    name: "Block",
                    src: "4678:35:0"
                }],
                id: 515,
                name: "FunctionDefinition",
                src: "4612:101:0"
            }],
            id: 516,
            name: "ContractDefinition",
            src: "26:4689:0"
        }, {
            attributes: {
                baseContracts: [null],
                contractDependencies: [null],
                contractKind: "library",
                documentation: null,
                fullyImplemented: !0,
                linearizedBaseContracts: [612],
                name: "SafeMath",
                scope: 613
            },
            children: [{
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "mul",
                    payable: !1,
                    scope: 612,
                    stateMutability: "pure",
                    superFunction: null,
                    visibility: "internal"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "a",
                            scope: 549,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 517,
                            name: "ElementaryTypeName",
                            src: "4816:7:0"
                        }],
                        id: 518,
                        name: "VariableDeclaration",
                        src: "4816:9:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "b",
                            scope: 549,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 519,
                            name: "ElementaryTypeName",
                            src: "4827:7:0"
                        }],
                        id: 520,
                        name: "VariableDeclaration",
                        src: "4827:9:0"
                    }],
                    id: 521,
                    name: "ParameterList",
                    src: "4815:22:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 549,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 522,
                            name: "ElementaryTypeName",
                            src: "4861:7:0"
                        }],
                        id: 523,
                        name: "VariableDeclaration",
                        src: "4861:7:0"
                    }],
                    id: 524,
                    name: "ParameterList",
                    src: "4860:9:0"
                }, {
                    children: [{
                        attributes: {
                            falseBody: null
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "==",
                                type: "bool"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 518,
                                    type: "uint256",
                                    value: "a"
                                },
                                id: 525,
                                name: "Identifier",
                                src: "4880:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "30",
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !0,
                                    lValueRequested: !1,
                                    subdenomination: null,
                                    token: "number",
                                    type: "int_const 0",
                                    value: "0"
                                },
                                id: 526,
                                name: "Literal",
                                src: "4885:1:0"
                            }],
                            id: 527,
                            name: "BinaryOperation",
                            src: "4880:6:0"
                        }, {
                            children: [{
                                attributes: {
                                    functionReturnParameters: 524
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        hexvalue: "30",
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !0,
                                        lValueRequested: !1,
                                        subdenomination: null,
                                        token: "number",
                                        type: "int_const 0",
                                        value: "0"
                                    },
                                    id: 528,
                                    name: "Literal",
                                    src: "4903:1:0"
                                }],
                                id: 529,
                                name: "Return",
                                src: "4896:8:0"
                            }],
                            id: 530,
                            name: "Block",
                            src: "4888:23:0"
                        }],
                        id: 531,
                        name: "IfStatement",
                        src: "4876:35:0"
                    }, {
                        attributes: {
                            assignments: [533]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "c",
                                scope: 549,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 532,
                                name: "ElementaryTypeName",
                                src: "4916:7:0"
                            }],
                            id: 533,
                            name: "VariableDeclaration",
                            src: "4916:9:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "*",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 518,
                                    type: "uint256",
                                    value: "a"
                                },
                                id: 534,
                                name: "Identifier",
                                src: "4928:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 520,
                                    type: "uint256",
                                    value: "b"
                                },
                                id: 535,
                                name: "Identifier",
                                src: "4932:1:0"
                            }],
                            id: 536,
                            name: "BinaryOperation",
                            src: "4928:5:0"
                        }],
                        id: 537,
                        name: "VariableDeclarationStatement",
                        src: "4916:17:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 713,
                                    type: "function (bool) pure",
                                    value: "assert"
                                },
                                id: 538,
                                name: "Identifier",
                                src: "4939:6:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    },
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: "==",
                                    type: "bool"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        commonType: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                        },
                                        isConstant: !1,
                                        isLValue: !1,
                                        isPure: !1,
                                        lValueRequested: !1,
                                        operator: "/",
                                        type: "uint256"
                                    },
                                    children: [{
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 533,
                                            type: "uint256",
                                            value: "c"
                                        },
                                        id: 539,
                                        name: "Identifier",
                                        src: "4946:1:0"
                                    }, {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 518,
                                            type: "uint256",
                                            value: "a"
                                        },
                                        id: 540,
                                        name: "Identifier",
                                        src: "4950:1:0"
                                    }],
                                    id: 541,
                                    name: "BinaryOperation",
                                    src: "4946:5:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 520,
                                        type: "uint256",
                                        value: "b"
                                    },
                                    id: 542,
                                    name: "Identifier",
                                    src: "4955:1:0"
                                }],
                                id: 543,
                                name: "BinaryOperation",
                                src: "4946:10:0"
                            }],
                            id: 544,
                            name: "FunctionCall",
                            src: "4939:18:0"
                        }],
                        id: 545,
                        name: "ExpressionStatement",
                        src: "4939:18:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 524
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                overloadedDeclarations: [null],
                                referencedDeclaration: 533,
                                type: "uint256",
                                value: "c"
                            },
                            id: 546,
                            name: "Identifier",
                            src: "4970:1:0"
                        }],
                        id: 547,
                        name: "Return",
                        src: "4963:8:0"
                    }],
                    id: 548,
                    name: "Block",
                    src: "4870:106:0"
                }],
                id: 549,
                name: "FunctionDefinition",
                src: "4803:173:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "div",
                    payable: !1,
                    scope: 612,
                    stateMutability: "pure",
                    superFunction: null,
                    visibility: "internal"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "a",
                            scope: 567,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 550,
                            name: "ElementaryTypeName",
                            src: "5071:7:0"
                        }],
                        id: 551,
                        name: "VariableDeclaration",
                        src: "5071:9:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "b",
                            scope: 567,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 552,
                            name: "ElementaryTypeName",
                            src: "5082:7:0"
                        }],
                        id: 553,
                        name: "VariableDeclaration",
                        src: "5082:9:0"
                    }],
                    id: 554,
                    name: "ParameterList",
                    src: "5070:22:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 567,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 555,
                            name: "ElementaryTypeName",
                            src: "5116:7:0"
                        }],
                        id: 556,
                        name: "VariableDeclaration",
                        src: "5116:7:0"
                    }],
                    id: 557,
                    name: "ParameterList",
                    src: "5115:9:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [559]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "c",
                                scope: 567,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 558,
                                name: "ElementaryTypeName",
                                src: "5205:7:0"
                            }],
                            id: 559,
                            name: "VariableDeclaration",
                            src: "5205:9:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "/",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 551,
                                    type: "uint256",
                                    value: "a"
                                },
                                id: 560,
                                name: "Identifier",
                                src: "5217:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 553,
                                    type: "uint256",
                                    value: "b"
                                },
                                id: 561,
                                name: "Identifier",
                                src: "5221:1:0"
                            }],
                            id: 562,
                            name: "BinaryOperation",
                            src: "5217:5:0"
                        }],
                        id: 563,
                        name: "VariableDeclarationStatement",
                        src: "5205:17:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 557
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                overloadedDeclarations: [null],
                                referencedDeclaration: 559,
                                type: "uint256",
                                value: "c"
                            },
                            id: 564,
                            name: "Identifier",
                            src: "5317:1:0"
                        }],
                        id: 565,
                        name: "Return",
                        src: "5310:8:0"
                    }],
                    id: 566,
                    name: "Block",
                    src: "5125:198:0"
                }],
                id: 567,
                name: "FunctionDefinition",
                src: "5058:265:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "sub",
                    payable: !1,
                    scope: 612,
                    stateMutability: "pure",
                    superFunction: null,
                    visibility: "internal"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "a",
                            scope: 587,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 568,
                            name: "ElementaryTypeName",
                            src: "5449:7:0"
                        }],
                        id: 569,
                        name: "VariableDeclaration",
                        src: "5449:9:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "b",
                            scope: 587,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 570,
                            name: "ElementaryTypeName",
                            src: "5460:7:0"
                        }],
                        id: 571,
                        name: "VariableDeclaration",
                        src: "5460:9:0"
                    }],
                    id: 572,
                    name: "ParameterList",
                    src: "5448:22:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 587,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 573,
                            name: "ElementaryTypeName",
                            src: "5494:7:0"
                        }],
                        id: 574,
                        name: "VariableDeclaration",
                        src: "5494:7:0"
                    }],
                    id: 575,
                    name: "ParameterList",
                    src: "5493:9:0"
                }, {
                    children: [{
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 713,
                                    type: "function (bool) pure",
                                    value: "assert"
                                },
                                id: 576,
                                name: "Identifier",
                                src: "5509:6:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    },
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: "<=",
                                    type: "bool"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 571,
                                        type: "uint256",
                                        value: "b"
                                    },
                                    id: 577,
                                    name: "Identifier",
                                    src: "5516:1:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 569,
                                        type: "uint256",
                                        value: "a"
                                    },
                                    id: 578,
                                    name: "Identifier",
                                    src: "5521:1:0"
                                }],
                                id: 579,
                                name: "BinaryOperation",
                                src: "5516:6:0"
                            }],
                            id: 580,
                            name: "FunctionCall",
                            src: "5509:14:0"
                        }],
                        id: 581,
                        name: "ExpressionStatement",
                        src: "5509:14:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 575
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "-",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 569,
                                    type: "uint256",
                                    value: "a"
                                },
                                id: 582,
                                name: "Identifier",
                                src: "5536:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 571,
                                    type: "uint256",
                                    value: "b"
                                },
                                id: 583,
                                name: "Identifier",
                                src: "5540:1:0"
                            }],
                            id: 584,
                            name: "BinaryOperation",
                            src: "5536:5:0"
                        }],
                        id: 585,
                        name: "Return",
                        src: "5529:12:0"
                    }],
                    id: 586,
                    name: "Block",
                    src: "5503:43:0"
                }],
                id: 587,
                name: "FunctionDefinition",
                src: "5436:110:0"
            }, {
                attributes: {
                    constant: !0,
                    implemented: !0,
                    isConstructor: !1,
                    modifiers: [null],
                    name: "add",
                    payable: !1,
                    scope: 612,
                    stateMutability: "pure",
                    superFunction: null,
                    visibility: "internal"
                },
                children: [{
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "a",
                            scope: 611,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 588,
                            name: "ElementaryTypeName",
                            src: "5621:7:0"
                        }],
                        id: 589,
                        name: "VariableDeclaration",
                        src: "5621:9:0"
                    }, {
                        attributes: {
                            constant: !1,
                            name: "b",
                            scope: 611,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 590,
                            name: "ElementaryTypeName",
                            src: "5632:7:0"
                        }],
                        id: 591,
                        name: "VariableDeclaration",
                        src: "5632:9:0"
                    }],
                    id: 592,
                    name: "ParameterList",
                    src: "5620:22:0"
                }, {
                    children: [{
                        attributes: {
                            constant: !1,
                            name: "",
                            scope: 611,
                            stateVariable: !1,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal"
                        },
                        children: [{
                            attributes: {
                                name: "uint256",
                                type: "uint256"
                            },
                            id: 593,
                            name: "ElementaryTypeName",
                            src: "5666:7:0"
                        }],
                        id: 594,
                        name: "VariableDeclaration",
                        src: "5666:7:0"
                    }],
                    id: 595,
                    name: "ParameterList",
                    src: "5665:9:0"
                }, {
                    children: [{
                        attributes: {
                            assignments: [597]
                        },
                        children: [{
                            attributes: {
                                constant: !1,
                                name: "c",
                                scope: 611,
                                stateVariable: !1,
                                storageLocation: "default",
                                type: "uint256",
                                value: null,
                                visibility: "internal"
                            },
                            children: [{
                                attributes: {
                                    name: "uint256",
                                    type: "uint256"
                                },
                                id: 596,
                                name: "ElementaryTypeName",
                                src: "5681:7:0"
                            }],
                            id: 597,
                            name: "VariableDeclaration",
                            src: "5681:9:0"
                        }, {
                            attributes: {
                                argumentTypes: null,
                                commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                },
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                lValueRequested: !1,
                                operator: "+",
                                type: "uint256"
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 589,
                                    type: "uint256",
                                    value: "a"
                                },
                                id: 598,
                                name: "Identifier",
                                src: "5693:1:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 591,
                                    type: "uint256",
                                    value: "b"
                                },
                                id: 599,
                                name: "Identifier",
                                src: "5697:1:0"
                            }],
                            id: 600,
                            name: "BinaryOperation",
                            src: "5693:5:0"
                        }],
                        id: 601,
                        name: "VariableDeclarationStatement",
                        src: "5681:17:0"
                    }, {
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                isConstant: !1,
                                isLValue: !1,
                                isPure: !1,
                                isStructConstructorCall: !1,
                                lValueRequested: !1,
                                names: [null],
                                type: "tuple()",
                                type_conversion: !1
                            },
                            children: [{
                                attributes: {
                                    argumentTypes: [{
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                    }],
                                    overloadedDeclarations: [null],
                                    referencedDeclaration: 713,
                                    type: "function (bool) pure",
                                    value: "assert"
                                },
                                id: 602,
                                name: "Identifier",
                                src: "5704:6:0"
                            }, {
                                attributes: {
                                    argumentTypes: null,
                                    commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                    },
                                    isConstant: !1,
                                    isLValue: !1,
                                    isPure: !1,
                                    lValueRequested: !1,
                                    operator: ">=",
                                    type: "bool"
                                },
                                children: [{
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 597,
                                        type: "uint256",
                                        value: "c"
                                    },
                                    id: 603,
                                    name: "Identifier",
                                    src: "5711:1:0"
                                }, {
                                    attributes: {
                                        argumentTypes: null,
                                        overloadedDeclarations: [null],
                                        referencedDeclaration: 589,
                                        type: "uint256",
                                        value: "a"
                                    },
                                    id: 604,
                                    name: "Identifier",
                                    src: "5716:1:0"
                                }],
                                id: 605,
                                name: "BinaryOperation",
                                src: "5711:6:0"
                            }],
                            id: 606,
                            name: "FunctionCall",
                            src: "5704:14:0"
                        }],
                        id: 607,
                        name: "ExpressionStatement",
                        src: "5704:14:0"
                    }, {
                        attributes: {
                            functionReturnParameters: 595
                        },
                        children: [{
                            attributes: {
                                argumentTypes: null,
                                overloadedDeclarations: [null],
                                referencedDeclaration: 597,
                                type: "uint256",
                                value: "c"
                            },
                            id: 608,
                            name: "Identifier",
                            src: "5731:1:0"
                        }],
                        id: 609,
                        name: "Return",
                        src: "5724:8:0"
                    }],
                    id: 610,
                    name: "Block",
                    src: "5675:62:0"
                }],
                id: 611,
                name: "FunctionDefinition",
                src: "5608:129:0"
            }],
            id: 612,
            name: "ContractDefinition",
            src: "4717:1022:0"
        }],
        id: 613,
        name: "SourceUnit",
        src: "0:5739:0"
    },
    compiler: {
        name: "solc",
        version: "0.4.19+commit.c4cbbb05.Emscripten.clang"
    },
    networks: {
        4447: {
            events: {},
            links: {},
            address: "0xa2c5718723161f48fe1be09bee40a8fa347df520"
        },
        1518194452145: {
            events: {},
            links: {},
            address: "0xa2c5718723161f48fe1be09bee40a8fa347df520"
        },
        1518217739864: {
            events: {},
            links: {},
            address: "0xa2c5718723161f48fe1be09bee40a8fa347df520"
        }
    },
    schemaVersion: "1.0.1",
    updatedAt: "2018-03-13T03:10:29.879Z"
}
}, function(e, t) {
    (function() {
        "use strict";

        function t(e) {
            function t(t) {
                return function(r) {
                    return e(t, r)
                }
            }
            return t.arity = 2, t.func = e, t
        }

        function r(e) {
            function t(t) {
                return function(r) {
                    return function(n) {
                        return e(t, r, n)
                    }
                }
            }
            return t.arity = 3, t.func = e, t
        }

        function n(e) {
            function t(t) {
                return function(r) {
                    return function(n) {
                        return function(a) {
                            return e(t, r, n, a)
                        }
                    }
                }
            }
            return t.arity = 4, t.func = e, t
        }

        function a(e) {
            function t(t) {
                return function(r) {
                    return function(n) {
                        return function(a) {
                            return function(i) {
                                return e(t, r, n, a, i)
                            }
                        }
                    }
                }
            }
            return t.arity = 5, t.func = e, t
        }

        function i(e) {
            function t(t) {
                return function(r) {
                    return function(n) {
                        return function(a) {
                            return function(i) {
                                return function(f) {
                                    return e(t, r, n, a, i, f)
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 6, t.func = e, t
        }

        function f(e) {
            function t(t) {
                return function(r) {
                    return function(n) {
                        return function(a) {
                            return function(i) {
                                return function(f) {
                                    return function(o) {
                                        return e(t, r, n, a, i, f, o)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 7, t.func = e, t
        }

        function o(e) {
            function t(t) {
                return function(r) {
                    return function(n) {
                        return function(a) {
                            return function(i) {
                                return function(f) {
                                    return function(o) {
                                        return function(u) {
                                            return e(t, r, n, a, i, f, o, u)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 8, t.func = e, t
        }

        function u(e, t, r) {
            return 2 === e.arity ? e.func(t, r) : e(t)(r)
        }

        function c(e, t, r, n) {
            return 3 === e.arity ? e.func(t, r, n) : e(t)(r)(n)
        }

        function l(e, t, r, n, a) {
            return 4 === e.arity ? e.func(t, r, n, a) : e(t)(r)(n)(a)
        }

        function s(e, t, r, n, a, i) {
            return 5 === e.arity ? e.func(t, r, n, a, i) : e(t)(r)(n)(a)(i)
        }
        var d = function() {
            return {
                create: function() {
                    return I.nativeBinding(function(e) {
                        var t = requestAnimationFrame(function() {
                            e(I.succeed(Date.now()))
                        });
                        return function() {
                            cancelAnimationFrame(t)
                        }
                    })
                }
            }
        }(),
        _ = function() {
            var e = ["LT", "EQ", "GT"];
            return {
                div: t(function(e, t) {
                    return e / t | 0
                }),
                rem: t(function(e, t) {
                    return e % t
                }),
                mod: t(function e(t, r) {
                    if (0 === r) throw new Error("Cannot perform mod 0. Division by zero error.");
                    var n = t % r,
                    a = 0 === t ? 0 : r > 0 ? t >= 0 ? n : n + r : -e(-t, -r);
                    return a === r ? 0 : a
                }),
                pi: Math.PI,
                e: Math.E,
                cos: Math.cos,
                sin: Math.sin,
                tan: Math.tan,
                acos: Math.acos,
                asin: Math.asin,
                atan: Math.atan,
                atan2: t(Math.atan2),
                degrees: function(e) {
                    return e * Math.PI / 180
                },
                turns: function(e) {
                    return 2 * Math.PI * e
                },
                fromPolar: function(e) {
                    var t = e._0,
                    r = e._1;
                    return p.Tuple2(t * Math.cos(r), t * Math.sin(r))
                },
                toPolar: function(e) {
                    var t = e._0,
                    r = e._1;
                    return p.Tuple2(Math.sqrt(t * t + r * r), Math.atan2(r, t))
                },
                sqrt: Math.sqrt,
                logBase: t(function(e, t) {
                    return Math.log(t) / Math.log(e)
                }),
                negate: function(e) {
                    return -e
                },
                abs: function(e) {
                    return e < 0 ? -e : e
                },
                min: t(function(e, t) {
                    return p.cmp(e, t) < 0 ? e : t
                }),
                max: t(function(e, t) {
                    return p.cmp(e, t) > 0 ? e : t
                }),
                clamp: r(function(e, t, r) {
                    return p.cmp(r, e) < 0 ? e : p.cmp(r, t) > 0 ? t : r
                }),
                compare: t(function(t, r) {
                    return {
                        ctor: e[p.cmp(t, r) + 1]
                    }
                }),
                xor: t(function(e, t) {
                    return e !== t
                }),
                not: function(e) {
                    return !e
                },
                truncate: function(e) {
                    return 0 | e
                },
                ceiling: Math.ceil,
                floor: Math.floor,
                round: Math.round,
                toFloat: function(e) {
                    return e
                },
                isNaN: isNaN,
                isInfinite: function(e) {
                    return e === 1 / 0 || e === -1 / 0
                }
            }
        }(),
        p = function() {
            function e(t, r, n, a) {
                if (n > 100) return a.push({
                    x: t,
                    y: r
                }), !0;
                    if (t === r) return !0;
                    if ("object" != typeof t) {
                        if ("function" == typeof t) throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
                        return !1
                    }
                    if (null === t || null === r) return !1;
                    if (t instanceof Date) return t.getTime() === r.getTime();
                    if (!("ctor" in t)) {
                        for (var i in t)
                            if (!e(t[i], r[i], n + 1, a)) return !1;
                        return !0
                    }
                    if ("RBNode_elm_builtin" !== t.ctor && "RBEmpty_elm_builtin" !== t.ctor || (t = Ye(t), r = Ye(r)), "Set_elm_builtin" === t.ctor && (t = jr(t), r = jr(r)), "::" === t.ctor) {
                        for (var f = t, o = r;
                            "::" === f.ctor && "::" === o.ctor;) {
                            if (!e(f._0, o._0, n + 1, a)) return !1;
                        f = f._1, o = o._1
                    }
                    return f.ctor === o.ctor
                }
                if ("_Array" === t.ctor) {
                    var u = Tr.toJSArray(t),
                    c = Tr.toJSArray(r);
                    if (u.length !== c.length) return !1;
                    for (var l = 0; l < u.length; l++)
                        if (!e(u[l], c[l], n + 1, a)) return !1;
                    return !0
                }
                if (!e(t.ctor, r.ctor, n + 1, a)) return !1;
                for (var i in t)
                    if (!e(t[i], r[i], n + 1, a)) return !1;
                return !0
            }
            var r = -1,
            n = 0,
            a = 1;
            var i = 0;
            var f = {
                ctor: "[]"
            };

            function o(e, t) {
                return {
                    ctor: "::",
                    _0: e,
                    _1: t
                }
            }

            function u(e) {
                return e.start.line == e.end.line ? "on line " + e.start.line : "between lines " + e.start.line + " and " + e.end.line
            }

            function c(e) {
                var t = typeof e;
                if ("function" === t) return "<function>";
                if ("boolean" === t) return e ? "True" : "False";
                if ("number" === t) return e + "";
                if (e instanceof String) return "'" + l(e, !0) + "'";
                if ("string" === t) return '"' + l(e, !1) + '"';
                if (null === e) return "null";
                if ("object" === t && "ctor" in e) {
                    var r = e.ctor.substring(0, 5);
                    if ("_Tupl" === r) {
                        var n = [];
                        for (var a in e) "ctor" !== a && n.push(c(e[a]));
                            return "(" + n.join(",") + ")"
                    }
                    if ("_Task" === r) return "<task>";
                    if ("_Array" === e.ctor) return "Array.fromList " + c(Dr(e));
                    if ("<decoder>" === e.ctor) return "<decoder>";
                    if ("_Process" === e.ctor) return "<process:" + e.id + ">";
                    if ("::" === e.ctor) {
                        n = "[" + c(e._0);
                        for (e = e._1;
                            "::" === e.ctor;) n += "," + c(e._0), e = e._1;
                            return n + "]"
                    }
                    if ("[]" === e.ctor) return "[]";
                    if ("Set_elm_builtin" === e.ctor) return "Set.fromList " + c(jr(e));
                    if ("RBNode_elm_builtin" === e.ctor || "RBEmpty_elm_builtin" === e.ctor) return "Dict.fromList " + c(Ye(e));
                    n = "";
                    for (var i in e)
                        if ("ctor" !== i) {
                            var f = c(e[i]),
                            o = f[0];
                            n += " " + ("{" === o || "(" === o || "<" === o || '"' === o || f.indexOf(" ") < 0 ? f : "(" + f + ")")
                        }
                        return e.ctor + n
                    }
                    if ("object" === t) {
                        if (e instanceof Date) return "<" + e.toString() + ">";
                        if (e.elm_web_socket) return "<websocket>";
                        n = [];
                        for (var a in e) n.push(a + " = " + c(e[a]));
                            return 0 === n.length ? "{}" : "{ " + n.join(", ") + " }"
                    }
                    return "<internal structure>"
                }

                function l(e, t) {
                    var r = e.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
                    return t ? r.replace(/\'/g, "\\'") : r.replace(/\"/g, '\\"')
                }
                return {
                    eq: function(t, r) {
                        for (var n, a = [], i = e(t, r, 0, a); i && (n = a.pop());) i = e(n.x, n.y, 0, a);
                            return i
                    },
                    cmp: function e(t, i) {
                        if ("object" != typeof t) return t === i ? n : t < i ? r : a;
                        if (t instanceof String) {
                            var f = t.valueOf(),
                            o = i.valueOf();
                            return f === o ? n : f < o ? r : a
                        }
                        if ("::" === t.ctor || "[]" === t.ctor) {
                            for (;
                                "::" === t.ctor && "::" === i.ctor;) {
                                if ((u = e(t._0, i._0)) !== n) return u;
                            t = t._1, i = i._1
                        }
                        return t.ctor === i.ctor ? n : "[]" === t.ctor ? r : a
                    }
                    if ("_Tuple" === t.ctor.slice(0, 6)) {
                        var u, c = t.ctor.slice(6) - 0;
                        if (0 === c) return n;
                        if (c >= 1) {
                            if ((u = e(t._0, i._0)) !== n) return u;
                            if (c >= 2) {
                                if ((u = e(t._1, i._1)) !== n) return u;
                                if (c >= 3) {
                                    if ((u = e(t._2, i._2)) !== n) return u;
                                    if (c >= 4) {
                                        if ((u = e(t._3, i._3)) !== n) return u;
                                        if (c >= 5) {
                                            if ((u = e(t._4, i._4)) !== n) return u;
                                            if (c >= 6) {
                                                if ((u = e(t._5, i._5)) !== n) return u;
                                                if (c >= 7) throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")
                                            }
                                    }
                                }
                            }
                        }
                    }
                    return n
                }
                throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")
            },
            Tuple0: {
                ctor: "_Tuple0"
            },
            Tuple2: function(e, t) {
                return {
                    ctor: "_Tuple2",
                    _0: e,
                    _1: t
                }
            },
            chr: function(e) {
                return new String(e)
            },
            update: function(e, t) {
                var r = {};
                for (var n in e) r[n] = e[n];
                    for (var n in t) r[n] = t[n];
                        return r
                },
                guid: function(e) {
                    return i++
                },
                append: t(function(e, t) {
                    if ("string" == typeof e) return e + t;
                    if ("[]" === e.ctor) return t;
                    var r = o(e._0, f),
                    n = r;
                    for (e = e._1;
                        "[]" !== e.ctor;) n._1 = o(e._0, f), e = e._1, n = n._1;
                        return n._1 = t, r
                }),
                crash: function(e, t) {
                    return function(r) {
                        throw new Error("Ran into a `Debug.crash` in module `" + e + "` " + u(t) + "\nThe message provided by the code author is:\n\n    " + r)
                    }
                },
                crashCase: function(e, t, r) {
                    return function(n) {
                        throw new Error("Ran into a `Debug.crash` in module `" + e + "`\n\nThis was caused by the `case` expression " + u(t) + ".\nOne of the branches ended with a crash and the following value got through:\n\n    " + c(r) + "\n\nThe message provided by the code author is:\n\n    " + n)
                    }
                },
                toString: c
            }
        }(),
        m = (t(function(e, t) {
            var r = t;
            return u(e, r._0, r._1)
        }), r(function(e, t, r) {
            return e({
                ctor: "_Tuple2",
                _0: t,
                _1: r
            })
        }), r(function(e, t, r) {
            return u(e, r, t)
        }), t(function(e, t) {
            return e
        })),
        b = function(e) {
            return e
        };
        (S = S || {})["<|"] = t(function(e, t) {
            return e(t)
        }), (S = S || {})["|>"] = t(function(e, t) {
            return t(e)
        }), (S = S || {})[">>"] = r(function(e, t, r) {
            return t(e(r))
        }), (S = S || {})["<<"] = r(function(e, t, r) {
            return e(t(r))
        }), (S = S || {})["++"] = p.append;
        var g = p.toString,
        y = (_.isInfinite, _.isNaN, _.toFloat),
        v = (_.ceiling, _.floor),
        h = _.truncate,
        T = _.round;
        _.not, _.xor;
        (S = S || {})["||"] = _.or, (S = S || {})["&&"] = _.and;
        var D = _.max,
        B = _.min,
        w = _.compare;
        (S = S || {})[">="] = _.ge, (S = S || {})["<="] = _.le, (S = S || {})[">"] = _.gt, (S = S || {})["<"] = _.lt, (S = S || {})["/="] = _.neq, (S = S || {})["=="] = _.eq;
        _.e;
        var V = _.pi,
        P = (_.clamp, _.logBase, _.abs),
        C = (_.negate, _.sqrt, _.atan2, _.atan, _.asin, _.acos, _.tan, _.sin),
        k = _.cos;
        (S = S || {})["^"] = _.exp, (S = S || {})["%"] = _.mod;
        var S, L = _.rem;
        (S = S || {})["//"] = _.div, (S = S || {})["/"] = _.floatDiv, (S = S || {})["*"] = _.mul, (S = S || {})["-"] = _.sub, (S = S || {})["+"] = _.add;
        _.toPolar, _.fromPolar;
        var E = _.turns,
        x = _.degrees,
        I = function() {
            var e = 1e4;

            function r(e) {
                return {
                    ctor: "_Task_succeed",
                    value: e
                }
            }

            function n(e) {
                return {
                    ctor: "_Task_nativeBinding",
                    callback: e,
                    cancel: null
                }
            }

            function a(e) {
                var t = {
                    ctor: "_Process",
                    id: p.guid(),
                    root: e,
                    stack: null,
                    mailbox: []
                };
                return c(t), t
            }

            function i(e, t) {
                e.mailbox.push(t), c(e)
            }

            function f(t, r) {
                for (; t < e;) {
                    var n = r.root.ctor;
                    if ("_Task_succeed" !== n)
                        if ("_Task_fail" !== n)
                            if ("_Task_andThen" !== n)
                                if ("_Task_onError" !== n) {
                                    if ("_Task_nativeBinding" === n) {
                                        r.root.cancel = r.root.callback(function(e) {
                                            r.root = e, c(r)
                                        });
                                        break
                                    }
                                    if ("_Task_receive" !== n) throw new Error(n);
                                    var a = r.mailbox;
                                    if (0 === a.length) break;
                                    r.root = r.root.callback(a.shift()), ++t
                                } else r.stack = {
                                    ctor: "_Task_onError",
                                    callback: r.root.callback,
                                    rest: r.stack
                                }, r.root = r.root.task, ++t;
                                else r.stack = {
                                    ctor: "_Task_andThen",
                                    callback: r.root.callback,
                                    rest: r.stack
                                }, r.root = r.root.task, ++t;
                                else {
                                    for (; r.stack && "_Task_andThen" === r.stack.ctor;) r.stack = r.stack.rest;
                                        if (null === r.stack) break;
                                    r.root = r.stack.callback(r.root.value), r.stack = r.stack.rest, ++t
                                } else {
                                    for (; r.stack && "_Task_onError" === r.stack.ctor;) r.stack = r.stack.rest;
                                        if (null === r.stack) break;
                                    r.root = r.stack.callback(r.root.value), r.stack = r.stack.rest, ++t
                                }
                            }
                            return t < e ? t + 1 : (c(r), t)
                        }
                        var o = !1,
                        u = [];

                        function c(e) {
                            u.push(e), o || (setTimeout(l, 0), o = !0)
                        }

                        function l() {
                            for (var t, r = 0; r < e && (t = u.shift());) t.root && (r = f(r, t));
                                t ? setTimeout(l, 0) : o = !1
                        }
                        return {
                            succeed: r,
                            fail: function(e) {
                                return {
                                    ctor: "_Task_fail",
                                    value: e
                                }
                            },
                            nativeBinding: n,
                            andThen: t(function(e, t) {
                                return {
                                    ctor: "_Task_andThen",
                                    callback: e,
                                    task: t
                                }
                            }),
                            onError: t(function(e, t) {
                                return {
                                    ctor: "_Task_onError",
                                    callback: e,
                                    task: t
                                }
                            }),
                            receive: function(e) {
                                return {
                                    ctor: "_Task_receive",
                                    callback: e
                                }
                            },
                            spawn: function(e) {
                                return n(function(t) {
                                    t(r(a(e)))
                                })
                            },
                            kill: function(e) {
                                return n(function(t) {
                                    var n = e.root;
                                    "_Task_nativeBinding" === n.ctor && n.cancel && n.cancel(), e.root = null, t(r(p.Tuple0))
                                })
                            },
                            sleep: function(e) {
                                return n(function(t) {
                                    var n = setTimeout(function() {
                                        t(r(p.Tuple0))
                                    }, e);
                                    return function() {
                                        clearTimeout(n)
                                    }
                                })
                            },
                            send: t(function(e, t) {
                                return n(function(n) {
                                    i(e, t), n(r(p.Tuple0))
                                })
                            }),
                            rawSpawn: a,
                            rawSend: i
                        }
                    }(),
                    R = function() {
                        function e(e, t) {
                            return function(e) {}
                        }

                        function n(e, t, r, n) {
                            var o, c = {};
                            var l = f(I.nativeBinding(function(t) {
                                var a = e._0;
                                o = n(s, a);
                                var i = e._1,
                                f = r(a);
                                d(c, i, f), t(I.succeed(a))
                            }), function(e, n) {
                                return I.nativeBinding(function(a) {
                                    var i = u(t, e, n);
                                    n = i._0, o(n);
                                    var f = i._1,
                                    l = r(n);
                                    d(c, f, l), a(I.succeed(n))
                                })
                            });

                            function s(e) {
                                I.rawSend(l, e)
                            }
                            var _ = function(e, t) {
                                var r;
                                for (var n in a) {
                                    var f = a[n];
                                    f.isForeign && ((r = r || {})[n] = "cmd" === f.tag ? g(n) : v(n, t)), e[n] = i(f, t)
                                }
                                return r
                            }(c, s);
                            return _ ? {
                                ports: _
                            } : {}
                        }
                        var a = {};

                        function i(e, t) {
                            var r = {
                                main: t,
                                self: void 0
                            },
                            n = e.tag,
                            a = e.onEffects,
                            i = e.onSelfMsg;
                            var o = f(e.init, function(e, t) {
                                if ("self" === e.ctor) return c(i, r, e._0, t);
                                var f = e._0;
                                switch (n) {
                                    case "cmd":
                                    return c(a, r, f.cmds, t);
                                    case "sub":
                                    return c(a, r, f.subs, t);
                                    case "fx":
                                    return l(a, r, f.cmds, f.subs, t)
                                }
                            });
                            return r.self = o, o
                        }

                        function f(e, t) {
                            var r = I.andThen;
                            var n = u(r, function e(n) {
                                var a = I.receive(function(e) {
                                    return t(e, n)
                                });
                                return u(r, e, a)
                            }, e);
                            return I.rawSpawn(n)
                        }

                        function o(e) {
                            return function(t) {
                                return {
                                    type: "leaf",
                                    home: e,
                                    value: t
                                }
                            }
                        }

                        function s(e) {
                            return {
                                type: "node",
                                branches: e
                            }
                        }

                        function d(e, t, r) {
                            var n = {};
                            for (var a in _(!0, t, n, null), _(!1, r, n, null), e) {
                                var i = a in n ? n[a] : {
                                    cmds: j.Nil,
                                    subs: j.Nil
                                };
                                I.rawSend(e[a], {
                                    ctor: "fx",
                                    _0: i
                                })
                            }
                        }

                        function _(e, t, r, n) {
                            switch (t.type) {
                                case "leaf":
                                var i = t.home,
                                f = function(e, t, r, n) {
                                    return u(e ? a[t].cmdMap : a[t].subMap, function(e) {
                                        var t = r;
                                        for (; t;) e = t.tagger(e), t = t.rest;
                                            return e
                                    }, n)
                                }(e, i, n, t.value);
                                return void(r[i] = function(e, t, r) {
                                    if (r = r || {
                                        cmds: j.Nil,
                                        subs: j.Nil
                                    }, e) return r.cmds = j.Cons(t, r.cmds), r;
                                        return r.subs = j.Cons(t, r.subs), r
                                    }(e, f, r[i]));
                                case "node":
                                for (var o = t.branches;
                                    "[]" !== o.ctor;) _(e, o._0, r, n), o = o._1;
                                    return;
                                case "map":
                                return void _(e, t.tree, r, {
                                    tagger: t.tagger,
                                    rest: n
                                })
                            }
                        }

                        function m(e) {
                            if (e in a) throw new Error("There can only be one port named `" + e + "`, but your program has multiple.")
                        }
                    var b = t(function(e, t) {
                        return t
                    });

                    function g(e) {
                        var t = [],
                        n = a[e].converter,
                        i = I.succeed(null);
                        return a[e].init = i, a[e].onEffects = r(function(e, r, a) {
                            for (;
                                "[]" !== r.ctor;) {
                                for (var f = t, o = n(r._0), u = 0; u < f.length; u++) f[u](o);
                                    r = r._1
                            }
                            return i
                        }), {
                            subscribe: function(e) {
                                t.push(e)
                            },
                            unsubscribe: function(e) {
                                var r = (t = t.slice()).indexOf(e);
                                r >= 0 && t.splice(r, 1)
                            }
                        }
                    }
                    var y = t(function(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    });

                    function v(e, t) {
                        var n = [],
                        i = j.Nil,
                        f = a[e].converter,
                        o = function(e, t, r) {
                            for (var a = s(e, t, r), i = 0; i < n.length; i++) d(n[i]);
                                return n = null, c = d, o = s, a
                        },
                        c = function(e) {
                            n.push(e)
                        },
                        l = I.succeed(null);

                        function s(e, t, r) {
                            return i = t, l
                        }

                        function d(e) {
                            for (var r = i;
                                "[]" !== r.ctor;) t(r._0(e)), r = r._1
                        }
                    return a[e].init = l, a[e].onEffects = r(function(e, t, r) {
                        return o(e, t, r)
                    }), {
                        send: function(t) {
                            var r = u(Nr, f, t);
                            if ("Err" === r.ctor) throw new Error("Trying to send an unexpected type of value through port `" + e + "`:\n" + r._0);
                            c(r._0)
                        }
                    }
                }
                return {
                    sendToApp: t(function(e, t) {
                        return I.nativeBinding(function(r) {
                            e.main(t), r(I.succeed(p.Tuple0))
                        })
                    }),
                    sendToSelf: t(function(e, t) {
                        return u(I.send, e.self, {
                            ctor: "self",
                            _0: t
                        })
                    }),
                    effectManagers: a,
                    outgoingPort: function(e, t) {
                        return m(e), a[e] = {
                            tag: "cmd",
                            cmdMap: b,
                            converter: t,
                            isForeign: !0
                        }, o(e)
                    },
                    incomingPort: function(e, t) {
                        return m(e), a[e] = {
                            tag: "sub",
                            subMap: y,
                            converter: t,
                            isForeign: !0
                        }, o(e)
                    },
                    htmlToProgram: function(e) {
                        var r = s(j.Nil),
                        n = p.Tuple2(p.Tuple0, r);
                        return Zr({
                            init: n,
                            view: function(e) {
                                return main
                            },
                            update: t(function(e, t) {
                                return n
                            }),
                            subscriptions: function(e) {
                                return r
                            }
                        })
                    },
                    program: function(t) {
                        return function(r) {
                            return function(r, a) {
                                r.worker = function(r) {
                                    if (void 0 !== r) throw new Error("The `" + a + "` module does not need flags.\nCall " + a + ".worker() with no arguments and you should be all set!");
                                    return n(t.init, t.update, t.subscriptions, e)
                                }
                            }
                        }
                    },
                    programWithFlags: function(t) {
                        return function(r) {
                            return function(a, i) {
                                a.worker = function(a) {
                                    if (void 0 === r) throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + i + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.");
                                    var f = u(Lr.run, r, a);
                                    if ("Err" === f.ctor) throw new Error(i + ".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + f._0);
                                    return n(t.init(f._0), t.update, t.subscriptions, e)
                                }
                            }
                        }
                    },
                    initialize: n,
                    leaf: o,
                    batch: s,
                    map: t(function(e, t) {
                        return {
                            type: "map",
                            tagger: e,
                            tree: t
                        }
                    })
                }
            }(),
            A = R.batch,
            N = A({
                ctor: "[]"
            }),
            q = q || {};
            q["!"] = t(function(e, t) {
                return {
                    ctor: "_Tuple2",
                    _0: e,
                    _1: A(t)
                }
            });
            R.map;
            var M = R.batch,
            O = M({
                ctor: "[]"
            }),
            F = R.map,
            z = (I.succeed, R.sendToSelf),
            U = R.sendToApp,
            H = (R.programWithFlags, R.program, t(function(e, t) {
                var r = t;
                return "Just" === r.ctor ? r._0 : e
            })),
            Q = {
                ctor: "Nothing"
            },
            J = (t(function(e, t) {
                var r = t;
                return "Just" === r.ctor ? e(r._0) : Q
            }), function(e) {
                return {
                    ctor: "Just",
                    _0: e
                }
            }),
            j = (t(function(e, t) {
                var r = t;
                return "Just" === r.ctor ? J(e(r._0)) : Q
            }), r(function(e, t, r) {
                var n = {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                };
                return "_Tuple2" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor ? J(u(e, n._0._0, n._1._0)) : Q
            }), n(function(e, t, r, n) {
                var a = {
                    ctor: "_Tuple3",
                    _0: t,
                    _1: r,
                    _2: n
                };
                return "_Tuple3" === a.ctor && "Just" === a._0.ctor && "Just" === a._1.ctor && "Just" === a._2.ctor ? J(c(e, a._0._0, a._1._0, a._2._0)) : Q
            }), a(function(e, t, r, n, a) {
                var i = {
                    ctor: "_Tuple4",
                    _0: t,
                    _1: r,
                    _2: n,
                    _3: a
                };
                return "_Tuple4" === i.ctor && "Just" === i._0.ctor && "Just" === i._1.ctor && "Just" === i._2.ctor && "Just" === i._3.ctor ? J(l(e, i._0._0, i._1._0, i._2._0, i._3._0)) : Q
            }), i(function(e, t, r, n, a, i) {
                var f = {
                    ctor: "_Tuple5",
                    _0: t,
                    _1: r,
                    _2: n,
                    _3: a,
                    _4: i
                };
                return "_Tuple5" === f.ctor && "Just" === f._0.ctor && "Just" === f._1.ctor && "Just" === f._2.ctor && "Just" === f._3.ctor && "Just" === f._4.ctor ? J(s(e, f._0._0, f._1._0, f._2._0, f._3._0, f._4._0)) : Q
            }), function() {
                var e = {
                    ctor: "[]"
                };

                function f(e, t) {
                    return {
                        ctor: "::",
                        _0: e,
                        _1: t
                    }
                }

                function o(t) {
                    for (var r = e, n = t.length; n--;) r = f(t[n], r);
                        return r
                }

                function d(e) {
                    for (var t = [];
                        "[]" !== e.ctor;) t.push(e._0), e = e._1;
                        return t
                }
                return {
                    Nil: e,
                    Cons: f,
                    cons: t(f),
                    toArray: d,
                    fromArray: o,
                    foldr: r(function(e, t, r) {
                        for (var n = d(r), a = t, i = n.length; i--;) a = u(e, n[i], a);
                            return a
                    }),
                    map2: r(function(e, t, r) {
                        for (var n = [];
                            "[]" !== t.ctor && "[]" !== r.ctor;) n.push(u(e, t._0, r._0)), t = t._1, r = r._1;
                            return o(n)
                    }),
                    map3: n(function(e, t, r, n) {
                        for (var a = [];
                            "[]" !== t.ctor && "[]" !== r.ctor && "[]" !== n.ctor;) a.push(c(e, t._0, r._0, n._0)), t = t._1, r = r._1, n = n._1;
                            return o(a)
                    }),
                    map4: a(function(e, t, r, n, a) {
                        for (var i = [];
                            "[]" !== t.ctor && "[]" !== r.ctor && "[]" !== n.ctor && "[]" !== a.ctor;) i.push(l(e, t._0, r._0, n._0, a._0)), t = t._1, r = r._1, n = n._1, a = a._1;
                            return o(i)
                    }),
                    map5: i(function(e, t, r, n, a, i) {
                        for (var f = [];
                            "[]" !== t.ctor && "[]" !== r.ctor && "[]" !== n.ctor && "[]" !== a.ctor && "[]" !== i.ctor;) f.push(s(e, t._0, r._0, n._0, a._0, i._0)), t = t._1, r = r._1, n = n._1, a = a._1, i = i._1;
                            return o(f)
                    }),
                    sortBy: t(function(e, t) {
                        return o(d(t).sort(function(t, r) {
                            return p.cmp(e(t), e(r))
                        }))
                    }),
                    sortWith: t(function(e, t) {
                        return o(d(t).sort(function(t, r) {
                            var n = e(t)(r).ctor;
                            return "EQ" === n ? 0 : "LT" === n ? -1 : 1
                        }))
                    })
                }
            }()),
$ = (j.sortWith, j.sortBy),
W = t(function(e, t) {
    for (;;) {
        if (p.cmp(e, 0) < 1) return t;
        var r = t;
        if ("[]" === r.ctor) return t;
        e = e - 1, t = r._1
    }
}),
X = (j.map5, j.map4, j.map3, j.map2),
G = t(function(e, t) {
    for (;;) {
        var r = t;
        if ("[]" === r.ctor) return !1;
        if (e(r._0)) return !0;
        e = e, t = r._1
    }
}),
Y = t(function(e, t) {
    return !u(G, function(t) {
        return !e(t)
    }, t)
}),
K = j.foldr,
Z = r(function(e, t, r) {
    for (;;) {
        var n = r;
        if ("[]" === n.ctor) return t;
        var a = e,
        i = u(e, n._0, t);
        e = a, t = i, r = n._1
    }
}),
ee = function(e) {
    return c(Z, t(function(e, t) {
        return t + 1
    }), 0, e)
},
te = t(function(e, t) {
    return u(G, function(t) {
        return p.eq(t, e)
    }, t)
}),
re = function(e) {
    return "[]" === e.ctor
},
ne = function(e) {
    var t = e;
    return "::" === t.ctor ? J(t._0) : Q
},
ae = ae || {};
ae["::"] = j.cons;
var ie = t(function(e, r) {
    return c(K, t(function(t, r) {
        return {
            ctor: "::",
            _0: e(t),
            _1: r
        }
    }), {
        ctor: "[]"
    }, r)
}),
fe = t(function(e, r) {
    var n = t(function(t, r) {
        return e(t) ? {
            ctor: "::",
            _0: t,
            _1: r
        } : r
    });
    return c(K, n, {
        ctor: "[]"
    }, r)
}),
oe = r(function(e, t, r) {
    var n = e(t);
    return "Just" === n.ctor ? {
        ctor: "::",
        _0: n._0,
        _1: r
    } : r
}),
ue = t(function(e, t) {
    return c(K, oe(e), {
        ctor: "[]"
    }, t)
}),
ce = function(e) {
    return c(Z, t(function(e, t) {
        return {
            ctor: "::",
            _0: e,
            _1: t
        }
    }), {
        ctor: "[]"
    }, e)
},
le = (r(function(e, r, n) {
    var a = t(function(t, r) {
        var n = r;
        return "::" === n.ctor ? {
            ctor: "::",
            _0: u(e, t, n._0),
            _1: r
        } : {
            ctor: "[]"
        }
    });
    return ce(c(Z, a, {
        ctor: "::",
        _0: r,
        _1: {
            ctor: "[]"
        }
    }, n))
}), t(function(e, r) {
    return "[]" === r.ctor ? e : c(K, t(function(e, t) {
        return {
            ctor: "::",
            _0: e,
            _1: t
        }
    }), r, e)
})),
se = function(e) {
    return c(K, le, {
        ctor: "[]"
    }, e)
},
de = t(function(e, t) {
    return se(u(ie, e, t))
}),
_e = t(function(e, r) {
    var n = t(function(t, r) {
        var n = r,
        a = n._0,
        i = n._1;
        return e(t) ? {
            ctor: "_Tuple2",
            _0: {
                ctor: "::",
                _0: t,
                _1: a
            },
            _1: i
        } : {
            ctor: "_Tuple2",
            _0: a,
            _1: {
                ctor: "::",
                _0: t,
                _1: i
            }
        }
    });
    return c(K, n, {
        ctor: "_Tuple2",
        _0: {
            ctor: "[]"
        },
        _1: {
            ctor: "[]"
        }
    }, r)
}),
pe = (t(function(e, r) {
    var n = r;
    if ("[]" === n.ctor) return {
        ctor: "[]"
    };
    var a = t(function(t, r) {
        return {
            ctor: "::",
            _0: e,
            _1: {
                ctor: "::",
                _0: t,
                _1: r
            }
        }
    }),
    i = c(K, a, {
        ctor: "[]"
    }, n._1);
    return {
        ctor: "::",
        _0: n._0,
        _1: i
    }
}), r(function(e, t, r) {
    for (;;) {
        if (p.cmp(e, 0) < 1) return r;
        var n = t;
        if ("[]" === n.ctor) return r;
        e = e - 1, t = n._1, r = {
            ctor: "::",
            _0: n._0,
            _1: r
        }
    }
})),
me = t(function(e, t) {
    return ce(c(pe, e, t, {
        ctor: "[]"
    }))
}),
be = r(function(e, t, r) {
    if (p.cmp(t, 0) < 1) return {
        ctor: "[]"
    };
    var n = {
        ctor: "_Tuple2",
        _0: t,
        _1: r
    };
    e: do {
        t: do {
            if ("_Tuple2" !== n.ctor) break e;
            if ("[]" === n._1.ctor) return r;
            if ("::" !== n._1._1.ctor) {
                if (1 === n._0) break t;
                break e
            }
            switch (n._0) {
                case 1:
                break t;
                case 2:
                return {
                    ctor: "::",
                    _0: n._1._0,
                    _1: {
                        ctor: "::",
                        _0: n._1._1._0,
                        _1: {
                            ctor: "[]"
                        }
                    }
                };
                case 3:
                if ("::" === n._1._1._1.ctor) return {
                    ctor: "::",
                    _0: n._1._0,
                    _1: {
                        ctor: "::",
                        _0: n._1._1._0,
                        _1: {
                            ctor: "::",
                            _0: n._1._1._1._0,
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
                break e;
                default:
                if ("::" === n._1._1._1.ctor && "::" === n._1._1._1._1.ctor) {
                    var a = n._1._1._1._0,
                    i = n._1._1._0,
                    f = n._1._0,
                    o = n._1._1._1._1._0,
                    l = n._1._1._1._1._1;
                    return p.cmp(e, 1e3) > 0 ? {
                        ctor: "::",
                        _0: f,
                        _1: {
                            ctor: "::",
                            _0: i,
                            _1: {
                                ctor: "::",
                                _0: a,
                                _1: {
                                    ctor: "::",
                                    _0: o,
                                    _1: u(me, t - 4, l)
                                }
                            }
                        }
                    } : {
                        ctor: "::",
                        _0: f,
                        _1: {
                            ctor: "::",
                            _0: i,
                            _1: {
                                ctor: "::",
                                _0: a,
                                _1: {
                                    ctor: "::",
                                    _0: o,
                                    _1: c(be, e + 1, t - 4, l)
                                }
                            }
                        }
                    }
                }
                break e
            }
        } while (0);
        return {
            ctor: "::",
            _0: n._1._0,
            _1: {
                ctor: "[]"
            }
        }
    } while (0);
    return r
}),
ge = t(function(e, t) {
    return c(be, 0, e, t)
}),
ye = r(function(e, t, r) {
    for (;;) {
        if (p.cmp(t, 0) < 1) return e;
        e = {
            ctor: "::",
            _0: r,
            _1: e
        }, t = t - 1, r = r
    }
}),
ve = t(function(e, t) {
    return c(ye, {
        ctor: "[]"
    }, e, t)
}),
he = r(function(e, t, r) {
    for (;;) {
        if (!(p.cmp(e, t) < 1)) return r;
        var n = {
            ctor: "::",
            _0: t,
            _1: r
        };
        e = e, t = t - 1, r = n
    }
}),
Te = t(function(e, t) {
    return c(he, e, t, {
        ctor: "[]"
    })
}),
De = (t(function(e, t) {
    return c(X, e, u(Te, 0, ee(t) - 1), t)
}), t(function(e, t) {
    var r = t;
    return "Ok" === r.ctor ? r._0 : e
}), function(e) {
    return {
        ctor: "Err",
        _0: e
    }
}),
Be = (t(function(e, t) {
    var r = t;
    return "Ok" === r.ctor ? e(r._0) : De(r._0)
}), function(e) {
    return {
        ctor: "Ok",
        _0: e
    }
}),
we = (t(function(e, t) {
    var r = t;
    return "Ok" === r.ctor ? Be(e(r._0)) : De(r._0)
}), r(function(e, t, r) {
    var n = {
        ctor: "_Tuple2",
        _0: t,
        _1: r
    };
    return "Ok" === n._0.ctor ? "Ok" === n._1.ctor ? Be(u(e, n._0._0, n._1._0)) : De(n._1._0) : De(n._0._0)
}), n(function(e, t, r, n) {
    var a = {
        ctor: "_Tuple3",
        _0: t,
        _1: r,
        _2: n
    };
    return "Ok" === a._0.ctor ? "Ok" === a._1.ctor ? "Ok" === a._2.ctor ? Be(c(e, a._0._0, a._1._0, a._2._0)) : De(a._2._0) : De(a._1._0) : De(a._0._0)
}), a(function(e, t, r, n, a) {
    var i = {
        ctor: "_Tuple4",
        _0: t,
        _1: r,
        _2: n,
        _3: a
    };
    return "Ok" === i._0.ctor ? "Ok" === i._1.ctor ? "Ok" === i._2.ctor ? "Ok" === i._3.ctor ? Be(l(e, i._0._0, i._1._0, i._2._0, i._3._0)) : De(i._3._0) : De(i._2._0) : De(i._1._0) : De(i._0._0)
}), i(function(e, t, r, n, a, i) {
    var f = {
        ctor: "_Tuple5",
        _0: t,
        _1: r,
        _2: n,
        _3: a,
        _4: i
    };
    return "Ok" === f._0.ctor ? "Ok" === f._1.ctor ? "Ok" === f._2.ctor ? "Ok" === f._3.ctor ? "Ok" === f._4.ctor ? Be(s(e, f._0._0, f._1._0, f._2._0, f._3._0, f._4._0)) : De(f._4._0) : De(f._3._0) : De(f._2._0) : De(f._1._0) : De(f._0._0)
}), t(function(e, t) {
    var r = t;
    return "Ok" === r.ctor ? Be(r._0) : De(e(r._0))
}), t(function(e, t) {
    var r = t;
    return "Just" === r.ctor ? Be(r._0) : De(e)
}), I.onError),
Ve = I.andThen,
Pe = t(function(e, t) {
    var r = t;
    return I.spawn(u(Ve, U(e), r._0))
}),
Ce = I.fail,
ke = (t(function(e, t) {
    return u(we, function(t) {
        return Ce(e(t))
    }, t)
}), I.succeed),
Se = t(function(e, t) {
    return u(Ve, function(t) {
        return ke(e(t))
    }, t)
}),
Le = r(function(e, t, r) {
    return u(Ve, function(t) {
        return u(Ve, function(r) {
            return ke(u(e, t, r))
        }, r)
    }, t)
}),
Ee = (n(function(e, t, r, n) {
    return u(Ve, function(t) {
        return u(Ve, function(r) {
            return u(Ve, function(n) {
                return ke(c(e, t, r, n))
            }, n)
        }, r)
    }, t)
}), a(function(e, t, r, n, a) {
    return u(Ve, function(t) {
        return u(Ve, function(r) {
            return u(Ve, function(n) {
                return u(Ve, function(a) {
                    return ke(l(e, t, r, n, a))
                }, a)
            }, n)
        }, r)
    }, t)
}), i(function(e, t, r, n, a, i) {
    return u(Ve, function(t) {
        return u(Ve, function(r) {
            return u(Ve, function(n) {
                return u(Ve, function(a) {
                    return u(Ve, function(i) {
                        return ke(s(e, t, r, n, a, i))
                    }, i)
                }, a)
            }, n)
        }, r)
    }, t)
}), function(e) {
    var r = e;
    return "[]" === r.ctor ? ke({
        ctor: "[]"
    }) : c(Le, t(function(e, t) {
        return {
            ctor: "::",
            _0: e,
            _1: t
        }
    }), r._0, Ee(r._1))
}),
xe = r(function(e, t, r) {
    return u(Se, function(e) {
        return {
            ctor: "_Tuple0"
        }
    }, Ee(u(ie, Pe(e), t)))
}),
Ie = ke({
    ctor: "_Tuple0"
}),
Re = r(function(e, t, r) {
    return ke({
        ctor: "_Tuple0"
    })
}),
Ae = R.leaf("Task"),
Ne = function(e) {
    return {
        ctor: "Perform",
        _0: e
    }
},
qe = t(function(e, t) {
    return Ae(Ne(u(Se, e, t)))
}),
Me = (t(function(e, t) {
    return Ae(Ne(u(we, function(t) {
        return ke(e(De(t)))
    }, u(Ve, function(t) {
        return ke(e(Be(t)))
    }, t))))
}), t(function(e, t) {
    return Ne(u(Se, e, t._0))
}));
R.effectManagers.Task = {
    pkg: "elm-lang/core",
    init: Ie,
    onEffects: xe,
    onSelfMsg: Re,
    tag: "cmd",
    cmdMap: Me
};
var Oe = function() {
    return {
        crash: function(e) {
            throw new Error(e)
        },
        log: t(function(e, t) {
            var r = e + ": " + p.toString(t),
            n = n || {};
            return n.stdout ? n.stdout.write(r) : console.log(r), t
        })
    }
}(),
Fe = function() {
    function e(e, t) {
        for (var r = ""; e > 0;) 1 & e && (r += t), e >>= 1, t += t;
            return r
    }

    function n(e) {
        return De("could not convert string '" + e + "' to an Int")
    }

    function a(e) {
        return De("could not convert string '" + e + "' to a Float")
    }
    return {
        isEmpty: function(e) {
            return 0 === e.length
        },
        cons: t(function(e, t) {
            return e + t
        }),
        uncons: function(e) {
            var t = e[0];
            return t ? J(p.Tuple2(p.chr(t), e.slice(1))) : Q
        },
        append: t(function(e, t) {
            return e + t
        }),
        concat: function(e) {
            return j.toArray(e).join("")
        },
        length: function(e) {
            return e.length
        },
        map: t(function(e, t) {
            for (var r = t.split(""), n = r.length; n--;) r[n] = e(p.chr(r[n]));
                return r.join("")
        }),
        filter: t(function(e, t) {
            return t.split("").map(p.chr).filter(e).join("")
        }),
        reverse: function(e) {
            return e.split("").reverse().join("")
        },
        foldl: r(function(e, t, r) {
            for (var n = r.length, a = 0; a < n; ++a) t = u(e, p.chr(r[a]), t);
                return t
        }),
        foldr: r(function(e, t, r) {
            for (var n = r.length; n--;) t = u(e, p.chr(r[n]), t);
                return t
        }),
        split: t(function(e, t) {
            return j.fromArray(t.split(e))
        }),
        join: t(function(e, t) {
            return j.toArray(t).join(e)
        }),
        repeat: t(e),
        slice: r(function(e, t, r) {
            return r.slice(e, t)
        }),
        left: t(function(e, t) {
            return e < 1 ? "" : t.slice(0, e)
        }),
        right: t(function(e, t) {
            return e < 1 ? "" : t.slice(-e)
        }),
        dropLeft: t(function(e, t) {
            return e < 1 ? t : t.slice(e)
        }),
        dropRight: t(function(e, t) {
            return e < 1 ? t : t.slice(0, -e)
        }),
        pad: r(function(t, r, n) {
            var a = (t - n.length) / 2;
            return e(Math.ceil(a), r) + n + e(0 | a, r)
        }),
        padLeft: r(function(t, r, n) {
            return e(t - n.length, r) + n
        }),
        padRight: r(function(t, r, n) {
            return n + e(t - n.length, r)
        }),
        trim: function(e) {
            return e.trim()
        },
        trimLeft: function(e) {
            return e.replace(/^\s+/, "")
        },
        trimRight: function(e) {
            return e.replace(/\s+$/, "")
        },
        words: function(e) {
            return j.fromArray(e.trim().split(/\s+/g))
        },
        lines: function(e) {
            return j.fromArray(e.split(/\r\n|\r|\n/g))
        },
        toUpper: function(e) {
            return e.toUpperCase()
        },
        toLower: function(e) {
            return e.toLowerCase()
        },
        any: t(function(e, t) {
            for (var r = t.length; r--;)
                if (e(p.chr(t[r]))) return !0;
            return !1
        }),
        all: t(function(e, t) {
            for (var r = t.length; r--;)
                if (!e(p.chr(t[r]))) return !1;
            return !0
        }),
        contains: t(function(e, t) {
            return t.indexOf(e) > -1
        }),
        startsWith: t(function(e, t) {
            return 0 === t.indexOf(e)
        }),
        endsWith: t(function(e, t) {
            return t.length >= e.length && t.lastIndexOf(e) === t.length - e.length
        }),
        indexes: t(function(e, t) {
            var r = e.length;
            if (r < 1) return j.Nil;
            for (var n = 0, a = [];
                (n = t.indexOf(e, n)) > -1;) a.push(n), n += r;
                return j.fromArray(a)
        }),
        toInt: function(e) {
            var t = e.length;
            if (0 === t) return n(e);
            if ("0" === (a = e[0]) && "x" === e[1]) {
                for (var r = 2; r < t; ++r)
                    if (!("0" <= (a = e[r]) && a <= "9" || "A" <= a && a <= "F" || "a" <= a && a <= "f")) return n(e);
                return Be(parseInt(e, 16))
            }
            if (a > "9" || a < "0" && "-" !== a && "+" !== a) return n(e);
            for (r = 1; r < t; ++r) {
                var a;
                if ((a = e[r]) < "0" || "9" < a) return n(e)
            }
        return Be(parseInt(e, 10))
    },
    toFloat: function(e) {
        if (0 === e.length || /[\sxbo]/.test(e)) return a(e);
        var t = +e;
        return t == t ? Be(t) : a(e)
    },
    toList: function(e) {
        return j.fromArray(e.split("").map(p.chr))
    },
    fromList: function(e) {
        return j.toArray(e).join("")
    }
}
}(),
ze = {
    fromCode: function(e) {
        return p.chr(String.fromCharCode(e))
    },
    toCode: function(e) {
        return e.charCodeAt(0)
    },
    toUpper: function(e) {
        return p.chr(e.toUpperCase())
    },
    toLower: function(e) {
        return p.chr(e.toLowerCase())
    },
    toLocaleUpper: function(e) {
        return p.chr(e.toLocaleUpperCase())
    },
    toLocaleLower: function(e) {
        return p.chr(e.toLocaleLowerCase())
    }
},
Ue = ze.toCode,
He = r(function(e, t, r) {
    var n = Ue(r);
    return p.cmp(n, Ue(e)) > -1 && p.cmp(n, Ue(t)) < 1
}),
Qe = (u(He, p.chr("A"), p.chr("Z")), u(He, p.chr("a"), p.chr("z")), u(He, p.chr("0"), p.chr("9")), u(He, p.chr("0"), p.chr("7")), Fe.fromList, Fe.toList, Fe.toFloat, Fe.toInt, Fe.indexes, Fe.indexes, Fe.endsWith, Fe.startsWith),
Je = (Fe.contains, Fe.all, Fe.any, Fe.toLower, Fe.toUpper, Fe.lines, Fe.words, Fe.trimRight, Fe.trimLeft, Fe.trim, Fe.padRight, Fe.padLeft, Fe.pad, Fe.dropRight, Fe.dropLeft),
je = (Fe.right, Fe.left, Fe.slice),
$e = (Fe.repeat, Fe.join),
We = Fe.split,
Xe = (Fe.foldr, Fe.foldl, Fe.reverse, Fe.filter, Fe.map, Fe.length, Fe.concat),
Ge = (Fe.append, Fe.uncons, Fe.cons, Fe.isEmpty, r(function(e, t, r) {
    for (;;) {
        var n = r;
        if ("RBEmpty_elm_builtin" === n.ctor) return t;
        var a = e,
        i = c(e, n._1, n._2, c(Ge, e, t, n._4));
        e = a, t = i, r = n._3
    }
})),
Ye = function(e) {
    return c(Ge, r(function(e, t, r) {
        return {
            ctor: "::",
            _0: {
                ctor: "_Tuple2",
                _0: e,
                _1: t
            },
            _1: r
        }
    }), {
        ctor: "[]"
    }, e)
},
Ke = r(function(e, t, r) {
    for (;;) {
        var n = r;
        if ("RBEmpty_elm_builtin" === n.ctor) return t;
        var a = e,
        i = c(e, n._1, n._2, c(Ke, e, t, n._3));
        e = a, t = i, r = n._4
    }
}),
Ze = i(function(e, n, a, i, f, o) {
    var u = r(function(t, r, i) {
        for (;;) {
            var f = i,
            o = f._1,
            u = f._0,
            s = u;
            if ("[]" === s.ctor) return {
                ctor: "_Tuple2",
                _0: u,
                _1: c(a, t, r, o)
            };
            var d = s._1,
            _ = s._0._1,
            m = s._0._0;
            if (!(p.cmp(m, t) < 0)) return p.cmp(m, t) > 0 ? {
                ctor: "_Tuple2",
                _0: u,
                _1: c(a, t, r, o)
            } : {
                ctor: "_Tuple2",
                _0: d,
                _1: l(n, m, _, r, o)
            };
            t = t, r = r, i = {
                ctor: "_Tuple2",
                _0: d,
                _1: c(e, m, _, o)
            }
        }
    }),
    s = c(Ke, u, {
        ctor: "_Tuple2",
        _0: Ye(i),
        _1: o
    }, f),
    d = s._0,
    _ = s._1;
    return c(Z, t(function(t, r) {
        var n = t;
        return c(e, n._0, n._1, r)
    }), _, d)
}),
et = n(function(e, t, r, n) {
    return Oe.crash(Xe({
        ctor: "::",
        _0: "Internal red-black tree invariant violated, expected ",
        _1: {
            ctor: "::",
            _0: e,
            _1: {
                ctor: "::",
                _0: " and got ",
                _1: {
                    ctor: "::",
                    _0: g(t),
                    _1: {
                        ctor: "::",
                        _0: "/",
                        _1: {
                            ctor: "::",
                            _0: r,
                            _1: {
                                ctor: "::",
                                _0: "/",
                                _1: {
                                    ctor: "::",
                                    _0: n,
                                    _1: {
                                        ctor: "::",
                                        _0: "\nPlease report this bug to <https://github.com/elm-lang/core/issues>",
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }))
}),
tt = function(e) {
    var t = e;
    e: do {
        if ("RBNode_elm_builtin" === t.ctor) {
            if ("BBlack" === t._0.ctor) return !0;
            break e
        }
        if ("LBBlack" === t._0.ctor) return !0;
        break e
    } while (0);
    return !1
},
rt = t(function(e, t) {
    for (;;) {
        var r = t;
        if ("RBEmpty_elm_builtin" === r.ctor) return e;
        e = u(rt, e + 1, r._4), t = r._3
    }
}),
nt = t(function(e, t) {
    e: for (;;) {
        var r = t;
        if ("RBEmpty_elm_builtin" === r.ctor) return Q;
        switch (u(w, e, r._1).ctor) {
            case "LT":
            e = e, t = r._3;
            continue e;
            case "EQ":
            return J(r._2);
            default:
            e = e, t = r._4;
            continue e
        }
    }
}),
at = t(function(e, t) {
    return "Just" === u(nt, e, t).ctor
}),
it = r(function(e, t, r) {
    for (;;) {
        var n = r;
        if ("RBEmpty_elm_builtin" === n.ctor) return {
            ctor: "_Tuple2",
            _0: e,
            _1: t
        };
        e = n._1, t = n._2, r = n._4
    }
}),
ft = {
    ctor: "NBlack"
},
ot = {
    ctor: "BBlack"
},
ut = {
    ctor: "Black"
},
ct = {
    ctor: "Red"
},
lt = function(e) {
    switch (e.ctor) {
        case "BBlack":
        return ut;
        case "Black":
        return ct;
        case "Red":
        return ft;
        default:
        return Oe.crash("Can't make a negative black node less black!")
    }
},
st = {
    ctor: "LBBlack"
},
dt = {
    ctor: "LBlack"
},
_t = function(e) {
    return {
        ctor: "RBEmpty_elm_builtin",
        _0: e
    }
},
pt = _t(dt),
mt = function(e) {
    return p.eq(e, pt)
},
bt = a(function(e, t, r, n, a) {
    return {
        ctor: "RBNode_elm_builtin",
        _0: e,
        _1: t,
        _2: r,
        _3: n,
        _4: a
    }
}),
gt = function(e) {
    var t = e;
    return "RBNode_elm_builtin" === t.ctor ? s(bt, lt(t._0), t._1, t._2, t._3, t._4) : _t(dt)
},
yt = function(e) {
    return function(t) {
        return function(r) {
            return function(n) {
                return function(a) {
                    return function(i) {
                        return function(f) {
                            return function(o) {
                                return function(u) {
                                    return function(c) {
                                        return function(l) {
                                            return s(bt, lt(e), n, a, s(bt, ut, t, r, o, u), s(bt, ut, i, f, c, l))
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
},
vt = function(e) {
    var t = e;
    return "RBEmpty_elm_builtin" === t.ctor ? Oe.crash("can't make a Leaf red") : s(bt, ct, t._1, t._2, t._3, t._4)
},
ht = a(function(e, t, r, n, a) {
    var i = s(bt, e, t, r, n, a);
    return function(e) {
        var t = e;
        if ("RBNode_elm_builtin" === t.ctor) {
            var r = t._0;
            return p.eq(r, ut) || p.eq(r, ot)
        }
        return !0
    }(i) ? function(e) {
        var t = e;
        e: do {
            t: do {
                r: do {
                    n: do {
                        a: do {
                            i: do {
                                f: do {
                                    if ("RBNode_elm_builtin" !== t.ctor) break e;
                                    if ("RBNode_elm_builtin" === t._3.ctor)
                                        if ("RBNode_elm_builtin" === t._4.ctor) switch (t._3._0.ctor) {
                                            case "Red":
                                            switch (t._4._0.ctor) {
                                                case "Red":
                                                if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor) break f;
                                                if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor) break i;
                                                if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor) break n;
                                                break e;
                                                case "NBlack":
                                                if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor) break f;
                                                if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor) break i;
                                                if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor) break r;
                                                break e;
                                                default:
                                                if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor) break f;
                                                if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor) break i;
                                                break e
                                            }
                                            case "NBlack":
                                            switch (t._4._0.ctor) {
                                                case "Red":
                                                if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor) break n;
                                                if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor) break t;
                                                break e;
                                                case "NBlack":
                                                if ("BBlack" === t._0.ctor) {
                                                    if ("RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor) break r;
                                                    if ("RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor) break t;
                                                    break e
                                                }
                                                break e;
                                                default:
                                                if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor) break t;
                                                break e
                                            }
                                            default:
                                            switch (t._4._0.ctor) {
                                                case "Red":
                                                if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor) break n;
                                                break e;
                                                case "NBlack":
                                                if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor) break r;
                                                break e;
                                                default:
                                                break e
                                            }
                                        } else switch (t._3._0.ctor) {
                                            case "Red":
                                            if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor) break f;
                                            if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor) break i;
                                            break e;
                                            case "NBlack":
                                            if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor) break t;
                                            break e;
                                            default:
                                            break e
                                        } else {
                                            if ("RBNode_elm_builtin" !== t._4.ctor) break e;
                                            switch (t._4._0.ctor) {
                                                case "Red":
                                                if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor) break n;
                                                break e;
                                                case "NBlack":
                                                if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor) break r;
                                                break e;
                                                default:
                                                break e
                                            }
                                        }
                                    } while (0);
                                    return yt(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4)
                                } while (0);
                                return yt(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4)
                            } while (0);
                            return yt(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4)
                        } while (0);
                        return yt(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4)
                    } while (0);
                    return s(bt, ut, t._4._3._1, t._4._3._2, s(bt, ut, t._1, t._2, t._3, t._4._3._3), s(ht, ut, t._4._1, t._4._2, t._4._3._4, vt(t._4._4)))
                } while (0);
                return s(bt, ut, t._3._4._1, t._3._4._2, s(ht, ut, t._3._1, t._3._2, vt(t._3._3), t._3._4._3), s(bt, ut, t._1, t._2, t._3._4._4, t._4))
            } while (0);
            return e
        }(i) : i
    }),
Tt = a(function(e, t, r, n, a) {
    return tt(n) || tt(a) ? s(ht, function(e) {
        switch (e.ctor) {
            case "Black":
            return ot;
            case "Red":
            return ut;
            case "NBlack":
            return ct;
            default:
            return Oe.crash("Can't make a double black node more black!")
        }
    }(e), t, r, gt(n), gt(a)) : s(bt, e, t, r, n, a)
}),
Dt = a(function(e, t, r, n, a) {
    var i = a;
    return "RBEmpty_elm_builtin" === i.ctor ? c(Bt, e, n, a) : s(Tt, e, t, r, n, s(Dt, i._0, i._1, i._2, i._3, i._4))
}),
Bt = r(function(e, t, r) {
    var n = {
        ctor: "_Tuple2",
        _0: t,
        _1: r
    };
    if ("RBEmpty_elm_builtin" !== n._0.ctor) {
        if ("RBEmpty_elm_builtin" === n._1.ctor) {
            var a = n._1._0,
            i = n._0._0,
            f = {
                ctor: "_Tuple3",
                _0: e,
                _1: i,
                _2: a
            };
            return "_Tuple3" === f.ctor && "Black" === f._0.ctor && "Red" === f._1.ctor && "LBlack" === f._2.ctor ? s(bt, ut, n._0._1, n._0._2, n._0._3, n._0._4) : l(et, "Black/Red/LBlack", e, g(i), g(a))
        }
        var o = n._0._2,
        u = n._0._4,
        d = n._0._1,
        _ = s(Dt, n._0._0, d, o, n._0._3, u),
        p = c(it, d, o, u),
        m = p._0,
        b = p._1;
        return s(Tt, e, m, b, _, r)
    }
    if ("RBEmpty_elm_builtin" !== n._1.ctor) {
        var y = n._1._0,
        v = n._0._0,
        h = {
            ctor: "_Tuple3",
            _0: e,
            _1: v,
            _2: y
        };
        return "_Tuple3" === h.ctor && "Black" === h._0.ctor && "LBlack" === h._1.ctor && "Red" === h._2.ctor ? s(bt, ut, n._1._1, n._1._2, n._1._3, n._1._4) : l(et, "Black/LBlack/Red", e, g(v), g(y))
    }
    switch (e.ctor) {
        case "Red":
        return _t(dt);
        case "Black":
        return _t(st);
        default:
        return Oe.crash("cannot have bblack or nblack nodes at this point")
    }
}),
wt = t(function(e, t) {
    var r = t;
    if ("RBEmpty_elm_builtin" === r.ctor) return _t(dt);
    var n = r._1;
    return s(bt, r._0, n, u(e, n, r._2), u(wt, e, r._3), u(wt, e, r._4))
}),
Vt = {
    ctor: "Same"
},
Pt = {
    ctor: "Remove"
},
Ct = {
    ctor: "Insert"
},
kt = r(function(e, t, r) {
    var n, a = function(r) {
        var n = r;
        if ("RBEmpty_elm_builtin" === n.ctor) {
            var i = t(Q);
            return "Nothing" === i.ctor ? {
                ctor: "_Tuple2",
                _0: Vt,
                _1: pt
            } : {
                ctor: "_Tuple2",
                _0: Ct,
                _1: s(bt, ct, e, i._0, pt, pt)
            }
        }
        var f = n._2,
        o = n._4,
        l = n._3,
        d = n._1,
        _ = n._0;
        switch (u(w, e, d).ctor) {
            case "EQ":
            var p = t(J(f));
            return "Nothing" === p.ctor ? {
                ctor: "_Tuple2",
                _0: Pt,
                _1: c(Bt, _, l, o)
            } : {
                ctor: "_Tuple2",
                _0: Vt,
                _1: s(bt, _, d, p._0, l, o)
            };
            case "LT":
            var m = a(l),
            b = m._0,
            g = m._1;
            switch (b.ctor) {
                case "Same":
                return {
                    ctor: "_Tuple2",
                    _0: Vt,
                    _1: s(bt, _, d, f, g, o)
                };
                case "Insert":
                return {
                    ctor: "_Tuple2",
                    _0: Ct,
                    _1: s(ht, _, d, f, g, o)
                };
                default:
                return {
                    ctor: "_Tuple2",
                    _0: Pt,
                    _1: s(Tt, _, d, f, g, o)
                }
            }
            default:
            var y = a(o),
            v = (b = y._0, y._1);
            switch (b.ctor) {
                case "Same":
                return {
                    ctor: "_Tuple2",
                    _0: Vt,
                    _1: s(bt, _, d, f, l, v)
                };
                case "Insert":
                return {
                    ctor: "_Tuple2",
                    _0: Ct,
                    _1: s(ht, _, d, f, l, v)
                };
                default:
                return {
                    ctor: "_Tuple2",
                    _0: Pt,
                    _1: s(Tt, _, d, f, l, v)
                }
            }
        }
    },
    i = a(r),
    f = i._0,
    o = i._1;
    switch (f.ctor) {
        case "Same":
        return o;
        case "Insert":
        return function(e) {
            var t = e;
            return "RBNode_elm_builtin" === t.ctor && "Red" === t._0.ctor ? s(bt, ut, t._1, t._2, t._3, t._4) : e
        }(o);
        default:
        return "RBEmpty_elm_builtin" === (n = o).ctor ? _t(dt) : s(bt, ut, n._1, n._2, n._3, n._4)
    }
}),
St = r(function(e, t, r) {
    return c(kt, e, m(J(t)), r)
}),
Lt = (t(function(e, t) {
    return c(St, e, t, pt)
}), t(function(e, t) {
    return c(Ke, St, t, e)
})),
Et = t(function(e, t) {
    var n = r(function(t, r, n) {
        return u(e, t, r) ? c(St, t, r, n) : n
    });
    return c(Ke, n, pt, t)
}),
xt = t(function(e, r) {
    return u(Et, t(function(e, t) {
        return u(at, e, r)
    }), e)
}),
It = t(function(e, t) {
    var n = r(function(t, r, n) {
        var a = n,
        i = a._1,
        f = a._0;
        return u(e, t, r) ? {
            ctor: "_Tuple2",
            _0: c(St, t, r, f),
            _1: i
        } : {
            ctor: "_Tuple2",
            _0: f,
            _1: c(St, t, r, i)
        }
    });
    return c(Ke, n, {
        ctor: "_Tuple2",
        _0: pt,
        _1: pt
    }, t)
}),
Rt = t(function(e, t) {
    return c(kt, e, m(Q), t)
}),
At = t(function(e, t) {
    return c(Ke, r(function(e, t, r) {
        return u(Rt, e, r)
    }), e, t)
}),
Nt = function() {
    return {
        now: I.nativeBinding(function(e) {
            e(I.succeed(Date.now()))
        }),
        setInterval_: t(function(e, t) {
            return I.nativeBinding(function(r) {
                var n = setInterval(function() {
                    I.rawSpawn(t)
                }, e);
                return function() {
                    clearInterval(n)
                }
            })
        })
    }
}(),
qt = Nt.setInterval_,
Mt = r(function(e, t, r) {
    var n = t;
    if ("[]" === n.ctor) return ke(r);
    var a = n._0,
    i = I.spawn(u(qt, a, u(z, e, a)));
    return u(Ve, function(t) {
        return c(Mt, e, n._1, c(St, a, t, r))
    }, i)
}),
Ot = t(function(e, t) {
    var r = e,
    n = r._1,
    a = r._0,
    i = u(nt, a, t);
    return "Nothing" === i.ctor ? c(St, a, {
        ctor: "::",
        _0: n,
        _1: {
            ctor: "[]"
        }
    }, t) : c(St, a, {
        ctor: "::",
        _0: n,
        _1: i._0
    }, t)
}),
Ft = Nt.now,
zt = r(function(e, t, r) {
    var n = u(nt, t, r.taggers);
    if ("Nothing" === n.ctor) return ke(r);
    return u(Ve, function(e) {
        return ke(r)
    }, u(Ve, function(t) {
        return Ee(u(ie, function(r) {
            return u(U, e, r(t))
        }, n._0))
    }, Ft))
}),
Ut = R.leaf("Time"),
Ht = t(function(e, t) {
    return {
        taggers: e,
        processes: t
    }
}),
Qt = ke(u(Ht, pt, pt)),
Jt = r(function(e, t, a) {
    var i, f, o, l, s, d, _, p = a,
    m = r(function(e, t, r) {
        var n = r;
        return {
            ctor: "_Tuple3",
            _0: n._0,
            _1: n._1,
            _2: u(Ve, function(e) {
                return n._2
            }, I.kill(t))
        }
    }),
    b = n(function(e, t, r, n) {
        var a = n;
        return {
            ctor: "_Tuple3",
            _0: a._0,
            _1: c(St, e, r, a._1),
            _2: a._2
        }
    }),
    g = r(function(e, t, r) {
        var n = r;
        return {
            ctor: "_Tuple3",
            _0: {
                ctor: "::",
                _0: e,
                _1: n._0
            },
            _1: n._1,
            _2: n._2
        }
    }),
    y = c(Z, Ot, pt, t),
    v = (i = Ze, f = g, o = b, l = m, s = y, d = p.processes, _ = {
        ctor: "_Tuple3",
        _0: {
            ctor: "[]"
        },
        _1: pt,
        _2: ke({
            ctor: "_Tuple0"
        })
    }, 6 === i.arity ? i.func(f, o, l, s, d, _) : i(f)(o)(l)(s)(d)(_)),
    h = v._0,
    T = v._1,
    D = v._2;
    return u(Ve, function(e) {
        return ke(u(Ht, y, e))
    }, u(Ve, function(t) {
        return c(Mt, e, h, T)
    }, D))
}),
jt = t(function(e, t) {
    return {
        ctor: "Every",
        _0: e,
        _1: t
    }
}),
$t = t(function(e, t) {
    return Ut(u(jt, e, t))
}),
Wt = t(function(e, t) {
    var r = t;
    return u(jt, r._0, function(t) {
        return e(r._1(t))
    })
});
R.effectManagers.Time = {
    pkg: "elm-lang/core",
    init: Qt,
    onEffects: Jt,
    onSelfMsg: zt,
    tag: "sub",
    subMap: Wt
};
var Xt = I.kill,
Gt = (I.sleep, I.spawn),
Yt = (Oe.crash, Oe.log),
Kt = (t(function(e, t) {
    var r = t;
    return {
        ctor: "_Tuple2",
        _0: r._0,
        _1: e(r._1)
    }
}), t(function(e, t) {
    var r = t;
    return {
        ctor: "_Tuple2",
        _0: e(r._0),
        _1: r._1
    }
}), function(e) {
    return e._1
}),
Zt = function(e) {
    return e._0
},
er = d.create({
    ctor: "_Tuple0"
}),
tr = R.leaf("AnimationFrame"),
rr = r(function(e, t, r) {
    return {
        subs: e,
        request: t,
        oldTime: r
    }
}),
nr = ke(c(rr, {
    ctor: "[]"
}, Q, 0)),
ar = r(function(e, t, r) {
    var n = r,
    a = n.request,
    i = n.oldTime,
    f = {
        ctor: "_Tuple2",
        _0: a,
        _1: t
    };
    return "Nothing" === f._0.ctor ? "[]" === f._1.ctor ? ke(c(rr, {
        ctor: "[]"
    }, Q, i)) : u(Ve, function(e) {
        return u(Ve, function(r) {
            return ke(c(rr, t, J(e), r))
        }, Ft)
    }, Gt(u(Ve, z(e), er))) : "[]" === f._1.ctor ? u(Ve, function(e) {
        return ke(c(rr, {
            ctor: "[]"
        }, Q, i))
    }, Xt(f._0._0)) : ke(c(rr, t, a, i))
}),
ir = r(function(e, t, r) {
    var n = r,
    a = n.subs,
    i = t - n.oldTime,
    f = function(r) {
        var n = r;
        return "Time" === n.ctor ? u(U, e, n._0(t)) : u(U, e, n._0(i))
    };
    return u(Ve, function(e) {
        return u(Ve, function(r) {
            return ke(c(rr, a, J(e), t))
        }, Ee(u(ie, f, a)))
    }, Gt(u(Ve, z(e), er)))
}),
fr = function(e) {
    return {
        ctor: "Diff",
        _0: e
    }
},
or = function(e) {
    return {
        ctor: "Time",
        _0: e
    }
},
ur = t(function(e, t) {
    var r = t;
    return "Time" === r.ctor ? or(function(t) {
        return e(r._0(t))
    }) : fr(function(t) {
        return e(r._0(t))
    })
});
R.effectManagers.AnimationFrame = {
    pkg: "elm-lang/animation-frame",
    init: nr,
    onEffects: ar,
    onSelfMsg: ir,
    tag: "sub",
    subMap: ur
};
var cr, lr, sr, dr, _r, pr, mr, br, gr, yr, vr, hr, Tr = function() {
    var e = 32,
    n = 2,
    a = {
        ctor: "_Array",
        height: 0,
        table: []
    };

    function i(t, r) {
        var n = t.height;
        if (r.length === n) {
            var a = {
                ctor: "_Array",
                height: n + 1,
                table: [],
                lengths: []
            };
            r.push(a)
        }
        r[n].table.push(t);
        var f = y(t);
        r[n].lengths.length > 0 && (f += r[n].lengths[r[n].lengths.length - 1]), r[n].lengths.push(f), r[n].table.length === e && (i(r[n], r), r[n] = {
            ctor: "_Array",
            height: n + 1,
            table: [],
            lengths: []
        })
    }

    function f(e, t) {
        var r = e.table.length - 1;
        e.table[r] = t, e.lengths[r] = y(t), e.lengths[r] += r > 0 ? e.lengths[r - 1] : 0
    }

    function o(e, t) {
        if (t.table.length > 0) {
            e.table[0] = t, e.lengths[0] = y(t);
            for (var r = y(e.table[0]), n = 1; n < e.lengths.length; n++) r += y(e.table[n]), e.lengths[n] = r
        } else {
            e.table.shift();
            for (n = 1; n < e.lengths.length; n++) e.lengths[n] = e.lengths[n] - e.lengths[0];
                e.lengths.shift()
        }
    }

    function c(t, r) {
        for (var n = 0, a = 0; a < t.table.length; a++) n += t.table[a].table.length;
            for (a = 0; a < r.table.length; a++) n += r.table[a].table.length;
                return t.table.length + r.table.length - (Math.floor((n - 1) / e) + 1)
        }

        function l(e, t, r) {
            return r < e.length ? e[r] : t[r - e.length]
        }

        function s(e, t, r, n) {
            r < e.length ? e[r] = n : t[r - e.length] = n
        }

        function d(e, t, r, n) {
            s(e.table, t.table, r, n);
            var a = 0 === r || r === e.lengths.length ? 0 : l(e.lengths, e.lengths, r - 1);
            s(e.lengths, t.lengths, r, a + y(n))
        }

        function _(e, t) {
            t < 0 && (t = 0);
            var r = {
                ctor: "_Array",
                height: e,
                table: new Array(t)
            };
            return e > 0 && (r.lengths = new Array(t)), r
        }

        function p(t, r, n) {
            for (var a = _(t.height, Math.min(e, t.table.length + r.table.length - n)), i = _(t.height, a.table.length - (t.table.length + r.table.length - n)), f = 0; l(t.table, r.table, f).table.length % e == 0;) s(a.table, i.table, f, l(t.table, r.table, f)), s(a.lengths, i.lengths, f, l(t.lengths, r.lengths, f)), f++;
                for (var o = f, u = new _(t.height - 1, 0), c = 0; f - o - (u.table.length > 0 ? 1 : 0) < n;) {
                    var p = l(t.table, r.table, f),
                    m = Math.min(e - u.table.length, p.table.length);
                    if (u.table = u.table.concat(p.table.slice(c, m)), u.height > 0)
                        for (var b = u.lengths.length, g = b; g < b + m - c; g++) u.lengths[g] = y(u.table[g]), u.lengths[g] += g > 0 ? u.lengths[g - 1] : 0;
                            c += m, p.table.length <= m && (f++, c = 0), u.table.length === e && (d(a, i, o, u), u = _(t.height - 1, 0), o++)
                    }
                    for (u.table.length > 0 && (d(a, i, o, u), o++); f < t.table.length + r.table.length;) d(a, i, o, l(t.table, r.table, f)), f++, o++;
                        return [a, i]
                }

                function m(e) {
                    return e.table[e.table.length - 1]
                }

                function b(e) {
                    return e.table[0]
                }

                function g(e) {
                    var t = {
                        ctor: "_Array",
                        height: e.height,
                        table: e.table.slice()
                    };
                    return e.height > 0 && (t.lengths = e.lengths.slice()), t
                }

                function y(e) {
                    return 0 === e.height ? e.table.length : e.lengths[e.lengths.length - 1]
                }

                function v(e, t) {
                    for (var r = e >> 5 * t.height; t.lengths[r] <= e;) r++;
                        return r
                }

                function h(e, t) {
                    return 0 === t ? {
                        ctor: "_Array",
                        height: 0,
                        table: [e]
                    } : {
                        ctor: "_Array",
                        height: t,
                        table: [h(e, t - 1)],
                        lengths: [1]
                    }
                }

                function T(e, t) {
                    return t === e.height ? e : {
                        ctor: "_Array",
                        height: t,
                        table: [T(e, t - 1)],
                        lengths: [y(e)]
                    }
                }

                function D(e, t) {
                    return {
                        ctor: "_Array",
                        height: e.height + 1,
                        table: [e, t],
                        lengths: [y(e), y(e) + y(t)]
                    }
                }
                return {
                    empty: a,
                    fromList: function(t) {
                        if ("[]" === t.ctor) return a;
                        for (var r = new Array(e), n = [], f = 0;
                            "[]" !== t.ctor;) r[f] = t._0, t = t._1, ++f === e && (i({
                                ctor: "_Array",
                                height: 0,
                                table: r
                            }, n), r = new Array(e), f = 0);
                            f > 0 && i({
                                ctor: "_Array",
                                height: 0,
                                table: r.splice(0, f)
                            }, n);
                            for (var o = 0; o < n.length - 1; o++) n[o].table.length > 0 && i(n[o], n);
                                var u = n[n.length - 1];
                            return u.height > 0 && 1 === u.table.length ? u.table[0] : u
                        },
                        toList: function(e) {
                            return function e(t, r) {
                                for (var n = r.table.length - 1; n >= 0; n--) t = 0 === r.height ? j.Cons(r.table[n], t) : e(t, r.table[n]);
                                    return t
                            }(j.Nil, e)
                        },
                        initialize: t(function(t, r) {
                            return t <= 0 ? a : function t(r, n, a, i) {
                                if (0 === n) {
                                    for (var f = new Array((i - a) % (e + 1)), o = 0; o < f.length; o++) f[o] = r(a + o);
                                        return {
                                            ctor: "_Array",
                                            height: 0,
                                            table: f
                                        }
                                    }
                                    for (var u = Math.pow(e, n), f = new Array(Math.ceil((i - a) / u)), c = new Array(f.length), o = 0; o < f.length; o++) f[o] = t(r, n - 1, a + o * u, Math.min(a + (o + 1) * u, i)), c[o] = y(f[o]) + (o > 0 ? c[o - 1] : 0);
                                        return {
                                            ctor: "_Array",
                                            height: n,
                                            table: f,
                                            lengths: c
                                        }
                                    }(r, Math.floor(Math.log(t) / Math.log(e)), 0, t)
                                }),
                        append: t(function(t, r) {
                            if (0 === t.table.length) return r;
                            if (0 === r.table.length) return t;
                            var a = function e(t, r) {
                                if (0 === t.height && 0 === r.height) return [t, r];
                                if (1 !== t.height || 1 !== r.height)
                                    if (t.height === r.height) {
                                        t = g(t), r = g(r);
                                        var a = e(m(t), b(r));
                                        f(t, a[1]), o(r, a[0])
                                    } else if (t.height > r.height) {
                                        t = g(t);
                                        var a = e(m(t), r);
                                        f(t, a[0]), r = T(a[1], a[1].height + 1)
                                    } else {
                                        r = g(r);
                                        var a = e(t, b(r)),
                                        i = 0 === a[0].table.length ? 0 : 1,
                                        u = 0 === i ? 1 : 0;
                                        o(r, a[i]), t = T(a[u], a[u].height + 1)
                                    }
                                    if (0 === t.table.length || 0 === r.table.length) return [t, r];
                                    var l = c(t, r);
                                    return l <= n ? [t, r] : p(t, r, l)
                                }(t, r);
                                if (a[0].table.length + a[1].table.length <= e) {
                                    if (0 === a[0].table.length) return a[1];
                                    if (0 === a[1].table.length) return a[0];
                                    if (a[0].table = a[0].table.concat(a[1].table), a[0].height > 0) {
                                        for (var i = y(a[0]), u = 0; u < a[1].lengths.length; u++) a[1].lengths[u] += i;
                                            a[0].lengths = a[0].lengths.concat(a[1].lengths)
                                    }
                                    return a[0]
                                }
                                if (a[0].height > 0) {
                                    var l = c(t, r);
                                    l > n && (a = p(a[0], a[1], l))
                                }
                                return D(a[0], a[1])
                            }),
                        push: t(function(t, r) {
                            var n = function t(r, n) {
                                if (0 === n.height) {
                                    if (n.table.length < e) {
                                        var a = {
                                            ctor: "_Array",
                                            height: 0,
                                            table: n.table.slice()
                                        };
                                        return a.table.push(r), a
                                    }
                                    return null
                                }
                                var i = t(r, m(n));
                                if (null !== i) {
                                    var a = g(n);
                                    return a.table[a.table.length - 1] = i, a.lengths[a.lengths.length - 1]++, a
                                }
                                if (n.table.length < e) {
                                    var f = h(r, n.height - 1),
                                    a = g(n);
                                    return a.table.push(f), a.lengths.push(a.lengths[a.lengths.length - 1] + y(f)), a
                                }
                                return null
                            }(t, r);
                            return null !== n ? n : D(r, h(t, r.height))
                        }),
                        slice: r(function(e, t, r) {
                            return e < 0 && (e += y(r)), t < 0 && (t += y(r)),
                            function e(t, r) {
                                if (0 === t) return r;
                                if (0 === r.height) {
                                    var n = {
                                        ctor: "_Array",
                                        height: 0
                                    };
                                    return n.table = r.table.slice(t, r.table.length + 1), n
                                }
                                var a = v(t, r),
                                i = e(t - (a > 0 ? r.lengths[a - 1] : 0), r.table[a]);
                                if (a === r.table.length - 1) return i;
                                var n = {
                                    ctor: "_Array",
                                    height: r.height,
                                    table: r.table.slice(a, r.table.length + 1),
                                    lengths: new Array(r.table.length - a)
                                };
                                n.table[0] = i;
                                for (var f = 0, o = 0; o < n.table.length; o++) f += y(n.table[o]), n.lengths[o] = f;
                                    return n
                            }(e, function e(t, r) {
                                if (t === y(r)) return r;
                                if (0 === r.height) {
                                    var n = {
                                        ctor: "_Array",
                                        height: 0
                                    };
                                    return n.table = r.table.slice(0, t), n
                                }
                                var a = v(t, r),
                                i = e(t - (a > 0 ? r.lengths[a - 1] : 0), r.table[a]);
                                if (0 === a) return i;
                                var n = {
                                    ctor: "_Array",
                                    height: r.height,
                                    table: r.table.slice(0, a),
                                    lengths: r.lengths.slice(0, a)
                                };
                                return i.table.length > 0 && (n.table[a] = i, n.lengths[a] = y(i) + (a > 0 ? n.lengths[a - 1] : 0)), n
                            }(t, r))
                        }),
                        get: t(function(e, t) {
                            if (e < 0 || e >= y(t)) throw new Error("Index " + e + " is out of range. Check the length of your array first or use getMaybe or getWithDefault.");
                            return function(e, t) {
                                for (var r = t.height; r > 0; r--) {
                                    for (var n = e >> 5 * r; t.lengths[n] <= e;) n++;
                                        n > 0 && (e -= t.lengths[n - 1]), t = t.table[n]
                                }
                                return t.table[e]
                            }(e, t)
                        }),
                        set: r(function(e, t, r) {
                            return e < 0 || y(r) <= e ? r : function e(t, r, n) {
                                if (0 === (n = g(n)).height) n.table[t] = r;
                                else {
                                    var a = v(t, n);
                                    a > 0 && (t -= n.lengths[a - 1]), n.table[a] = e(t, r, n.table[a])
                                }
                                return n
                            }(e, t, r)
                        }),
                        map: t(function e(t, r) {
                            var n = {
                                ctor: "_Array",
                                height: r.height,
                                table: new Array(r.table.length)
                            };
                            r.height > 0 && (n.lengths = r.lengths);
                            for (var a = 0; a < r.table.length; a++) n.table[a] = 0 === r.height ? t(r.table[a]) : e(t, r.table[a]);
                                return n
                        }),
                        indexedMap: t(function(e, t) {
                            return function e(t, r, n) {
                                var a = {
                                    ctor: "_Array",
                                    height: r.height,
                                    table: new Array(r.table.length)
                                };
                                r.height > 0 && (a.lengths = r.lengths);
                                for (var i = 0; i < r.table.length; i++) a.table[i] = 0 === r.height ? u(t, n + i, r.table[i]) : e(t, r.table[i], 0 == i ? n : n + r.lengths[i - 1]);
                                    return a
                            }(e, t, 0)
                        }),
                        foldl: r(function e(t, r, n) {
                            if (0 === n.height)
                                for (var a = 0; a < n.table.length; a++) r = u(t, n.table[a], r);
                                    else
                                        for (a = 0; a < n.table.length; a++) r = e(t, r, n.table[a]);
                                            return r
                                    }),
                        foldr: r(function e(t, r, n) {
                            if (0 === n.height)
                                for (var a = n.table.length; a--;) r = u(t, n.table[a], r);
                                    else
                                        for (a = n.table.length; a--;) r = e(t, r, n.table[a]);
                                            return r
                                    }),
                        length: y,
                        toJSArray: function(e) {
                            var t = new Array(y(e));
                            return function e(t, r, n) {
                                for (var a = 0; a < n.table.length; a++)
                                    if (0 === n.height) t[r + a] = n.table[a];
                                else {
                                    var i = 0 === a ? 0 : n.lengths[a - 1];
                                    e(t, r + i, n.table[a])
                                }
                            }(t, 0, e), t
                        },
                        fromJSArray: function(t) {
                            return 0 === t.length ? a : function t(r, n, a, i) {
                                if (0 === n) return {
                                    ctor: "_Array",
                                    height: 0,
                                    table: r.slice(a, i)
                                };
                                for (var f = Math.pow(e, n), o = new Array(Math.ceil((i - a) / f)), u = new Array(o.length), c = 0; c < o.length; c++) o[c] = t(r, n - 1, a + c * f, Math.min(a + (c + 1) * f, i)), u[c] = y(o[c]) + (c > 0 ? u[c - 1] : 0);
                                    return {
                                        ctor: "_Array",
                                        height: n,
                                        table: o,
                                        lengths: u
                                    }
                                }(t, Math.floor(Math.log(t.length) / Math.log(e)), 0, t.length)
                            }
                        }
                    }(),
                    Dr = (Tr.append, Tr.length, Tr.slice, Tr.set, t(function(e, t) {
                        return p.cmp(0, e) < 1 && p.cmp(e, Tr.length(t)) < 0 ? J(u(Tr.get, e, t)) : Q
                    }), Tr.push, Tr.empty, t(function(e, r) {
                        var n = t(function(t, r) {
                            return e(t) ? u(Tr.push, t, r) : r
                        });
                        return c(Tr.foldl, n, Tr.empty, r)
                    }), Tr.foldr, Tr.foldl, Tr.indexedMap, Tr.map, Tr.toList),
                    Br = (Tr.fromList, Tr.initialize),
                    wr = (t(function(e, t) {
                        return u(Br, e, m(t))
                    }), t(function(e, t) {
                        var r = v(e);
                        return y(u(S["%"], r, t)) + e - y(r)
                    })),
                    Vr = (r(function(e, t, r) {
                        var n = y(r) / 255,
                        a = y(t) / 255,
                        i = y(e) / 255,
                        f = u(D, u(D, i, a), n),
                        o = u(B, u(B, i, a), n),
                        c = f - o,
                        l = (f + o) / 2,
                        s = p.eq(l, 0) ? 0 : c / (1 - P(2 * l - 1));
                        return {
                            ctor: "_Tuple3",
                            _0: x(60) * (p.eq(f, i) ? u(wr, (a - n) / c, 6) : p.eq(f, a) ? (n - i) / c + 2 : (i - a) / c + 4),
                            _1: s,
                            _2: l
                        }
                    }), r(function(e, t, r) {
                        var n = e / x(60),
                        a = (1 - P(2 * r - 1)) * t,
                        i = a * (1 - P(u(wr, n, 2) - 1)),
                        f = p.cmp(n, 0) < 0 ? {
                            ctor: "_Tuple3",
                            _0: 0,
                            _1: 0,
                            _2: 0
                        } : p.cmp(n, 1) < 0 ? {
                            ctor: "_Tuple3",
                            _0: a,
                            _1: i,
                            _2: 0
                        } : p.cmp(n, 2) < 0 ? {
                            ctor: "_Tuple3",
                            _0: i,
                            _1: a,
                            _2: 0
                        } : p.cmp(n, 3) < 0 ? {
                            ctor: "_Tuple3",
                            _0: 0,
                            _1: a,
                            _2: i
                        } : p.cmp(n, 4) < 0 ? {
                            ctor: "_Tuple3",
                            _0: 0,
                            _1: i,
                            _2: a
                        } : p.cmp(n, 5) < 0 ? {
                            ctor: "_Tuple3",
                            _0: i,
                            _1: 0,
                            _2: a
                        } : p.cmp(n, 6) < 0 ? {
                            ctor: "_Tuple3",
                            _0: a,
                            _1: 0,
                            _2: i
                        } : {
                            ctor: "_Tuple3",
                            _0: 0,
                            _1: 0,
                            _2: 0
                        },
                        o = r - a / 2;
                        return {
                            ctor: "_Tuple3",
                            _0: f._0 + o,
                            _1: f._1 + o,
                            _2: f._2 + o
                        }
                    })),
                    Pr = function(e) {
                        var t = e;
                        if ("RGBA" === t.ctor) return {
                            red: t._0,
                            green: t._1,
                            blue: t._2,
                            alpha: t._3
                        };
                        var r = c(Vr, t._0, t._1, t._2),
                        n = r._0,
                        a = r._1,
                        i = r._2;
                        return {
                            red: T(255 * n),
                            green: T(255 * a),
                            blue: T(255 * i),
                            alpha: t._3
                        }
                    },
                    Cr = n(function(e, t, r, n) {
                        return {
                            ctor: "HSLA",
                            _0: e,
                            _1: t,
                            _2: r,
                            _3: n
                        }
                    }),
                    kr = n(function(e, t, r, n) {
                        return l(Cr, e - E(y(v(e / (2 * V)))), t, r, n)
                    }),
                    Sr = (r(function(e, t, r) {
                        return l(kr, e, t, r, 1)
                    }), n(function(e, t, r, n) {
                        return {
                            ctor: "RGBA",
                            _0: e,
                            _1: t,
                            _2: r,
                            _3: n
                        }
                    })),
                    Lr = (r(function(e, t, r) {
                        return l(Sr, e, t, r, 1)
                    }), l(Sr, 239, 41, 41, 1), l(Sr, 204, 0, 0, 1), l(Sr, 164, 0, 0, 1), l(Sr, 252, 175, 62, 1), l(Sr, 245, 121, 0, 1), l(Sr, 206, 92, 0, 1), l(Sr, 255, 233, 79, 1), l(Sr, 237, 212, 0, 1), l(Sr, 196, 160, 0, 1), l(Sr, 138, 226, 52, 1), l(Sr, 115, 210, 22, 1), l(Sr, 78, 154, 6, 1), l(Sr, 114, 159, 207, 1), l(Sr, 52, 101, 164, 1), l(Sr, 32, 74, 135, 1), l(Sr, 173, 127, 168, 1), l(Sr, 117, 80, 123, 1), l(Sr, 92, 53, 102, 1), l(Sr, 233, 185, 110, 1), l(Sr, 193, 125, 17, 1), l(Sr, 143, 89, 2, 1), l(Sr, 0, 0, 0, 1), l(Sr, 255, 255, 255, 1), l(Sr, 238, 238, 236, 1), l(Sr, 211, 215, 207, 1), l(Sr, 186, 189, 182, 1), l(Sr, 238, 238, 236, 1), l(Sr, 211, 215, 207, 1), l(Sr, 186, 189, 182, 1), l(Sr, 136, 138, 133, 1), l(Sr, 85, 87, 83, 1), l(Sr, 46, 52, 54, 1), a(function(e, t, r, n, a) {
                        return {
                            ctor: "Radial",
                            _0: e,
                            _1: t,
                            _2: r,
                            _3: n,
                            _4: a
                        }
                    }), r(function(e, t, r) {
                        return {
                            ctor: "Linear",
                            _0: e,
                            _1: t,
                            _2: r
                        }
                    }), function() {
                        function e(e, t) {
                            return {
                                ctor: "<decoder>",
                                tag: "map-many",
                                func: e,
                                decoders: t
                            }
                        }

                        function u(e) {
                            return {
                                tag: "ok",
                                value: e
                            }
                        }

                        function c(e, t) {
                            return {
                                tag: "primitive",
                                type: e,
                                value: t
                            }
                        }

                        function l(e, t) {
                            return {
                                tag: "index",
                                index: e,
                                rest: t
                            }
                        }

                        function s(e, t) {
                            return {
                                tag: "field",
                                field: e,
                                rest: t
                            }
                        }

                        function l(e, t) {
                            return {
                                tag: "index",
                                index: e,
                                rest: t
                            }
                        }

                        function d(e, t) {
                            var r = function e(t, r) {
                                switch (t.tag) {
                                    case "bool":
                                    return "boolean" == typeof r ? u(r) : c("a Bool", r);
                                    case "int":
                                    return "number" != typeof r ? c("an Int", r) : -2147483647 < r && r < 2147483647 && (0 | r) === r ? u(r) : !isFinite(r) || r % 1 ? c("an Int", r) : u(r);
                                    case "float":
                                    return "number" == typeof r ? u(r) : c("a Float", r);
                                    case "string":
                                    return "string" == typeof r ? u(r) : r instanceof String ? u(r + "") : c("a String", r);
                                    case "null":
                                    return null === r ? u(t.value) : c("null", r);
                                    case "value":
                                    return u(r);
                                    case "list":
                                    if (!(r instanceof Array)) return c("a List", r);
                                    for (var n = j.Nil, a = r.length; a--;) {
                                        var i = e(t.decoder, r[a]);
                                        if ("ok" !== i.tag) return l(a, i);
                                        n = j.Cons(i.value, n)
                                    }
                                    return u(n);
                                    case "array":
                                    if (!(r instanceof Array)) return c("an Array", r);
                                    for (var f = r.length, o = new Array(f), a = f; a--;) {
                                        var i = e(t.decoder, r[a]);
                                        if ("ok" !== i.tag) return l(a, i);
                                        o[a] = i.value
                                    }
                                    return u(Tr.fromJSArray(o));
                                    case "maybe":
                                    var i = e(t.decoder, r);
                                    return "ok" === i.tag ? u(J(i.value)) : u(Q);
                                    case "field":
                                    var d = t.field;
                                    if ("object" != typeof r || null === r || !(d in r)) return c("an object with a field named `" + d + "`", r);
                                    var i = e(t.decoder, r[d]);
                                    return "ok" === i.tag ? i : s(d, i);
                                    case "index":
                                    var _ = t.index;
                                    if (!(r instanceof Array)) return c("an array", r);
                                    if (_ >= r.length) return c("a longer array. Need index " + _ + " but there are only " + r.length + " entries", r);
                                    var i = e(t.decoder, r[_]);
                                    return "ok" === i.tag ? i : l(_, i);
                                    case "key-value":
                                    if ("object" != typeof r || null === r || r instanceof Array) return c("an object", r);
                                    var m = j.Nil;
                                    for (var b in r) {
                                        var i = e(t.decoder, r[b]);
                                        if ("ok" !== i.tag) return s(b, i);
                                        var g = p.Tuple2(b, i.value);
                                        m = j.Cons(g, m)
                                    }
                                    return u(m);
                                    case "map-many":
                                    for (var y = t.func, v = t.decoders, a = 0; a < v.length; a++) {
                                        var i = e(v[a], r);
                                        if ("ok" !== i.tag) return i;
                                        y = y(i.value)
                                    }
                                    return u(y);
                                    case "andThen":
                                    var i = e(t.decoder, r);
                                    return "ok" !== i.tag ? i : e(t.callback(i.value), r);
                                    case "oneOf":
                                    for (var h = [], T = t.decoders;
                                        "[]" !== T.ctor;) {
                                        var i = e(T._0, r);
                                    if ("ok" === i.tag) return i;
                                    h.push(i), T = T._1
                                }
                                return {
                                    tag: "oneOf",
                                    problems: h
                                };
                                case "fail":
                                return {
                                    tag: "fail",
                                    msg: t.msg
                                };
                                case "succeed":
                                return u(t.msg)
                            }
                        }(e, t);
                        return "ok" === r.tag ? Be(r.value) : De(function e(t) {
                            for (var r, n = "_"; t;) switch (t.tag) {
                                case "primitive":
                                return "Expecting " + t.type + ("_" === n ? "" : " at " + n) + " but instead got: " + (void 0 === (r = t.value) ? "undefined" : JSON.stringify(r));
                                case "index":
                                n += "[" + t.index + "]", t = t.rest;
                                break;
                                case "field":
                                n += "." + t.field, t = t.rest;
                                break;
                                case "oneOf":
                                for (var a = t.problems, i = 0; i < a.length; i++) a[i] = e(a[i]);
                                    return "I ran into the following problems" + ("_" === n ? "" : " at " + n) + ":\n\n" + a.join("\n");
                                case "fail":
                                return "I ran into a `fail` decoder" + ("_" === n ? "" : " at " + n) + ": " + t.msg
                            }
                        }(r))
                    }

                    function _(e, t) {
                        if (e === t) return !0;
                        if (e.tag !== t.tag) return !1;
                        switch (e.tag) {
                            case "succeed":
                            case "fail":
                            return e.msg === t.msg;
                            case "bool":
                            case "int":
                            case "float":
                            case "string":
                            case "value":
                            return !0;
                            case "null":
                            return e.value === t.value;
                            case "list":
                            case "array":
                            case "maybe":
                            case "key-value":
                            return _(e.decoder, t.decoder);
                            case "field":
                            return e.field === t.field && _(e.decoder, t.decoder);
                            case "index":
                            return e.index === t.index && _(e.decoder, t.decoder);
                            case "map-many":
                            return e.func === t.func && m(e.decoders, t.decoders);
                            case "andThen":
                            return e.callback === t.callback && _(e.decoder, t.decoder);
                            case "oneOf":
                            return m(e.decoders, t.decoders)
                        }
                    }

                    function m(e, t) {
                        var r = e.length;
                        if (r !== t.length) return !1;
                        for (var n = 0; n < r; n++)
                            if (!_(e[n], t[n])) return !1;
                        return !0
                    }
                    return {
                        encode: t(function(e, t) {
                            return JSON.stringify(t, null, e)
                        }),
                        runOnString: t(function(e, t) {
                            var r;
                            try {
                                r = JSON.parse(t)
                            } catch (e) {
                                return De("Given an invalid JSON: " + e.message)
                            }
                            return d(e, r)
                        }),
                        run: t(d),
                        decodeNull: function(e) {
                            return {
                                ctor: "<decoder>",
                                tag: "null",
                                value: e
                            }
                        },
                        decodePrimitive: function(e) {
                            return {
                                ctor: "<decoder>",
                                tag: e
                            }
                        },
                        decodeContainer: t(function(e, t) {
                            return {
                                ctor: "<decoder>",
                                tag: e,
                                decoder: t
                            }
                        }),
                        decodeField: t(function(e, t) {
                            return {
                                ctor: "<decoder>",
                                tag: "field",
                                field: e,
                                decoder: t
                            }
                        }),
                        decodeIndex: t(function(e, t) {
                            return {
                                ctor: "<decoder>",
                                tag: "index",
                                index: e,
                                decoder: t
                            }
                        }),
                        map1: t(function(t, r) {
                            return e(t, [r])
                        }),
                        map2: r(function(t, r, n) {
                            return e(t, [r, n])
                        }),
                        map3: n(function(t, r, n, a) {
                            return e(t, [r, n, a])
                        }),
                        map4: a(function(t, r, n, a, i) {
                            return e(t, [r, n, a, i])
                        }),
                        map5: i(function(t, r, n, a, i, f) {
                            return e(t, [r, n, a, i, f])
                        }),
                        map6: f(function(t, r, n, a, i, f, o) {
                            return e(t, [r, n, a, i, f, o])
                        }),
                        map7: o(function(t, r, n, a, i, f, o, u) {
                            return e(t, [r, n, a, i, f, o, u])
                        }),
                        map8: function(e) {
                            function t(t) {
                                return function(r) {
                                    return function(n) {
                                        return function(a) {
                                            return function(i) {
                                                return function(f) {
                                                    return function(o) {
                                                        return function(u) {
                                                            return function(c) {
                                                                return e(t, r, n, a, i, f, o, u, c)
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return t.arity = 9, t.func = e, t
                        }(function(t, r, n, a, i, f, o, u, c) {
                            return e(t, [r, n, a, i, f, o, u, c])
                        }),
                        decodeKeyValuePairs: function(e) {
                            return {
                                ctor: "<decoder>",
                                tag: "key-value",
                                decoder: e
                            }
                        },
                        andThen: t(function(e, t) {
                            return {
                                ctor: "<decoder>",
                                tag: "andThen",
                                decoder: t,
                                callback: e
                            }
                        }),
                        fail: function(e) {
                            return {
                                ctor: "<decoder>",
                                tag: "fail",
                                msg: e
                            }
                        },
                        succeed: function(e) {
                            return {
                                ctor: "<decoder>",
                                tag: "succeed",
                                msg: e
                            }
                        },
                        oneOf: function(e) {
                            return {
                                ctor: "<decoder>",
                                tag: "oneOf",
                                decoders: e
                            }
                        },
                        identity: function(e) {
                            return e
                        },
                        encodeNull: null,
                        encodeArray: Tr.toJSArray,
                        encodeList: j.toArray,
                        encodeObject: function(e) {
                            for (var t = {};
                                "[]" !== e.ctor;) {
                                var r = e._0;
                            t[r._0] = r._1, e = e._1
                        }
                        return t
                    },
                    equality: _
                }
            }()),
Er = (Lr.encodeList, Lr.encodeArray, Lr.encodeObject, Lr.encodeNull, Lr.identity),
xr = (Lr.identity, Lr.identity, Lr.identity),
Ir = (Lr.encode, Lr.decodeNull, Lr.decodePrimitive("value")),
Rr = Lr.andThen,
Ar = (Lr.fail, Lr.succeed),
Nr = Lr.run,
qr = (Lr.runOnString, Lr.map8),
Mr = (Lr.map7, Lr.map6, Lr.map5, Lr.map4, Lr.map3, Lr.map2, Lr.map1),
Or = (Lr.oneOf, Lr.decodeIndex),
Fr = Lr.decodeField,
zr = t(function(e, t) {
    return c(K, Fr, t, e)
}),
Ur = (Lr.decodeKeyValuePairs, Lr.decodePrimitive("float")),
Hr = Lr.decodePrimitive("int"),
Qr = Lr.decodePrimitive("bool"),
Jr = Lr.decodePrimitive("string"),
jr = (r(function(e, t, n) {
    var a = n;
    return c(Ge, r(function(t, r, n) {
        return u(e, t, n)
    }), t, a._0)
}), r(function(e, t, n) {
    var a = n;
    return c(Ke, r(function(t, r, n) {
        return u(e, t, n)
    }), t, a._0)
}), function(e) {
    var t;
    return t = e._0, c(Ge, r(function(e, t, r) {
        return {
            ctor: "::",
            _0: e,
            _1: r
        }
    }), {
        ctor: "[]"
    }, t)
}),
$r = t(function(e, t) {
    return u(at, e, t._0)
}),
Wr = function(e) {
    return {
        ctor: "Set_elm_builtin",
        _0: e
    }
},
Xr = Wr(pt),
Gr = t(function(e, t) {
    return Wr(c(St, e, {
        ctor: "_Tuple0"
    }, t._0))
}),
Yr = (t(function(e, t) {
    return r = u(ie, e, jr(t)), c(Z, Gr, Xr, r);
    var r
}), t(function(e, t) {
    return Wr(u(Rt, e, t._0))
})),
Kr = (t(function(e, t) {
    var r = t;
    return Wr(u(Lt, e._0, r._0))
}), t(function(e, t) {
    var r = t;
    return Wr(u(xt, e._0, r._0))
}), t(function(e, t) {
    var r = t;
    return Wr(u(At, e._0, r._0))
}), t(function(e, r) {
    var n = r;
    return Wr(u(Et, t(function(t, r) {
        return e(t)
    }), n._0))
}), t(function(e, r) {
    var n = r,
    a = u(It, t(function(t, r) {
        return e(t)
    }), n._0),
    i = a._0,
    f = a._1;
    return {
        ctor: "_Tuple2",
        _0: Wr(i),
        _1: Wr(f)
    }
}), function() {
    var e = "STYLE",
    a = "EVENT",
    i = "ATTR",
    f = "ATTR_NS",
    o = "undefined" != typeof document ? document : {};

    function l(e, t, r) {
        return {
            type: "thunk",
            func: e,
            args: t,
            thunk: r,
            node: void 0
        }
    }

    function s(t) {
        for (var r, n = {};
            "[]" !== t.ctor;) {
            var o = t._0,
        u = o.key;
        if (u === i || u === f || u === a) {
            var c = n[u] || {};
            c[o.realKey] = o.value, n[u] = c
        } else if (u === e) {
            for (var l = n[u] || {}, s = o.value;
                "[]" !== s.ctor;) {
                var d = s._0;
            l[d._0] = d._1, s = s._1
        }
        n[u] = l
    } else if ("namespace" === u) r = o.value;
    else if ("className" === u) {
        var _ = n[u];
        n[u] = void 0 === _ ? o.value : _ + " " + o.value
    } else n[u] = o.value;
    t = t._1
}
return {
    facts: n,
    namespace: r
}
}

function d(e, t, r) {
    return {
        key: a,
        realKey: e,
        value: {
            options: t,
            decoder: r
        }
    }
}

function _(e, t) {
    return (e.options === t.options || e.options.stopPropagation === t.options.stopPropagation && e.options.preventDefault === t.options.preventDefault) && Lr.equality(e.decoder, t.decoder)
}

function m(e, t) {
    switch (e.type) {
        case "thunk":
        return e.node || (e.node = e.thunk()), m(e.node, t);
        case "tagger":
        for (var r = e.node, n = e.tagger;
            "tagger" === r.type;) "object" != typeof n ? n = [n, r.tagger] : n.push(r.tagger), r = r.node;
            var a = {
                tagger: n,
                parent: t
            };
            return (u = m(r, a)).elm_event_node_ref = a, u;
            case "text":
            return o.createTextNode(e.text);
            case "node":
            b(u = e.namespace ? o.createElementNS(e.namespace, e.tag) : o.createElement(e.tag), t, e.facts);
            for (var i = e.children, f = 0; f < i.length; f++) u.appendChild(m(i[f], t));
                return u;
            case "keyed-node":
            b(u = e.namespace ? o.createElementNS(e.namespace, e.tag) : o.createElement(e.tag), t, e.facts);
            for (i = e.children, f = 0; f < i.length; f++) u.appendChild(m(i[f]._1, t));
                return u;
            case "custom":
            var u;
            return b(u = e.impl.render(e.model), t, e.facts), u
        }
    }

    function b(t, r, n) {
        for (var o in n) {
            var u = n[o];
            switch (o) {
                case e:
                g(t, u);
                break;
                case a:
                y(t, r, u);
                break;
                case i:
                h(t, u);
                break;
                case f:
                T(t, u);
                break;
                case "value":
                t[o] !== u && (t[o] = u);
                break;
                default:
                t[o] = u
            }
        }
    }

    function g(e, t) {
        var r = e.style;
        for (var n in t) r[n] = t[n]
    }

function y(e, t, r) {
    var n = e.elm_handlers || {};
    for (var a in r) {
        var i = n[a],
        f = r[a];
        if (void 0 === f) e.removeEventListener(a, i), n[a] = void 0;
        else if (void 0 === i) {
            i = v(t, f);
            e.addEventListener(a, i), n[a] = i
        } else i.info = f
    }
    e.elm_handlers = n
}

function v(e, t) {
    function r(t) {
        var n = r.info,
        a = u(Lr.run, n.decoder, t);
        if ("Ok" === a.ctor) {
            var i = n.options;
            i.stopPropagation && t.stopPropagation(), i.preventDefault && t.preventDefault();
            for (var f = a._0, o = e; o;) {
                var c = o.tagger;
                if ("function" == typeof c) f = c(f);
                else
                    for (var l = c.length; l--;) f = c[l](f);
                        o = o.parent
                }
            }
        }
        return r.info = t, r
    }

    function h(e, t) {
        for (var r in t) {
            var n = t[r];
            void 0 === n ? e.removeAttribute(r) : e.setAttribute(r, n)
        }
    }

    function T(e, t) {
        for (var r in t) {
            var n = t[r],
            a = n.namespace,
            i = n.value;
            void 0 === i ? e.removeAttributeNS(a, r) : e.setAttributeNS(a, r, i)
        }
    }

    function D(e, t) {
        var r = [];
        return w(e, t, r, 0), r
    }

    function B(e, t, r) {
        return {
            index: t,
            type: e,
            data: r,
            domNode: void 0,
            eventNode: void 0
        }
    }

    function w(e, t, r, n) {
        if (e !== t) {
            var a = e.type,
            i = t.type;
            if (a === i) switch (i) {
                case "thunk":
                for (var f = e.args, o = t.args, u = f.length, c = e.func === t.func && u === o.length; c && u--;) c = f[u] === o[u];
                    if (c) return void(t.node = e.node);
                t.node = t.thunk();
                var l = [];
                return w(e.node, t.node, l, 0), void(l.length > 0 && r.push(B("p-thunk", n, l)));
                case "tagger":
                for (var s = e.tagger, d = t.tagger, _ = !1, p = e.node;
                    "tagger" === p.type;) _ = !0, "object" != typeof s ? s = [s, p.tagger] : s.push(p.tagger), p = p.node;
                    for (var m = t.node;
                        "tagger" === m.type;) _ = !0, "object" != typeof d ? d = [d, m.tagger] : d.push(m.tagger), m = m.node;
                        return _ && s.length !== d.length ? void r.push(B("p-redraw", n, t)) : ((_ ? function(e, t) {
                            for (var r = 0; r < e.length; r++)
                                if (e[r] !== t[r]) return !1;
                            return !0
                        }(s, d) : s === d) || r.push(B("p-tagger", n, d)), void w(p, m, r, n + 1));
                    case "text":
                    return e.text !== t.text ? void r.push(B("p-text", n, t.text)) : void 0;
                    case "node":
                    return e.tag !== t.tag || e.namespace !== t.namespace ? void r.push(B("p-redraw", n, t)) : (void 0 !== (b = V(e.facts, t.facts)) && r.push(B("p-facts", n, b)), void
                        function(e, t, r, n) {
                            var a = e.children,
                            i = t.children,
                            f = a.length,
                            o = i.length;
                            f > o ? r.push(B("p-remove-last", n, f - o)) : f < o && r.push(B("p-append", n, i.slice(f)));
                            for (var u = n, c = f < o ? f : o, l = 0; l < c; l++) {
                                u++;
                                var s = a[l];
                                w(s, i[l], r, u), u += s.descendantsCount || 0
                            }
                        }(e, t, r, n));
                    case "keyed-node":
                    return e.tag !== t.tag || e.namespace !== t.namespace ? void r.push(B("p-redraw", n, t)) : (void 0 !== (b = V(e.facts, t.facts)) && r.push(B("p-facts", n, b)), void
                        function(e, t, r, n) {
                            var a, i = [],
                            f = {},
                            o = [],
                            u = e.children,
                            c = t.children,
                            l = u.length,
                            s = c.length,
                            d = 0,
                            _ = 0,
                            p = n;
                            for (; d < l && _ < s;) {
                                var m = u[d],
                                b = c[_],
                                g = m._0,
                                y = b._0,
                                v = m._1,
                                h = b._1;
                                if (g !== y) {
                                    var T = d + 1 < l,
                                    D = _ + 1 < s;
                                    if (T) var V = u[d + 1],
                                        P = V._0,
                                    S = V._1,
                                    L = y === P;
                                    if (D) var E = c[_ + 1],
                                        x = E._0,
                                    I = E._1,
                                    R = g === x;
                                    if (T && D && R && L) w(v, I, i, ++p), C(f, i, g, h, _, o), p += v.descendantsCount || 0, k(f, i, g, S, ++p), p += S.descendantsCount || 0, d += 2, _ += 2;
                                    else if (D && R) p++, C(f, i, y, h, _, o), w(v, I, i, p), p += v.descendantsCount || 0, d += 1, _ += 2;
                                    else if (T && L) k(f, i, g, v, ++p), p += v.descendantsCount || 0, w(S, h, i, ++p), p += S.descendantsCount || 0, d += 2, _ += 1;
                                    else {
                                        if (!T || !D || P !== x) break;
                                        k(f, i, g, v, ++p), C(f, i, y, h, _, o), p += v.descendantsCount || 0, w(S, I, i, ++p), p += S.descendantsCount || 0, d += 2, _ += 2
                                    }
                                } else w(v, h, i, ++p), p += v.descendantsCount || 0, d++, _++
                            }
                            for (; d < l;) {
                                p++;
                                var m = u[d],
                                v = m._1;
                                k(f, i, m._0, v, p), p += v.descendantsCount || 0, d++
                            }
                            for (; _ < s;) {
                                a = a || [];
                                var b = c[_];
                                C(f, i, b._0, b._1, void 0, a), _++
                            }(i.length > 0 || o.length > 0 || void 0 !== a) && r.push(B("p-reorder", n, {
                                patches: i,
                                inserts: o,
                                endInserts: a
                            }))
                        }(e, t, r, n));
                    case "custom":
                    if (e.impl !== t.impl) return void r.push(B("p-redraw", n, t));
                    var b;
                    void 0 !== (b = V(e.facts, t.facts)) && r.push(B("p-facts", n, b));
                    var g = t.impl.diff(e, t);
                    return g ? void r.push(B("p-custom", n, g)) : void 0
                } else r.push(B("p-redraw", n, t))
            }
        }

        function V(t, r, n) {
            var o;
            for (var u in t)
                if (u !== e && u !== a && u !== i && u !== f)
                    if (u in r) {
                        var c = t[u],
                        l = r[u];
                        c === l && "value" !== u || n === a && _(c, l) || ((o = o || {})[u] = l)
                    } else(o = o || {})[u] = void 0 === n ? "string" == typeof t[u] ? "" : null : n === e ? "" : n === a || n === i ? void 0 : {
                        namespace: t[u].namespace,
                        value: void 0
                    };
                    else {
                        var s = V(t[u], r[u] || {}, u);
                        s && ((o = o || {})[u] = s)
                    }
                    for (var d in r) d in t || ((o = o || {})[d] = r[d]);
                        return o
                }
                var P = "_elmW6BL";

                function C(e, t, r, n, a, i) {
                    var f = e[r];
                    if (void 0 === f) return f = {
                        tag: "insert",
                        vnode: n,
                        index: a,
                        data: void 0
                    }, i.push({
                        index: a,
                        entry: f
                    }), void(e[r] = f);
                    if ("remove" === f.tag) {
                        i.push({
                            index: a,
                            entry: f
                        }), f.tag = "move";
                        var o = [];
                        return w(f.vnode, n, o, f.index), f.index = a, void(f.data.data = {
                            patches: o,
                            entry: f
                        })
                    }
                    C(e, t, r + P, n, a, i)
                }

                function k(e, t, r, n, a) {
                    var i = e[r];
                    if (void 0 === i) {
                        var f = B("p-remove", a, void 0);
                        return t.push(f), void(e[r] = {
                            tag: "remove",
                            vnode: n,
                            index: a,
                            data: f
                        })
                    }
                    if ("insert" !== i.tag) k(e, t, r + P, n, a);
                    else {
                        i.tag = "move";
                        var o = [];
                        w(n, i.vnode, o, a);
                        f = B("p-remove", a, {
                            patches: o,
                            entry: i
                        });
                        t.push(f)
                    }
                }

                function S(e, t, r, n) {
                    ! function e(t, r, n, a, i, f, o) {
                        var u = n[a];
                        var c = u.index;
                        for (; c === i;) {
                            var l = u.type;
                            if ("p-thunk" === l) S(t, r.node, u.data, o);
                            else if ("p-reorder" === l) {
                                u.domNode = t, u.eventNode = o;
                                var s = u.data.patches;
                                s.length > 0 && e(t, r, s, 0, i, f, o)
                            } else if ("p-remove" === l) {
                                u.domNode = t, u.eventNode = o;
                                var d = u.data;
                                if (void 0 !== d) {
                                    d.entry.data = t;
                                    var s = d.patches;
                                    s.length > 0 && e(t, r, s, 0, i, f, o)
                                }
                            } else u.domNode = t, u.eventNode = o;
                            if (!(u = n[++a]) || (c = u.index) > f) return a
                        }
                    switch (r.type) {
                        case "tagger":
                        for (var _ = r.node;
                            "tagger" === _.type;) _ = _.node;
                            return e(t, _, n, a, i + 1, f, t.elm_event_node_ref);
                        case "node":
                        for (var p = r.children, m = t.childNodes, b = 0; b < p.length; b++) {
                            i++;
                            var g = p[b],
                            y = i + (g.descendantsCount || 0);
                            if (i <= c && c <= y && (a = e(m[b], g, n, a, i, y, o), !(u = n[a]) || (c = u.index) > f)) return a;
                            i = y
                        }
                        return a;
                        case "keyed-node":
                        for (var p = r.children, m = t.childNodes, b = 0; b < p.length; b++) {
                            i++;
                            var g = p[b]._1,
                            y = i + (g.descendantsCount || 0);
                            if (i <= c && c <= y && (a = e(m[b], g, n, a, i, y, o), !(u = n[a]) || (c = u.index) > f)) return a;
                            i = y
                        }
                        return a;
                        case "text":
                        case "thunk":
                        throw new Error("should never traverse `text` or `thunk` nodes like this")
                    }
                }(e, t, r, 0, 0, t.descendantsCount, n)
            }

            function L(e, t, r, n) {
                return 0 === r.length ? e : (S(e, t, r, n), E(e, r))
            }

            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r],
                    a = n.domNode,
                    i = x(a, n);
                    a === e && (e = i)
                }
                return e
            }

            function x(e, t) {
                switch (t.type) {
                    case "p-redraw":
                    return function(e, t, r) {
                        var n = e.parentNode,
                        a = m(t, r);
                        void 0 === a.elm_event_node_ref && (a.elm_event_node_ref = e.elm_event_node_ref);
                        n && a !== e && n.replaceChild(a, e);
                        return a
                    }(e, t.data, t.eventNode);
                    case "p-facts":
                    return b(e, t.eventNode, t.data), e;
                    case "p-text":
                    return e.replaceData(0, e.length, t.data), e;
                    case "p-thunk":
                    return E(e, t.data);
                    case "p-tagger":
                    return void 0 !== e.elm_event_node_ref ? e.elm_event_node_ref.tagger = t.data : e.elm_event_node_ref = {
                        tagger: t.data,
                        parent: t.eventNode
                    }, e;
                    case "p-remove-last":
                    for (var r = t.data; r--;) e.removeChild(e.lastChild);
                        return e;
                    case "p-append":
                    var n = t.data;
                    for (r = 0; r < n.length; r++) e.appendChild(m(n[r], t.eventNode));
                        return e;
                    case "p-remove":
                    var a = t.data;
                    if (void 0 === a) return e.parentNode.removeChild(e), e;
                    var i = a.entry;
                    return void 0 !== i.index && e.parentNode.removeChild(e), i.data = E(e, a.patches), e;
                    case "p-reorder":
                    return function(e, t) {
                        var r = t.data,
                        n = function(e, t) {
                            if (void 0 === e) return;
                            for (var r = o.createDocumentFragment(), n = 0; n < e.length; n++) {
                                var a = e[n],
                                i = a.entry;
                                r.appendChild("move" === i.tag ? i.data : m(i.vnode, t.eventNode))
                            }
                            return r
                        }(r.endInserts, t);
                        e = E(e, r.patches);
                        for (var a = r.inserts, i = 0; i < a.length; i++) {
                            var f = a[i],
                            u = f.entry,
                            c = "move" === u.tag ? u.data : m(u.vnode, t.eventNode);
                            e.insertBefore(c, e.childNodes[f.index])
                        }
                        void 0 !== n && e.appendChild(n);
                        return e
                    }(e, t);
                    case "p-custom":
                    var f = t.data;
                    return f.applyPatch(e, f.data);
                    default:
                    throw new Error("Ran into an unknown patch!")
                }
            }
            var A = M(function(e, t) {
                return function(e, r, n) {
                    if (void 0 === r) return e;
                    var a = "The `" + t + "` module does not need flags.\nInitialize it with no arguments and you should be all set!";
                    F(a, n)
                }
            }),
            q = M(function(e, t) {
                return function(r, n, a) {
                    if (void 0 === e) {
                        var i = "Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + t + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.";
                        F(i, a)
                    }
                    var f = u(Lr.run, e, n);
                    if ("Ok" === f.ctor) return r(f._0);
                    var i = "Trying to initialize the `" + t + "` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + f._0;
                    F(i, a)
                }
            });

            function M(e) {
                return t(function(t, r) {
                    return function(n) {
                        return function(a, i, f) {
                            var o = e(n, i);
                            void 0 === f ? function(e, t, r, n) {
                                t.embed = function(t, r) {
                                    for (; t.lastChild;) t.removeChild(t.lastChild);
                                        return R.initialize(n(e.init, r, t), e.update, e.subscriptions, z(t, e.view))
                                }, t.fullscreen = function(t) {
                                    return R.initialize(n(e.init, t, document.body), e.update, e.subscriptions, z(document.body, e.view))
                                }
                            }(r, a, 0, o) : function(e, t, r, n) {
                                t.fullscreen = function(t) {
                                    var a = {
                                        doc: void 0
                                    };
                                    return R.initialize(n(e.init, t, document.body), e.update(Q(a)), e.subscriptions, J(r, document.body, a, e.view, e.viewIn, e.viewOut))
                                }, t.embed = function(t, a) {
                                    var i = {
                                        doc: void 0
                                    };
                                    return R.initialize(n(e.init, a, t), e.update(Q(i)), e.subscriptions, J(r, t, i, e.view, e.viewIn, e.viewOut))
                                }
                            }(u(t, f, r), a, i, o)
                        }
                    }
                })
            }

            function F(e, t) {
                throw t && (t.innerHTML = '<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">' + e + "</pre></div>"), new Error(e)
            }

            function z(e, t) {
                return function(r, n) {
                    var a = {
                        tagger: r,
                        parent: void 0
                    },
                    i = t(n),
                    f = m(i, a);
                    return e.appendChild(f), H(f, t, i, a)
                }
            }
            var U = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(e) {
                setTimeout(e, 1e3 / 60)
            };

            function H(e, t, r, n) {
                var a, i = "NO_REQUEST",
                f = r;

                function o() {
                    switch (i) {
                        case "NO_REQUEST":
                        throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.");
                        case "PENDING_REQUEST":
                        U(o), i = "EXTRA_REQUEST";
                        var r = t(a),
                        u = D(f, r);
                        return e = L(e, f, u, n), void(f = r);
                        case "EXTRA_REQUEST":
                        return void(i = "NO_REQUEST")
                    }
                }
                return function(e) {
                    "NO_REQUEST" === i && U(o), i = "PENDING_REQUEST", a = e
                }
            }

            function Q(e) {
                return I.nativeBinding(function(t) {
                    var r = e.doc;
                    if (r) {
                        var n = r.getElementsByClassName("debugger-sidebar-messages")[0];
                        n && (n.scrollTop = n.scrollHeight)
                    }
                    t(I.succeed(p.Tuple0))
                })
            }

            function J(e, t, r, n, a, i) {
                return function(f, u) {
                    var c = {
                        tagger: f,
                        parent: void 0
                    },
                    l = {
                        tagger: f,
                        parent: void 0
                    },
                    s = n(u),
                    d = m(s, c);
                    t.appendChild(d);
                    var _ = H(d, n, s, c),
                    p = a(u)._1,
                    b = m(p, l);
                    t.appendChild(b);
                    var g = H(b, function(e, t, r) {
                        var n, a = function(e) {
                            return function(t) {
                                if ("keydown" !== t.type || !t.metaKey || 82 !== t.which) {
                                    for (var r = "scroll" === t.type || "wheel" === t.type, n = t.target; null !== n;) {
                                        if ("elm-overlay-message-details" === n.className && r) return;
                                        if (n === e && !r) return;
                                        n = n.parentNode
                                    }
                                    t.stopPropagation(), t.preventDefault()
                                }
                            }
                        }(t),
                        i = "Normal",
                        f = e.tagger,
                        o = function() {};
                        return function(t) {
                            var u = r(t),
                            c = u._0.ctor;
                            return e.tagger = "Normal" === c ? f : o, i !== c && (j("removeEventListener", a, i), j("addEventListener", a, c), "Normal" === i && (n = document.body.style.overflow, document.body.style.overflow = "hidden"), "Normal" === c && (document.body.style.overflow = n), i = c), u._1
                        }
                    }(c, b, a), p, l),
                    y = function(e, t, r, n, a, i) {
                        var f, u;
                        return function(e) {
                            if (e.isDebuggerOpen) {
                                if (!i.doc) return f = t(e), void(u = function(e, t, r, n) {
                                    var a = screen.width - 900,
                                    i = screen.height - 360,
                                    f = window.open("", "", "width=900,height=360,left=" + a + ",top=" + i);
                                    o = f.document, t.doc = o, o.title = "Debugger - " + e, o.body.style.margin = "0", o.body.style.padding = "0";
                                    var u = m(r, n);

                                    function c() {
                                        t.doc = void 0, f.close()
                                    }
                                    return o.body.appendChild(u), o.addEventListener("keydown", function(e) {
                                        e.metaKey && 82 === e.which && window.location.reload(), 38 === e.which && (n.tagger({
                                            ctor: "Up"
                                        }), e.preventDefault()), 40 === e.which && (n.tagger({
                                            ctor: "Down"
                                        }), e.preventDefault())
                                    }), window.addEventListener("unload", c), f.addEventListener("unload", function() {
                                        t.doc = void 0, window.removeEventListener("unload", c), n.tagger({
                                            ctor: "Close"
                                        })
                                    }), o = document, u
                                }(a, i, f, r));
                                    o = i.doc;
                                    var n = t(e),
                                    c = D(f, n);
                                    u = L(u, f, c, r), f = n, o = document
                                }
                            }
                        }(0, i, l, 0, e, r);
                        return function(e) {
                            _(e), g(e), y(e)
                        }
                    }
                }

                function j(e, t, r) {
                    switch (r) {
                        case "Normal":
                        return;
                        case "Pause":
                        return $(e, t, W);
                        case "Message":
                        return $(e, t, X)
                    }
                }

                function $(e, t, r) {
                    for (var n = 0; n < r.length; n++) document.body[e](r[n], t, !0)
                }
            var W = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur"],
            X = W.concat("wheel", "scroll");
            return {
                node: function(e) {
                    return t(function(t, r) {
                        return function(e, t, r) {
                            for (var n = s(t), a = n.namespace, i = n.facts, f = [], o = 0;
                                "[]" !== r.ctor;) {
                                var u = r._0;
                            o += u.descendantsCount || 0, f.push(u), r = r._1
                        }
                        return o += f.length, {
                            type: "node",
                            tag: e,
                            facts: i,
                            children: f,
                            namespace: a,
                            descendantsCount: o
                        }
                    }(e, t, r)
                })
                },
                text: function(e) {
                    return {
                        type: "text",
                        text: e
                    }
                },
                custom: function(e, t, r) {
                    return {
                        type: "custom",
                        facts: s(e).facts,
                        model: t,
                        impl: r
                    }
                },
                map: t(function(e, t) {
                    return {
                        type: "tagger",
                        tagger: e,
                        node: t,
                        descendantsCount: 1 + (t.descendantsCount || 0)
                    }
                }),
                on: r(d),
                style: function(t) {
                    return {
                        key: e,
                        value: t
                    }
                },
                property: t(function(e, t) {
                    return {
                        key: e,
                        value: t
                    }
                }),
                attribute: t(function(e, t) {
                    return {
                        key: i,
                        realKey: e,
                        value: t
                    }
                }),
                attributeNS: r(function(e, t, r) {
                    return {
                        key: f,
                        realKey: t,
                        value: {
                            value: r,
                            namespace: e
                        }
                    }
                }),
                mapProperty: t(function(e, t) {
                    return t.key !== a ? t : d(t.realKey, t.value.options, u(Mr, e, t.value.decoder))
                }),
                lazy: t(function(e, t) {
                    return l(e, [t], function() {
                        return e(t)
                    })
                }),
                lazy2: r(function(e, t, r) {
                    return l(e, [t, r], function() {
                        return u(e, t, r)
                    })
                }),
                lazy3: n(function(e, t, r, n) {
                    return l(e, [t, r, n], function() {
                        return c(e, t, r, n)
                    })
                }),
                keyedNode: r(function(e, t, r) {
                    for (var n = s(t), a = n.namespace, i = n.facts, f = [], o = 0;
                        "[]" !== r.ctor;) {
                        var u = r._0;
                    o += u._1.descendantsCount || 0, f.push(u), r = r._1
                }
                return {
                    type: "keyed-node",
                    tag: e,
                    facts: i,
                    children: f,
                    namespace: a,
                    descendantsCount: o += f.length
                }
            }),
                program: A,
                programWithFlags: q,
                staticProgram: function(e) {
                    var r = p.Tuple2(p.Tuple0, N);
                    return u(A, cr, {
                        init: r,
                        view: function() {
                            return e
                        },
                        update: t(function() {
                            return r
                        }),
                        subscriptions: function() {
                            return O
                        }
                    })()
                }
            }
        }()),
Zr = function(e) {
    return u(Kr.program, cr, e)
},
en = (Kr.keyedNode, Kr.lazy3, Kr.lazy2, Kr.lazy, {
    stopPropagation: !1,
    preventDefault: !1
}),
tn = Kr.on,
rn = t(function(e, t) {
    return c(tn, e, en, t)
}),
nn = Kr.style,
an = (Kr.mapProperty, Kr.attributeNS),
fn = Kr.attribute,
on = Kr.property,
un = (Kr.map, Kr.text),
cn = Kr.node,
ln = (t(function(e, t) {
    return {
        stopPropagation: e,
        preventDefault: t
    }
}), function(e) {
    return u(Kr.programWithFlags, void 0, e)
}),
sn = un,
dn = cn,
_n = (dn("body"), dn("section"), dn("nav"), dn("article"), dn("aside"), dn("h1")),
pn = (dn("h2"), dn("h3"), dn("h4")),
mn = dn("h5"),
bn = (dn("h6"), dn("header"), dn("footer"), dn("address"), dn("main"), dn("p"), dn("hr"), dn("pre"), dn("blockquote"), dn("ol"), dn("ul"), dn("li"), dn("dl"), dn("dt"), dn("dd"), dn("figure"), dn("figcaption"), dn("div")),
gn = dn("a"),
yn = (dn("em"), dn("strong"), dn("small"), dn("s"), dn("cite"), dn("q"), dn("dfn"), dn("abbr"), dn("time"), dn("code"), dn("var"), dn("samp"), dn("kbd"), dn("sub"), dn("sup"), dn("i"), dn("b"), dn("u"), dn("mark"), dn("ruby"), dn("rt"), dn("rp"), dn("bdi"), dn("bdo"), dn("span")),
vn = dn("br"),
hn = (dn("wbr"), dn("ins"), dn("del"), dn("img"), dn("iframe"), dn("embed"), dn("object"), dn("param"), dn("video"), dn("audio"), dn("source"), dn("track"), dn("canvas"), dn("math"), dn("table"), dn("caption"), dn("colgroup"), dn("col"), dn("tbody"), dn("thead"), dn("tfoot"), dn("tr"), dn("td"), dn("th"), dn("form"), dn("fieldset"), dn("legend"), dn("label"), dn("input"), dn("button")),
Tn = (dn("select"), dn("datalist"), dn("optgroup"), dn("option"), dn("textarea"), dn("keygen"), dn("output"), dn("progress"), dn("meter"), dn("details"), dn("summary"), dn("menuitem"), dn("menu"), fn),
Dn = on,
Bn = t(function(e, t) {
    return u(Dn, e, xr(t))
}),
wn = function(e) {
    return u(Bn, "className", e)
},
Vn = function(e) {
    return u(Bn, "href", e)
},
Pn = function(e) {
    return u(Bn, "target", e)
},
Cn = (t(function(e, t) {
    return u(Dn, e, Er(t))
}), nn),
kn = (u(Fr, "keyCode", Hr), u(zr, {
    ctor: "::",
    _0: "target",
    _1: {
        ctor: "::",
        _0: "checked",
        _1: {
            ctor: "[]"
        }
    }
}, Qr), u(zr, {
    ctor: "::",
    _0: "target",
    _1: {
        ctor: "::",
        _0: "value",
        _1: {
            ctor: "[]"
        }
    }
}, Jr), en),
Sn = rn,
Ln = (p.update(kn, {
    preventDefault: !0
}), function(e) {
    return u(Sn, "click", Ar(e))
}),
En = (t(function(e, t) {
    return {
        stopPropagation: e,
        preventDefault: t
    }
}), u(on, "namespace", xr("http://www.w3.org/2000/svg"))),
xn = r(function(e, t, r) {
    return c(cn, e, {
        ctor: "::",
        _0: En,
        _1: t
    }, r)
}),
In = (xn("svg"), xn("foreignObject"), xn("animate"), xn("animateColor"), xn("animateMotion"), xn("animateTransform"), xn("mpath"), xn("set"), xn("a"), xn("defs"), xn("g"), xn("marker"), xn("mask"), xn("pattern"), xn("switch"), xn("symbol"), xn("desc"), xn("metadata"), xn("title"), xn("feBlend"), xn("feColorMatrix"), xn("feComponentTransfer"), xn("feComposite"), xn("feConvolveMatrix"), xn("feDiffuseLighting"), xn("feDisplacementMap"), xn("feFlood"), xn("feFuncA"), xn("feFuncB"), xn("feFuncG"), xn("feFuncR"), xn("feGaussianBlur"), xn("feImage"), xn("feMerge"), xn("feMergeNode"), xn("feMorphology"), xn("feOffset"), xn("feSpecularLighting"), xn("feTile"), xn("feTurbulence"), xn("font"), xn("linearGradient"), xn("radialGradient"), xn("stop"), xn("circle"), xn("ellipse"), xn("image"), xn("line"), xn("path"), xn("polygon"), xn("polyline"), xn("rect"), xn("use"), xn("feDistantLight"), xn("fePointLight"), xn("feSpotLight"), xn("altGlyph"), xn("altGlyphDef"), xn("altGlyphItem"), xn("glyph"), xn("glyphRef"), xn("textPath"), xn("text"), xn("tref"), xn("tspan"), xn("clipPath"), xn("colorProfile"), xn("cursor"), xn("filter"), xn("script"), xn("style"), xn("view"), fn("writing-mode"), fn("word-spacing"), fn("visibility"), fn("unicode-bidi"), fn("text-rendering"), fn("text-decoration"), fn("text-anchor"), fn("stroke"), fn("stroke-width"), fn("stroke-opacity"), fn("stroke-miterlimit"), fn("stroke-linejoin"), fn("stroke-linecap"), fn("stroke-dashoffset"), fn("stroke-dasharray"), fn("stop-opacity"), fn("stop-color"), fn("shape-rendering"), fn("pointer-events"), fn("overflow"), fn("opacity"), fn("mask"), fn("marker-start"), fn("marker-mid"), fn("marker-end"), fn("lighting-color"), fn("letter-spacing"), fn("kerning"), fn("image-rendering"), fn("glyph-orientation-vertical"), fn("glyph-orientation-horizontal"), fn("font-weight"), fn("font-variant"), fn("font-style"), fn("font-stretch"), fn("font-size"), fn("font-size-adjust"), fn("font-family"), fn("flood-opacity"), fn("flood-color"), fn("filter"), fn("fill"), fn("fill-rule"), fn("fill-opacity"), fn("enable-background"), fn("dominant-baseline"), fn("display"), fn("direction"), fn("cursor"), fn("color"), fn("color-rendering"), fn("color-profile"), fn("color-interpolation"), fn("color-interpolation-filters"), fn("clip"), fn("clip-rule"), fn("clip-path"), fn("baseline-shift"), fn("alignment-baseline"), fn("zoomAndPan"), fn("z"), fn("yChannelSelector"), fn("y2"), fn("y1"), fn("y")),
Rn = (u(an, "http://www.w3.org/XML/1998/namespace", "xml:space"), u(an, "http://www.w3.org/XML/1998/namespace", "xml:lang"), u(an, "http://www.w3.org/XML/1998/namespace", "xml:base"), u(an, "http://www.w3.org/1999/xlink", "xlink:type"), u(an, "http://www.w3.org/1999/xlink", "xlink:title"), u(an, "http://www.w3.org/1999/xlink", "xlink:show"), u(an, "http://www.w3.org/1999/xlink", "xlink:role"), u(an, "http://www.w3.org/1999/xlink", "xlink:href"), u(an, "http://www.w3.org/1999/xlink", "xlink:arcrole"), u(an, "http://www.w3.org/1999/xlink", "xlink:actuate"), fn("xChannelSelector"), fn("x2"), fn("x1"), fn("x-height"), fn("x")),
An = (fn("widths"), fn("width"), fn("viewTarget"), fn("viewBox")),
Nn = (fn("vert-origin-y"), fn("vert-origin-x"), fn("vert-adv-y"), fn("version"), fn("values"), fn("v-mathematical"), fn("v-ideographic"), fn("v-hanging"), fn("v-alphabetic"), fn("units-per-em"), fn("unicode-range"), fn("unicode"), fn("underline-thickness"), fn("underline-position"), fn("u2"), fn("u1"), fn("type"), fn("transform"), fn("to"), fn("title"), fn("textLength"), fn("targetY"), fn("targetX"), fn("target"), fn("tableValues"), fn("systemLanguage"), fn("surfaceScale"), fn("style"), fn("string"), fn("strikethrough-thickness"), fn("strikethrough-position"), fn("stitchTiles"), fn("stemv"), fn("stemh"), fn("stdDeviation"), fn("startOffset"), fn("spreadMethod"), fn("speed"), fn("specularExponent"), fn("specularConstant"), fn("spacing"), fn("slope"), fn("seed"), fn("scale"), fn("ry")),
qn = fn("rx"),
Mn = (fn("rotate"), fn("result"), fn("restart"), fn("requiredFeatures"), fn("requiredExtensions"), fn("repeatDur"), fn("repeatCount"), fn("rendering-intent"), fn("refY"), fn("refX"), fn("radius"), fn("r")),
On = (fn("primitiveUnits"), fn("preserveAspectRatio"), fn("preserveAlpha"), fn("pointsAtZ"), fn("pointsAtY"), fn("pointsAtX"), fn("points")),
Fn = (fn("point-order"), fn("patternUnits"), fn("patternTransform"), fn("patternContentUnits"), fn("pathLength"), fn("path"), fn("panose-1"), fn("overline-thickness"), fn("overline-position"), fn("origin"), fn("orientation"), fn("orient"), fn("order"), fn("operator"), fn("offset")),
zn = (fn("numOctaves"), fn("name"), fn("mode"), fn("min"), fn("method"), fn("media"), fn("max"), fn("mathematical"), fn("maskUnits"), fn("maskContentUnits"), fn("markerWidth"), fn("markerUnits"), fn("markerHeight"), fn("local"), fn("limitingConeAngle"), fn("lengthAdjust"), fn("lang"), fn("keyTimes"), fn("keySplines"), fn("keyPoints"), fn("kernelUnitLength"), fn("kernelMatrix"), fn("k4"), fn("k3"), fn("k2"), fn("k1"), fn("k"), fn("intercept"), fn("in2"), fn("in"), fn("ideographic"), fn("id"), fn("horiz-origin-y"), fn("horiz-origin-x"), fn("horiz-adv-x"), fn("height"), fn("hanging"), fn("gradientUnits"), fn("gradientTransform"), fn("glyphRef"), fn("glyph-name"), fn("g2"), fn("g1"), fn("fy"), fn("fx"), fn("from"), fn("format"), fn("filterUnits"), fn("filterRes"), fn("externalResourcesRequired"), fn("exponent"), fn("end"), fn("elevation"), fn("edgeMode"), fn("dy"), fn("dx"), fn("dur"), fn("divisor"), fn("diffuseConstant"), fn("descent"), fn("decelerate"), fn("d")),
Un = fn("cy"),
Hn = fn("cx"),
Qn = (fn("contentStyleType"), fn("contentScriptType"), fn("clipPathUnits"), fn("class"), fn("cap-height"), fn("calcMode"), fn("by"), fn("bias"), fn("begin"), fn("bbox"), fn("baseProfile"), fn("baseFrequency"), fn("azimuth"), fn("autoReverse"), fn("attributeType"), fn("attributeName"), fn("ascent"), fn("arabic-form"), fn("amplitude"), fn("allowReorder"), fn("alphabetic"), fn("additive"), fn("accumulate"), fn("accelerate"), fn("accent-height"), t(function(e, t) {
    var r = ee(e) - ee(t);
    if (p.cmp(r, 0) > 0) {
        var n = ne(ce(t));
        return "Nothing" === n.ctor ? {
            ctor: "_Tuple2",
            _0: e,
            _1: t
        } : {
            ctor: "_Tuple2",
            _0: e,
            _1: u(S["++"], t, u(ve, P(r), n._0))
        }
    }
    if (p.cmp(r, 0) < 0) {
        var a = ne(ce(e));
        return "Nothing" === a.ctor ? {
            ctor: "_Tuple2",
            _0: e,
            _1: t
        } : {
            ctor: "_Tuple2",
            _0: u(S["++"], e, u(ve, P(r), a._0)),
            _1: t
        }
    }
    return {
        ctor: "_Tuple2",
        _0: e,
        _1: t
    }
})),
Jn = function(e) {
    var t = function(e) {
        return p.eq(e.velocity, 0) && p.eq(e.position, e.target)
    },
    r = e;
    switch (r.ctor) {
        case "Move":
        case "MoveTo":
        case "Line":
        case "LineTo":
        return t(r._0) && t(r._1);
        case "Horizontal":
        case "HorizontalTo":
        case "Vertical":
        case "VerticalTo":
        return t(r._0);
        case "Curve":
        var n = r._0.point,
        a = r._0.control2,
        i = r._0.control1;
        return t(Zt(i)) && t(Kt(i)) && t(Zt(a)) && t(Kt(a)) && t(Zt(n)) && t(Kt(n));
        case "CurveTo":
        var f = r._0.point,
        o = r._0.control2,
        c = r._0.control1;
        return t(Zt(c)) && t(Kt(c)) && t(Zt(o)) && t(Kt(o)) && t(Zt(f)) && t(Kt(f));
        case "Quadratic":
        var l = r._0.point,
        s = r._0.control;
        return t(Zt(s)) && t(Kt(s)) && t(Zt(l)) && t(Kt(l));
        case "QuadraticTo":
        var d = r._0.point,
        _ = r._0.control;
        return t(Zt(_)) && t(Kt(_)) && t(Zt(d)) && t(Kt(d));
        case "SmoothQuadratic":
        return u(Y, function(e) {
            var r = e;
            return t(r._0) && t(r._1)
        }, r._0);
        case "SmoothQuadraticTo":
        return u(Y, function(e) {
            var r = e;
            return t(r._0) && t(r._1)
        }, r._0);
        case "Smooth":
        return u(Y, function(e) {
            var r = e;
            return t(r._0) && t(r._1)
        }, r._0);
        case "SmoothTo":
        return u(Y, function(e) {
            var r = e;
            return t(r._0) && t(r._1)
        }, r._0);
        case "ClockwiseArc":
        var m = r._0;
        return t(m.x) && t(m.y) && t(m.radius) && t(m.startAngle) && t(m.endAngle);
        case "AntiClockwiseArc":
        var b = r._0;
        return t(b.x) && t(b.y) && t(b.radius) && t(b.startAngle) && t(b.endAngle);
        default:
        return !0
    }
},
jn = function(e) {
    var t = function(e) {
        var t = u(H, e.interpolation, e.interpolationOverride);
        switch (t.ctor) {
            case "Spring":
            return p.eq(e.velocity, 0) && p.eq(e.position, e.target);
            case "Easing":
            var r = t._0;
            return p.eq(r.progress, 1) || p.eq(r.progress, 0) && p.eq(e.position, e.target);
            default:
            return p.eq(e.position, e.target)
        }
    },
    r = e;
    switch (r.ctor) {
        case "ExactProperty":
        return !0;
        case "ColorProperty":
        return u(Y, t, {
            ctor: "::",
            _0: r._1,
            _1: {
                ctor: "::",
                _0: r._2,
                _1: {
                    ctor: "::",
                    _0: r._3,
                    _1: {
                        ctor: "::",
                        _0: r._4,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        });
        case "ShadowProperty":
        var n = r._2;
        return u(Y, t, {
            ctor: "::",
            _0: n.offsetX,
            _1: {
                ctor: "::",
                _0: n.offsetY,
                _1: {
                    ctor: "::",
                    _0: n.size,
                    _1: {
                        ctor: "::",
                        _0: n.blur,
                        _1: {
                            ctor: "::",
                            _0: n.red,
                            _1: {
                                ctor: "::",
                                _0: n.green,
                                _1: {
                                    ctor: "::",
                                    _0: n.blue,
                                    _1: {
                                        ctor: "::",
                                        _0: n.alpha,
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        case "Property":
        return t(r._1);
        case "Property2":
        return t(r._1) && t(r._2);
        case "Property3":
        return u(Y, t, {
            ctor: "::",
            _0: r._1,
            _1: {
                ctor: "::",
                _0: r._2,
                _1: {
                    ctor: "::",
                    _0: r._3,
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        });
        case "Property4":
        return u(Y, t, {
            ctor: "::",
            _0: r._1,
            _1: {
                ctor: "::",
                _0: r._2,
                _1: {
                    ctor: "::",
                    _0: r._3,
                    _1: {
                        ctor: "::",
                        _0: r._4,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        });
        case "AngleProperty":
        return t(r._1);
        case "Points":
        return u(Y, function(e) {
            var r = e;
            return t(r._0) && t(r._1)
        }, r._0);
        default:
        return u(Y, Jn, r._0)
    }
},
$n = t(function(e, t) {
    var r = e - t.current;
    return {
        current: e,
        dt: p.cmp(r, 34) > 0 || p.eq(t.current, 0) ? 16.666 : r
    }
}),
Wn = function(e) {
    var t = e;
    switch (t.ctor) {
        case "ExactProperty":
        case "ColorProperty":
        case "ShadowProperty":
        case "Property":
        case "Property2":
        case "Property3":
        case "Property4":
        case "AngleProperty":
        return t._0;
        case "Points":
        return "points";
        default:
        return "path"
    }
},
Xn = t(function(e, t) {
    var r = u(ie, Wn, t),
    n = u(fe, function(e) {
        return !u(te, Wn(e), r)
    }, e);
    return u(S["++"], n, t)
}),
Gn = t(function(e, r) {
    var n = t(function(e, t) {
        return p.eq(Wn(e), Wn(t))
    }),
    a = c(Z, t(function(e, t) {
        var r = t,
        a = r._1,
        i = r._0,
        f = r._2,
        o = ne(i);
        if ("Nothing" === o.ctor) return {
            ctor: "_Tuple3",
            _0: i,
            _1: a,
            _2: f
        };
        var c, l = o._0,
        s = u(_e, n(l), a),
        d = s._0,
        _ = s._1;
        return {
            ctor: "_Tuple3",
            _0: u(W, 1, i),
            _1: (c = d, "[]" === c.ctor ? _ : u(S["++"], c._1, _)),
            _2: {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: l,
                    _1: ne(d)
                },
                _1: f
            }
        }
    }), {
        ctor: "_Tuple3",
        _0: e,
        _1: r,
        _2: {
            ctor: "[]"
        }
    }, u(ve, ee(e), 0)),
    i = a._1,
    f = a._2;
    u(ie, function(e) {
        return u(Yt, "elm-style-animation", u(S["++"], Wn(e), " has no initial value and therefore will not be animated."))
    }, i);
    return ce(f)
}),
Yn = (t(function(e, t) {
    return {
        current: e,
        dt: t
    }
}), i(function(e, t, r, n, a, i) {
    return {
        position: e,
        velocity: t,
        target: r,
        interpolation: n,
        unit: a,
        interpolationOverride: i
    }
}), o(function(e, t, r, n, a, i, f, o) {
    return {
        offsetX: e,
        offsetY: t,
        size: r,
        blur: n,
        red: a,
        green: i,
        blue: f,
        alpha: o
    }
}), r(function(e, t, r) {
    return {
        control1: e,
        control2: t,
        point: r
    }
}), t(function(e, t) {
    return {
        control: e,
        point: t
    }
}), a(function(e, t, r, n, a) {
    return {
        x: e,
        y: t,
        radius: r,
        startAngle: n,
        endAngle: a
    }
}), function(e) {
    return {
        ctor: "Animation",
        _0: e
    }
}),
Kn = function(e) {
    return {
        ctor: "Tick",
        _0: e
    }
},
Zn = function(e) {
    return {
        ctor: "Loop",
        _0: e
    }
},
ea = t(function(e, t) {
    return {
        ctor: "Repeat",
        _0: e,
        _1: t
    }
}),
ta = function(e) {
    return {
        ctor: "Wait",
        _0: e
    }
},
ra = function(e) {
    return {
        ctor: "ToWith",
        _0: e
    }
},
na = {
    ctor: "Step"
},
aa = function(e) {
    return {
        ctor: "Easing",
        _0: e
    }
},
ia = t(function(e, t) {
    var r, n = u(H, t.interpolation, t.interpolationOverride);
    switch (n.ctor) {
        case "AtSpeed":
        var a = n._0.perSecond,
        i = p.cmp(t.position, t.target) < 0 ? {
            ctor: "_Tuple2",
            _0: r = t.position + a * (e / 1e3),
            _1: p.cmp(r, t.target) > -1
        } : {
            ctor: "_Tuple2",
            _0: r = t.position - a * (e / 1e3),
            _1: p.cmp(r, t.target) < 1
        },
        f = i._0;
        return i._1 ? p.update(t, {
            position: t.target,
            velocity: 0
        }) : p.update(t, {
            position: f,
            velocity: 1e3 * a
        });
        case "Spring":
        var o = -1 * n._0.damping * t.velocity,
        c = n._0.stiffness * (t.target - t.position) + o,
        l = e / 1e3,
        s = t.velocity + c * l,
        d = (f = t.position + s * l, P(t.target - f));
        return p.cmp(d, .01) < 0 && p.cmp(P(s), .1) < 0 ? p.update(t, {
            position: t.target,
            velocity: 0
        }) : p.update(t, {
            position: f,
            velocity: s
        });
        default:
        var _ = n._0.start,
        m = n._0.progress,
        b = n._0.ease,
        g = n._0.duration,
        v = t.target - _,
        T = p.cmp(e / g + m, 1) < 0 ? e / g + m : 1,
        D = b(T);
        f = y(h(1e4 * (D * v + _))) / 1e4, s = p.eq(T, 1) ? 0 : (f - t.position) / e;
        return "Nothing" === t.interpolationOverride.ctor ? p.update(t, {
            position: f,
            velocity: s,
            interpolation: aa({
                progress: T,
                duration: g,
                ease: b,
                start: _
            })
        }) : p.update(t, {
            position: f,
            velocity: s,
            interpolationOverride: J(aa({
                progress: T,
                duration: g,
                ease: b,
                start: _
            }))
        })
    }
}),
fa = function(e) {
    return {
        ctor: "Spring",
        _0: e
    }
},
oa = function(e) {
    return {
        ctor: "Path",
        _0: e
    }
},
ua = function(e) {
    return {
        ctor: "Points",
        _0: e
    }
},
ca = t(function(e, t) {
    return {
        ctor: "AngleProperty",
        _0: e,
        _1: t
    }
}),
la = a(function(e, t, r, n, a) {
    return {
        ctor: "Property4",
        _0: e,
        _1: t,
        _2: r,
        _3: n,
        _4: a
    }
}),
sa = n(function(e, t, r, n) {
    return {
        ctor: "Property3",
        _0: e,
        _1: t,
        _2: r,
        _3: n
    }
}),
da = r(function(e, t, r) {
    return {
        ctor: "Property2",
        _0: e,
        _1: t,
        _2: r
    }
}),
_a = t(function(e, t) {
    return {
        ctor: "Property",
        _0: e,
        _1: t
    }
}),
pa = r(function(e, t, r) {
    return {
        ctor: "ShadowProperty",
        _0: e,
        _1: t,
        _2: r
    }
}),
ma = a(function(e, t, r, n, a) {
    return {
        ctor: "ColorProperty",
        _0: e,
        _1: t,
        _2: r,
        _3: n,
        _4: a
    }
}),
ba = t(function(e, t) {
    return {
        ctor: "ExactProperty",
        _0: e,
        _1: t
    }
}),
ga = {
    ctor: "Close"
},
ya = function(e) {
    return {
        ctor: "AntiClockwiseArc",
        _0: e
    }
},
va = function(e) {
    return {
        ctor: "ClockwiseArc",
        _0: e
    }
},
ha = function(e) {
    return {
        ctor: "SmoothTo",
        _0: e
    }
},
Ta = function(e) {
    return {
        ctor: "Smooth",
        _0: e
    }
},
Da = function(e) {
    return {
        ctor: "SmoothQuadraticTo",
        _0: e
    }
},
Ba = function(e) {
    return {
        ctor: "SmoothQuadratic",
        _0: e
    }
},
wa = function(e) {
    return {
        ctor: "QuadraticTo",
        _0: e
    }
},
Va = function(e) {
    return {
        ctor: "Quadratic",
        _0: e
    }
},
Pa = function(e) {
    return {
        ctor: "CurveTo",
        _0: e
    }
},
Ca = function(e) {
    return {
        ctor: "Curve",
        _0: e
    }
},
ka = function(e) {
    return {
        ctor: "VerticalTo",
        _0: e
    }
},
Sa = function(e) {
    return {
        ctor: "Vertical",
        _0: e
    }
},
La = function(e) {
    return {
        ctor: "HorizontalTo",
        _0: e
    }
},
Ea = function(e) {
    return {
        ctor: "Horizontal",
        _0: e
    }
},
xa = t(function(e, t) {
    return {
        ctor: "LineTo",
        _0: e,
        _1: t
    }
}),
Ia = t(function(e, t) {
    return {
        ctor: "Line",
        _0: e,
        _1: t
    }
}),
Ra = t(function(e, t) {
    return {
        ctor: "MoveTo",
        _0: e,
        _1: t
    }
}),
Aa = t(function(e, t) {
    return {
        ctor: "Move",
        _0: e,
        _1: t
    }
}),
Na = t(function(e, t) {
    var r, n, a, i, f, o = function(t) {
        return u(ie, function(t) {
            var r = t;
            return {
                ctor: "_Tuple2",
                _0: e(r._0),
                _1: e(r._1)
            }
        }, t)
    },
    c = t;
    switch (c.ctor) {
        case "Move":
        return u(Aa, e(c._0), e(c._1));
        case "MoveTo":
        return u(Ra, e(c._0), e(c._1));
        case "Line":
        return u(Ia, e(c._0), e(c._1));
        case "LineTo":
        return u(xa, e(c._0), e(c._1));
        case "Horizontal":
        return Ea(e(c._0));
        case "HorizontalTo":
        return La(e(c._0));
        case "Vertical":
        return Sa(e(c._0));
        case "VerticalTo":
        return ka(e(c._0));
        case "Curve":
        var l = c._0.point,
        s = c._0.control2,
        d = c._0.control1;
        return Ca({
            control1: {
                ctor: "_Tuple2",
                _0: e(Zt(d)),
                _1: e(Kt(d))
            },
            control2: {
                ctor: "_Tuple2",
                _0: e(Zt(s)),
                _1: e(Kt(s))
            },
            point: {
                ctor: "_Tuple2",
                _0: e(Zt(l)),
                _1: e(Kt(l))
            }
        });
        case "CurveTo":
        var _ = c._0.point,
        m = c._0.control2,
        b = c._0.control1;
        return Pa({
            control1: {
                ctor: "_Tuple2",
                _0: e(Zt(b)),
                _1: e(Kt(b))
            },
            control2: {
                ctor: "_Tuple2",
                _0: e(Zt(m)),
                _1: e(Kt(m))
            },
            point: {
                ctor: "_Tuple2",
                _0: e(Zt(_)),
                _1: e(Kt(_))
            }
        });
        case "Quadratic":
        var g = c._0.point,
        y = c._0.control;
        return Va({
            control: {
                ctor: "_Tuple2",
                _0: e(Zt(y)),
                _1: e(Kt(y))
            },
            point: {
                ctor: "_Tuple2",
                _0: e(Zt(g)),
                _1: e(Kt(g))
            }
        });
        case "QuadraticTo":
        var v = c._0.point,
        h = c._0.control;
        return wa({
            control: {
                ctor: "_Tuple2",
                _0: e(Zt(h)),
                _1: e(Kt(h))
            },
            point: {
                ctor: "_Tuple2",
                _0: e(Zt(v)),
                _1: e(Kt(v))
            }
        });
        case "SmoothQuadratic":
        return Ba(o(c._0));
        case "SmoothQuadraticTo":
        return Da(o(c._0));
        case "Smooth":
        return Ta(o(c._0));
        case "SmoothTo":
        return ha(o(c._0));
        case "ClockwiseArc":
        var T = c._0;
        return va((r = T.endAngle, n = T.startAngle, a = T.radius, i = T.y, f = T.x, p.update(T, {
            x: e(f),
            y: e(i),
            radius: e(a),
            startAngle: e(n),
            endAngle: e(r)
        })));
        case "AntiClockwiseArc":
        var D = c._0;
        return ya(function() {
            var t = D.endAngle,
            r = D.startAngle,
            n = D.radius,
            a = D.y,
            i = D.x;
            return p.update(D, {
                x: e(i),
                y: e(a),
                radius: e(n),
                startAngle: e(r),
                endAngle: e(t)
            })
        }());
        default:
        return ga
    }
}),
qa = t(function(e, t) {
    var r = t;
    switch (r.ctor) {
        case "ExactProperty":
        return u(ba, r._0, r._1);
        case "ColorProperty":
        return s(ma, r._0, e(r._1), e(r._2), e(r._3), e(r._4));
        case "ShadowProperty":
        var n = r._2,
        a = n.alpha,
        i = n.blue,
        f = n.green,
        o = n.red,
        d = n.blur,
        _ = n.size,
        p = n.offsetY,
        m = n.offsetX;
        return c(pa, r._0, r._1, {
            offsetX: e(m),
            offsetY: e(p),
            size: e(_),
            blur: e(d),
            red: e(o),
            green: e(f),
            blue: e(i),
            alpha: e(a)
        });
        case "Property":
        return u(_a, r._0, e(r._1));
        case "Property2":
        return c(da, r._0, e(r._1), e(r._2));
        case "Property3":
        return l(sa, r._0, e(r._1), e(r._2), e(r._3));
        case "Property4":
        return s(la, r._0, e(r._1), e(r._2), e(r._3), e(r._4));
        case "AngleProperty":
        return u(ca, r._0, e(r._1));
        case "Points":
        return ua(u(ie, function(t) {
            var r = t;
            return {
                ctor: "_Tuple2",
                _0: e(r._0),
                _1: e(r._1)
            }
        }, r._0));
        default:
        return oa(u(ie, Na(e), r._0))
    }
}),
Ma = t(function(e, r) {
    var n, a, i, f, o, l = t(function(e, t) {
        var r = e.interpolation;
        return "Easing" === r.ctor ? p.update(e, {
            target: t.position,
            interpolation: aa(p.update(r._0, {
                start: e.position
            }))
        }) : p.update(e, {
            target: t.position
        })
    }),
    s = e;
    switch (s.ctor) {
        case "Move":
        var d = r;
        return "Move" === d.ctor ? u(Aa, u(l, s._0, d._0), u(l, s._1, d._1)) : e;
        case "MoveTo":
        var _ = r;
        return "MoveTo" === _.ctor ? u(Ra, u(l, s._0, _._0), u(l, s._1, _._1)) : e;
        case "Line":
        var m = r;
        return "Line" === m.ctor ? u(Ia, u(l, s._0, m._0), u(l, s._1, m._1)) : e;
        case "LineTo":
        var b = r;
        return "LineTo" === b.ctor ? u(xa, u(l, s._0, b._0), u(l, s._1, b._1)) : e;
        case "Horizontal":
        var g = r;
        return "Horizontal" === g.ctor ? Ea(u(l, s._0, g._0)) : e;
        case "HorizontalTo":
        var y = r;
        return "HorizontalTo" === y.ctor ? La(u(l, s._0, y._0)) : e;
        case "Vertical":
        var v = r;
        return "Vertical" === v.ctor ? Sa(u(l, s._0, v._0)) : e;
        case "VerticalTo":
        var h = r;
        return "VerticalTo" === h.ctor ? ka(u(l, s._0, h._0)) : e;
        case "Curve":
        var T = s._0,
        D = r;
        if ("Curve" === D.ctor) {
            var B = D._0;
            return Ca({
                control1: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(T.control1), Zt(B.control1)),
                    _1: u(l, Kt(T.control1), Kt(B.control1))
                },
                control2: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(T.control2), Zt(B.control2)),
                    _1: u(l, Kt(T.control2), Kt(B.control2))
                },
                point: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(T.point), Zt(B.point)),
                    _1: u(l, Kt(T.point), Kt(B.point))
                }
            })
        }
        return e;
        case "CurveTo":
        var w = s._0,
        V = r;
        if ("CurveTo" === V.ctor) {
            var P = V._0;
            return Pa({
                control1: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(w.control1), Zt(P.control1)),
                    _1: u(l, Kt(w.control1), Kt(P.control1))
                },
                control2: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(w.control2), Zt(P.control2)),
                    _1: u(l, Kt(w.control2), Kt(P.control2))
                },
                point: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(w.point), Zt(P.point)),
                    _1: u(l, Kt(w.point), Kt(P.point))
                }
            })
        }
        return e;
        case "Quadratic":
        var C = s._0,
        k = r;
        if ("Quadratic" === k.ctor) {
            var S = k._0;
            return Va({
                control: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(C.control), Zt(S.control)),
                    _1: u(l, Kt(C.control), Kt(S.control))
                },
                point: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(C.point), Zt(S.point)),
                    _1: u(l, Kt(C.point), Kt(S.point))
                }
            })
        }
        return e;
        case "QuadraticTo":
        var L = s._0,
        E = r;
        if ("QuadraticTo" === E.ctor) {
            var x = E._0;
            return wa({
                control: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(L.control), Zt(x.control)),
                    _1: u(l, Kt(L.control), Kt(x.control))
                },
                point: {
                    ctor: "_Tuple2",
                    _0: u(l, Zt(L.point), Zt(x.point)),
                    _1: u(l, Kt(L.point), Kt(x.point))
                }
            })
        }
        return e;
        case "SmoothQuadratic":
        var I = r;
        return "SmoothQuadratic" === I.ctor ? Ba(c(X, t(function(e, t) {
            var r = e,
            n = t;
            return {
                ctor: "_Tuple2",
                _0: u(l, r._0, n._0),
                _1: u(l, r._1, n._1)
            }
        }), s._0, I._0)) : e;
        case "SmoothQuadraticTo":
        var R = r;
        return "SmoothQuadraticTo" === R.ctor ? Da(c(X, t(function(e, t) {
            var r = e,
            n = t;
            return {
                ctor: "_Tuple2",
                _0: u(l, r._0, n._0),
                _1: u(l, r._1, n._1)
            }
        }), s._0, R._0)) : e;
        case "Smooth":
        var A = r;
        return "Smooth" === A.ctor ? Ta(c(X, t(function(e, t) {
            var r = e,
            n = t;
            return {
                ctor: "_Tuple2",
                _0: u(l, r._0, n._0),
                _1: u(l, r._1, n._1)
            }
        }), s._0, A._0)) : e;
        case "SmoothTo":
        var N = r;
        return "SmoothTo" === N.ctor ? ha(c(X, t(function(e, t) {
            var r = e,
            n = t;
            return {
                ctor: "_Tuple2",
                _0: u(l, r._0, n._0),
                _1: u(l, r._1, n._1)
            }
        }), s._0, N._0)) : e;
        case "ClockwiseArc":
        var q = s._0,
        M = r;
        if ("ClockwiseArc" === M.ctor) {
            var O = M._0;
            return va((n = q.endAngle, a = q.startAngle, i = q.radius, f = q.y, o = q.x, p.update(q, {
                x: u(l, o, O.x),
                y: u(l, f, O.y),
                radius: u(l, i, O.radius),
                startAngle: u(l, a, O.startAngle),
                endAngle: u(l, n, O.endAngle)
            })))
        }
        return e;
        case "AntiClockwiseArc":
        var F = s._0,
        z = r;
        if ("AntiClockwiseArc" === z.ctor) {
            var U = z._0;
            return ya(function() {
                var e = F.endAngle,
                t = F.startAngle,
                r = F.radius,
                n = F.y,
                a = F.x;
                return p.update(F, {
                    x: u(l, a, U.x),
                    y: u(l, n, U.y),
                    radius: u(l, r, U.radius),
                    startAngle: u(l, t, U.startAngle),
                    endAngle: u(l, e, U.endAngle)
                })
            }())
        }
        return e;
        default:
        return ga
    }
}),
Oa = r(function(e, r, n) {
    var a = t(function(t, r) {
        var n = e ? p.update(t, {
            interpolationOverride: J(r.interpolation)
        }) : t,
        a = n.interpolationOverride;
        if ("Nothing" === a.ctor) {
            var i = n.interpolation;
            return "Easing" === i.ctor ? p.update(n, {
                target: r.position,
                interpolation: aa(p.update(i._0, {
                    start: t.position,
                    progress: 0
                }))
            }) : p.update(n, {
                target: r.position
            })
        }
        var f = a._0;
        return "Easing" === f.ctor ? p.update(n, {
            target: r.position,
            interpolationOverride: J(aa(p.update(f._0, {
                start: t.position,
                progress: 0
            })))
        }) : p.update(n, {
            target: r.position
        })
    }),
    i = r;
    switch (i.ctor) {
        case "ExactProperty":
        return u(ba, i._0, i._1);
        case "ColorProperty":
        var f = n;
        return "ColorProperty" === f.ctor ? s(ma, i._0, u(a, i._1, f._1), u(a, i._2, f._2), u(a, i._3, f._3), u(a, i._4, f._4)) : r;
        case "ShadowProperty":
        var o = i._2,
        d = n;
        if ("ShadowProperty" === d.ctor) {
            var _ = d._2;
            return c(pa, i._0, i._1, {
                offsetX: u(a, o.offsetX, _.offsetX),
                offsetY: u(a, o.offsetY, _.offsetY),
                size: u(a, o.size, _.size),
                blur: u(a, o.blur, _.blur),
                red: u(a, o.red, _.red),
                green: u(a, o.green, _.green),
                blue: u(a, o.blue, _.blue),
                alpha: u(a, o.alpha, _.alpha)
            })
        }
        return r;
        case "Property":
        var m = n;
        return "Property" === m.ctor ? u(_a, i._0, u(a, i._1, m._1)) : r;
        case "Property2":
        var b = n;
        return "Property2" === b.ctor ? c(da, i._0, u(a, i._1, b._1), u(a, i._2, b._2)) : r;
        case "Property3":
        var g = n;
        return "Property3" === g.ctor ? l(sa, i._0, u(a, i._1, g._1), u(a, i._2, g._2), u(a, i._3, g._3)) : r;
        case "Property4":
        var y = n;
        return "Property4" === y.ctor ? s(la, i._0, u(a, i._1, y._1), u(a, i._2, y._2), u(a, i._3, y._3), u(a, i._4, y._4)) : r;
        case "AngleProperty":
        var v = n;
        return "AngleProperty" === v.ctor ? u(ca, i._0, u(a, i._1, v._1)) : r;
        case "Points":
        var h = n;
        if ("Points" === h.ctor) {
            var T = u(Qn, i._0, h._0),
            D = T._0,
            B = T._1;
            return ua(c(X, t(function(e, t) {
                var r = e,
                n = t;
                return {
                    ctor: "_Tuple2",
                    _0: u(a, r._0, n._0),
                    _1: u(a, r._1, n._1)
                }
            }), D, B))
        }
        return r;
        default:
        var w = n;
        return "Path" === w.ctor ? oa(c(X, Ma, i._0, w._0)) : r
    }
}),
Fa = r(function(e, t, r) {
    return u(ue, function(t) {
        var r = t;
        return "Just" === r._1.ctor ? J(c(Oa, e, r._0, r._1._0)) : J(r._0)
    }, u(Gn, t, r))
}),
za = t(function(e, t) {
    var r = function(t) {
        return u(ie, function(t) {
            var r = t;
            return {
                ctor: "_Tuple2",
                _0: u(ia, e, r._0),
                _1: u(ia, e, r._1)
            }
        }, t)
    },
    n = t;
    switch (n.ctor) {
        case "Move":
        return u(Aa, u(ia, e, n._0), u(ia, e, n._1));
        case "MoveTo":
        return u(Ra, u(ia, e, n._0), u(ia, e, n._1));
        case "Line":
        return u(Ia, u(ia, e, n._0), u(ia, e, n._1));
        case "LineTo":
        return u(xa, u(ia, e, n._0), u(ia, e, n._1));
        case "Horizontal":
        return Ea(u(ia, e, n._0));
        case "HorizontalTo":
        return La(u(ia, e, n._0));
        case "Vertical":
        return Sa(u(ia, e, n._0));
        case "VerticalTo":
        return ka(u(ia, e, n._0));
        case "Curve":
        var a = n._0.point,
        i = n._0.control2,
        f = n._0.control1;
        return Ca({
            control1: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(f)),
                _1: u(ia, e, Kt(f))
            },
            control2: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(i)),
                _1: u(ia, e, Kt(i))
            },
            point: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(a)),
                _1: u(ia, e, Kt(a))
            }
        });
        case "CurveTo":
        var o = n._0.point,
        c = n._0.control2,
        l = n._0.control1;
        return Pa({
            control1: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(l)),
                _1: u(ia, e, Kt(l))
            },
            control2: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(c)),
                _1: u(ia, e, Kt(c))
            },
            point: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(o)),
                _1: u(ia, e, Kt(o))
            }
        });
        case "Quadratic":
        var s = n._0.point,
        d = n._0.control;
        return Va({
            control: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(d)),
                _1: u(ia, e, Kt(d))
            },
            point: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(s)),
                _1: u(ia, e, Kt(s))
            }
        });
        case "QuadraticTo":
        var _ = n._0.point,
        m = n._0.control;
        return wa({
            control: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(m)),
                _1: u(ia, e, Kt(m))
            },
            point: {
                ctor: "_Tuple2",
                _0: u(ia, e, Zt(_)),
                _1: u(ia, e, Kt(_))
            }
        });
        case "SmoothQuadratic":
        return Ba(r(n._0));
        case "SmoothQuadraticTo":
        return Da(r(n._0));
        case "Smooth":
        return Ta(r(n._0));
        case "SmoothTo":
        return ha(r(n._0));
        case "ClockwiseArc":
        var b = n._0;
        return va(p.update(b, {
            x: u(ia, e, b.x),
            y: u(ia, e, b.y),
            radius: u(ia, e, b.radius),
            startAngle: u(ia, e, b.startAngle),
            endAngle: u(ia, e, b.endAngle)
        }));
        case "AntiClockwiseArc":
        var g = n._0;
        return ya(p.update(g, {
            x: u(ia, e, g.x),
            y: u(ia, e, g.y),
            radius: u(ia, e, g.radius),
            startAngle: u(ia, e, g.startAngle),
            endAngle: u(ia, e, g.endAngle)
        }));
        default:
        return ga
    }
}),
Ua = t(function(e, t) {
    return u(ie, function(t) {
        var r = t;
        switch (r.ctor) {
            case "ExactProperty":
            return u(ba, r._0, r._1);
            case "Property":
            return u(_a, r._0, u(ia, e, r._1));
            case "Property2":
            return c(da, r._0, u(ia, e, r._1), u(ia, e, r._2));
            case "Property3":
            return l(sa, r._0, u(ia, e, r._1), u(ia, e, r._2), u(ia, e, r._3));
            case "Property4":
            return s(la, r._0, u(ia, e, r._1), u(ia, e, r._2), u(ia, e, r._3), u(ia, e, r._4));
            case "AngleProperty":
            return u(ca, r._0, u(ia, e, r._1));
            case "ColorProperty":
            return s(ma, r._0, u(ia, e, r._1), u(ia, e, r._2), u(ia, e, r._3), u(ia, e, r._4));
            case "ShadowProperty":
            var n = r._2;
            return c(pa, r._0, r._1, {
                offsetX: u(ia, e, n.offsetX),
                offsetY: u(ia, e, n.offsetY),
                size: u(ia, e, n.size),
                blur: u(ia, e, n.blur),
                red: u(ia, e, n.red),
                green: u(ia, e, n.green),
                blue: u(ia, e, n.blue),
                alpha: u(ia, e, n.alpha)
            });
            case "Points":
            return ua(u(ie, function(t) {
                var r = t;
                return {
                    ctor: "_Tuple2",
                    _0: u(ia, e, r._0),
                    _1: u(ia, e, r._1)
                }
            }, r._0));
            default:
            return oa(u(ie, za(e), r._0))
        }
    }, t)
}),
Ha = t(function(e, t) {
    return u(Y, jn, u(Ua, 0, c(Fa, !1, e, t)))
}),
Qa = r(function(e, t, r) {
    e: for (;;) {
        var n = ne(t);
        if ("Nothing" === n.ctor) return {
            ctor: "_Tuple3",
            _0: e,
            _1: {
                ctor: "[]"
            },
            _2: {
                ctor: "[]"
            }
        };
        var a = n._0;
        switch (a.ctor) {
            case "Wait":
            var i = a._0;
            if (p.cmp(i, 0) < 1) {
                e = e, t = u(W, 1, t), r = r;
                continue e
            }
            return {
                ctor: "_Tuple3",
                _0: e,
                _1: {
                    ctor: "[]"
                },
                _2: {
                    ctor: "::",
                    _0: ta(i - r),
                    _1: u(W, 1, t)
                }
            };
            case "Send":
            var f = c(Qa, e, u(W, 1, t), r),
            o = f._0,
            l = f._1,
            s = f._2;
            return {
                ctor: "_Tuple3",
                _0: o,
                _1: {
                    ctor: "::",
                    _0: a._0,
                    _1: l
                },
                _2: s
            };
            case "To":
            var d = a._0;
            if (u(Ha, e, d)) return {
                ctor: "_Tuple3",
                _0: e,
                _1: {
                    ctor: "[]"
                },
                _2: u(W, 1, t)
            };
            e = c(Fa, !1, e, d), t = {
                ctor: "::",
                _0: na,
                _1: u(W, 1, t)
            }, r = r;
            continue e;
            case "ToWith":
            var _ = a._0;
            if (u(Ha, e, _)) return {
                ctor: "_Tuple3",
                _0: e,
                _1: {
                    ctor: "[]"
                },
                _2: u(W, 1, t)
            };
            e = c(Fa, !0, e, _), t = {
                ctor: "::",
                _0: na,
                _1: u(W, 1, t)
            }, r = r;
            continue e;
            case "Set":
            e = u(Xn, e, a._0), t = u(W, 1, t), r = r;
            continue e;
            case "Step":
            var m = u(Ua, r, e);
            return u(Y, jn, m) ? {
                ctor: "_Tuple3",
                _0: u(ie, qa(function(e) {
                    return p.update(e, {
                        interpolationOverride: Q
                    })
                }), m),
                _1: {
                    ctor: "[]"
                },
                _2: u(W, 1, t)
            } : {
                ctor: "_Tuple3",
                _0: m,
                _1: {
                    ctor: "[]"
                },
                _2: t
            };
            case "Loop":
            var b = a._0;
            e = e, t = u(S["++"], b, {
                ctor: "::",
                _0: Zn(b),
                _1: {
                    ctor: "[]"
                }
            }), r = r;
            continue e;
            default:
            var g = a._1,
            y = a._0;
            if (p.cmp(y, 0) < 1) {
                e = e, t = u(W, 1, t), r = r;
                continue e
            }
            e = e, t = u(S["++"], g, u(S["++"], {
                ctor: "::",
                _0: u(ea, y - 1, g),
                _1: {
                    ctor: "[]"
                }
            }, u(W, 1, t))), r = r;
            continue e
        }
    }
}),
Ja = t(function(e, t) {
    var r, n = e,
    a = t._0,
    i = u($n, n._0, a.timing),
    f = u(_e, function(e) {
        var t = e;
        return p.cmp(t._0, 0) < 1
    }, u(ie, function(e) {
        var t = e;
        return {
            ctor: "_Tuple2",
            _0: t._0 - i.dt,
            _1: t._1
        }
    }, a.interruption)),
    o = f._0,
    l = f._1,
    s = "Just" === (r = ne(o)).ctor ? {
        ctor: "_Tuple2",
        _0: r._0._1,
        _1: u(ie, qa(function(e) {
            return p.update(e, {
                interpolationOverride: Q
            })
        }), a.style)
    } : {
        ctor: "_Tuple2",
        _0: a.steps,
        _1: a.style
    },
    d = c(Qa, s._1, s._0, i.dt),
    _ = d._0,
    m = d._1,
    g = d._2;
    return {
        ctor: "_Tuple2",
        _0: Yn(p.update(a, {
            timing: i,
            interruption: l,
            running: !p.eq(ee(g), 0) || !p.eq(ee(l), 0),
            steps: g,
            style: _
        })),
        _1: A(u(ie, function(e) {
            return u(qe, b, ke(e))
        }, m))
    }
}),
ja = t(function(e, t) {
    for (;;) {
        var r = t;
        if ("[]" === r.ctor) return {
            ctor: "[]"
        };
        if (!e(r._0)) return t;
        e = e, t = r._1
    }
}),
$a = function(e) {
    return t(function(t, r) {
        for (;;) {
            var n = r;
            if ("[]" === n.ctor) return ce(t);
            var a = n._0;
            if (!e(a)) return ce(t);
            t = {
                ctor: "::",
                _0: a,
                _1: t
            }, r = n._1
        }
    })({
        ctor: "[]"
    })
},
Wa = t(function(e, t) {
    return {
        ctor: "_Tuple2",
        _0: u($a, e, t),
        _1: u(ja, e, t)
    }
}),
Xa = t(function(e, t) {
    var r = t;
    if ("[]" === r.ctor) return {
        ctor: "[]"
    };
    var n = r._0,
    a = u(Wa, e(n), r._1),
    i = a._0,
    f = a._1;
    return {
        ctor: "::",
        _0: {
            ctor: "::",
            _0: n,
            _1: i
        },
        _1: u(Xa, e, f)
    }
}),
Ga = function(e) {
    var t = function(e) {
        return u($e, " ", u(ie, function(e) {
            var t = e;
            return u(S["++"], g(t._0.position), u(S["++"], ",", g(t._1.position)))
        }, e))
    },
    r = e;
    switch (r.ctor) {
        case "Move":
        return u(S["++"], "m ", u(S["++"], g(r._0.position), u(S["++"], ",", g(r._1.position))));
        case "MoveTo":
        return u(S["++"], "M ", u(S["++"], g(r._0.position), u(S["++"], ",", g(r._1.position))));
        case "Line":
        return u(S["++"], "l ", u(S["++"], g(r._0.position), u(S["++"], ",", g(r._1.position))));
        case "LineTo":
        return u(S["++"], "L ", u(S["++"], g(r._0.position), u(S["++"], ",", g(r._1.position))));
        case "Horizontal":
        return u(S["++"], "h ", g(r._0.position));
        case "HorizontalTo":
        return u(S["++"], "H ", g(r._0.position));
        case "Vertical":
        return u(S["++"], "v ", g(r._0.position));
        case "VerticalTo":
        return u(S["++"], "V ", g(r._0.position));
        case "Curve":
        var n = r._0.point,
        a = n._0,
        i = n._1,
        f = r._0.control2,
        o = f._0,
        c = f._1,
        l = r._0.control1,
        s = l._0,
        d = l._1;
        return u(S["++"], "c ", u(S["++"], g(s.position), u(S["++"], " ", u(S["++"], g(d.position), u(S["++"], ", ", u(S["++"], g(o.position), u(S["++"], " ", u(S["++"], g(c.position), u(S["++"], ", ", u(S["++"], g(a.position), u(S["++"], " ", g(i.position))))))))))));
        case "CurveTo":
        var _ = r._0.point,
        m = (a = _._0, i = _._1, r._0.control2),
        b = (o = m._0, c = m._1, r._0.control1);
        s = b._0, d = b._1;
        return u(S["++"], "C ", u(S["++"], g(s.position), u(S["++"], " ", u(S["++"], g(d.position), u(S["++"], ", ", u(S["++"], g(o.position), u(S["++"], " ", u(S["++"], g(c.position), u(S["++"], ", ", u(S["++"], g(a.position), u(S["++"], " ", g(i.position))))))))))));
        case "Quadratic":
        var y = r._0.point,
        v = (a = y._0, i = y._1, r._0.control);
        s = v._0, d = v._1;
        return u(S["++"], "q ", u(S["++"], g(s.position), u(S["++"], " ", u(S["++"], g(d.position), u(S["++"], ", ", u(S["++"], g(a.position), u(S["++"], " ", g(i.position))))))));
        case "QuadraticTo":
        var h = r._0.point,
        T = (a = h._0, i = h._1, r._0.control);
        s = T._0, d = T._1;
        return u(S["++"], "Q ", u(S["++"], g(s.position), u(S["++"], " ", u(S["++"], g(d.position), u(S["++"], ", ", u(S["++"], g(a.position), u(S["++"], " ", g(i.position))))))));
        case "SmoothQuadratic":
        return u(S["++"], "t ", t(r._0));
        case "SmoothQuadraticTo":
        return u(S["++"], "T ", t(r._0));
        case "Smooth":
        return u(S["++"], "s ", t(r._0));
        case "SmoothTo":
        return u(S["++"], "S ", t(r._0));
        case "ClockwiseArc":
        var D = r._0,
        B = D.endAngle.position - D.startAngle.position;
        if (p.cmp(B, 360 - 1e-6) > 0) {
            var w = D.radius.position * C(x(D.startAngle.position)),
            V = D.radius.position * k(x(D.startAngle.position));
            return u(S["++"], "A ", u(S["++"], g(D.radius.position), u(S["++"], ",", u(S["++"], g(D.radius.position), u(S["++"], ",0,1,1,", u(S["++"], g(D.x.position - V), u(S["++"], ",", u(S["++"], g(D.y.position - w), u(S["++"], " A ", u(S["++"], g(D.radius.position), u(S["++"], ",", u(S["++"], g(D.radius.position), u(S["++"], ",0,1,1,", u(S["++"], g(D.x.position + V), u(S["++"], ",", g(D.y.position + w))))))))))))))))
        }
        return u(S["++"], "A ", u(S["++"], g(D.radius.position), u(S["++"], ",", u(S["++"], g(D.radius.position), u(S["++"], " 0 ", u(S["++"], p.cmp(B, 180) > -1 ? "1" : "0", u(S["++"], " ", u(S["++"], "1", u(S["++"], " ", u(S["++"], g(D.x.position + D.radius.position * k(x(D.endAngle.position))), u(S["++"], ",", g(D.y.position + D.radius.position * C(x(D.endAngle.position))))))))))))));
        case "AntiClockwiseArc":
        var P = r._0;
        B = P.endAngle.position - P.startAngle.position;
        if (p.cmp(B, 360 - 1e-6) > 0) {
            w = P.radius.position * C(x(P.startAngle.position)), V = P.radius.position * k(x(P.startAngle.position));
            return u(S["++"], "A ", u(S["++"], g(P.radius.position), u(S["++"], ",", u(S["++"], g(P.radius.position), u(S["++"], ",0,1,0,", u(S["++"], g(P.x.position - V), u(S["++"], ",", u(S["++"], g(P.y.position - w), u(S["++"], " A ", u(S["++"], g(P.radius.position), u(S["++"], ",", u(S["++"], g(P.radius.position), u(S["++"], ",0,1,1,", u(S["++"], g(P.x.position + V), u(S["++"], ",", g(P.y.position + w))))))))))))))))
        }
        return u(S["++"], "A ", u(S["++"], g(P.radius.position), u(S["++"], ",", u(S["++"], g(P.radius.position), u(S["++"], " 0 ", u(S["++"], p.cmp(P.startAngle.position - P.endAngle.position, 180) > -1 ? "1" : "0", u(S["++"], " ", u(S["++"], "0", u(S["++"], " ", u(S["++"], g(P.x.position + P.radius.position * k(P.endAngle.position)), u(S["++"], ",", g(P.y.position + P.radius.position * C(P.endAngle.position)))))))))))));
        default:
        return "z"
    }
},
Ya = t(function(e, t) {
    var r = e;
    switch (r.ctor) {
        case "ExactProperty":
        return r._1;
        case "ColorProperty":
        return u(S["++"], "rgba(", u(S["++"], g(T(r._1.position)), u(S["++"], ",", u(S["++"], g(T(r._2.position)), u(S["++"], ",", u(S["++"], g(T(r._3.position)), u(S["++"], ",", u(S["++"], g(r._4.position), ")"))))))));
        case "ShadowProperty":
        var n = r._2,
        a = r._0;
        return u(S["++"], r._1 ? "inset " : "", u(S["++"], g(n.offsetX.position), u(S["++"], "px", u(S["++"], " ", u(S["++"], g(n.offsetY.position), u(S["++"], "px", u(S["++"], " ", u(S["++"], g(n.blur.position), u(S["++"], "px", u(S["++"], " ", u(S["++"], p.eq(a, "text-shadow") || p.eq(a, "drop-shadow") ? "" : u(S["++"], g(n.size.position), u(S["++"], "px", " ")), u(S["++"], "rgba(", u(S["++"], g(T(n.red.position)), u(S["++"], ", ", u(S["++"], g(T(n.green.position)), u(S["++"], ", ", u(S["++"], g(T(n.blue.position)), u(S["++"], ", ", u(S["++"], g(n.alpha.position), ")")))))))))))))))))));
        case "Property":
        var i = r._1;
        return u(S["++"], g(i.position), i.unit);
        case "Property2":
        var f = r._2,
        o = r._1;
        return u(S["++"], g(o.position), u(S["++"], o.unit, u(S["++"], t, u(S["++"], g(f.position), f.unit))));
        case "Property3":
        var c = r._3,
        l = r._2,
        s = r._1;
        return u(S["++"], g(s.position), u(S["++"], s.unit, u(S["++"], t, u(S["++"], g(l.position), u(S["++"], l.unit, u(S["++"], t, u(S["++"], g(c.position), c.unit)))))));
        case "Property4":
        var d = r._4,
        _ = r._3,
        m = r._2,
        b = r._1;
        return u(S["++"], g(b.position), u(S["++"], b.unit, u(S["++"], t, u(S["++"], g(m.position), u(S["++"], m.unit, u(S["++"], t, u(S["++"], g(_.position), u(S["++"], _.unit, u(S["++"], t, u(S["++"], g(d.position), d.unit))))))))));
        case "AngleProperty":
        var y = r._1;
        return u(S["++"], g(y.position), y.unit);
        case "Points":
        return u($e, " ", u(ie, function(e) {
            var t = e;
            return u(S["++"], g(t._0.position), u(S["++"], ",", g(t._1.position)))
        }, r._0));
        default:
        return u($e, " ", u(ie, Ga, r._0))
    }
}),
Ka = function(e) {
    return u(Qe, "attr:", Wn(e)) || function() {
        var t = e;
        switch (t.ctor) {
            case "Points":
            case "Path":
            return !0;
            case "Property":
            var r = t._0;
            return p.eq(r, "cx") || p.eq(r, "cy") || p.eq(r, "x") || p.eq(r, "y") || p.eq(r, "rx") || p.eq(r, "ry") || p.eq(r, "r") || p.eq(r, "offset");
            case "Property4":
            return p.eq(t._0, "viewBox");
            default:
            return !1
        }
    }()
},
Za = function(e) {
    var t = Kt(e),
    r = Zt(e);
    switch (r) {
        case "transform":
        case "transform-origin":
        case "filter":
        return {
            ctor: "::",
            _0: e,
            _1: {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: u(S["++"], "-ms-", r),
                    _1: t
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: u(S["++"], "-webkit-", r),
                        _1: t
                    },
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        };
        default:
        return {
            ctor: "::",
            _0: e,
            _1: {
                ctor: "[]"
            }
        }
    }
},
ei = function(e) {
    return u(te, Wn(e), {
        ctor: "::",
        _0: "rotate",
        _1: {
            ctor: "::",
            _0: "rotateX",
            _1: {
                ctor: "::",
                _0: "rotateY",
                _1: {
                    ctor: "::",
                    _0: "rotateZ",
                    _1: {
                        ctor: "::",
                        _0: "rotate3d",
                        _1: {
                            ctor: "::",
                            _0: "translate",
                            _1: {
                                ctor: "::",
                                _0: "translate3d",
                                _1: {
                                    ctor: "::",
                                    _0: "scale",
                                    _1: {
                                        ctor: "::",
                                        _0: "scale3d",
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
},
ti = function(e) {
    var r;
    u(ie, function(e) {
        var t = ne(e);
        return "Nothing" === t.ctor ? "" : p.cmp(ee(e), 1) > 0 ? u(Yt, "elm-style-animation", u(S["++"], 'The "', u(S["++"], t._0, '" css property is listed more than once.  Only the last instance will be used.'))) : ""
    }, u(Xa, t(function(e, t) {
        return p.eq(e, t)
    }), (r = u(ie, Wn, u(fe, function(e) {
        return !ei(e)
    }, e)), u($, b, r))));
    return e
},
ri = function(e) {
    if (u(Qe, "attr:", Wn(e))) return J(u(Tn, u(Je, 5, Wn(e)), u(Ya, e, " ")));
    var t = e;
    switch (t.ctor) {
        case "Points":
        return J(On(u(Ya, e, " ")));
        case "Path":
        return J(zn(u(Ya, e, " ")));
        case "Property":
        switch (t._0) {
            case "x":
            return J(Rn(u(Ya, e, " ")));
            case "y":
            return J(In(u(Ya, e, " ")));
            case "cx":
            return J(Hn(u(Ya, e, " ")));
            case "cy":
            return J(Un(u(Ya, e, " ")));
            case "rx":
            return J(qn(u(Ya, e, " ")));
            case "ry":
            return J(Nn(u(Ya, e, " ")));
            case "r":
            return J(Mn(u(Ya, e, " ")));
            case "offset":
            return J(Fn(u(Ya, e, " ")));
            default:
            return Q
        }
        case "Property4":
        return p.eq(t._0, "viewBox") ? J(An(u(Ya, e, " "))) : Q;
        default:
        return Q
    }
},
ni = function(e) {
    var r = u(_e, Ka, e._0.style),
    n = r._0,
    a = r._1,
    i = c(Z, t(function(e, t) {
        var r = t,
        n = r._1,
        a = r._0,
        i = r._2;
        return ei(e) ? {
            ctor: "_Tuple3",
            _0: a,
            _1: u(S["++"], n, {
                ctor: "::",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }),
            _2: i
        } : function(e) {
            return u(te, Wn(e), {
                ctor: "::",
                _0: "filter-url",
                _1: {
                    ctor: "::",
                    _0: "blur",
                    _1: {
                        ctor: "::",
                        _0: "brightness",
                        _1: {
                            ctor: "::",
                            _0: "contrast",
                            _1: {
                                ctor: "::",
                                _0: "grayscale",
                                _1: {
                                    ctor: "::",
                                    _0: "hue-rotate",
                                    _1: {
                                        ctor: "::",
                                        _0: "invert",
                                        _1: {
                                            ctor: "::",
                                            _0: "saturate",
                                            _1: {
                                                ctor: "::",
                                                _0: "sepia",
                                                _1: {
                                                    ctor: "::",
                                                    _0: "drop-shadow",
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }(e) ? {
            ctor: "_Tuple3",
            _0: a,
            _1: n,
            _2: u(S["++"], i, {
                ctor: "::",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            })
        } : {
            ctor: "_Tuple3",
            _0: u(S["++"], a, {
                ctor: "::",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }),
            _1: n,
            _2: i
        }
    }), {
        ctor: "_Tuple3",
        _0: {
            ctor: "[]"
        },
        _1: {
            ctor: "[]"
        },
        _2: {
            ctor: "[]"
        }
    }, a),
    f = i._0,
    o = i._1,
    l = i._2,
    s = u(ie, function(e) {
        return {
            ctor: "_Tuple2",
            _0: Wn(e),
            _1: u(Ya, e, " ")
        }
    }, f),
    d = re(o) ? {
        ctor: "[]"
    } : {
        ctor: "::",
        _0: {
            ctor: "_Tuple2",
            _0: "transform",
            _1: u($e, " ", u(ie, function(e) {
                return p.eq(Wn(e), "rotate3d") ? function(e) {
                    var t = e;
                    if ("Property3" === t.ctor) {
                        var r = t._3,
                        n = t._2,
                        a = t._1;
                        return u(S["++"], "rotateX(", u(S["++"], g(a.position), u(S["++"], a.unit, u(S["++"], ") rotateY(", u(S["++"], g(n.position), u(S["++"], n.unit, u(S["++"], ") rotateZ(", u(S["++"], g(r.position), u(S["++"], r.unit, ")")))))))))
                    }
                    return ""
                }(e) : u(S["++"], Wn(e), u(S["++"], "(", u(S["++"], u(Ya, e, ", "), ")")))
            }, o))
        },
        _1: {
            ctor: "[]"
        }
    },
    _ = re(l) ? {
        ctor: "[]"
    } : {
        ctor: "::",
        _0: {
            ctor: "_Tuple2",
            _0: "filter",
            _1: u($e, " ", u(ie, function(e) {
                var t = Wn(e);
                return p.eq(t, "filter-url") ? u(S["++"], 'url("', u(S["++"], u(Ya, e, ", "), '")')) : u(S["++"], Wn(e), u(S["++"], "(", u(S["++"], u(Ya, e, ", "), ")")))
            }, l))
        },
        _1: {
            ctor: "[]"
        }
    };
    return {
        ctor: "_Tuple2",
        _0: u(S["++"], d, u(S["++"], _, s)),
        _1: n
    }
},
ai = function(e) {
    var t = ni(e),
    r = t._0,
    n = t._1;
    return {
        ctor: "::",
        _0: Cn(u(de, Za, r)),
        _1: u(ue, ri, n)
    }
},
ii = (t(function(e, t) {
    return u(ba, e, t)
}), t(function(e, t) {
    return {
        position: e,
        velocity: 0,
        target: e,
        unit: t,
        interpolation: fa({
            stiffness: 170,
            damping: 26
        }),
        interpolationOverride: Q
    }
})),
fi = (r(function(e, t, r) {
    return u(_a, e, u(ii, t, r))
}), r(function(e, t, r) {
    var n = t,
    a = r;
    return c(da, e, u(ii, n._0, n._1), u(ii, a._0, a._1))
})),
oi = (r(function(e, t, r) {
    return c(fi, u(S["++"], "attr:", e), t, r)
}), r(function(e, t, r) {
    return c(fi, e, t, r)
}), n(function(e, t, r, n) {
    var a = t,
    i = r,
    f = n;
    return l(sa, e, u(ii, a._0, a._1), u(ii, i._0, i._1), u(ii, f._0, f._1))
})),
ui = (n(function(e, t, r, n) {
    return l(oi, u(S["++"], "attr:", e), t, r, n)
}), r(function(e, t, r) {
    var n = t,
    a = r;
    return l(oi, "rotate3d", {
        ctor: "_Tuple2",
        _0: e._0,
        _1: "rad"
    }, {
        ctor: "_Tuple2",
        _0: n._0,
        _1: "rad"
    }, {
        ctor: "_Tuple2",
        _0: a._0,
        _1: "rad"
    })
}), a(function(e, t, r, n, a) {
    var i = t,
    f = r,
    o = n,
    c = a;
    return s(la, e, u(ii, i._0, i._1), u(ii, f._0, f._1), u(ii, o._0, o._1), u(ii, c._0, c._1))
})),
ci = (a(function(e, t, r, n, a) {
    return s(ui, u(S["++"], "attr:", e), t, r, n, a)
}), n(function(e, t, r, n) {
    return s(ui, "viewBox", {
        ctor: "_Tuple2",
        _0: e,
        _1: ""
    }, {
        ctor: "_Tuple2",
        _0: t,
        _1: ""
    }, {
        ctor: "_Tuple2",
        _0: r,
        _1: ""
    }, {
        ctor: "_Tuple2",
        _0: n,
        _1: ""
    })
}), r(function(e, t, r) {
    return u(_a, u(S["++"], "attr:", e), u(ii, t, r))
}), t(function(e, t) {
    var r = Pr(t),
    n = r.red,
    a = r.green,
    i = r.blue,
    f = r.alpha;
    return s(ma, u(S["++"], "attr:", e), u(ii, y(n), ""), u(ii, y(a), ""), u(ii, y(i), ""), u(ii, f, ""))
}), r(function(e, t, r) {
    return u(_a, e, u(ii, t, r))
})),
li = function(e) {
    return c(ci, "opacity", e, "")
},
si = (t(function(e, t) {
    var r = Pr(t),
    n = r.red,
    a = r.green,
    i = r.blue,
    f = r.alpha;
    return s(ma, e, u(ii, y(n), ""), u(ii, y(a), ""), u(ii, y(i), ""), u(ii, f, ""))
}), r(function(e, t, r) {
    return l(sa, "scale3d", u(ii, e, ""), u(ii, t, ""), u(ii, r, ""))
}), t(function(e, t) {
    return u(Aa, u(ii, e, ""), u(ii, t, ""))
}), t(function(e, t) {
    return u(Ra, u(ii, e, ""), u(ii, t, ""))
}), t(function(e, t) {
    return u(Ia, u(ii, e, ""), u(ii, t, ""))
}), t(function(e, t) {
    return u(xa, u(ii, e, ""), u(ii, t, ""))
}), function(e) {
    switch (e.ctor) {
        case "NoUnit":
        return "";
        case "Px":
        return "px";
        case "Percent":
        return "%";
        case "Rem":
        return "rem";
        case "Em":
        return "em";
        case "Ex":
        return "ex";
        case "Ch":
        return "ch";
        case "Vh":
        return "vh";
        case "Vw":
        return "vw";
        case "Vmin":
        return "vmin";
        case "Vmax":
        return "vmax";
        case "Mm":
        return "mm";
        case "Cm":
        return "cm";
        case "In":
        return "in";
        case "Pt":
        return "pt";
        default:
        return "pc"
    }
}),
di = (t(function(e, t) {
    var r = e,
    n = t;
    return c(fi, "background-position", {
        ctor: "_Tuple2",
        _0: r._0,
        _1: si(r._1)
    }, {
        ctor: "_Tuple2",
        _0: n._0,
        _1: si(n._1)
    })
}), t(function(e, t) {
    var r = e,
    n = t;
    return c(fi, "translate", {
        ctor: "_Tuple2",
        _0: r._0,
        _1: si(r._1)
    }, {
        ctor: "_Tuple2",
        _0: n._0,
        _1: si(n._1)
    })
}), r(function(e, t, r) {
    var n = e,
    a = t,
    i = r;
    return l(oi, "translate3d", {
        ctor: "_Tuple2",
        _0: n._0,
        _1: si(n._1)
    }, {
        ctor: "_Tuple2",
        _0: a._0,
        _1: si(a._1)
    }, {
        ctor: "_Tuple2",
        _0: i._0,
        _1: si(i._1)
    })
}), r(function(e, t, r) {
    var n = e,
    a = t,
    i = r;
    return l(oi, "transform-origin", {
        ctor: "_Tuple2",
        _0: n._0,
        _1: si(n._1)
    }, {
        ctor: "_Tuple2",
        _0: a._0,
        _1: si(a._1)
    }, {
        ctor: "_Tuple2",
        _0: i._0,
        _1: si(i._1)
    })
}), t(function(e, t) {
    return Zt(u(Ja, e, t))
})),
_i = function(e) {
    return e._0.running
},
pi = t(function(e, t) {
    return u(G, _i, t) ? u(F, e, tr(or(Kn))) : O
}),
mi = function(e) {
    var t = ne(e);
    if ("Nothing" === t.ctor) return {
        ctor: "_Tuple2",
        _0: 0,
        _1: {
            ctor: "[]"
        }
    };
    var r = t._0;
    if ("Wait" === r.ctor) {
        var n = mi(u(W, 1, e)),
        a = n._0,
        i = n._1;
        return {
            ctor: "_Tuple2",
            _0: r._0 + a,
            _1: i
        }
    }
    return {
        ctor: "_Tuple2",
        _0: 0,
        _1: e
    }
},
bi = t(function(e, t) {
    var r = t._0;
    return Yn(p.update(r, {
        interruption: {
            ctor: "::",
            _0: mi(e),
            _1: r.interruption
        },
        running: !0
    }))
}),
gi = (t(function(e, t) {
    var r = t._0;
    return Yn(p.update(r, {
        steps: u(S["++"], r.steps, e),
        running: !0
    }))
}), function(e) {
    return Yn({
        steps: {
            ctor: "[]"
        },
        style: e,
        timing: {
            current: 0,
            dt: 0
        },
        running: !1,
        interruption: {
            ctor: "[]"
        }
    })
}),
yi = (t(function(e, t) {
    return gi(u(ie, qa(function(t) {
        return p.update(t, {
            interpolation: e
        })
    }), ti(t)))
}), t(function(e, t) {
    return u(ea, e, t)
}), t(function(e, t) {
    return ra(u(ie, qa(function(t) {
        return p.update(t, {
            interpolation: e
        })
    }), t))
})),
vi = function(e) {
    return {
        ctor: "AtSpeed",
        _0: e
    }
},
hi = function(e) {
    var t = function(e) {
        var t = fa({
            stiffness: 170,
            damping: 26
        }),
        r = e;
        switch (r.ctor) {
            case "ExactProperty":
            return t;
            case "ColorProperty":
            return aa({
                progress: 1,
                start: 0,
                duration: 400,
                ease: b
            });
            case "ShadowProperty":
            case "Property":
            case "Property2":
            return t;
            case "Property3":
            return p.eq(r._0, "rotate3d") ? vi({
                perSecond: V
            }) : t;
            case "Property4":
            return t;
            case "AngleProperty":
            return vi({
                perSecond: V
            });
            case "Points":
            default:
            return t
        }
    }(e);
    return u(qa, function(e) {
        return p.update(e, {
            interpolation: t
        })
    }, e)
},
Ti = (a(function(e, t, r, n, a) {
    return {
        offsetX: e,
        offsetY: t,
        size: r,
        blur: n,
        color: a
    }
}), r(function(e, t, r) {
    return {
        control1: e,
        control2: t,
        point: r
    }
}), t(function(e, t) {
    return {
        control: e,
        point: t
    }
}), i(function(e, t, r, n, a, i) {
    return {
        x: e,
        y: t,
        radius: r,
        startAngle: n,
        endAngle: a,
        clockwise: i
    }
}), t(function(e, t) {
    return {
        ctor: "Length",
        _0: e,
        _1: t
    }
}), function(e) {
    return p.cmp(e, 10) < 0 ? u(S["++"], "0", g(e)) : g(e)
}),
Di = t(function(e, t) {
    return 86400 - (e - t.purchasedAt)
}),
Bi = t(function(e, t) {
    var r, n = u(Di, e, t),
    a = {
        ctor: "_Tuple2",
        _0: n / 3600 | 0,
        _1: u(L, n, 3600)
    },
    i = a._0,
    f = a._1,
    o = {
        ctor: "_Tuple2",
        _0: f / 60 | 0,
        _1: u(L, f, 60)
    },
    c = o._0,
    l = o._1;
    return u(yn, {
        ctor: "::",
        _0: (r = {
            ctor: "::",
            _0: {
                ctor: "_Tuple2",
                _0: "has-text-danger",
                _1: p.cmp(n, 300) < 0
            },
            _1: {
                ctor: "[]"
            }
        }, wn(u($e, " ", u(ie, Zt, u(fe, Kt, r))))),
        _1: {
            ctor: "[]"
        }
    }, {
        ctor: "::",
        _0: sn(u(S["++"], "resets in: ", u(S["++"], g(i), u(S["++"], ":", u(S["++"], Ti(c), u(S["++"], ":", Ti(l))))))),
        _1: {
            ctor: "[]"
        }
    })
}),
wi = t(function(e, t) {
    var r = u(We, ".", g(t));
    return "::" === r.ctor && "::" === r._1.ctor && "[]" === r._1._1.ctor ? u(S["++"], r._0, u(S["++"], ".", c(je, 0, e, r._1._0))) : g(t)
}),
Vi = t(function(e, t) {
    return u(ue, function(e) {
        return u(nt, e, t)
    }, e)
}),
Pi = function(e) {
    var t = e,
    r = t._1;
    return u(bn, {
        ctor: "[]"
    }, {
        ctor: "::",
        _0: u(gn, {
            ctor: "::",
            _0: Vn(u(S["++"], "https://etherscan.io/tx/", t._0)),
            _1: {
                ctor: "::",
                _0: Pn("_blank"),
                _1: {
                    ctor: "[]"
                }
            }
        }, {
            ctor: "::",
            _0: sn(u(S["++"], r.multiplier, u(S["++"], " @ ", u(wi, 6, r.oldPrice)))),
            _1: {
                ctor: "[]"
            }
        }),
        _1: {
            ctor: "[]"
        }
    })
},
Ci = t(function(e, t) {
    var r = "TransactionHash" === e.ctor ? "tx" : "address";
    return u(S["++"], "https://etherscan.io/", u(S["++"], r, u(S["++"], "/", t)))
}),
ki = R.outgoingPort("purchase", function(e) {
    return e
}),
Si = R.incomingPort("setBag", Ir),
Li = R.incomingPort("setBagSale", u(Rr, function(e) {
    return u(Rr, function(t) {
        return Ar({
            ctor: "_Tuple2",
            _0: e,
            _1: t
        })
    }, u(Or, 1, u(Rr, function(e) {
        return u(Rr, function(t) {
            return u(Rr, function(r) {
                return Ar({
                    multiplier: e,
                    oldPrice: t,
                    blockNumber: r
                })
            }, u(Fr, "blockNumber", Hr))
        }, u(Fr, "oldPrice", Ur))
    }, u(Fr, "multiplier", Jr))))
}, u(Or, 0, Jr))),
Ei = R.incomingPort("addPendingPurchase", Hr),
xi = R.incomingPort("setTransactionHash", Jr),
Ii = (n(function(e, t, r, n) {
    return {
        contractAddress: e,
        timeout: t,
        currentTime: r,
        myAddress: n
    }
}), f(function(e, t, r, n, a, i, f) {
    return {
        contractAddress: e,
        bags: t,
        currentTime: r,
        bagSales: n,
        pendingPurchases: a,
        transactionHash: i,
        myAddress: f
    }
}), o(function(e, t, r, n, a, i, f, o) {
    return {
        id: e,
        owner: t,
        sellingPrice: r,
        nextSellingPrice: n,
        level: a,
        multiplier: i,
        purchasedAt: f,
        style: o
    }
})),
Ri = (lr = qr, sr = Ii, dr = u(Fr, "id", Hr), _r = u(Fr, "owner", Jr), pr = u(Fr, "sellingPrice", Ur), mr = u(Fr, "nextSellingPrice", Ur), br = u(Fr, "level", Hr), gr = u(Fr, "multiplier", Hr), yr = u(Fr, "purchasedAt", Hr), vr = Ar((hr = {
    ctor: "::",
    _0: li(1),
    _1: {
        ctor: "[]"
    }
}, gi(u(ie, hi, ti(hr))))), 9 === lr.arity ? lr.func(sr, dr, _r, pr, mr, br, gr, yr, vr) : lr(sr)(dr)(_r)(pr)(mr)(br)(gr)(yr)(vr)),
Ai = t(function(e, t) {
    var r, n = e;
    switch (n.ctor) {
        case "SetBag":
        var a = u(Nr, Ri, n._0);
        if ("Ok" === a.ctor) {
            var i = a._0,
            f = "Just" === (r = u(nt, i.id, t.bags)).ctor ? p.eq(i.owner, r._0.owner) ? t.pendingPurchases : u(Yr, i.id, t.pendingPurchases) : t.pendingPurchases,
            o = c(kt, i.id, function(e) {
                var t, r, n, a = e;
                if ("Just" === a.ctor) {
                    var f = a._0,
                    o = p.eq(i.owner, f.owner) ? f.style : u(bi, {
                        ctor: "::",
                        _0: (n = {
                            ctor: "::",
                            _0: li(0),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "To",
                            _0: n
                        }),
                        _1: {
                            ctor: "::",
                            _0: u(yi, (t = {
                                duration: 500,
                                ease: function(e) {
                                    return Math.pow(e, 2)
                                }
                            }, r = t, aa({
                                progress: 1,
                                duration: r.duration,
                                start: 0,
                                ease: r.ease
                            })), {
                                ctor: "::",
                                _0: li(1),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, f.style);
                    return J({
                        id: i.id,
                        owner: i.owner,
                        sellingPrice: i.sellingPrice,
                        nextSellingPrice: i.nextSellingPrice,
                        level: i.level,
                        multiplier: i.multiplier,
                        purchasedAt: i.purchasedAt,
                        style: o
                    })
                }
                return J(i)
            }, t.bags);
            return {
                ctor: "_Tuple2",
                _0: p.update(t, {
                    bags: o,
                    pendingPurchases: f
                }),
                _1: N
            }
        }
        u(Yt, "bag decoding error", a._0);
        return {
            ctor: "_Tuple2",
            _0: t,
            _1: N
        };
        case "SetCurrentTime":
        return {
            ctor: "_Tuple2",
            _0: p.update(t, {
                currentTime: v(n._0 / 1e3)
            }),
            _1: N
        };
        case "SetBagSale":
        return {
            ctor: "_Tuple2",
            _0: p.update(t, {
                bagSales: c(St, n._0._0, n._0._1, t.bagSales)
            }),
            _1: N
        };
        case "Purchase":
        return {
            ctor: "_Tuple2",
            _0: t,
            _1: ki(n._0)
        };
        case "Animate":
        o = c(kt, n._0, function(e) {
            var t = e;
            if ("Just" === t.ctor) {
                var r = t._0;
                return J(p.update(r, {
                    style: u(di, n._1, r.style)
                }))
            }
            return Q
        }, t.bags);
        return {
            ctor: "_Tuple2",
            _0: p.update(t, {
                bags: o
            }),
            _1: N
        };
        case "AddPendingPurchase":
        return {
            ctor: "_Tuple2",
            _0: p.update(t, {
                pendingPurchases: u(Gr, n._0, t.pendingPurchases)
            }),
            _1: N
        };
        case "SetTransactionHash":
        return {
            ctor: "_Tuple2",
            _0: p.update(t, {
                transactionHash: J(n._0)
            }),
            _1: N
        };
        default:
        return {
            ctor: "_Tuple2",
            _0: p.update(t, {
                transactionHash: Q
            }),
            _1: N
        }
    }
}),
Ni = (r(function(e, t, r) {
    return {
        multiplier: e,
        oldPrice: t,
        blockNumber: r
    }
}), {
    ctor: "Address"
}),
qi = {
    ctor: "TransactionHash"
},
Mi = {
    ctor: "CloseTransactionModal"
},
Oi = function(e) {
    return {
        ctor: "SetTransactionHash",
        _0: e
    }
},
Fi = function(e) {
    return {
        ctor: "AddPendingPurchase",
        _0: e
    }
},
zi = t(function(e, t) {
    return {
        ctor: "Animate",
        _0: e,
        _1: t
    }
}),
Ui = t(function(e, t) {
    var r, n = e,
    a = n.currentTime;
    return u(bn, u(S["++"], ai(t.style), {
        ctor: "::",
        _0: wn("card bag-card"),
        _1: {
            ctor: "[]"
        }
    }), {
        ctor: "::",
        _0: u(bn, {
            ctor: "::",
            _0: wn("card-content"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: u(pn, {
                ctor: "::",
                _0: wn("is-size-4 has-text-centered"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: p.cmp(u(Di, a, t), 0) > 0 ? sn(u(S["++"], u(wi, 6, t.sellingPrice), " ETH")) : sn("0.0050000 ETH"),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "::",
                _0: u(bn, {
                    ctor: "::",
                    _0: wn("is-size-7 has-text-centered"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: function() {
                        if (p.cmp(u(Di, a, t), 0) > 0) return sn(u(S["++"], "next price: ", u(S["++"], u(wi, 6, t.nextSellingPrice), " ETH")));
                        var e = function() {
                            switch (t.multiplier) {
                                case 125:
                                return "0.0062500";
                                case 150:
                                return "0.0075000";
                                default:
                                return "0.0100000"
                            }
                        }();
                        return sn(u(S["++"], "next price: ", u(S["++"], e, " ETH")))
                    }(),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: u(bn, {
                        ctor: "::",
                        _0: wn("is-size-7 has-text-centered"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: p.cmp(u(Di, a, t), 0) > 0 ? u(Bi, a, t) : u(vn, {
                            ctor: "[]"
                        }, {
                            ctor: "[]"
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }),
        _1: {
            ctor: "::",
            _0: u(bn, {
                ctor: "::",
                _0: wn("card-footer"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: u(bn, {
                    ctor: "::",
                    _0: wn("card-footer-item owner-box"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: u(gn, {
                        ctor: "::",
                        _0: Vn(u(Ci, Ni, t.owner)),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: sn(u(S["++"], "owner: ", u(S["++"], c(je, 0, 42, t.owner), ""))),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "::",
                _0: u(bn, {
                    ctor: "::",
                    _0: wn("card-footer"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: u($r, t.id, n.pendingPurchases) ? u(bn, {
                        ctor: "::",
                        _0: wn("button title is-size-6 card-footer-item is-radiusless is-large"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: sn("PENDING..."),
                        _1: {
                            ctor: "[]"
                        }
                    }) : p.eq(t.owner, n.myAddress) ? u(bn, {
                        ctor: "::",
                        _0: wn("button title is-size-6 card-footer-item is-radiusless is-large"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: sn("PURCHASED"),
                        _1: {
                            ctor: "[]"
                        }
                    }) : u(bn, {
                        ctor: "::",
                        _0: wn("button title is-disabled is-primary is-size-6 card-footer-item is-radiusless is-large"),
                        _1: {
                            ctor: "::",
                            _0: Ln((r = t.id, {
                                ctor: "Purchase",
                                _0: r
                            })),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, {
                        ctor: "::",
                        _0: sn("BID"),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            }
        }
    })
}),
Hi = r(function(e, t, r) {
    return u(bn, {
        ctor: "::",
        _0: wn("notcolumns"),
        _1: {
            ctor: "[]"
        }
    }, u(S["++"], {
        ctor: "::",
        _0: u(bn, {
            ctor: "::",
            //_0: wn("column row-title is-1"),
            _0: wn("column row-title"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: u(_n, {
                ctor: "::",
                _0: wn("is-size-4"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: sn(e),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "[]"
            }
        }),
        _1: {
            ctor: "[]"
        }
    }, u(ie, function(e) {
        return u(bn, {
            ctor: "::",
            _0: wn("column"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: u(Ui, t, e),
            _1: {
                ctor: "[]"
            }
        })
    }, r)))
}),
Qi = function(e) {
    return u(bn, {
        ctor: "::",
        _0: wn("section"),
        _1: {
            ctor: "[]"
        }
    }, {
        ctor: "::",
        _0: u(bn, {
            ctor: "::",
            _0: wn("container"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: u(bn, {
                ctor: "::",
                _0: wn("columns"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: u(bn, {
                    ctor: "::",
                    _0: wn("column"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: c(Hi, "💰500,000+Auction Sniper Role   1.25x ETH", e, u(Vi, {
                        ctor: "::",
                        _0: 0,
                        _1: {
                            ctor: "::",
                            _0: 4,
                            _1: {
                                ctor: "::",
                                _0: 8,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }, e.bags)),
                    _1: {
                        ctor: "::",
                        _0: c(Hi, "💰1 Million+Auction Sniper Role   1.5x ETH", e, u(Vi, {
                            ctor: "::",
                            _0: 1,
                            _1: {
                                ctor: "::",
                                _0: 4,
                                _1: {
                                    ctor: "::",
                                    _0: 5,
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }, e.bags)),
                        _1: {
                            ctor: "::",
                            _0: c(Hi, "Tax Collector Role+💰2 Million+PS4/XB1 Madden 19(Digital Copy)   2.0x ETH", e, u(Vi, {
                                ctor: "::",
                                _0: 2,
                                _1: {
                                    ctor: "::",
                                    _0: 9,
                                    _1: {
                                        ctor: "::",
                                        _0: 10,
                                        _1: {
                                            ctor: "::",
                                            _0: 11,
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }
                            }, e.bags)),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: mt(e.bagSales) ? u(bn, {
                        ctor: "::",
                        _0: wn("column is-2 sales"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: u(_n, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: sn("Previous Bids"),
                            _1: {
                                ctor: "::",
                                _0: u(vn, {
                                    ctor: "[]"
                                }, {
                                    ctor: "[]"
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: sn("loading..."),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }) : u(bn, {
                        ctor: "::",
                        _0: wn("column is-2 sales"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: u(_n, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: sn("Recent Sales"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: u(bn, {
                                ctor: "[]"
                            }, u(ie, Pi, (t = e.bagSales, u(ge, 20, ce(u($, function(e) {
                                return e._1.blockNumber
                            }, Ye(t))))))),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            }),
_1: {
    ctor: "[]"
}
}),
_1: {
    ctor: "[]"
}
});
var t
},
Ji = function(e) {
    return {
        ctor: "SetBagSale",
        _0: e
    }
},
ji = function(e) {
    return {
        ctor: "SetCurrentTime",
        _0: e
    }
},
$i = function(e) {
    return {
        ctor: "SetBag",
        _0: e
    }
},
Wi = ln({
    init: function(e) {
        return {
            ctor: "_Tuple2",
            _0: (t = e, r = t, {
                contractAddress: r.contractAddress,
                bags: pt,
                currentTime: r.currentTime,
                bagSales: pt,
                pendingPurchases: Xr,
                transactionHash: Q,
                myAddress: r.myAddress
            }),
            _1: u(qe, ji, Ft)
        };
        var t, r
    },
    view: function(e) {
        return u(bn, {
            ctor: "::",
            _0: wn("has-text-centered"),
            _1: {
                ctor: "::",
                _0: Ln(Mi),
                _1: {
                    ctor: "[]"
                }
            }
        }, {
            ctor: "::",
            _0: u(_n, {
                ctor: "::",
                _0: wn("page-title is-size-1"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: sn("The City Auctions"),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "::",
                _0: u(mn, {
                    ctor: "::",
                    _0: wn("sub-title"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: u(gn, {
                        ctor: "::",
                        _0: Vn(u(Ci, Ni, e.contractAddress)),
                        _1: {
                            ctor: "::",
                            _0: Pn("_blank"),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, {
                        ctor: "::",
                        _0: sn(e.contractAddress),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: u(mn, {
                        ctor: "::",
                        _0: wn("sub-title2"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: sn("All auctions end after 24 hours of inactivity "),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: Qi(e),
                        _1: {
                            ctor: "::",
                            _0: (r = e.transactionHash, "Just" === r.ctor ? (t = r._0, u(bn, {
                                ctor: "::",
                                _0: wn("modal is-active"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: u(bn, {
                                    ctor: "::",
                                    _0: wn("modal-background"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "[]"
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: u(bn, {
                                        ctor: "::",
                                        _0: wn("modal-content"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: u(bn, {
                                            ctor: "::",
                                            _0: wn("box"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: sn("transaction started: "),
                                            _1: {
                                                ctor: "::",
                                                _0: u(gn, {
                                                    ctor: "::",
                                                    _0: Vn(u(Ci, qi, t)),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: Pn("_blank"),
                                                        _1: {
                                                            ctor: "[]"
                                                        }
                                                    }
                                                }, {
                                                    ctor: "::",
                                                    _0: sn(t),
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: u(hn, {
                                            ctor: "::",
                                            _0: u(Tn, "aria-label", "close"),
                                            _1: {
                                                ctor: "::",
                                                _0: wn("modal-close is-large"),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }, {
                                            ctor: "[]"
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            })) : sn("")),
_1: {
    ctor: "[]"
}
}
}
}
}
});
var t, r
},
update: Ai,
subscriptions: function(e) {
    var t = u(ie, function(e) {
        var t = e;
        return u(pi, zi(t._0), {
            ctor: "::",
            _0: t._1.style,
            _1: {
                ctor: "[]"
            }
        })
    }, Ye(e.bags));
    return M(u(S["++"], {
        ctor: "::",
        _0: Si($i),
        _1: {
            ctor: "::",
            _0: u($t, 1e3, ji),
            _1: {
                ctor: "::",
                _0: Li(Ji),
                _1: {
                    ctor: "::",
                    _0: Ei(Fi),
                    _1: {
                        ctor: "::",
                        _0: xi(Oi),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }
    }, t))
}
})(u(Rr, function(e) {
    return u(Rr, function(t) {
        return u(Rr, function(r) {
            return u(Rr, function(n) {
                return Ar({
                    contractAddress: e,
                    currentTime: t,
                    myAddress: r,
                    timeout: n
                })
            }, u(Fr, "timeout", Hr))
        }, u(Fr, "myAddress", Jr))
    }, u(Fr, "currentTime", Hr))
}, u(Fr, "contractAddress", Jr))),
Xi = {};
if (Xi.Main = Xi.Main || {}, void 0 !== Wi && Wi(Xi.Main, "Main", void 0), "function" == typeof define && define.amd) define([], function() {
    return Xi
});
    else if ("object" != typeof e) {
        var Gi = this.Elm;
        if (void 0 !== Gi)
            for (var Yi in Xi) {
                if (Yi in Gi) throw new Error("There are two Elm modules called `" + Yi + "` on this page! Rename one of them.");
                Gi[Yi] = Xi[Yi]
            } else this.Elm = Xi
        } else e.exports = Xi
    }).call(this)
}, function(e, t) {}, function(e, t, r) {
    r(2);
    const n = r(1),
    a = r(0).abi,
    i = "0xa2c5718723161f48fe1be09bee40a8fa347df520";
    window.addEventListener("load", function() {
        if ("undefined" != typeof web3) {
            window.contract = web3.eth.contract(a).at(i), contract.timeout(function(e, t) {
                window.app = n.Main.embed(document.getElementById("main"), {
                    contractAddress: i,
                    timeout: t.toNumber(),
                    currentTime: Math.floor(Date.now() / 1e3),
                    myAddress: web3.eth.coinbase || ""
                }), f(app, contract), setInterval(function() {
                    f(app, contract)
                }, 5e3), app.ports.purchase.subscribe(e => {
                    contract.getBag(e, (t, r) => {
                        contract.purchase(e, {
                            value: r[1]
                        }, (t, r) => {
                            t ? (console.error(t), alert("Something went wrong :(")) : (app.ports.addPendingPurchase.send(e), app.ports.setTransactionHash.send(r))
                        })
                    })
                }), contract.BagSold({}, {}, (e, t) => {
                    o(app, t), f(app, contract)
                }), contract.BagSold({}, {
                    fromBlock: 5068626,
                    toBlock: "latest"
                }).get((e, t) => {
                    t.forEach(e => o(app, e))
                })
                document.getElementById("faq").innerHTML = [ 
                '<h2 style="font-weight:bold; font-size:1.5em; margin-top: 0.5em;">What is this?</h2>',
                '<p>This is a Hot Potato Auction that will get you ETH for being outbid, and in-game currency and a role if you win the auction. There are 3 auctions: a 1.25&times; where the winning bidder receives <span style="white-space:nowrap;">💰500,000;</span> + Auction Sniper Role role a 1.5&times; where the winning bidder receives <span style="white-space:nowrap;">💰1 Million;</span> + the Auction Sniper Role role and a 2&times; where the winning bidder receives the <em>Tax Collector Role</em> and 💰2 Million.</p>',
                '<h2 style="font-weight:bold; font-size:1.5em; margin-top: 0.5em;">What do the bidders get?</h2>',
                '<p>When you bid, you are paying 1.25&times;, 1.5&times;, or 2&times; the amount the last person bid. The last bidder receives 90% of the profit from the new winning bid. The 10% fee will help allow us to offer great prizes in the store, including ETH.</p>',
                '<h2 style="font-weight:bold; font-size:1.5em; margin-top: 0.5em;">How does it end?</h2>',
                '<p>The auction ends after 24 hours of inactivity. The winning bidder must DM @Brittuf /Mr.Contest\\ on <a href="https://discord.gg/XnpFUtx">Discord</a> to claim their prize.</p>',
                '<h2 style="font-weight:bold; font-size:1.5em; margin-top: 0.5em;">What is the Tax Collector?</h2>',
                '<p>The Tax Collector role will be very valuable. As Tax Collector, you will receive 💰 from the casino and the players. You get <span style="white-space:nowrap;">💰2 Million just to start</span>.. You will have this role until the next auction ends.</p>',
                '<h2 style="font-weight:bold; font-size:1.5em; margin-top: 0.5em;">What is the Auction Sniper role?</h2>',
                '<p>The Auction Sniper role will earn you 💰25,000 everday, until the auction is won by someone else.</p>',
         
                '<p style="margin-top:1em">If you have any questions, pop into our <a href="https://discord.gg/XnpFUtx">Discord</a>.</p>',
                ].join("\n")
            })
        } else {
            document.getElementById("main").innerHTML = ["<div>", '  <div class="has-text-centered">', 
            '    <h1 class="page-title is-size-1">The City Auctions</h1>', "  </div>", '  <div class="section">', 
            '    <div class="columns is-centered">', '      <div class="column is-narrow">', 
            '        <div class="notification is-danger">', "          You must install MetaMask in order to experience auction.", 
            "        </div>", "      </div>", "    </div>", "  </div>", 
            "</div>"].join("\n");
        }
    });
const f = (e, t) => {
    t.getBagCount(function(r, n) {
        const a = n.toNumber();
        for (let r = 0; r < a; r++) t.getBag(r, function(t, n) {
            const a = {
                id: r,
                owner: n[0],
                sellingPrice: web3.fromWei(n[1], "ether").toNumber(),
                nextSellingPrice: web3.fromWei(n[2], "ether").toNumber(),
                level: n[3].toNumber(),
                multiplier: n[4].toNumber(),
                purchasedAt: n[5].toNumber()
            };
            e.ports.setBag.send(a)
        })
    })
},
o = (e, t) => {
    const r = [t.transactionHash, {
        multiplier: (t.args.multiplier / 100).toString() + "x",
        oldPrice: web3.fromWei(t.args.oldPrice, "ether").toNumber(),
        blockNumber: t.blockNumber
    }];
    e.ports.setBagSale.send(r)
}
}])
