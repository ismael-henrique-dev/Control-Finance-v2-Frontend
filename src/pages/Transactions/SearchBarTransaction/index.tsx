import { useState } from "react"
import { Search } from "lucide-react"
import { ContainerSearchBarTransaction } from "./styles"

interface SearchBarProps {
  onSearch: (value: string) => void
}

export function SearchBarTransaction({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    onSearch(value)
  }

  return (
    <ContainerSearchBarTransaction>
      <div>
        <Search />
        <input
          type="text"
          placeholder="Buscar transação"
          value={value}
          onChange={handleSearch}
        />
      </div>
    </ContainerSearchBarTransaction>
  )
}
