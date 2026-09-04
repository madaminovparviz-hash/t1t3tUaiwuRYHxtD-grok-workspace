import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero, Section } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { loc, schedule } from "@/lib/church";
import { expectItems, faqs } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/worship")({
  component: Worship,
  head: () => ({
    meta: [{ title: "Суббота · АСД Душанбе" }],
  }),
});

function Worship() {
  const { t, lang } = useLang();

  return (
    <main>
      <PageHero kicker={t.worship.kicker} title={t.worship.title} lead={t.worship.lead} />
      <Section className="pt-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-title font-medium">{t.worship.hoursTitle}</h2>
            <p className="mt-3 max-w-xl text-muted">{t.worship.hoursLead}</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/contact">{t.home.ctaFind}</Link>
          </Button>
        </div>
        <ol className="mt-10 divide-y divide-border border-y border-border">
          {schedule.map((item) => (
            <li
              key={`${item.time}-${loc(item.title, "ru")}`}
              className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline"
            >
              <p className="sm:col-span-3 font-display text-2xl text-accent">
                {item.time}
              </p>
              <div className="sm:col-span-9">
                <p className="text-xs font-medium tracking-wide text-subtle uppercase">
                  {loc(item.day, lang)}
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium">
                  {loc(item.title, lang)}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {loc(item.detail, lang)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface">
        <h2 className="font-display text-title font-medium">{t.worship.expectTitle}</h2>
        <p className="mt-3 max-w-xl text-muted">{t.worship.expectLead}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expectItems.map((item) => (
            <article key={loc(item.title, "ru")} className="rounded-xl bg-bg p-5 shadow-border">
              <h3 className="font-display text-xl font-medium">{loc(item.title, lang)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{loc(item.body, lang)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <h2 className="font-display text-title font-medium">{t.worship.faqTitle}</h2>
        <div className="mt-8 max-w-3xl">
          {faqs.map((item) => (
            <FaqRow
              key={loc(item.q, "ru")}
              question={loc(item.q, lang)}
              answer={loc(item.a, lang)}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted transition-transform duration-200 ease-out",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
