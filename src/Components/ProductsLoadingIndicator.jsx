//Packages
import React from "react";
import { Grid, Skeleton, Box,  } from "@chakra-ui/react"; 

//Local imports

export default function ProductsLoadingIndicator() {
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} margin={"auto"} maxW={"6xl"} >
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>

        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box >
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>
        <Box width={"250px"}>
        <Skeleton height="230px"  borderRadius={5} mb={5} />
        <Skeleton height="30px"  borderRadius={5}  mb={5} />
        <Skeleton height="30px" borderRadius={5}  mb={5} />
        </Box>

      </Grid>
    </div>
  );
}
