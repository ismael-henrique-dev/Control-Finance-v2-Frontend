import { useState } from "react";
import { ContainerFilterSelect } from "./styles";
import { ChevronDown, Filter } from "lucide-react";

export function SelectFilter() {
  const [age, setAge] = useState("");

  return (
    <ContainerFilterSelect>
      <div>
        <Filter />
        <span>Filtrar</span>
        <ChevronDown />
      </div>
    </ContainerFilterSelect>
  )
}
