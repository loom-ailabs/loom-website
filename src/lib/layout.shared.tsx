import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Loom AI',
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
      },
      {
        text: 'Blogs',
        url: '/blogs',
      },
    ],
  }
}
