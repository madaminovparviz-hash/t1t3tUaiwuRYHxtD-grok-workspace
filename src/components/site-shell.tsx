import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/about", key: "about" },
  { to: "/beliefs", key: "beliefs" },
  { to: "/worship", key: "worship" },
  { to: "/community", key: "community" },
  { to: "/contact", key: "contact" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <div className="h-1 bg-accent" />
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <Toaster
        position="bottom-center"
        theme="light"
        toastOptions={{
          className: "font-sans! bg-surface! text-fg! border-border!",
        }}
      />
    </div>
  );
}

function SiteHeader() {
  const { t, lang, setLang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2.5 text-fg"
          aria-label={t.brand}
        >
          <BrandMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">
              {t.brand}
            </span>
            <span className="mt-0.5 hidden text-xs tracking-wide text-muted sm:block">
              {t.brandFull}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Основное">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "inline-flex h-11 items-center px-3 text-sm font-medium transition-colors duration-150",
                pathname === item.to ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <LangSwitch lang={lang} setLang={setLang} label={t.lang.label} ru={t.lang.ru} tg={t.lang.tg} />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/worship">{t.nav.visit}</Link>
          </Button>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
                aria-label={t.nav.menu}
              >
                <Menu className="size-5" strokeWidth={1.75} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-fg/20" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg px-6 py-6 shadow-border outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-xl font-semibold">
                    {t.nav.menu}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-md"
                      aria-label={t.nav.close}
                    >
                      <X className="size-5" strokeWidth={1.75} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-8 flex flex-col gap-1">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "flex min-h-12 items-center font-display text-2xl font-medium tracking-tight",
                        pathname === item.to ? "text-accent" : "text-fg",
                      )}
                    >
                      {t.nav[item.key]}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8 w-full" size="lg">
                  <Link to="/worship">{t.nav.visit}</Link>
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
  label,
  ru,
  tg,
}: {
  lang: "ru" | "tg";
  setLang: (l: "ru" | "tg") => void;
  label: string;
  ru: string;
  tg: string;
}) {
  return (
    <div
      className="flex h-10 items-center rounded-md bg-fg/5 p-0.5"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => setLang("ru")}
        className={cn(
          "inline-flex h-9 min-w-10 items-center justify-center rounded-sm px-2.5 text-xs font-semibold tracking-wide transition-[background-color,color] duration-150",
          lang === "ru" ? "bg-bg text-fg shadow-border" : "text-muted",
        )}
      >
        {ru}
      </button>
      <button
        type="button"
        onClick={() => setLang("tg")}
        className={cn(
          "inline-flex h-9 min-w-10 items-center justify-center rounded-sm px-2.5 text-xs font-semibold tracking-wide transition-[background-color,color] duration-150",
          lang === "tg" ? "bg-bg text-fg shadow-border" : "text-muted",
        )}
      >
        {tg}
      </button>
    </div>
  );
}

function SiteFooter() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-accent text-accent-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-16">
        <div className="md:col-span-6">
          <div className="flex items-center gap-3">
            <BrandMark inverted />
            <div>
              <p className="font-display text-xl font-semibold">{t.brand}</p>
              <p className="text-sm text-accent-fg/70">{t.brandFull}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-accent-fg/75">
            {t.footer.blurb}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-wide text-accent-fg/55 uppercase">
            {t.nav.about}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-accent-fg/85 hover:text-accent-fg">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-wide text-accent-fg/55 uppercase">
            {t.contact.addressLabel}
          </p>
          <address className="mt-3 text-sm leading-relaxed not-italic text-accent-fg/85">
            {t.contact.address}
            <br />
            {t.contact.city}
          </address>
          <div className="mt-4">
            <a
              href="https://t.me/tachki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-fg/85 transition-colors hover:text-accent-fg"
            >
              <Send className="size-4" />
              <span>Telegram: @tachki</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-accent-fg/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-xs text-accent-fg/55 md:px-8">
          <span>
            {t.footer.rights} · {year}
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/tachki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-fg transition-colors"
            >
              Telegram
            </a>
            <span>ул. Борбада, 117</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-title font-medium text-fg">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
      </div>
    </header>
  );
}

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-5 py-14 md:px-8 md:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Rule() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-border" />
      <span className="size-1.5 rotate-45 bg-accent/70" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
