export type ProjectCase = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
};

export const cases: ProjectCase[] = [
  {
    id: "brand-refresh",
    title: "Brand refresh for a boutique studio",
    category: "Identity system",
    summary:
      "A visual reset that gave the studio a sharper hierarchy, clearer messaging, and a cleaner handoff to marketing.",
    description:
      "I worked through positioning, visual direction, and reusable layout components so the brand could stay consistent across web and social.",
    challenge:
      "The studio had strong work but no unified way to present it, which made the experience feel fragmented.",
    solution:
      "I created a lightweight system with a tighter type scale, stronger spacing rules, and modular case-study sections.",
    outcome:
      "The result was a more confident presentation layer that made the portfolio easier to update and easier to scan.",
    tags: ["Brand", "Content", "Web"],
  },
  {
    id: "ecommerce-checkout",
    title: "Checkout flow for a local shop",
    category: "Product design",
    summary:
      "A checkout redesign that reduced friction on mobile and made the purchase steps easier to understand.",
    description:
      "The project focused on simplifying the purchase path and cutting unnecessary decision points before payment.",
    challenge:
      "Customers were dropping off before completing payment, especially on smaller screens.",
    solution:
      "I reorganized the flow into clearer steps, improved button hierarchy, and removed fields that did not add value.",
    outcome:
      "The revised flow gave the shop a stronger mobile experience and a more focused path to conversion.",
    tags: ["UX", "Mobile", "Conversion"],
  },
  {
    id: "event-platform",
    title: "Event platform for internal team use",
    category: "Digital product",
    summary:
      "A dashboard-style interface that helped a team manage events, content, and schedules from one place.",
    description:
      "This case shows how I translated a complicated workflow into a simple interface with predictable actions.",
    challenge:
      "The team was juggling multiple tools and needed a single place to plan, review, and publish updates.",
    solution:
      "I designed a hub with clear status states, contextual actions, and reusable modules for each content type.",
    outcome:
      "The team could work faster with fewer context switches and a much clearer overview of what needed attention.",
    tags: ["Dashboard", "Workflow", "Systems"],
  },
];

export function getCaseById(id: string) {
  return cases.find((projectCase) => projectCase.id === id);
}