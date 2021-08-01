start react native:
npx react-native run-ios

MetaMask Login
Concerning mobile apps, the answer is yes, the login flow works, but there’s a lot of groundwork to prepare. Basically, you would need to rebuild a simple Ethereum wallet yourself. This includes public address generation, seed word recovery, and secure private key storage, as well as web3.personal.sign and the confirmation popup. Fortunately, there are libraries to help you. The crucial area to focus on is naturally security, as the app itself holds the private key. On desktop browsers, we delegated this task to MetaMask.
So I would argue that the short answer is no, this login flow does not work on mobile today. Effort is being put in this direction, but the easy solution today remains a parallel traditional login method for mobile users.
or check: https://github.com/MetaMask/metamask-mobile














pragma solidity >=0.6.2 <0.8.0;

contract IpfsStorage {
    mapping (address => string) public userFiles;

    function setFile(string memory file) external {
        userFiles[msg.sender] = file;
    }
}

ethereum_address:token_id:ethereum_address


https://api-dev.rarible.com/protocol/v0.1/ethereum/nft/items/all

string private api0xUrl = 'https://kovan.api.0x.org/swap/v1/quote';
string private wethToDai0xApiRequest = '?sellToken=0xd0A1E359811322d97991E03f863a0C30C2cF029C&buyToken=0x1528f3fcc26d13f7079325fb78d9442607781c8c&buyAmount=';

function get0xApiRequest(uint256 paymentAmountInDai) external view returns(string memory) {
    return string(bytes(api0xUrl).concat(bytes(wethToDai0xApiRequest)).concat(paymentAmountInDai.toBytes()));
}