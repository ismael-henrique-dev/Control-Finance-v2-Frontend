import { ChevronLeft } from "lucide-react";
import { ContainerPagination, PaginationButton } from "./styles";

interface PaginationMenuProps {
  currentPage: number
  totalPages: number
  onPageChange: (newPage: number) => void
}

export function PaginationMenu({currentPage, totalPages, onPageChange}:PaginationMenuProps) {

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
      <PaginationButton
        variant="Normal"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </PaginationButton>
      <section>
        {currentPage}/{totalPages}
      </section>
      <PaginationButton
        variant="Rotate"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronLeft />
      </PaginationButton>
    </ContainerPagination>
  )
}
