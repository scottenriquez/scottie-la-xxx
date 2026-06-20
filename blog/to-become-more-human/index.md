---
authors: [scottenriquez]
title: Becoming More Human in an Increasingly AI World
date: '2025-05-09'
description: 'My current thoughts on the state of artificial intelligence.'
tags: ['Personal', 'Technology']
---

I'm tired. Existentially.

As a senior engineer with nearly 13 years of professional experience, I've reinvented myself countless times. I've seen more technologies than I can count or remember come and go. I've seen bubbles form and burst. I remember when the latest flop was supposed to be the next big thing. I've spent countless hours learning new skills and honing my craft in a knowingly futile effort to stay up-to-date with technology. I've seen layoffs and downturns. Trust me, I understand that the macroeconomics of the tech industry has peaks and valleys. After all, I wrote my first `Hello, world!` in high school shortly after the `.com` crash. However, something feels different this time. I'm starting to feel deeply disillusioned about the future of AI.

## Goodhart's Law and Vestigial Structures

I will refer to the concept of Goodhart's Law a few times throughout this post, so I'll quickly define my interpretation. It states that:

> Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes.

Or, in layperson's terms (which I strongly prefer):

> When a measure becomes a target, it ceases to be a good measure.

I think about this adage almost every single day. It's no secret that Amazon is one of the most data-driven companies on the planet. During my tenure at AWS, I wrote numerous docs overflowing with quantitative evidence to support my claims and proposals. As a customer-facing solutions architect, data was integral to guiding my customers on the right path and measuring the efficacy of my work. That said, Amazonians are also expected to balance the data with anecdotes. Like Jeff Bezos famously said back in 2018:

> The thing I have noticed is that when the anecdotes and the data disagree, the anecdotes are usually right. There is something wrong with the way that you are measuring it.

I remember my professors at university telling stories of how programmers back in the day used to have their productivity measured by various arbitrary metrics like program execution duration, lines of code, etc. When these metrics become targets, other arguably more meaningful metrics like code maintainability quickly suffer.

Exhibit A:

```typescript title='terribleAddFunction.ts'
const add = async (first: number, second: number): Promise<number> => {
  const sleep = (millisecondsToWait: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, millisecondsToWait));
  };
  // waste five minutes of runtime
  await sleep(300000);
  return first + second;
};
```

Exhibit B:

```typescript title='terribleIfFunction.ts'
// replace
// condition ? truePathReturn : falsePathReturn
// with extra lines
// add comments for even more lines
const ifWithExtraLines = (condition: Boolean, truePathReturn: object, falsePathReturn: object): object => {
  // check condition
  if (condition) {
    // return true path object if condition is true
    return truePathReturn;
  } else {
    // return false path object if condition is false
    return falsePathReturn;
  }
};
```

You get the idea. These code snippets are terrible, but if developers' targets are runtime or the number of lines, this is the type of software that is incentivized. Individuals will always index on their targets.

As the tech industry has narrowed its focus and investments on AI lately, I can't help but feel less human. I'm constantly bombarded on social media with the sensationalized idea that developers will soon be replaced. Programmers will become vestigial structures, casualties of the rise of AI agents, and ironically, the very source of data that will lead to our own demise. While I am skeptical about just how close humans are to AGI (artificial general intelligence), there's no doubt that we are approaching a critical juncture in technological history. I'm also not convinced that we're considering the right metrics.

I'm not going to masquerade as some genius economist, but let's consider a stock price as an example of a target for a moment. Everyone can agree that this is a meaningful target, but I argue that this is a short-term target. Why are some executives paid primarily via stock? So their focus is to raise the stock price, of course. Typically, vest periods of a few years ensure no short-term stock manipulation. However, they have a clear target and timeline. Other leadership now indexes on this as well. Many other metrics, such as the company's long-term performance, employee satisfaction, etc., are often less of a focus because they impact their target far less. Goodhart's Law in action. Now, most employees are constantly laser-focused on short-term growth in perpetuity. Not all companies are like this, but this example illustrates the point. However, I fear this myopic mentality honing in on short-term profitability and adoption, instead of ethics and considerations of socioeconomic impact, is prevalent in AI.

## Developer Productivity Is Not for You

With the advent of large language models (LLMs) and AI agents, there are typically two value propositions: hire fewer developers and/or materially augment their performance. While we can debate just how much the productivity gains are, tools like these undoubtedly help developers like me ship features faster than ever. But have you ever asked yourself who benefits from these productivity gains? In theory, these productivity gains mean more features. More features correlate to more revenue. More revenue sways the market. The market support bolsters the stock price. So simply put, your employer and its shareholders benefit from your increased productivity as a developer. Developer productivity is not for you.

While I use these tools daily for tasks like explaining code I did not write, I have no idea how this will impact my skills and cognitive sharpness in the long term. This is a nuanced question about human psychology. Having an LLM available to generate code for me can make me far less motivated to do my own thinking and research, especially during project crunch times when I am under massive pressure to deliver. These tools certainly make me more productive, but may not make me a better programmer. That is the key distinction because one benefits my employer, and the other benefits me as a skilled worker.

## We Gave Away the Knowledge for Free (Under MIT)

I also won't parade myself around as an open-source purist. The lion's share of the software I've authored resides under the lock and key of my megacorporate employers' private repositories. That said, I never imagined that all the code I (and much more so the actual open-source contributors) published freely on the internet would benefit a select few companies later, back when I signed up for my GitHub account over a decade ago. While access to these models is democratized for a fee, creating these massive models is limited to the select few corporate titans with the means of production (mountains of GPUs, barring revolutionary advancements in the vein of DeepSeek).

