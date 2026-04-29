import {Container , Stack , Box} from "@mui/material"
import { green , brown } from '@mui/material/colors';
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
const PropertyList = () => {
  console.log("PROPERTYLIST COMPONENT - PAGES ROUTER");
    return (
       <>
       
               {/* <Stack sx={{background:green[300]}}>Header Basic</Stack> */}
               <Container>Property List </Container>
                {/* <Stack sx={{background:brown[300]}}>Footer</Stack> */}
      
      
          </>
    );
};

export default withLayoutBasic(PropertyList) ;