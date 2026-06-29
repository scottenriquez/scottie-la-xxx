---
title: "Scottie's Week Three 2025 Power Rankings"
date: '2025-09-24'
description: "Scottie's bossy power rankings."
authors: [scottie]
tags: ['Power Rankings']
---

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons"
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons"

## Don't Call It a Comeback

...and we're back. After taking a few years off from writing power rankings, I've returned with a rejuvenated hatred for
all
your teams. I won't do these every week (given my busy schedule as a full-time employee and part-time grad student), but
I will do my best to periodically carve out time to explain why you're bad at fantasy football.

When I last wrote about fantasy football a year ago, I tried
to [quantify who the luckiest person in the league is](https://scottie.is/fantasy/luck). Since
then, I suffered yet another defeat in the championship. We can agree that I'm the unluckiest. In that post, I
introduced two metrics that I'll include in my power rankings: $$w_o$$ and $$Δw$$. A quick recap of those.

$$
w_o = ∑_{p ∈ P(r)} I(p < r.points)
$$

Where:

- $$P(r)$$ is the set of points from all other players in the same year and week as $$r$$, defined
  as $$\{p \mid (p.wy = r.wy) \land (p.u \mathrel{\char"2260} r.u)\}$$ where $$wy$$ represents week and year and $$u$$ represents username
- $$I(condition)$$ is the indicator function defined as $${ 1 \text{ if true } 0 \text{ if false } }$$
- $$r.points$$ represents the points from the input row

Below is a code snippet to calculate $$w_o$$ in Python using a `DataFrame` object that can be used with the data lake
mentioned below:

```python title='enrich_dataframe.py'
def calculate_weekly_wins_against_all_opponents(row):
    other_player_points = list(matchups.loc[matchups['year'] == row['year']] \
        .loc[matchups['week'] == row['week']] \
        .loc[matchups['username'] != row['username']]['points'])
    wins_against_all_opponents = 0.0
    for other_player_point in other_player_points:
        if other_player_point < row['points']:
            wins_against_all_opponents += 1
    return wins_against_all_opponents

# assumes that matchups have been loaded from S3
# more connection details below
matchups['wins_against_all_opponents'] = matchups.apply(calculate_weekly_wins_against_all_opponents, axis=1)
```

Simply put, $$w_o$$ is the number of teams that your weekly score would have defeated, with the range
being $${x ∈ ℤ : 0 ≤ x ≤ 11}$$. $$0$$ indicates that a team had the worst score of the week, and $$11$$ indicates that a
team
had the best score of the week.

As the season progresses, we can identify anomalous win/loss ratios (i.e., luck) by comparing the actual wins to the
number of teams the player would have beaten.
Using
the following formula, we can convert these deltas to a percentage above or below actual wins (as $$Δw$$ with $$w_a$$ as
actual wins and $$w_o$$ as wins over all opponents based on $$t$$ possible wins and $$11t$$
possible wins over all opponents):

$$
Δw = (w_a / t) - (w_o / (11t))
$$

Given that this is week three, $$t = 3$$. Negative values indicate unluckiness, and positive values indicate luckiness.
Let's review these metrics so far.

| Team    | Week Three $$w_o$$ | Season Total $$w_o$$ | $$Δw$$ |
| ------- | ------------------ | -------------------- | ------ |
| Travis  | 10                 | 28                   | 15%    |
| Scottie | 11                 | 26                   | -12%   |
| Callen  | 9                  | 25                   | 24%    |
| Carl    | 6                  | 23                   | -3%    |
| Mark    | 5                  | 23                   | 30%    |
| Andrew  | 3                  | 13                   | -6%    |
| Trond   | 0                  | 13                   | -6%    |
| Chris   | 8                  | 13                   | -6%    |
| Matt    | 7                  | 11                   | 0%     |
| Caleb   | 4                  | 10                   | -30%   |
| Logan   | 2                  | 7                    | -21%   |
| John    | 1                  | 6                    | 15%    |

Notice any usual suspects? I'll save that part for the power rankings.

## League Data Lake Production Release

For any nerds that want to do some data exploration, I've deployed the data lake to our production league AWS account.
Assuming that you have Python installed, the following Bash script will prepare your environment:

```shell title='configure-environment.sh'
python3 -m venv '.venv'
. .venv/bin/activate
pip install pandas pyarrow s3fs
```

I need to configure your access in our league SSO Identity Store, then you can get started with `pandas` like so:

```python title='matchups.py'
import pandas as pd

matchups = pd.read_parquet(
    's3://datalakestack-datalakebucket0256ea8e-2vsnkn8mkieo/sleeper/matchups/',
    engine='pyarrow',
    # example filter
    # filters=[('year', '==', 2025)])
```

Below are the currently supported columns, but please feel free to suggest others:

```python title='columns.py'
Index(['co_owners', 'keepers', 'league_id', 'owner_id', 'player_map',
       'players_x', 'reserve', 'roster_id', 'starters_x', 'taxi', 'points',
       'players_y', 'custom_points', 'matchup_id', 'starters_y',
       'starters_points', 'players_points', 'week', 'year', 'type'],
      dtype='object')
```

Now, on to this week's power rankings.

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/405213591fe488220f2f4f79d9cc28eb-three-scottie" class="sleeper-avatar"/> Brian Thomas Gooners | 3-0W/L | 339PF

#### Week Three Points: 115.26

Callen's team is stacked from top to bottom, has incredible depth, and will likely improve as the season advances (i.e.,
the Jordan Addison suspension). The only glaring weakness in his draft was at QB, but he has since filled that position
with a top-6 QB in Justin Herbert. All of his bench players put up at least 15 points this week. Oh yeah, and his rookie
pick (Tetairoa McMillan) is legit too. This team is a
juggernaut, and the only problem that Callen has right now is choosing who to start. In the words of Tim Brewster,
**"BALLERS EVERYWHERE!"** I'm glad that this team will make the playoffs, because the Aggies and Texans sure as hell
won't (and the Astros are trending in that direction too). With just the right luck so far (i.e., a $$Δw$$ of 24%)
and this roster, Callen has to take the number one spot.

| Name                 | Team   | Depth |
| -------------------- | ------ | ----- |
| Justin Herbert       | LAC-QB | 1     |
| James Cook           | BUF-RB | 1     |
| Alvin Kamara         | NO-RB  | 1     |
| Tetairoa McMillan    | CAR-WR | 1     |
| Brian Thomas         | JAX-WR | 1     |
| T.J. Hockenson       | MIN-TE | 1     |
| Malik Nabers         | NYG-WR | 1     |
| David Montgomery     | DET-RB | 2     |
| Tampa Bay Buccaneers | TB-DEF |       |

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/a18f9fc9312fa9c2003503730b41e7fc-three-scottie" class="sleeper-avatar"/> MeHurts&theGibbyGibbys | 3-0W/L | 359PF

#### Week Three Points: 122.32

With a league high $$w_o$$ of 28, Tarv has to be the next team. Jalen Hurts continues his fantasy dominance with
at least one rushing TD in each of the first three weeks. Any concerns about Saquon vulturing goalline TDs have long
since been moot. Jahmyr Gibbs continues to play like a league-winning RB, and Javonte Williams hoards the rushing
touches for the Cowboys. George Pickens and Rome Odunze are forming a strong WR corps for Tarv, but the injury to Mike
Evans will test this roster's depth. Trey McBride has been 10 points guaranteed, which is fantastic in the TE slot. That
said, I think Tarv will need some wavier wire magic to stay near the top. Another injury or Williams/Pickens falling
back
to earth could quickly send this team to the middle of the pack. Much like A&M's ref-assisted win over a massively
overrated Notre Dame, this team might be fool's gold (pun intended).

| Name             | Team    | Depth |
| ---------------- | ------- | ----- |
| Jalen Hurts      | PHI-QB  | 1     |
| Jahmyr Gibbs     | DET-RB  | 1     |
| Chase Brown      | CIN-RB  | 1     |
| Mike Evans       | TB-WR   | 7 (O) |
| Rome Odunze      | CHI-WR  | 1     |
| Trey McBride     | ARI-TE  | 1     |
| George Pickens   | DAL-WR  | 1     |
| Javonte Williams | DAL-RB  | 1     |
| Buffalo Bills    | BUF-DEF |       |

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/4b497865b72cac32f7c250f948326a9c-three-scottie" class="sleeper-avatar"/> ZOOT SCOOT BOOGIE | 2-1W/L | 353PF

#### Week Three Points: 127.85

Look at that! I've had negative luck, but I'm still in second place by $$w_o$$. Shout out to the Minnesota D/ST for making me $20
this week for the highest score. As a lifelong USC fan since June, I've always believed in Caleb Williams. He's looking
like a top-5 fantasy QB. Bijan Robinson and Ken Walker are forming a strong RB corps, but I'm feeling thin with the
season-ending injury to James Conner. I've been able to get to a great start, even with Justin Jefferson yet to have an
extraordinary game. My bench looks like an ICU at the moment, but the Quentin Johnston acquisition is looking like a
textbook Waiver Wire God move. This roster cannot handle another injury until Aiyuk and/or Jennings get healthy.

| Name              | Team    | Depth |
| ----------------- | ------- | ----- |
| Caleb Williams    | CHI-QB  | 1     |
| Bijan Robinson    | ATL-RB  | 1     |
| Kenneth Walker    | SEA-RB  | 1     |
| Justin Jefferson  | MIN-WR  | 1     |
| Zay Flowers       | BAL-WR  | 1     |
| Sam LaPorta       | DET-TE  | 1     |
| James Conner      | ARI-RB  | 5 (I) |
| Quentin Johnston  | LAC-WR  | 3     |
| Minnesota Vikings | MIN-DEF |       |

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/400266e997f2d0857da2c8f2b939fda4-three-scottie" class="sleeper-avatar"/> Uncle Cral's Little Dogs | 2-1W/L | 346PF

#### Week Three Points: 103.2

Carl's team looks strange but good (as per usual). McCaffrey and Dobbins are a damn good RB duo, but those two have
historically struggled to stay healthy. I'm not sold that Mariota is going to put up similar numbers to Jayden Daniels
every week (that is, if Carl doesn't stream QBs),
and I doubt that the Commanders are going to rush him back to play. Ja'Marr Chase has had two stinkers (including the
first game with Burrow out), so I'm not optimistic about his fantasy value at the moment, given the uncertainty at QB
with Burrow out for the foreseeable future.
That said, Emeka Egbuka might be the best pick of the draft. TE and flex look to be consistent for Carl, so I expect
this team to be a contender. I should have traded you James Conner at the draft.

| Name                | Team    | Depth |
| ------------------- | ------- | ----- |
| Marcus Mariota      | WAS-QB  | 2     |
| Christian McCaffrey | SF-RB   | 1     |
| J.K. Dobbins        | DEN-RB  | 1     |
| Ja'Marr Chase       | CIN-WR  | 1     |
| Emeka Egbuka        | TB-WR   | 1     |
| Juwan Johnson       | NO-TE   | 1     |
| D'Andre Swift       | CHI-RB  | 1     |
| Tony Pollard        | TEN-RB  | 1     |
| Atlanta Falcons     | ATL-DEF |       |

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/1bac27b3e88d08f050e32b48195acf46-three-scottie" class="sleeper-avatar"/> Sour Diesel Enjoyer | 3-0W/L | 336PF

#### Week Three Points: 99.04

Mark is already pacing to have as much luck as his 2023 championship season. After a narrow four-point victory against
me in week two, followed by a sub-100-point victory against Logz, we might have to accept that Mark is going to win it
all. The Josh Allen pick is looking galaxy-brain right now. I'm not inspired by his `r'*Chub*'` RB room or his twelve
other
RBs
that he has stashed on his bench. However, Puka/Amon-Ra/Ridley/Deebo is a lethal WR combo. History says that Mark is
likely to win several close games and secure a comfortable playoff spot. I see nothing that changes my mind here.

| Name                | Team    | Depth |
| ------------------- | ------- | ----- |
| Josh Allen          | BUF-QB  | 1     |
| Chuba Hubbard       | CAR-RB  | 1     |
| Nick Chubb          | HOU-RB  | 1     |
| Puka Nacua          | LAR-WR  | 1     |
| Amon-Ra St. Brown   | DET-WR  | 1     |
| Tucker Kraft        | GB-TE   | 1     |
| Calvin Ridley       | TEN-WR  | 1     |
| Deebo Samuel        | WAS-WR  | 2     |
| Pittsburgh Steelers | PIT-DEF |       |

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/61bfca158073b2dda70f755d92aacad9-three-scottie" class="sleeper-avatar"/> Mayfield Advantage | 1-2W/L | 301PF

#### Week Three Points: 91.7

Carlough's team feels like the perfect midpoint for the league. This roster hasn't performed at the level of the top
teams, but it's a clear step up from the basement dwellers below. Baker Mayfield has been a reliable 20-point source to
serve as a quality scoring base. De'Von Achane and Jonathan Taylor have shown consistency and the explosive potential to
catapult this team to the top of the standings. Carlough's WR corps and flex spots haven't inspired much confidence so
far, and the injury to Brittle Kittle hurts too. That said, I think Chris Godwin's return could push this team into the
playoffs.

| Name                | Team    | Depth |
| ------------------- | ------- | ----- |
| Baker Mayfield      | TB-QB   | 1     |
| De'Von Achane       | MIA-RB  | 1     |
| Jonathan Taylor     | IND-RB  | 1     |
| Wan'Dale Robinson   | NYG-WR  | 2     |
| Tee Higgins         | CIN-WR  | 2     |
| Harold Fannin       | CLE-TE  | 2     |
| Hollywood Brown     | KC-WR   | 2     |
| Jakobi Meyers       | LV-WR   | 1     |
| Philadelphia Eagles | PHI-DEF |       |

## <FontAwesomeIcon className="levelDown" icon={faLevelDownAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/320f9195b391718105e27b8cc9d40277-three-scottie" class="sleeper-avatar"/> Disney hater bville mayor | 1-2W/L | 277PF

#### Week Three Points: 75.83

After a strong week one showing, Trond's roster has performed progressively worse each week. Saquon Barkley's
disappointing week contributed to a 75.83-point stinker. Marvin Harrison and Breece Hall have also been uninspiring so
far. The rest of the roster looks good, not great. Michael Pittman and one explosive performance from Jared Goff have
been bright spots, but this team is aggressively mediocre. That's a step up for Trondheim!

| Name                | Team   | Depth |
| ------------------- | ------ | ----- |
| Jared Goff          | DET-QB | 1     |
| Saquon Barkley      | PHI-RB | 1     |
| Breece Hall         | NYJ-RB | 1     |
| Michael Pittman     | IND-WR | 1     |
| Marvin Harrison     | ARI-WR | 1     |
| Brock Bowers        | LV-TE  | 1     |
| Jameson Williams    | DET-WR | 2     |
| Jalen Nailor        | MIN-WR | 3     |
| San Francisco 49ers | SF-DEF |       |

## <FontAwesomeIcon className="levelUp" icon={faLevelUpAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/9696064d6bc28fc8da4e9731c5b02738-three-scottie" class="sleeper-avatar"/> Moore Lamb Plz | 0-3W/L | 272PF

#### Week Three Points: 95

I really feel for Caleb. With a $$Δw$$ of -30%, he remains the unluckiest person in our league once again. In addition
to the bad luck in matchups, CeeDee Lamb will miss three to four weeks. Despite this, I'm actually high on this roster
outside a terrible homer pick in Bo Nix. Jaxon Smith-Njigba looks special this season, and he has a solid RB1 and RB2
combo. Despite a painful start, I believe that this team will regress to the mean.

| Name               | Team   | Depth |
| ------------------ | ------ | ----- |
| Bo Nix             | DEN-QB | 1     |
| Kyren Williams     | LAR-RB | 1     |
| Jaylen Warren      | PIT-RB | 1     |
| CeeDee Lamb        | DAL-WR | 2 (O) |
| Jaxon Smith-Njigba | SEA-WR | 1     |
| Jake Ferguson      | DAL-TE | 1     |
| TreVeyon Henderson | NE-RB  | 2     |
| DJ Moore           | CHI-WR | 2     |
| Green Bay Packers  | GB-DEF |       |

## <FontAwesomeIcon className="levelDown" icon={faLevelDownAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/83296c4221970b26ea4d019a7581d032-three-scottie" class="sleeper-avatar"/> Rashee Ya Later Alligator | 1-2W/L | 270PF

#### Week Three Points: 106.59

> Sports leads us nowhere but to pain and despair.

Cramsey got a much-needed first win this week. After a tough start to K-State's football season, I fear that a loss this
week might have broken him psychologically. Lamar Jackson has been a pillar of stability for this roster as the number
one QB. Josh Jacobs has been reasonably reliable, but this team is currently lacking explosiveness. Outside of a
Courtland Sutton 21.8-point game, this team has demonstrated little boom potential. As such, I expect that this team
will hover around 90-100 points per week.

| Name             | Team    | Depth |
| ---------------- | ------- | ----- |
| Lamar Jackson    | BAL-QB  | 1     |
| Josh Jacobs      | GB-RB   | 1     |
| Rachaad White    | TB-RB   | 2     |
| Calvin Austin    | PIT-WR  | 2     |
| Terry McLaurin   | WAS-WR  | 1 (Q) |
| David Njoku      | CLE-TE  | 1     |
| Ladd McConkey    | LAC-WR  | 1     |
| Courtland Sutton | DEN-WR  | 1     |
| Seattle Seahawks | SEA-DEF |       |

## <FontAwesomeIcon className="levelDown" icon={faLevelDownAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/0658c50f92789c23a6f0b1efef9dbdaa-three-scottie" class="sleeper-avatar"/> TUlsa King | 1-2W/L | 264PF

#### Week Three Points: 103.48

With 0% luck, it's safe to say that this is just what K-Man's team is. This roster isn't terrible, but it's a tough
break when your first-round pick averages 6.9 PPG. I'm not sure Ashton Jeanty is poised for a breakout season with the
Raiders either. Perhaps Boise State and all teams outside the Power Two conferences don't prepare players for the NFL in
the same way. Personally, I think this team's success will hinge on Omarion Hampton, Garrett Wilson, and a couple of
good waiver pickups.

| Name               | Team    | Depth |
| ------------------ | ------- | ----- |
| Daniel Jones       | IND-QB  | 1     |
| Omarion Hampton    | LAC-RB  | 1     |
| Bucky Irving       | TB-RB   | 1     |
| Garrett Wilson     | NYJ-WR  | 1     |
| Chris Olave        | NO-WR   | 1     |
| Tyler Warren       | IND-TE  | 1     |
| Dylan Sampson      | CLE-RB  | 3     |
| Ashton Jeanty      | LV-RB   | 1     |
| Indianapolis Colts | IND-DEF |       |

## <FontAwesomeIcon className="levelDown" icon={faLevelDownAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/23fe4994d864928df8f99d56b60c9179-three-scottie" class="sleeper-avatar"/> This Team Is The Pitts | 0-3W/L | 257PF

#### Week Three Points: 89.96

> Logz makes the playoff (no: Scottie; yes: K-Man); one shot wager

Remember this pinned bet from the draft? It's burned into my memory alongside K-Man trying to close a trade deal with me
while smelling like warm milk and wearing a Frozen sweater. I'm beginning to feel confident that Logz will miss the
playoffs. There are still some strong pieces here to build around, like Travis Etienne, Nico Collins, and Davante Adams.
That said, some of these picks (like Jacory Croskey-Merritt) scream, "I listen to a bunch of 'expert' fantasy football
podcasts, and this is who they told me to draft!" Drake London is just having a slow start, but the rest don't inspire
much confidence.

| Name                   | Team    | Depth |
| ---------------------- | ------- | ----- |
| Dak Prescott           | DAL-QB  | 1     |
| Jacory Croskey-Merritt | WAS-RB  | 1     |
| Travis Etienne         | JAX-RB  | 1     |
| Nico Collins           | HOU-WR  | 1     |
| Drake London           | ATL-WR  | 1     |
| Travis Kelce           | KC-TE   | 1     |
| Davante Adams          | LAR-WR  | 2     |
| Stefon Diggs           | NE-WR   | 1     |
| Washington Commanders  | WAS-DEF |       |

## <FontAwesomeIcon className="levelDown" icon={faLevelDownAlt} /> <img src="https://dxyip34awyjyf.cloudfront.net/3618f3aaee361b89185c5e9ed9107c70-three-scottie" class="sleeper-avatar"/> Henrything is Possible | 1-2W/L | 249PF

#### Week Three Points: 85.64

> Mandrews 😭 Was it me?

It's incredible that this team has had significant luck (i.e., $$Δw$$ of 15%) but is still at the bottom of the
standings. This team should absolutely be 0-3, given that John has yet to break 90 points in a week. On paper, this team
should be better due to its strong core, excluding a washed Mahomes homer pick and horrific flex spots. It also feels
like John is playing Whac-A-Mole with poor sit/start choices. This team has the potential to trend up to the 90s or low
100s, so John shouldn't buy Juggalo face paint just yet.

| Name             | Team    | Depth |
| ---------------- | ------- | ----- |
| Patrick Mahomes  | KC-QB   | 1     |
| Derrick Henry    | BAL-RB  | 1     |
| Jordan Mason     | MIN-RB  | 1     |
| A.J. Brown       | PHI-WR  | 1     |
| Tyreek Hill      | MIA-WR  | 1     |
| Zach Ertz        | WAS-TE  | 1     |
| Jerry Jeudy      | CLE-WR  | 1     |
| Troy Franklin    | DEN-WR  | 3     |
| Baltimore Ravens | BAL-DEF |       |
