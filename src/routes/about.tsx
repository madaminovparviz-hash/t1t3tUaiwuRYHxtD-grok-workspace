import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site-shell";
import { loc } from "@/lib/church";
import { timeline } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [{ title: "О нас · АСД Душанбе" }],
  }),
});

function About() {
  const { t, lang } = useLang();

  return (
    <main>
      <PageHero kicker={t.about.kicker} title={t.about.title} lead={t.about.lead} />
      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium">{t.about.storyTitle}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">
              {t.about.timelineTitle}
            </p>
            <ol className="mt-6 border-l border-border">
              {timeline.map((item) => (
                <li key={loc(item.year, "ru")} className="relative py-4 pl-6">
                  <span className="absolute top-6 -left-1.5 size-3 rounded-full bg-accent" />
                  <p className="font-display text-xl font-medium text-accent">
                    {loc(item.year, lang)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {loc(item.text, lang)}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Section>
      <Section className="pt-0 pb-24">
        <div className="rounded-2xl bg-accent px-6 py-12 text-accent-fg md:px-12">
          <h2 className="font-display text-title font-medium">{t.about.nowTitle}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-accent-fg/80">{t.about.nowBody}</p>
        </div>
      </Section>
    </main>
  );
}
