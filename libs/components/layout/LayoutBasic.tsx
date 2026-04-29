// import { Stack } from "@mui/material";
import Head from "next/head";
// import Top from "../Top";
// import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
// import Footer from "../Footer";
// import HeaderFilter from "../homepage/HeaderFilter";
import {Container , Stack , Box} from "@mui/material"
import { green , brown } from '@mui/material/colors';

const withLayoutBasic = (Component: any) => {
  return(props:any)=>{
 return (
        <>
          <Head>
            <title>Nestar</title>
          </Head>

          <Stack id="pc-wrap">
            
            <Stack sx={{background:green[300]}}>Header Basics</Stack>

            <Stack id={"main"}>
              <Component {...props} />
            </Stack>

          <Stack sx={{background:brown[300]}}>
              Footer
            </Stack>


          </Stack>
        </>
      );
  }
     
    }


export default withLayoutBasic;