While these technological advancements are truly remarkable, I still struggle with the ethics of using these large models at times. Without namedropping any company or model, you can find countless lawsuits from creators who have coaxed significant portions of their works from LLMs and diffusion models without the proper licensing. These cases are ample evidence, in my opinion, that the macroeconomic corporate stance is to ask for forgiveness, not permission, for what content is acceptable to train models on.

Ultimately, we gave away the knowledge for free, but now we have to pay for access to its application. When we look at the jobs that are most at risk of being replaced by AI (or rather by its perceived value), they are mostly well-paying jobs in a rapidly vanishing middle class (e.g., developers) or creative fields like graphic design. To quote the [brilliant tweet](https://x.com/QuinnCat13/status/1609711617062703104) of `@QuinnCat13`:

> We could automate menial jobs so people have time to make art and music, but apparently, we'd rather automate art and music so people have time for menial jobs.

Software like [Glaze](https://glaze.cs.uchicago.edu/what-is-glaze.html), which adds minor modifications to images that are imperceptible to the human eye but makes it more difficult for models to train on, gives me hope for checks, balances, and enforcement in AI ethics. However, these powerful models already exist. Remediation is much more challenging than prevention.

## SaaS Is Not Going to Save Us

One trendy take I've seen from the indie hacker influencers on Twitter and LinkedIn is that instead of working for a corporation, you should quickly build your own products using LLMs and IDEs like Cursor. This way, you own your intellectual property and generate revenue directly. However, I see several problems.

I do not want to gatekeep how we define a programmer, so I'll use artistry as an example. I have zero experience in Photoshop, Illustrator, etc. I am not a graphic designer or illustrator by any stretch of the imagination. However, I can now throw a sentence or two into a diffusion model and produce imagery. Am I now an artist? I argue not. If any modifications need to be made to the output, I am utterly incapable of handling them unless I can do so via prompt engineering. The rendered art will also be soulless, lack perspective, and solely regurgitate existing works of actual artists. Similar problems exist for purely AI-generated codebases by inexperienced programmers. I won't namedrop and pile on to them, but you can find numerous examples of security breaches and unexpected cost spikes due to issues in AI-generated code.

Another key issue is the concept of differentiated value. This is a common argument for using cloud service providers like AWS. You can run your own data centers, manage your own virtualization, build your own provisioning automation, etc. However, if AWS can do it out-of-the-box with better economies of scale than your company, why waste time on work that does not set your product apart from its competition? A common approach is to limit undifferentiated work. If AI primarily writes your SaaS product, then the differentiated value of your business is effectively a set of prompts. While I predict that LLMs have and will continue to plateau, let's assume I'm wrong. Why would a company (or individual power users) pay a recurring fee for your product if they can get the same results by generating and plugging in the prompts themselves? The barrier to entry for developers is lowered with AI appliances, but corporations also have this exact ability with far more resources behind them. SaaS is not going to save us.

## No One Left to Pay

At the height of the Great Depression, unemployment hit approximately 25% in the United States. Most people fail to realize how much the global economy depends on people having money to consume services and goods. Again, let's assume that I'm wrong about the AI plateau. Let's also ignore supply and demand issues for compute resources. Who is left to pay for anything if AGI replaces all these jobs? A global economic crisis would ensue. I don't know whether it's a universal basic income, an oligarchy with access to key resources, or something else that emerges after AGI, but it does not look bright for humanity at that point.

## A Focus on Humanity

Believe it or not, this post started as a therapy exercise. I've been struggling lately to define my worth, identity, and goodness as a human being without relying on my career accolades, the perceived prestige of the company I work for, the quality of my education, etc. When I look to others for inspiration online, I see the same qualities: braggadocious reflections about their many followers, indie makers plastering their incomes on their profiles, toxic elitism, etc. We've been conditioned for these targets in this influencer-obsessed society.

Over the years, I've sought personal validation and measured my worth through various metrics that, unfortunately, are deeply rooted in capitalism and vanity. At no other point in human history have we had unfettered access to data about ourselves as we do now. We can measure how seen we are with social media views, how much people approve of our thoughts via likes, how valuable we are with our incomes and contributions to our employers, etc. Perhaps even worse, we can also see these metrics for our peers. We choose these arbitrary metrics as our targets, and the wrong actions are incentivized. We build and optimize for these targets, and humanity takes a backseat. No longer do we have time to gaze up at the stars, draw constellations, tell stories, have downtime, etc., as our ancient ancestors did. We've replaced this with incessant media consumption, working more than ever, and nonstop reminders that all the numbers that matter to us must keep going up.

I don't blog often, but I felt inspired to write about my frustrations with the industry, society, and myself. I still have a genuine love of technology and am grateful that my career revolves around this passion, a privilege I do not take for granted. However, now more than ever, it's time for me to relinquish some of that competitive, capitalistic vanity and reconnect with my humanity. I do not care about constant improvement, revenue growth, external validation, etc., the same way that I used to. I want to spend more time creating for myself, learning for fun, exploring spirituality or connection with the natural world, and investing time in things that make the world a slightly better place. If AI replaces me in the process, then so be it.

I have no power to make changes on a massive scale. I'm a minuscule cog in this intricate and profoundly unfair machine, like most people. I can offer up my authentic self, though. I can share my tiny voice that questions the ethics and benefits of this technology that we know and use. I acknowledge that the anecdote has much more context than the data. I can share my journey to define my self-worth and goodness without the quantitative pressure of comparing myself to others. I can strive to be more human in an increasingly AI-obsessed world.

## Disclaimer

When I started this blog post, I worked for Amazon Web Services. The opinions and views expressed here are my own and not those of Amazon. I have since left the company.
