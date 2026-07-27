import { redirect } from "next/navigation";

// The Tribe page is hidden at Heather's request (May 2026). The full page
// content remains in git history if it needs to be restored later.
export const metadata = {
  robots: { index: false, follow: false },
};

export default function TribePage() {
  redirect("/");
}
