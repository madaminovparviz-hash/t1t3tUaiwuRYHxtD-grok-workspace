import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  formatSabbathDate,
  isoWeekVerse,
  loc,
  locations,
  pluralDays,
  sabbathInfo,
  schedule,
} from "@/lib/church";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "АСД Душанбе — Церковь адвентистов седьмого дня" },
      {
        name: "description",
        content:
          "Церковь христиан-адвентистов седьмого дня в Душанбе. Суббота, Писание, община. ул. Борбада, 117.",
      },
    ],
  }),
});

function Home() {
  const { t, lang } = useLang();
  const sabbath = sabbathInfo();
  const verse = isoWeekVerse();
  const dateLabel = formatSabbathDate(sabbath, lang);
  const preview = schedule.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full hero-wash" />
        <div className="relative mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="reveal text-xs font-semibold tracking-widest text-accent uppercase">
              {t.home.kicker}
            </p>
            <h1 className="reveal reveal-delay-1 mt-4 max-w-4xl font-display text-display font-medium text-fg">
              {t.home.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t.home.lead}
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/worship">
                  {t.home.ctaVisit}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">{t.home.ctaFind}</Link>
              </Button>
            </div>
          </div>
          <aside className="reveal reveal-delay-2 lg:col-span-4">
            <div className="rounded-2xl bg-surface p-6 shadow-border">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                {sabbath.isToday ? t.home.sabbathToday : t.home.sabbathSoon}
              </p>
              <p className="mt-3 font-display text-3xl font-medium tracking-tight">
                {dateLabel}
              </p>
              {!sabbath.isToday && (
                <p className="mt-2 text-sm text-muted">
                  {t.home.sabbathIn} {sabbath.daysUntil} {pluralDays(sabbath.daysUntil, lang)}
                </p>
              )}
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-medium tracking-wide text-subtle uppercase">
                  {t.home.verseLabel}
                </p>
                <blockquote className="mt-2 font-display text-xl leading-snug font-medium italic">
                  {loc(verse.text, lang)}
                </blockquote>
                <cite className="mt-3 block text-sm text-muted not-italic">
                  {loc(verse.ref, lang)}
                </cite>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Section className="pt-0">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">
          {t.home.pillarsKicker}
        </p>
        <h2 className="mt-3 font-display text-title font-medium">{t.home.pillarsTitle}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { n: "01", title: t.home.p1Title, body: t.home.p1Body },
            { n: "02", title: t.home.p2Title, body: t.home.p2Body },
            { n: "03", title: t.home.p3Title, body: t.home.p3Body },
          ].map((item) => (
            <article
              key={item.n}
              className="rounded-2xl bg-surface p-6 shadow-border md:p-7"
            >
              <p className="font-display text-sm tracking-widest text-stone">{item.n}</p>
              <h3 className="mt-4 font-display text-2xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-accent text-accent-fg">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-accent-fg/60 uppercase">
              {t.home.scheduleKicker}
            </p>
            <h2 className="mt-3 font-display text-title font-medium">{t.home.scheduleTitle}</h2>
            <p className="mt-4 text-accent-fg/75">{t.home.scheduleLead}</p>
          </div>
          <Button asChild variant="invert">
            <Link to="/worship">
              {t.home.scheduleCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ol className="mt-10 divide-y divide-accent-fg/10 border-y border-accent-fg/10">
          {preview.map((item) => (
            <li
              key={`${item.time}-${loc(item.title, lang)}`}
              className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline"
            >
              <p className="sm:col-span-3 font-display text-xl">
                {loc(item.day, lang)} · {item.time}
              </p>
              <div className="sm:col-span-9">
                <p className="font-medium">{loc(item.title, lang)}</p>
                <p className="mt-1 text-sm text-accent-fg/70">{loc(item.detail, lang)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">
              {t.home.aboutKicker}
            </p>
            <h2 className="mt-3 font-display text-title font-medium">{t.home.aboutTitle}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{t.home.aboutLead}</p>
            <Button asChild variant="outline" className="mt-7">
              <Link to="/about">
                {t.home.aboutCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-surface p-2 shadow-border">
              <div className="rounded-xl bg-accent px-6 py-10 text-accent-fg md:px-8">
                <p className="font-display text-5xl font-medium">1929</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-accent-fg/75">
                  {t.about.p1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">
          {t.home.churchesKicker}
        </p>
        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-title font-medium">
            {t.home.churchesTitle}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">{t.home.churchesLead}</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((place) => (
            <article
              key={loc(place.city, "ru")}
              className="rounded-xl bg-surface p-5 shadow-border"
            >
              <p className="text-xs font-medium tracking-wide text-accent">
                {loc(place.role, lang)}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium">
                {loc(place.city, lang)}
              </h3>
              <p className="mt-2 text-sm text-muted">{loc(place.address, lang)}</p>
            </article>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/community">
            {t.home.churchesCta}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Section>

      <Section className="pt-0 pb-24">
        <div className="rounded-2xl bg-surface px-6 py-12 text-center shadow-border md:px-16 md:py-16">
          <h2 className="font-display text-title font-medium">{t.home.visitTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{t.home.visitLead}</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/worship">
              {t.home.visitCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
