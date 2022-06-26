interface Page {
  title: string;
  href: string;
}

interface Section {
  title: string;
  links: Page[];
}

const navigation: Section[] = [
  {
    title: "Introduction",
    links: [{ title: "Welcome", href: "/docs" }],
  },
  {
    title: "API",
    links: [
      { title: "Authentication", href: "/docs/api/authentication" },
      { title: "/aliases", href: "/docs/api/aliases" },
    ],
  },
]

export default navigation
