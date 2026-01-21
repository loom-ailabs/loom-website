import { blogSource } from '@/lib/source'
import { DocsLayout } from '@/components/layout/notebook'
import { baseOptions } from '@/lib/layout.shared'

export default function Layout({ children }: LayoutProps<'/blogs'>) {
  const { nav, ...base } = baseOptions()
  return (
    <DocsLayout {...base} tree={blogSource.getPageTree()} tabMode="navbar" nav={{ ...nav, mode: 'top' }}>
      {children}
    </DocsLayout>
  )
}
