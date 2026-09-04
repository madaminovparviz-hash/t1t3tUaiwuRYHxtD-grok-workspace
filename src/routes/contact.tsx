import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero, Section } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "asd-dushanbe-notes";

const schema = z.object({
  name: z.string().trim().min(2),
  reach: z.string().trim(),
  kind: z.enum(["visit", "question", "prayer"]),
  message: z.string().trim().min(8),
});

type Kind = z.infer<typeof schema>["kind"];

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [{ title: "Контакты · АСД Душанбе" }],
  }),
});

function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [reach, setReach] = useState("");
  const [kind, setKind] = useState<Kind>("visit");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, reach, kind, message });
    if (!parsed.success) {
      setError(true);
      return;
    }
    setError(false);
    const notes = readNotes();
    notes.unshift({ ...parsed.data, at: new Date().toISOString() });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes.slice(0, 20)));
    setSent(true);
    setName("");
    setReach("");
    setMessage("");
    toast.success(t.contact.sent);
  }

  const kinds: { id: Kind; label: string }[] = [
    { id: "visit", label: t.contact.kindVisit },
    { id: "question", label: t.contact.kindQuestion },
    { id: "prayer", label: t.contact.kindPrayer },
  ];

  return (
    <main>
      <PageHero kicker={t.contact.kicker} title={t.contact.title} lead={t.contact.lead} />
      <Section className="pt-0 pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-accent p-7 text-accent-fg md:p-8">
              <p className="text-xs font-semibold tracking-widest text-accent-fg/60 uppercase">
                {t.contact.addressLabel}
              </p>
              <p className="mt-3 font-display text-3xl font-medium">{t.contact.address}</p>
              <p className="mt-2 text-accent-fg/75">{t.contact.city}</p>
              <p className="mt-8 text-xs font-semibold tracking-widest text-accent-fg/60 uppercase">
                {t.contact.howLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-accent-fg/80">{t.contact.how}</p>
              <a
                href={t.contact.mapHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-11 items-center rounded-lg bg-accent-fg px-5 text-sm font-medium text-accent transition-[scale,background-color] duration-150 ease-out hover:bg-surface active:scale-[0.96]"
              >
                {t.contact.map}
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium">{t.contact.formTitle}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {t.contact.formLead}
            </p>
            <form className="mt-8 space-y-5" onSubmit={onSubmit}>
              <div>
                <Label htmlFor="name">{t.contact.name}</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.placeholderName}
                />
              </div>
              <div>
                <Label htmlFor="reach">{t.contact.reach}</Label>
                <Input
                  id="reach"
                  name="reach"
                  autoComplete="email"
                  value={reach}
                  onChange={(e) => setReach(e.target.value)}
                  placeholder={t.contact.placeholderReach}
                />
              </div>
              <fieldset>
                <legend className="mb-2 text-sm font-medium">{t.contact.kindLabel}</legend>
                <div className="flex flex-wrap gap-2">
                  {kinds.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setKind(item.id)}
                      className={cn(
                        "inline-flex h-11 items-center rounded-lg px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150",
                        kind === item.id
                          ? "bg-accent text-accent-fg"
                          : "bg-surface text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)]",
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.placeholderMessage}
                />
              </div>
              {error && <p className="text-sm text-accent">{t.contact.error}</p>}
              {sent && <p className="text-sm text-accent">{t.contact.sent}</p>}
              <Button type="submit" size="lg">
                {t.contact.send}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}

function readNotes() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [] as Array<{
      name: string;
      reach: string;
      kind: Kind;
      message: string;
      at: string;
    }>;
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
