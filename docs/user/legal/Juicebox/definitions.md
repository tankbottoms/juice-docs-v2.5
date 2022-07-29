---
title: Definitions
sidebar_position: 2
---

#### Definitions.

**Act** has the meaning ascribed to that term in Section 1(a).

**Affiliate** means, with respect to any Person, any other Person controlling, controlled by, or under common control with such Person; in such context, "control" means the possession, directly or indirectly, of the power to direct the management or policies of another, whether through the ownership of voting securities, by contract, or otherwise.

**Agreement** means this Guiding Principles Agreement of the DAO.

**Allow minting tokens**, allow changing tokens, allow setting terminals, allow setting the controller, allow terminal migrations, allow controller migration" Projects can allow various bits of treasury functionality on a per-funding cycle basis. These functions are disabled by default.

**Audit** A testing network for a new token, project, or product, or for potential improvements to an existing product or offering. Testnets are used to test the viability and vulnerability of new ideas, concepts, code, and processes prior to moving on to a production network or networks of some sort.

**Ballot** The address of a contract that adheres to IJBFundingCycleBallot, which can provide custom criteria that prevents funding cycle reconfigurations from taking effect. A common implementation is to force reconfigurations to be submitted at least X days before the end of the current funding cycle, giving the community foresight into any misconfigurations or abuses of power before they take effect. A more complex implementation might include on-chain governance.

**Ballot redemption rate** A project can specify a custom redemption rate that only applies when a proposed reconfiguration is waiting to take effect. This can be used to automatically allow for more favorable redemption rates during times of potential change.

**Bonding Curve** also known as Redemption rate, Redemption curve. See Redemption rate.

**DAO** means Decentralized Autonomous Organization, the DAO is a Nevada unincorporated nonprofit association.

**DAO Expenses** has the meaning ascribed to that term in Section 7(b)(i).

**Dapp** means an online portal or other interactive software used by the DAO to build and create Ethereum based treasuries for projects to manage funding cycles, token issuances including the computation of reserved tokens, discount rates, and redemption rates, which is maintained by the DAO, its Members, or another Person. Governance activities which are performed on Snapshot.org or other Snapshot servers, within the DAO's Spaces, are also considered to be Dapp activities.

**Data source** The address of a contract that adheres to IJBFundingCycleDataSource, which can be used to extend or override what happens when the treasury receives funds, and what happens when someone tries to redeem their project tokens.

**Discount rate** The percent to automatically decrease the subsequent cycle's weight from the current cycle's weight. The discount rate is not applied during funding cycles where the weight is explicitly reconfigured.

**Distribution limit** The amount of funds that can be distributed out from the project's treasury during a funding cycle. The project owner can pre-program a list of addresses, other the DAO projects, and contracts that adhere to IJBSplitsAllocator to split distributions between. Treasury funds in excess of the distribution limit is considered overflow, which can serve as runway or be reclaimed by token holders who redeem their tokens. Distributing is a public transaction that anyone can call on a project's behalf. The project owner can also include a split that sends a percentage of the distributed funds to the address who executes this transaction. The protocol charges a JBX membership fee on funds withdrawn from the network. There are no fees for distributions to other the DAO projects. Distribution limits can be specified in any currency that the JBPrices contract has a price feed for.

**Duration** How long each funding cycle lasts (specified in seconds). All funding cycle properties are unchangeable while the cycle is in progress. In other words, any proposed reconfigurations can only take effect during the subsequent cycle. If no reconfigurations were submitted by the project owner, or if proposed changes fail the current cycle's ballot, a copy of the latest funding cycle will automatically start once the current one ends. A cycle with no duration lasts indefinitely, and reconfigurations can start a new funding cycle with the proposed changes right away.

**Governance Rights** means the entire interest of a Member in the DAO, as measured by a Member's Tokens, including, without limitation, all rights and obligations contemplated or agreed to under this Agreement, and any right to vote on, consent to, or otherwise participate in any decision or action of or by the Members granted by this Agreement or the Act.

**Hold fees** By default, JBX membership fees are paid automatically when funds are distributed out of the ecosystem from a project's treasury. During funding cycles configured to hold fees, this fee amount is set aside instead of being immediately processed. Projects can get their held fees returned by adding the same amount of withdrawn funds back to their treasury. Otherwise, MovementDAO or the project can process these held fees at any point to get JBX at the current rate. This allows a project to withdraw funds and later add them back into their the DAO treasury without incurring fees. This applies to both distributions from the distribution limit and from the overflow allowance.

