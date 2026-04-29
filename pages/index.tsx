import {Container , Stack , Box} from "@mui/material"
import { green , brown } from '@mui/material/colors';

export default function Home() {
  return (
    <>
 
         <Stack sx={{background:green[300]}}>Header</Stack>
         <Container>
          <Stack flexDirection={"column"}>
            <Box>Popular Properties</Box>
            <Box>RTop Agents</Box>
            <Box>Top Properties</Box>
          </Stack>
         </Container>
          <Stack sx={{background:brown[300]}}>Footer</Stack>


    </>
  );
}
