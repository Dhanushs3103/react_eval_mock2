//Packages
import React from 'react'
import { useToast } from '@chakra-ui/react' // Importing the useToast hook.

//Local imports

export default function ErrorIndicator() {
    let toast = useToast(); // invocking the useToast hook.
  return (
    <div>
      {
        toast({
            title: `Something went wrong, please try to refresh the page`,
            status: 'error',
            isClosable: true,
            duration:2000
          })
      }
    </div>
  )
}
