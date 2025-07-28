import { useSearchParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  ContainerPagination,
  PaginationButtonLeft,
  PaginationButtonRight,
} from './styles'

type PaginationMenuProps = {
  totalPages: number
}

export function PaginationMenu({ totalPages }: PaginationMenuProps) {
  // const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const handlePageChange = (pageNumber: number) => {
    searchParams.set('page', pageNumber.toString())
    setSearchParams(searchParams)
  }

  const handlePrevPage = () => {
    const prevPage = currentPage - 1

    if (currentPage > 1) {
      handlePageChange(prevPage)
    }
  }

  const handleNextPage = () => {
    const nextPage = currentPage + 1

    if (currentPage === 1 && currentPage < totalPages) {
      handlePageChange(nextPage)
    }
  }

  return (
    <ContainerPagination>
      <PaginationButtonLeft
        onClick={handlePrevPage}
        // disabled={disableButtonLeft}
      >
        <ChevronLeft />
      </PaginationButtonLeft>
      <section>
        {currentPage}/{totalPages}
      </section>
      <PaginationButtonRight
        onClick={handleNextPage}
        // disabled={disableButtonRight}
      >
        <ChevronRight />
      </PaginationButtonRight>
    </ContainerPagination>
  )
}
