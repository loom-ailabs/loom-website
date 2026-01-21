import { blogSource } from '@/lib/source'
import { DocsBody, DocsDescription, DocsPage, DocsTitle, PageLastUpdate } from '@/components/layout/notebook/page'
import { notFound } from 'next/navigation'
import { getMDXComponents } from '@/mdx-components'
import type { Metadata } from 'next'
import { createRelativeLink } from 'fumadocs-ui/mdx'

export default async function Page(props: PageProps<'/blogs/[[...slug]]'>) {
  const params = await props.params
  const page = blogSource.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body
  const { lastModified } = page.data

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      {lastModified && <PageLastUpdate date={lastModified} />}
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(blogSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return blogSource.generateParams()
}

export async function generateMetadata(props: PageProps<'/blogs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params
  const page = blogSource.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
