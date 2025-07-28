import { ContainerSummary } from '../../Summary/styles'
import { SkeletonCard } from './styles'

export function SummarySkeleton() {
  return (
    <ContainerSummary>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </ContainerSummary>
  )
}
