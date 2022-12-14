import { FC, useState } from 'react'
import { Box, Textarea, Text, Button, VStack } from '@chakra-ui/react'
import { SubmitPost } from '../libs/fetchData'

const SubmitForm: FC<{ refresher: any }> = ({ refresher }) => {
  const [msg, setMsg] = useState('')
  const SubmitFunc = async () => {
    if (String(msg).length == 0) return
    const data = await SubmitPost(msg)
    refresher()
    return data != null ? setMsg('') : ''
  }

  const updateValue = (e: any) => {
    setMsg(e.target.value)
  }

  return (
    <>
      <Box w="full" my="4">
        <VStack spacing="4" align="start">
          <Text>Message:</Text>
          <Textarea
            value={msg}
            onChange={updateValue}
            w="full"
            placeholder="Enter your message here...."
          />
          <Button onClick={SubmitFunc} size="md" rounded="lg">
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  )
}

export default SubmitForm
