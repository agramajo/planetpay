# planetpay

## Version 1

PlanetPayG based on examples/safetoken.sol

## Version 2 without LP

PlanetPayF based on examples/NotSafeMoon.sol

TLDR

When the normal user swaps bnb for safemoon, bnb is added to the pool and 
safemoon is removed. This is normal and will increase the price of safemoon.

When the normal user adds Liquidity to the pool, they add an equal value of 
safemoon and bnb to the pool. This is normal and doesn’t change the price of 
Safemoon.

When the safemoon contract itself adds Liquidity to the pool, the contract 
begins with only the safemoon collected from the Liquidity fee. The contract 
has no external source of BNB. The net result is an addition of only safemoon 
to the pool. This is bad. This breaks the Constant Product which is used to 
determine the price. This lowers the price of Safemoon.

