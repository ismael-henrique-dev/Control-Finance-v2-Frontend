import Input  from "@mui/material/Input";
import styled from "styled-components";

export const InputDate = styled(Input)`
  input[type="date"]::-webkit-calendar-picker-indicator {
    color: #fff; /* Tente alterar a cor */
    opacity: 0; /* Mudar a opacidade */
  }
` 