import { ChevronLeft, ChevronRight } from "lucide-react"
import { ContainerPagination, PaginationButtonLeft, PaginationButtonRight } from "./styles"

interface PaginationMenuProps {
  currentPage: number
  totalPages: number
  onPageChange: (newPage: number) => void
}

export function PaginationMenu({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationMenuProps) {
  function handleNextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  return (
    <ContainerPagination>
      <PaginationButtonLeft
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </PaginationButtonLeft>
      <section>
        {currentPage}/{totalPages}
      </section>
      <PaginationButtonRight
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </PaginationButtonRight>
    </ContainerPagination>
  )
}
