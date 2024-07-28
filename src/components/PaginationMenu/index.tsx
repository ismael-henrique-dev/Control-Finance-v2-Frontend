import { ChevronLeft } from "lucide-react";
import { ContainerPagination, PaginationButton } from "./styles";

export function PaginationMenu() {
  return (
    <ContainerPagination>
      <PaginationButton variant="Normal">
        <ChevronLeft />
      </PaginationButton>
      <section>
        2/2
      </section>
      <PaginationButton variant="Rotate">
        <ChevronLeft />
      </PaginationButton>
    </ContainerPagination>
  );
}
