import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { ContactView } from "../views/ContactView";

export const metadata: Metadata = buildMetadata({
  ...getDictionary("en").meta.contact,
  path: "/contact",
  locale: "en",
});

export default function ContactPage() {
  return <ContactView locale="en" />;
}
