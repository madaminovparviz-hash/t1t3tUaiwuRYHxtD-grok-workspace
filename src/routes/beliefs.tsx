import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site-shell";
import { loc } from "@/lib/church";
import { beliefs } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/beliefs")({
  component: Beliefs,
  head: () => ({
    meta: [{ title: "Вероучение · АСД Душанбе" }],
  }),
});

function Beliefs() {
  const { t, lang } = useLang();

  return (
    <main>
      <PageHero kicker={t.beliefs.kicker} title={t.beliefs.title} lead={t.beliefs.lead} />
      <Section className="pt-0">
        <ol className="grid gap-4 md:grid-cols-2">
          {beliefs.map((item, i) => (
            <li key={loc(item.title, "ru")} className="rounded-2xl bg-surface p-6 shadow-border md:p-8">
              <p className="font-display text-sm tracking-widest text-stone">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium">{loc(item.title, lang)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{loc(item.body, lang)}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-sm text-subtle">{t.beliefs.note}</p>
      </Section>
    </main>
  );
}
