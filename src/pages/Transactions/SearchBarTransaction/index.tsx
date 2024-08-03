import { Search } from "lucide-react";
import { ContainerSearchBarTransaction } from "./styles";

export function SearchBarTransaction() {
  return (
    <ContainerSearchBarTransaction>
      <div>
        <Search />
        <input type="text" placeholder="Buscar transação" />
      </div>
    </ContainerSearchBarTransaction>
  );
}