**Majority Vote** means the approval of Members holding at least a majority-in-interest of all claimed Tokens.

**Member** means each Person entering into this Agreement as a member or subsequently admitted as a member pursuant to the terms of this Agreement, but does not include any Person that has ceased to be a Member of the DAO. If at any time there is only one Member, then all references to "Members" shall be deemed to mean "Member."

**Non-Fungible Tokens** ("NFT" or "NFTs") means a cryptographic token based on the Ethereum ERC 721, 1155, or similar standard or other blockchain based asset.

**Overflow Allowance** The amount of treasury funds that the project owner can distribute on-demand. This allowance does not reset per-funding cycle. Instead, it lasts until the project owner explicitly proposes a reconfiguration with a new allowance. The protocol charges a JBX membership fee on funds withdrawn from the network. Overflow allowances can be specified in any currency that the JBPrices contract has a price feed for.

**Pause payments, pause distributions, pause redemptions, pause burn** Projects can pause various bits of its treasury's functionality on a per-funding cycle basis. These functions are unpaused by default.

**Person** means an individual, corporation, association, partnership, joint venture, limited liability company, estate, trust, or any other legal entity.

**Proceeding** means any action, claim, suit, investigation, or proceeding by or before any court, arbitrator, governmental body, self-regulatory agency, or other agency.

**Redemption rate** The percentage of a project's treasury funds that can be reclaimed by community members by redeeming the project's tokens during the funding cycle. A rate of 100% suggests a linear proportion, meaning X% of treasury overflow can be reclaimed by redeeming X% of the token supply.

**Representative** means a member, manager, officer, director, partner, employee, or agent.

**Reserved rate** The percentage of newly minted tokens that a project wishes to withhold for custom distributions. The project owner can pre-program a list of addresses, other DAO project owners, and contracts that adhere to IJBSplitsAllocator to split reserved tokens between.

**Service Provider** means the Person appointed by the DAO to perform administrative services, responsibilities, and duties to carry on the DAO's operations. The initial Service Provider shall be decided by the DAO.

**Start timestamp** The timestamp at which the funding cycle is considered active. Projects can configure the start time of their first funding cycle to be in the future and can ensure reconfigurations don't take effect before a specified timestamp. Once a funding cycle ends, a new one automatically starts right away. If there's an approved reconfiguration queued to start at this time, it will be used. Otherwise, a copy of the rolled over funding cycle will be used.

**Total Available Capital** Represents the total deployable capital in treasury reserves that can be used to fun initiatives within a movement. Token holders will vote to determine how to use “Total Available Capital” reserves.

**Total Financial Backing** Represents the total “potential” influence of an entire movement community. In crypto terms, one might refer to this value as market capitalization. This number represents the total assets that are collateralized in stable coins on the bonding curve.

**TVL** Total Value Locked into a Smart Contract or set of Smart Contracts that may be deployed or stored at one or more exchanges or markets. This is used as a measurement of investor deposits. It is the dollar value of all the coins or tokens locked into a platform, protocol, lending program, yield farming program, or insurance liquidity pool.

**Volatility** A statistical measure of the price variation of an asset. Newer early-stage projects in the explosive growth stage tend to see very high volatility in the price of their assets in their early days. Volatile assets are often considered riskier than less volatile assets because the price is expected to be less predictable.

**Weight** A number used to determine how many project tokens should be minted and transferred when payments are received during the funding cycle. In other words, weight is the exchange rate between the project token and a currency (defined by a JBPayoutRedemptionPaymentTerminal) during that funding cycle. Project owners can configure this directly or allow it to be derived automatically from the previous funding cycle's weight and discount rate.

**Web3** an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.

**Web3 Tools** The key characteristics of Web3 tools may include personal assistance learning, artificial intelligence, multimedia information, interoperability, and semantic nature. Tools used for the governance, tokenization, membership, voting and operation of a DAO.

**Yield Farming** Yield farming is the practice of staking or lending crypto assets in order to generate high returns or rewards in the form of additional cryptocurrency. This innovative yet risky and volatile application of decentralized finance (DeFi) has skyrocketed in popularity recently thanks to further innovations like liquidity mining. In short, yield farming protocols incentivize liquidity providers (LP) to stake or lock up their crypto assets in a smart contract-based liquidity pool. These incentives can be a percentage of transaction fees, interest from lenders or a governance token (see liquidity mining below). These returns are expressed as an annual percentage yield (APY). As more investors add funds to the related liquidity pool, the value of the issued returns decrease accordingly.
