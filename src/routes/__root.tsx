import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { LangProvider, useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import appCss from "../styles.css?url";

const APP_NAME = "АСД Душанбе";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Церковь христиан-адвентистов седьмого дня в Душанбе. Суббота, Писание, община. ул. Борбада, 117.",
      },
      { name: "theme-color", content: "#2F4F4A" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <LangProvider>
            <SiteShell>
              <Outlet />
            </SiteShell>
          </LangProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  const { t } = useLang();
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-xs font-semibold tracking-wide text-accent uppercase">404</p>
      <h1 className="mt-3 font-display text-title font-medium">{t.notFound.title}</h1>
      <p className="mt-4 text-muted">{t.notFound.body}</p>
      <Button asChild className="mt-8">
        <Link to="/">{t.notFound.cta}</Link>
      </Button>
    </main>
  );
}
