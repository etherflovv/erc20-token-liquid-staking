# ERC-20 Liquid Staking Contract

`Bank.sol` is a **liquid staking contract** that works with ERC-20 tokens.

User calls `enter` to deposit `Token`, and receives `xToken` in return.

User calls `leave` to send back and burn `xToken`, and receives `Token` in return.

If more `Token` is sent to the contract (not via `enter` function, e.g. from external fees), all existing `xToken` owners can then withdraw more `Token` than deposited. 

## Instructions for Deploying with HardHat

1. Install dependencies 

`npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts`

2. Compile

`npx hardhat compile`

3. Deploy

`npx hardhat run scripts/deploy.js --network goerli`

---

## Deployment

+ [xEtherFlow (xETF)](https://goerli.etherscan.io/address/0x1547feaf1de375348b8e4c767896e8d510759a19) deployed on Goerli Network
+ Contract Address: 0x1547feaf1de375348b8e4c767896e8d510759a19
+ `govToken`: [EtherFlow (ETF): 0x2956540fb606180e37782657f683b15d7c633b79](https://goerli.etherscan.io/token/0x2956540fb606180e37782657f683b15d7c633b79)

## References

+ Forked from [DFK's xJEWEL staking contract](https://github.com/DefiKingdoms/contracts/blob/main/contracts/Bank.sol).

> The Bank is full of rewards and jewels.
>
> The longer you stay, the more JEWELs you end up with when you leave.
>
> This contract handles swapping to and from xJewelToken <> JewelToken

+ Original contract from [Sushi's SushiBar.sol](https://github.com/sushiswap/sushiswap/blob/master/protocols/bentobox/v1/contracts/mocks/SushiBarMock.sol).

> SushiBar is the coolest bar in town. You come in with some Sushi, and leave with more! The longer you stay, the more Sushi you get.
>
> This contract handles swapping to and from xSushi, SushiSwap's staking token.

+ How to set up .env for managing secret keys: https://consensys.net/blog/developers/how-to-avoid-uploading-your-private-key-to-github-approaches-to-prevent-making-your-secrets-public/