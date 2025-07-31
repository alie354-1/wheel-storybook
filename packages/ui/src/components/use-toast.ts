export function toast({ title, description }: { title: string; description?: string }) {
  console.log(`[Toast] ${title}${description ? ": " + description : ""}`);
}
