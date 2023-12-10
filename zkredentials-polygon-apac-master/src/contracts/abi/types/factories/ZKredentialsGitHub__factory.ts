/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZKredentialsGitHub,
  ZKredentialsGitHubInterface,
} from "../ZKredentialsGitHub";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "TokenURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260016008553480156200001657600080fd5b506040518060400160405280601381526020017f5a4b726564656e7469616c732047697448756200000000000000000000000000815250604051806040016040528060048152602001630b4968e960e31b81525081600090816200007b919062000138565b5060016200008a828262000138565b50505062000204565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000be57607f821691505b602082108103620000df57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200013357600081815260208120601f850160051c810160208610156200010e5750805b601f850160051c820191505b818110156200012f578281556001016200011a565b5050505b505050565b81516001600160401b0381111562000154576200015462000093565b6200016c81620001658454620000a9565b84620000e5565b602080601f831160018114620001a457600084156200018b5750858301515b600019600386901b1c1916600185901b1785556200012f565b600085815260208120601f198616915b82811015620001d557888601518255948401946001909101908401620001b4565b5085821015620001f45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61179c80620002146000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80636352211e116100a2578063b88d4fde11610071578063b88d4fde14610213578063c87b56dd14610226578063d85d3d2714610239578063e0df5b6f1461024c578063e985e9c51461025f57600080fd5b80636352211e146101d257806370a08231146101e557806395d89b41146101f8578063a22cb4651461020057600080fd5b806317d70f7c116100de57806317d70f7c1461018d57806323b872dd146101a45780633c130d90146101b757806342842e0e146101bf57600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e3660046110c7565b61029b565b60405190151581526020015b60405180910390f35b6101406102ed565b60405161012f919061113c565b61016061015b36600461114f565b61037f565b6040516001600160a01b03909116815260200161012f565b61018b610186366004611184565b6103a6565b005b61019660085481565b60405190815260200161012f565b61018b6101b23660046111ae565b6104c0565b6101406104f1565b61018b6101cd3660046111ae565b610595565b6101606101e036600461114f565b6105b0565b6101966101f33660046111ea565b610610565b610140610696565b61018b61020e366004611205565b6106a5565b61018b6102213660046112cd565b6106b4565b61014061023436600461114f565b6106ec565b61018b610247366004611349565b610760565b61018b61025a366004611349565b610795565b61012361026d366004611392565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b14806102cc57506001600160e01b03198216635b5e139f60e01b145b806102e757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102fc906113c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610328906113c5565b80156103755780601f1061034a57610100808354040283529160200191610375565b820191906000526020600020905b81548152906001019060200180831161035857829003601f168201915b5050505050905090565b600061038a82610817565b506000908152600460205260409020546001600160a01b031690565b60006103b1826105b0565b9050806001600160a01b0316836001600160a01b0316036104235760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061043f575061043f813361026d565b6104b15760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161041a565b6104bb8383610879565b505050565b6104ca33826108e7565b6104e65760405162461bcd60e51b815260040161041a906113ff565b6104bb838383610966565b33600090815260066020526040812080546060929190610510906113c5565b80601f016020809104026020016040519081016040528092919081815260200182805461053c906113c5565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b50939695505050505050565b6104bb838383604051806020016040528060008152506106b4565b6000818152600260205260408120546001600160a01b0316806102e75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161041a565b60006001600160a01b03821661067a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161041a565b506001600160a01b031660009081526003602052604090205490565b6060600180546102fc906113c5565b6106b0338383610aca565b5050565b6106be33836108e7565b6106da5760405162461bcd60e51b815260040161041a906113ff565b6106e684848484610b98565b50505050565b60606106f782610817565b600061070e60408051602081019091526000815290565b9050600081511161072e5760405180602001604052806000815250610759565b8061073884610bcb565b60405160200161074992919061144c565b6040516020818303038152906040525b9392505050565b610768610c5e565b61077181610795565b61077d33600854610d00565b6008805490600061078d8361147b565b919050555050565b806040516020016107a691906114a2565b60408051601f19818403018152918152336000908152600660205220906107cd908261152a565b50336000818152600660205260409081902090517f0d61faa98106efeae60c0e7296c7c29b6f4827bec34c55b4b2d7e01918e661619161080c916115ea565b60405180910390a250565b6000818152600260205260409020546001600160a01b03166108765760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161041a565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906108ae826105b0565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806108f3836105b0565b9050806001600160a01b0316846001600160a01b0316148061093a57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061095e5750836001600160a01b03166109538461037f565b6001600160a01b0316145b949350505050565b826001600160a01b0316610979826105b0565b6001600160a01b03161461099f5760405162461bcd60e51b815260040161041a90611675565b6001600160a01b038216610a015760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161041a565b826001600160a01b0316610a14826105b0565b6001600160a01b031614610a3a5760405162461bcd60e51b815260040161041a90611675565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610b2b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161041a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ba3848484610966565b610baf84848484610d1a565b6106e65760405162461bcd60e51b815260040161041a906116ba565b60606000610bd883610e1b565b600101905060008167ffffffffffffffff811115610bf857610bf8611241565b6040519080825280601f01601f191660200182016040528015610c22576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610c2c57509392505050565b3360009081526007602052604090205460ff1615610cbe5760405162461bcd60e51b815260206004820152601760248201527f5573657220616c72656164792072656769737465726564000000000000000000604482015260640161041a565b33600081815260076020526040808220805460ff19166001179055517f2d3734a8e47ac8316e500ac231c90a6e1848ca2285f40d07eaa52005e4b3a0e99190a2565b6106b0828260405180602001604052806000815250610ef3565b60006001600160a01b0384163b15610e1057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610d5e90339089908890889060040161170c565b6020604051808303816000875af1925050508015610d99575060408051601f3d908101601f19168201909252610d9691810190611749565b60015b610df6573d808015610dc7576040519150601f19603f3d011682016040523d82523d6000602084013e610dcc565b606091505b508051600003610dee5760405162461bcd60e51b815260040161041a906116ba565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061095e565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610e5a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610e86576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610ea457662386f26fc10000830492506010015b6305f5e1008310610ebc576305f5e100830492506008015b6127108310610ed057612710830492506004015b60648310610ee2576064830492506002015b600a83106102e75760010192915050565b610efd8383610f26565b610f0a6000848484610d1a565b6104bb5760405162461bcd60e51b815260040161041a906116ba565b6001600160a01b038216610f7c5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161041a565b6000818152600260205260409020546001600160a01b031615610fe15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161041a565b6000818152600260205260409020546001600160a01b0316156110465760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161041a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b03198116811461087657600080fd5b6000602082840312156110d957600080fd5b8135610759816110b1565b60005b838110156110ff5781810151838201526020016110e7565b838111156106e65750506000910152565b600081518084526111288160208601602086016110e4565b601f01601f19169290920160200192915050565b6020815260006107596020830184611110565b60006020828403121561116157600080fd5b5035919050565b80356001600160a01b038116811461117f57600080fd5b919050565b6000806040838503121561119757600080fd5b6111a083611168565b946020939093013593505050565b6000806000606084860312156111c357600080fd5b6111cc84611168565b92506111da60208501611168565b9150604084013590509250925092565b6000602082840312156111fc57600080fd5b61075982611168565b6000806040838503121561121857600080fd5b61122183611168565b91506020830135801515811461123657600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561127257611272611241565b604051601f8501601f19908116603f0116810190828211818310171561129a5761129a611241565b816040528093508581528686860111156112b357600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156112e357600080fd5b6112ec85611168565b93506112fa60208601611168565b925060408501359150606085013567ffffffffffffffff81111561131d57600080fd5b8501601f8101871361132e57600080fd5b61133d87823560208401611257565b91505092959194509250565b60006020828403121561135b57600080fd5b813567ffffffffffffffff81111561137257600080fd5b8201601f8101841361138357600080fd5b61095e84823560208401611257565b600080604083850312156113a557600080fd5b6113ae83611168565b91506113bc60208401611168565b90509250929050565b600181811c908216806113d957607f821691505b6020821081036113f957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000835161145e8184602088016110e4565b8351908301906114728183602088016110e4565b01949350505050565b60006001820161149b57634e487b7160e01b600052601160045260246000fd5b5060010190565b66697066733a2f2f60c81b8152600082516114c48160078501602087016110e4565b602f60f81b6007939091019283015250600801919050565b601f8211156104bb57600081815260208120601f850160051c810160208610156115035750805b601f850160051c820191505b818110156115225782815560010161150f565b505050505050565b815167ffffffffffffffff81111561154457611544611241565b6115588161155284546113c5565b846114dc565b602080601f83116001811461158d57600084156115755750858301515b600019600386901b1c1916600185901b178555611522565b600085815260208120601f198616915b828110156115bc5788860151825594840194600190910190840161159d565b50858210156115da5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352600084546115fe816113c5565b8084870152604060018084166000811461161f576001811461163957611667565b60ff1985168984015283151560051b890183019550611667565b896000528660002060005b8581101561165f5781548b8201860152908301908801611644565b8a0184019650505b509398975050505050505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061173f90830184611110565b9695505050505050565b60006020828403121561175b57600080fd5b8151610759816110b156fea2646970667358221220d9e452c0c891f1af93d3d7a34901b95caf1937c442b7e39702c856faa31943ea64736f6c634300080f0033";

type ZKredentialsGitHubConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZKredentialsGitHubConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZKredentialsGitHub__factory extends ContractFactory {
  constructor(...args: ZKredentialsGitHubConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZKredentialsGitHub> {
    return super.deploy(overrides || {}) as Promise<ZKredentialsGitHub>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZKredentialsGitHub {
    return super.attach(address) as ZKredentialsGitHub;
  }
  override connect(signer: Signer): ZKredentialsGitHub__factory {
    return super.connect(signer) as ZKredentialsGitHub__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZKredentialsGitHubInterface {
    return new utils.Interface(_abi) as ZKredentialsGitHubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZKredentialsGitHub {
    return new Contract(address, _abi, signerOrProvider) as ZKredentialsGitHub;
  }
}
