import { Box } from "@mui/material";
import styled from "styled-components";


export const ContainerBox = styled(Box)`
  svg {
    color: ${(props) => props.theme.colors.text};
  }
`