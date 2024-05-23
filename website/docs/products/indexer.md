---
id: indexer
title:  Cosmos-Indexer SDK.
sidebar_label: ⚛️ Cosmos Indexer
---

In **October 2023**, the Defiant Labs team received a grant from Atom Accelerator DAO to develop a generic [Cosmos Indexer SDK](https://github.com/DefiantLabs/cosmos-indexer/tree/main). With their extensive experience indexing Cosmos blockchains, they envisioned a generalized indexer that any developer could use for Cosmos SDK-based blockchains. Months of hard work and dedication have led to the brink of announcing the **general release of v1.0.0** of the Cosmos Indexer.

## From Concept to Reality: The Cosmos Indexer SDK

Alongside the grant, the team committed to building several example indexer applications to showcase functionality and provide starting points for developers. These examples are available [here](https://github.com/DefiantLabs/cosmos-indexer/tree/main/examples). 

As the team prepared to present their work to the Atom Accelerator DAO, they came across the [announcement of the Oversight Committee Member Elections](https://x.com/ATOMAccelerator/status/1783526455357604145). This sparked an idea: why not use the Cosmos Indexer SDK to create a custom indexer for real-time election result tracking? This would demonstrate the SDK's flexibility and power and offer a valuable service to the Cosmoshub community.

## The Birth of the Atom Accelerator Elections Dashboard

Thus, the [Atom Accelerator Elections Dashboard](https://elections.atomaccelerator.com/) was born. In just **six hours of development**, the core functionality of the backend indexer was implemented. Using the Cosmos Indexer SDK, the team built and began indexing Cosmos Governance Vote transactions with [custom parsers](https://github.com/DefiantLabs/cosmos-indexer/blob/main/docs/reference/indexer_sdk_and_custom_parsers.md#indexer-sdk-and-custom-parsers) and database models. 

A simple API was created for querying the indexed data, and a frontend application using React was built to display election results in real-time. After a weekend of intense development and iteration, the prototype was ready for feedback.

## Development Timeline: April 30th to May 24th, 2024

- **April 30th:** The idea of a real-time election results dashboard is conceived.
- **May 1st:** Core backend indexer functionality is implemented in one day.
- **May 2nd - May 5th:** Frontend application and API endpoints are iterated upon.
- **May 6th - May 10th:** 
  - Enhancements to the indexer for real-world use cases.
  - **May 7th:** Initial prototype presented to the AA DAO team.
- **May 10th:** Final preparations for the site launch.
- **May 11th:** Site deployed.
- **May 13th:** Official launch of the Elections Dashboard.
- **May 13th - May 20th:** Backend functionality tweaks to ensure smooth operation.
- **May 20th - May 24th:** Finalization and optimization for the election results.

## Technical Specification

The indexer's code is [open-sourced here](https://github.com/DefiantLabs/gov-prop-elections-indexer). The backend, built using the Cosmos Indexer SDK, allowed for rapid development and focused effort on the frontend and API.

### Indexer Workflow

Following the [Cosmos Indexer SDK reference docs](https://github.com/DefiantLabs/cosmos-indexer/tree/main/docs/reference), the indexer defines custom parsers for:
1. **gov v1beta1/MsgVote transactions**
2. **gov v1/MsgVote transactions**
3. **authz MsgExec that executed (1) and (2)**

These parsers handle transactions and store relevant data in the database, returning custom database models for relational models between votes and proposals.

A custom indexer command wrapper was implemented for pre-index setups, allowing for sidecar processes running custom logic alongside the normal indexer operations.

### Proposal Status Calculation

Emulating the Cosmos SDK tallying process, the backend calculates proposal status using its internal data:
1. **Snapshotting delegations at the voting block height.**
2. **Updating cached staking amounts and proposal statuses at configured signal heights.**
3. **Updating the proposal status with the final on-chain tally result when the voting period ends.**

This ensures accurate, real-time tracking of governance proposals without relying on potentially unreliable tally endpoints.

## Conclusion

The Elections Dashboard demonstrates the Cosmos Indexer SDK's power and flexibility, providing the Cosmos community with a valuable tool for tracking election results. The successful launch of the dashboard stands as a testament to the capabilities of the Cosmos Indexer SDK and opens the door for future election partnerships.

For more details, visit the [Elections Dashboard](https://elections.atomaccelerator.com/) and explore the [Cosmos Indexer SDK](https://github.com/DefiantLabs/cosmos-indexer/tree/main).