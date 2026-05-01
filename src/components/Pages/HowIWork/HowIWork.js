import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import { ArticleSection, ArticleSectionContent } from "../../DesignSystem";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";

const metaTitle = "How I Work | Alexandros Shomper";

const metaDescription =
  "How I run product design — Dual-Track Agile, Discovery and Production gates, the rituals, the metrics, and what I’ve learned across 12 markets and five years of leading B2B SaaS teams.";

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <p>
          That sounds like a slogan, but it’s a real operating choice — and the
          rest of this article is about what that choice actually looks like in
          practice. If you’re a Head of Design, a PM, or a designer thinking
          about working with me, this is the most honest answer I can give to
          the question “what is it like?”
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Overview"
          headline="The system in one frame"
          subline="Two tracks, one routing decision — that’s the whole system. Everything else is detail."
        />
        <p>
          <em>[Diagram goes here — see following section]</em>
        </p>
        <p>
          The shape is: every piece of product work passes through one of two
          tracks based on how certain we are about the problem and the
          solution. High uncertainty goes into the Discovery Track. High
          certainty goes straight into the Production Track. Most of the time,
          we don’t know which until we start asking — so the routing itself is
          part of the work.
        </p>
        <p>That’s the whole system. Everything below is detail.</p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Principles"
          headline="Three things I believe"
          subline="The convictions that shape every decision below."
        />

        <CaseSubline subline="Happy users are our currency" />
        <p>
          Design’s contribution to a company’s bottom line works through
          exactly two levers: helping the company make more money
          (potential-driven sales fueled by enriched customer data), or helping
          the company spend less money (self-service products that unburden
          sales and support).
        </p>
        <p>
          Both come from the same place — building products that customers
          actually want to use. So when I argue for design investment
          internally, I don’t argue for design. I argue for happy users, and I
          argue in CFO terms. It’s the only argument that survives a budget
          review.
        </p>

        <CaseSubline subline="Compliance through laziness" />
        <p>
          Most enterprise processes fail not because they’re bad but because
          they’re harder to follow than to ignore.
        </p>
        <p>
          So I design processes the way I design products: the right thing has
          to also be the easy thing. Templates short enough that filling them
          in is faster than not. Definition-of-Done checklists that fit on one
          screen. Maturity assessments that take 30 minutes and produce
          something useful. If a designer or PM has to choose between
          following the process and shipping, the process loses — and they
          should.
        </p>

        <CaseSubline subline="Velocity over predictability" />
        <p>
          I optimize for shipping a high volume of customer value with each
          Program Increment. I do not optimize for accurate estimation.
        </p>
        <p>
          That’s a real trade-off. It means I avoid heavyweight processes like
          detailed story-point estimation by the whole team. Designers weight
          their own work, briefly, with Fibonacci-style numbers (1, 2, 3, 5,
          8, 13). Predictability gets better over time as a side effect — but
          it’s never the goal. Shipped value is.
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Workflow"
          headline="The two tracks"
          subline="The spine of the workflow is Dual-Track Agile. Two parallel tracks running continuously, each with its own definitions of Ready and Done, each with its own artifacts."
        />

        <CaseSubline subline="Discovery Track" />
        <p>
          <strong>What it’s for.</strong> Validating that we’re solving the
          right problem with the right solution before we spend engineering
          capacity on it.
        </p>
        <p>
          <strong>When I send work here.</strong> When the problem isn’t well
          understood, the solution isn’t obvious, the user impact is unclear,
          or there’s a real risk of building the wrong thing. If any of those
          is true, Discovery first. If none of them is, the work skips
          Discovery and goes straight to Production.
        </p>
        <p>
          This routing decision sounds simple but it’s the most important
          judgment call in the whole system. Most teams either route everything
          to Discovery (and become slow) or nothing to Discovery (and ship the
          wrong things). Calibrating that call is half of what a senior
          designer is for.
        </p>
        <p>
          <strong>The two phases inside it.</strong>
        </p>
        <p>
          <em>Problem Validation.</em> I open every opportunity with a
          one-page Opportunity Briefing — strategic fit, user value
          hypothesis, business value hypothesis, named stakeholders,
          constraints. Then I pressure-test it with research: 5–20 interviews
          using a standardized warm-up + exploratory script, supported by
          analytics review and competitive analysis. The output is a Problem
          Statement compressed to a few sentences. The compression is the
          test. If I can’t compress it, I don’t yet understand it.
        </p>
        <p>
          <em>Solution Validation.</em> Once the problem is validated, the
          team moves to a Lean UX Canvas: business problem, business outcome,
          users, user outcome, solutions, hypotheses, the most important thing
          to learn, and the least work to learn it. We pick the riskiest
          assumption and design the cheapest experiment that could kill it.
          Solutions get prioritized, validated, and documented. Then a User
          Story Map.
        </p>
        <p>
          <strong>What “done” looks like.</strong> The Problem Statement is
          validated and well-formulated. The Lean UX Canvas is fully worked
          through. Multiple solution approaches were explored. Cross-team
          dependencies are surfaced and DRIs included. Solutions are
          prioritized and validated. Findings are documented and communicated
          to PM, PO, and Chapter Lead. Technical implications discussed with
          engineering. User Story Map aligned with PO and Dev.
        </p>
        <p>
          That’s a lot of items, but the underlying test is simple: would
          another designer reading the file in three months be able to pick
          this up and move it forward? If yes, Discovery is done.
        </p>

        <CaseSubline subline="Production Track" />
        <p>
          <strong>What it’s for.</strong> Building and shipping the validated
          solution.
        </p>
        <p>
          <strong>When I send work here.</strong> When certainty is high
          enough that the team’s time is better spent shipping than
          investigating. Sometimes that’s because Discovery just finished.
          Sometimes the work was certain to begin with — a small UI change, a
          known fix, a feature with clear precedent. Either way, the gate is
          the same: do we know enough?
        </p>
        <p>
          <strong>The three phases inside it.</strong>
        </p>
        <p>
          <em>UX phase.</em> Wireframes, wireflows, and concept documentation.
          The output gets linked to the Jira ticket and reviewed by peers.
          Heuristic evaluation if scope warrants. User testing if novelty
          warrants.
        </p>
        <p>
          <em>UI phase.</em> Responsive (desktop and mobile) designs.
          Accessibility check. Empty states and edge cases. Design-system
          conformance — and if a new component is needed, it goes back into
          the system. Reviewed by UX. Concept documentation updated.
        </p>
        <p>
          <em>Front-End phase.</em> Implementation. Reviewed by design before
          merge.
        </p>
        <p>
          Each phase has its own Definition of Ready and Definition of Done.
          They’re checklist-short. Following them is genuinely easier than
          not.
        </p>
        <p>
          <strong>The naming convention that matters.</strong> Every Figma
          branch in our system is named the same way:{" "}
          <code>[PI number] [Ticket number] - [User Story title]</code>, e.g.{" "}
          <code>PI2 T655 - Email Design Templates for Okta</code>. Branches
          are named after the parent User Story, never the sub-task.
          Discussions happen in the User Story comments. This sounds boring;
          it’s load-bearing. It’s why a designer who joins the team can find
          anything in 60 seconds.
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="In Practice"
          headline="How a piece of work actually moves through the system"
          subline="A worked example from myKnauf System Finder — from intake to first shipped iteration in roughly eight weeks."
        />
        <p>
          We had an opportunity called <em>myKnauf System Finder</em> — the
          hypothesis was that customers who needed to find construction
          systems on knauf.com (planners, applicators, dealers, sales reps)
          were spending too much time hunting for the right product, dropping
          off, and calling support.
        </p>

        <CaseSublineTwo subline="Day 0 — intake." />
        <p>
          I filled in an Opportunity Briefing. Four named jobs-to-be-done, one
          per customer type. Workarounds today: phone calls, catalogues, EDI,
          PDFs. Severity: high — almost everyone in the customer base goes
          through this. Measurable success criteria committed up front:
          increase System Finder click-through, increase document downloads,
          decrease time-to-task-completion.
        </p>

        <CaseSublineTwo subline="Week 1–2 — Problem Validation." />
        <p>
          Discovery Track. Interviews with applicators, planners, and dealers
          in BE and NL using the standard exploratory script. Internal
          analysis: heuristic evaluation of the existing System Finder,
          analytics review of where users drop off. Output: a Problem
          Statement compressed to three sentences. Confidence on the problem
          went from Medium to High.
        </p>

        <CaseSublineTwo subline="Week 3–4 — Solution Validation." />
        <p>
          Lean UX Canvas. Three solution approaches, prioritized. The riskiest
          assumption was that planners would actually use a self-service
          finder rather than calling sales — so we tested that first with a
          clickable prototype on five participants. It held up. Solutions
          documented. User Story Map drafted with PO and Dev.
        </p>

        <CaseSublineTwo subline="Week 5+ — Production Track." />
        <p>
          UX phase: wireflows, concept documentation, heuristic evaluation. UI
          phase: responsive designs, accessibility check, design-system
          components. FE phase: implementation, design review.
        </p>

        <p>
          The whole thing — from intake to first shipped iteration — took
          roughly 8 weeks. Most of the value was created in the first four. By
          the time we entered Production, the team was building something
          we’d already validated would work, against metrics we’d already
          committed to.
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Measurement"
          headline="How I measure the system itself"
          subline="Three layers, each with a different rhythm."
        />

        <CaseSubline subline="Per ticket — Fibonacci weights" />
        <p>
          Each design ticket gets a 1, 2, 3, 5, 8, or 13 weight from the
          designer working on it. 8 or 13 is a flag — the ticket is too big
          and needs splitting. Capacity-planning is the average of the last
          three PIs minus planned time off. Mid-PI scope changes get added as
          new weights, and tradeoffs get discussed with the PO. After every
          PI, a five-minute mini-retro: were the estimates accurate? Where did
          we drift?
        </p>

        <CaseSubline subline="Per feature — usability instruments" />
        <p>
          SUS, NPS, CSAT surveys quarterly. Heuristic evaluation by multiple
          evaluators against the same matrix. Accessibility checks (automated
          + manual). Time-to-task-completion and task-completion-rate from
          analytics.
        </p>

        <CaseSubline subline="Per quarter — UX Maturity Assessment" />
        <p>
          The team self-scores against 16 dimensions across two clusters — UX
          Capabilities (Vision, Planning &amp; Prioritization, Budget,
          Awareness, Appreciation, Competency, Adaptability, Methods,
          Collaboration, Consistency, Impact, Measurement) and Strategic
          Health (Strategy, Culture, Process, Outcome). I render the results
          as a candlestick chart per dimension to show variance and
          quarter-on-quarter movement. The numbers are honest — Measurement
          is consistently the lowest-scored dimension on my teams, which is
          exactly the kind of thing self-scoring is for.
        </p>
        <p>
          The point of the maturity assessment isn’t the score. The score is
          the side-effect. The point is that PMs and POs reflect on UX best
          practices and choose two or three concrete improvements for the
          next quarter — and because they chose them, they own them.
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Lessons"
          headline="What I’ve learned"
          subline="A few things that took years to figure out."
        />

        <CaseSubline subline="A Problem Statement is a compression test, not a writing exercise." />
        <p>
          If I can’t get the problem into three sentences, I don’t yet
          understand it. Most teams skip this step and the cost shows up
          months later, when the team is building features that sort of relate
          to a problem nobody fully owns.
        </p>

        <CaseSubline subline="The Production Track needs more structure than the Discovery Track, not less." />
        <p>
          Discovery rewards judgment. Production rewards consistency.
          Designers who like Discovery often resist structure in Production —
          that’s exactly backwards.
        </p>

        <CaseSubline subline="Letting people score themselves beats auditing them." />
        <p>
          I tried both. Self-scored maturity assessments produced honest data
          and self-chosen next steps. Audited assessments produced gaming and
          resentment. The compliance-through-laziness principle applied to
          measurement: if reflecting is easier than defending, people reflect.
        </p>

        <CaseSubline subline="Documentation is half the job." />
        <p>
          I invest about half my team’s time in documenting concepts,
          decisions, and validations. That sounds excessive until the team
          turns over, the freelancer rotates out, or the roadmap stretches
          across five years. Then it sounds like the only thing that matters.
        </p>

        <CaseSubline subline="The riskiest assumption is rarely the most interesting one." />
        <p>
          Teams gravitate toward testing the parts of the design they’re most
          excited about. The discipline of the Lean UX Canvas is making them
          test the part that would collapse the whole hypothesis if it were
          wrong.
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Fit"
          headline="Where this works, where it doesn’t"
          subline="The right question for any team isn’t “should we adopt Dual-Track Agile?” — it’s “what level of certainty does the work demand, and what’s the cheapest way to reach it?”"
        />
        <p>
          This system works well in B2B SaaS, multi-market enterprise
          software, complex workflows with multiple user types, and
          organizations starting from low UX maturity. It scales — I’ve run
          it across product teams, design systems, and a global website
          program simultaneously.
        </p>
        <p>
          It’s heavier than necessary for very small startups, pure
          design-led shops, and throwaway prototypes. If you ship faster than
          you can validate, the Discovery Track becomes a tax. If you ship
          into a single user type with a clear single use case, the routing
          logic is overkill.
        </p>
        <p>
          The right question for any team isn’t “should we adopt Dual-Track
          Agile?” — it’s “what level of certainty does the work demand, and
          what’s the cheapest way to reach it?” That question, applied
          honestly, is the entire system.
        </p>
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Article",
  eyebrowColor1: "#666677",
  eyebrowColor2: "#444455",
  title: "How I Work",
  subline:
    "I run product design like an investigation, not a delivery line.",
  hero: null,
  renderContent,
});
