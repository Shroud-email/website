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
    links: [{ title: "Welcome", href: "/docs/" }],
  },
  {
    title: "Product details",
    links: [
      { title: "Spam", href: "/docs/product/spam/" },
    ],
  },
  {
    title: "Deployment",
    links: [
      { title: "Considerations", href: "/docs/deployment/considerations/" },
      { title: "Self-host", href: "/docs/deployment/self-host/" },
    ],
  },
  {
    title: "API",
    links: [
      { title: "Authentication", href: "/docs/api/authentication/" },
      { title: "/aliases", href: "/docs/api/aliases/" },
    ],
  },
]

export default navigation
