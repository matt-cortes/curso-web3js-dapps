const PruebaPagoArtifact = {
    address: {
        31: "0x7D13d89884E50324fBF6774CA0F5FE2b12051e35",
    },
    abi: [
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_addrs",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_payment",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_transferred",
              "type": "uint256"
            }
          ],
          "name": "TransferReceived",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "fee_percent",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "make_payment",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "payment_percent",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "recipient",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "redefine_address",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
};

export default PruebaPagoArtifact;