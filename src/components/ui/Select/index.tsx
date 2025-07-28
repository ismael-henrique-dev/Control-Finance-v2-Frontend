import * as Select from '@radix-ui/react-select'
import {
  ChevronDown,
  Handshake,
  LucideProps,
  PiggyBank,
  Wallet,
} from 'lucide-react'
import { useState } from 'react'
import { styled } from 'styled-components'

const Root = styled(Select.Root)`
  /* width: 100%; */
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 16px; /* espaço para o label flutuante */
`

const StyledLabel = styled.label<{ isFloating: boolean }>`
  position: absolute;
  top: ${(props) => (props.isFloating ? '0px' : '24px')};
  left: 0;
  font-size: ${(props) => (props.isFloating ? '0.75rem' : '1rem')};
  color: ${(props) => props.theme.secundary};
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`

const Trigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  height: 28px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.secundary};
  background-color: transparent;
  color: ${(props) => props.theme.secundary};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  svg {
    color: ${(props) => props.theme.secundary};
  }
`

const Content = styled(Select.Content)`
  background-color: ${(props) => props.theme.secundaryGray};
  border-radius: 12px;
  padding: 0;
  /* border: 1px solid #8257e6; */
  color: #e1e1e6;
  overflow: hidden;
  min-width: var(--radix-select-trigger-width);
  z-index: 9999 !important; /* AQUI É O PONTO CHAVE */
`

const Viewport = styled(Select.Viewport)`
  padding: 0.25rem 0;
`

const Item = styled(Select.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  outline: none;

  svg {
    color: #8257e6;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #29292e;
  }

  &[data-highlighted] {
    background-color: #8257e6;
    color: #fff;

    svg {
      color: #fff;
    }
  }
`

type Option = {
  name: string
  value: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

type CustomSelectProps = {
  value?: string
  onChange?: (value: string) => void
  options: Option[]
  label?: string
}

export function CustomSelect({
  options,
  value,
  onChange,
  label = 'Tipo',
}: CustomSelectProps) {
  const [internalValue, setInternalValue] = useState<string>('')
  const selected = value ?? internalValue
  const handleChange = onChange ?? setInternalValue

  const [isFocused, setIsFocused] = useState(false)
  const selectedOption = options.find((opt) => opt.value === selected)
  const isFloating = isFocused || !!selectedOption

  return (
    <Root value={selected} onValueChange={handleChange}>
      <Wrapper>
        <StyledLabel isFloating={isFloating}>{label}</StyledLabel>
        <Trigger
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {selectedOption ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <selectedOption.icon />
              {selectedOption.name}
            </div>
          ) : null}
          <Select.Icon>
            <ChevronDown />
          </Select.Icon>
        </Trigger>
      </Wrapper>

      <Select.Portal>
        <Content position='popper' side='top' sideOffset={12}>
          <Viewport>
            {options.map((option, index) => {
              const OptionIcon = option.icon

              return (
                <Item key={index} value={option.value}>
                  <OptionIcon />
                  <Select.ItemText>{option.name}</Select.ItemText>
                </Item>
              )
            })}
          </Viewport>
        </Content>
      </Select.Portal>
    </Root>
  )
}
