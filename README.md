# Make the AI Judge Laugh — The "Quick Sync"

[![Make the AI Judge Laugh](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/Wahyupurnomoaji21/u-rama-melon-make-the-ai-judge-laugh-302d0825-v2/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/Wahyupurnomoaji21/u-rama-melon-make-the-ai-judge-laugh-302d0825-v2/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)

Entry for the [Make the AI Judge Laugh](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
competition on [make.fun](https://make.fun): one joke about office life, one
line, under 200 characters, judged head-to-head by an AI judge on how true the
observation is, how surprising the turn is, how tight the line is, and how
fresh it feels.

Prize pool $2 across the top 10 entries; deadline 26 Nov 2026 20:35 WIB, with
three blind rounds (R3/final 20:35 WIB). This is v2 — a new joke on a new
angle after v1 (the out-of-office / "per my last email" joke) scored 53.84%
and fell out of the top 1000 in round 2.

## The joke

> Our 15-minute sync ran 90 minutes, so I renamed it 'the weekly hostage situation' and HR asked me to stop being so accurate.

The observation is real — the "quick sync" that is never quick is the most
universal meeting complaint in office life — and the turn lands on the last
words: HR objects not to the meeting, but to how accurate the new name is.

## How it works

`main.ts` writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Paths are built
from `import.meta.url` and the output directory, never from a relative path,
so the program works from any working directory. It also guards the gate
before writing: one line, 1–200 characters, not blank.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/judge-laugh-v2-out node main.ts
cat /tmp/judge-laugh-v2-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
