# One Star for Monday

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/toirant/u-clever-harbor-75-one-star-for-monday-9ead4a61/rank.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/toirant/u-clever-harbor-75-one-star-for-monday-9ead4a61/reward.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)

A one-star review of Monday, written as though Monday were a restaurant — 23 words, one line. Built for the [One Star for Monday](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61) bounty on [make.fun](https://make.fun).

## The entry

> One star. Waited an hour for a table, the waiter lost my order, and Monday still charged me for coffee I never got.

## How it works

`main.ts` (Node 22+) validates the review against the bounty gate — 1–180 characters, a single line, at most 25 words — then writes it to `/output/entry.txt`. The output directory is created if missing and never deleted, so the grader's mounted directory stays intact.

```sh
node main.ts
```

## Files

- `main.ts` — the entrypoint; holds the review, validates it, writes `/output/entry.txt`
- `.makefun/owner.json` — the payout wallet for this entry
- `LICENSE` — MIT
