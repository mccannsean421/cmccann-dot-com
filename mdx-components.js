import { PageHeader } from "@/components/PageHeader"

export function useMDXComponents(components) {
    return {
      h1: ({ children }) => (
        <PageHeader title="children" />
      ),
      ...components,
    }
  }