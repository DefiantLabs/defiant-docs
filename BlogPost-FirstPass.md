# Blog Post

In October of 2023, the Defiant Labs team was awarded a grant from Atom Accelerator DAO to implement a generic [Cosmos Indexer SDK](https://github.com/DefiantLabs/cosmos-indexer/tree/main). The Defiant Labs team had extensive experience indexing Cosmos blockchains in the past, and had used this knowledge to present the idea of a generic Cosmos Indexer. The goal of the project was to create a generalized indexer that could be used by any developer against a Cosmos SDK-based blockchain. After months of hard work and effort, the team was nearing the end of the project scope and was preparing to announce the general release of v1.0.0 of the Cosmos Indexer.

Alongside the grant, the Defiant Labs team had resolved to build a number of example indexer applications to show off the functionality and to provide a starting point for developers looking to use the Cosmos Indexer as an SDK to develop their own applications. The team had built a number of example applications, which you can find [here](https://github.com/DefiantLabs/cosmos-indexer/tree/main/examples) if you are interested, and was preparing a presentation to deliver to the Atom Accelerator DAO in order to announce the closing of the final milestone of the grant.

However, as the team was preparing the presentation, they read the [Atom Accelerator DAO's announcement](https://x.com/ATOMAccelerator/status/1783526455357604145) of the Oversight Committee Member Elections and came up with a great idea: Why not use the Cosmos Indexer SDK to build a custom indexer that could be used to track the election results in real-time? This would prove the flexibility and power of the Cosmos Indexer SDK, would provide a real-world example of how the SDK could be used to build custom indexers for Cosmos SDK chains, and provide a valuable service to the Cosmoshub community so they could track the election results.

Thus, the [Atom Accelerator Elections Dashboard](https://elections.atomaccelerator.com/) was born. The team quickly set to work building the custom indexer, which would track the election results and provide a user-friendly interface for the community to view the results.

In a matter of a single day (not even 6 hours of total development), the core functionality of the backend indexer was implemented. The team used the Cosmos Indexer SDK to build, test and begin indexing Cosmos Governance Vote transactions using [Cosmos Indexer Custom Parsers](https://github.com/DefiantLabs/cosmos-indexer/blob/main/docs/reference/indexer_sdk_and_custom_parsers.md#indexer-sdk-and-custom-parsers) and Custom Database Models. With a robust backend data pipeline in place, the team could then spend the remainder of the time implementing the other pieces required for the Elections Dashboard.

The team wrapped the backend database in a simple API for querying the indexed data, and built a frontend application using React that would query the API and display the election results in real-time. After a weekend of intense development and iteration, the team had built a prototype of the Elections Dashboard that was ready for feedback.

With the Indexer requirements eleviated by usage of the Cosmos Indexer SDK, the team was able to focus on the frontend application and data access API.

Over the next week, all pieces of the application were tweaked to fit the Atom Accelerator DAO Election specifications, and the team was ready to present the Elections Dashboard to the Atom Accelerator DAO Oversight Committee. The presentation was a success, and the team was able to show off the power and flexibility of the Cosmos Indexer SDK. With Atom Accelerator DAO excited about the presentation, both Defiant Labs and Atom Accelerator DAO agreed to announce the Elections Dashboard as a public location to track the results.

The day after the proposals were placed onchain, the Defiant Labs team was ready to present the Elections Dashboard to the public. After the [announcement of the dashboard](https://x.com/ATOMAccelerator/status/1790106787586453779) by the Atom Accelerator team, the website was officially launched and the onchain results of the election were being tracked in realtime. The team was excited to show off the work they had done, and were proud to present the Elections Dashboard to the Cosmos community.

## Elections Dashboard Development Timeline - 2024

- April 30th: Dan reaches out to Peter to discuss a "great idea for the demo app". He presents the idea of a real-time election results dashboard for the Atom Accelerator DAO Oversight Committee Member Elections. Peter is excited about the idea and begins to scope out the required work for it.
- May 1st: Peter begins work on the backend indexer using the Cosmos Indexer SDK. He implements the core functionality of the backend indexer in a single day, and begins to build the API for querying the indexed data and the frontend for the user experience.
- May 2nd - May 5th: Peter iterates on the frontend application and API endpoints. Small tweaks are made to the core functionality of the backend indexer, but the basic functionality stays the same. The frontend and API begin to take shape.
- May 6th - May 10th: 
  - Peter continues iterating on the backend indexer, including new features in the Cosmos Indexer SDK that extend the functionality for real-world use cases (such as signaling for various events in the indexer workflow and post-processing functionality on the entire block indexed dataset). Peter uses these new features to extend the indexer to fit the Election specifications more closely.
  - May 7th: The initial prototype of the website was presented to the AA DAO team, they were excited about the progress and provided feedback on the design and functionality. They also requested that the team provide the site as a public location to track the election results, and the Defiant Labs team were happy to agree.
- May 10th: The proposals go live on the Cosmoshub, and the team prepares the final configurations for the site to prepare for the launch. Last minute bug fixes and tweaks are made to the site overnight to ensure everything is ready for the launch.
- May 11th: The Defiant Labs team finalizes the Elections Dashboard and the site is deployed.
- May 13th: The Elections Dashboard is officially launched on the official AA DAO [X feed](https://x.com/ATOMAccelerator/status/1790106787586453779).
- May 13th - May 20th: The Defiant Labs team maintains the indexer, tweaking backend functionality here and there to ensure the site is running smoothly and the data is being indexed correctly.
- May 20th - May 24th: The team begins to prepare for the finalization of the election results. They deploy a new version of the Elections Dashboard that is optimized for the final tally of the onchain votes. The team maintains the dashboard until the election is concluded.
- May 24th: The election concludes, and the team finalizes the Elections Dashboard. The site is updated to link to the official result results of the election. The team prepares the infrastructure to keep the site live indefinitely as a testament to the power of the Cosmos Indexer SDK (and possibly for future election partnerships!). The indexer is shut down and the API and frontend are left running.

## Technical Specification

The code for the indexer has been open sourced and can be viewed [here](https://github.com/DefiantLabs/gov-prop-elections-indexer) for examination and analysis.

The Elections Dashboard backend was built using the Cosmos Indexer SDK, which allowed for the rapid development of the backend indexer, freeing up time for frontend, API and database query development. 

A generic implementation was mostly favored, with a heavy focus on proposal-agnostic workflows. However, some configs were used to set proposals for each candidates to limit the indexer execution and API return values.

What follows is a brief description of how the indexer works behind the scenes to track the results of the governance proposals.

### Indexer Workflow

The indexer workflow follows the documentation guidance provided in the [Cosmos Indexer SDK reference docs](https://github.com/DefiantLabs/cosmos-indexer/tree/main/docs/reference) for building a [custom indexer](https://github.com/DefiantLabs/cosmos-indexer/blob/main/docs/reference/custom_indexer_walkthrough.md). 

It defines 2 [custom parsers](https://github.com/DefiantLabs/cosmos-indexer/blob/main/docs/reference/indexer_sdk_and_custom_parsers.md#custom-parser-interfaces) that are designed to handle:

1. gov v1beta1/MsgVote transactions
2. gov v1/MsgVote transactions
3. authz MsgExec that executed (1) and (2)

These [parsers](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/main/parsers.go) implement the interface requirements defined by the Cosmos Indexer SDK, and are used to parse the transactions from the Cosmos SDK chain and store the relevant data in the database. The parsers return [custom database models](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/main/database/models.go) that are used for the relational models between votes and proposals.

A custom indexer [command wrapper](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L153-L161) was implemented that overrides the default indexer command workflow provided by the Cosmos Indexer SDK, preferring [pre-index setups for complex workflow extensions](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L164-L272) before calling the defailt index command.

The main use-case for the pre-index setups was to provide a complex series of ["sidecar" processes](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L261-L268) that ran custom logic while the indexer was running as normal. This allowed for a few very specific implementation details:

1. A custom post-index function was [added to the indexer setup](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L183) - after every block was inserted into the database, this function would analyze the dataset and pass previously unencountered addresses to (2)
2. When a new Address was encountered that had not been seen before, the indexer would immediately process them and update the database with a [snapshot of their delegations](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/jobs/queues.go#L33-L73) at their voting block
3. Block finished signal - (1) was also [used to signal every new indexed block](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L122)
4. [Block Watcher](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L295-L343) - The block watcher was responsible for receiving block finished signals and reacting to height checks. Based on the configuration:
   1. Every N blocks, the watcher would [update the cached delegation values](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L304-L322) for the oldest X delegators at the signaled height
   2. Every M blocks, the watcher would [update the calculated proposal statuses](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/main.go#L324-L338) using cached delegator and validator staking amounts and all proposal votes

This complex workflow allowed for the indexer to index all votes per-block without being interrupted having to do complex calculations or data request patterns every block.

### Proposal Status Calculation

As defined by the [technical specification](https://github.com/cosmos/cosmos-sdk/blob/v0.45.16-ics/x/gov/spec/02_state.md#proposal-processing-queue) of the Cosmos SDK gov module proposal type and [internal implementation details of vote tallying](https://github.com/cosmos/cosmos-sdk/blob/1cc2c18cdd50cc9e526083510f1caf7fefa97d80/x/gov/keeper/tally.go#L13-L18), the Cosmos SDK only stores the final tallies of a proposal a single time, when the voting period ends.

The current implementation of the vote tally endpoint (LCD endpoint `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`) tends to be unreliable for indexing purposes. It tends to timeout or cause excessive load on the node when querying for the tally of a proposal that has a large number of votes. This is a known issue (see [here](https://github.com/cosmos/cosmos-sdk/issues/10353) and [here](https://github.com/cosmos/cosmos-sdk/issues/11422)) and is currently being researched by the Cosmos SDK team.

To solve this issue, the Elections Dashboard backend calculates the proposal status using its own internal data, emulating the logic of the Cosmos SDK tallying process. The process works like this:

1. Every new voting address that is encountered, the indexer will update the database with a snapshot of the delegations at the block height of the vote
2. Update the oldest X delegators and the validator staked amounts at a configured signal height:
   * The production implementation chose to update the cached staking amounts of the oldest 100 delegators and all validators every 50 blocks
   * This implementation choice was made to tradeoff between the number of delegators that would be updated and the frequency of the updates making requests to the node
3. Update the proposal status of all proposals at a configured signal height:
   * The production implementation chose to update the proposal status of all proposals every 100 blocks

The proposal status calculation is done by iterating over all proposals and calculating the total voting power for each proposal based on the votes that have been cast. The proposal status is then updated in the database with the new voting power.

When the proposal voting period ends, a different path is taken. The actual on-chain tally has now been stored and does not need to be queried from the tally endpoint. The proposal status is updated using the actual on-chain tally result returned from the LCD endpoint `cosmos/gov/v1/proposals/{proposal_id}`. This query returns the final tally result calculated by the node, and is used to update the proposal status in the database at the set height.

Implementation details on a per-proposal basis can be seen in the [UpdateProposalStatusAtBlock](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/jobs/tasks.go#L502) function. This function calls either the final tally result workflow, or a database-based tally calculation based on the current block height (implemented [here](https://github.com/DefiantLabs/gov-prop-elections-indexer/blob/52853f794d85d152549ce66fcfd46e20412c3232/jobs/tasks.go#L289)).
