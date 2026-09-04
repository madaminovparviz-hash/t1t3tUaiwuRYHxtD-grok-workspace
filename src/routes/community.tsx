import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { loc, locations } from "@/lib/church";
import { ministries } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/community")({
  component: Community,
  head: () => ({
    meta: [{ title: "Община · АСД Душанбе" }],
  }),
});

function Community() {
  const { t, lang } = useLang();

  return (
    <main>
      <PageHero
        kicker={t.community.kicker}
        title={t.community.title}
        lead={t.community.lead}
      />
      <Section className="pt-0">
        <h2 className="font-display text-title font-medium">{t.community.churchesTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {locations.map((place) => (
            <article
              key={loc(place.city, "ru")}
              className="rounded-2xl bg-surface p-6 shadow-border md:p-8"
            >
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                {loc(place.role, lang)}
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium">
                {loc(place.city, lang)}
              </h3>
              <p className="mt-2 text-sm text-fg">{loc(place.address, lang)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {loc(place.note, lang)}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0 pb-24">
        <h2 className="font-display text-title font-medium">{t.community.ministriesTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ministries.map((item) => (
            <article key={loc(item.title, "ru")} className="rounded-xl border border-border p-6">
              <h3 className="font-display text-2xl font-medium">{loc(item.title, lang)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{loc(item.body, lang)}</p>
            </article>
          ))}
        </div>
        <Button asChild className="mt-10">
          <Link to="/contact">{t.nav.contact}</Link>
        </Button>
      </Section>
    </main>
  );
}
