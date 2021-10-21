import type { NextPage } from 'next'
import { Textarea } from "@chakra-ui/react"
import { HStack, VStack } from "@chakra-ui/react"
import { Text, Box, Center, Input, Button } from "@chakra-ui/react"
import { FormEvent, useState } from 'react'

const Home: NextPage = () => {
  const [story, setStory] = useState<string>("");
  const [changeBeforeText, setChangeBeforeText] = useState<string>("");
  const [changeAfterText, setChangeAfterText] = useState<string>("");
  const [keywordsBefore, setKeywordsBefore] = useState<string[]>(["", "", "", "", "", "", "", "", "", ""]);
  const [keywordsAfter, setKeywordsAfter] = useState<string[]>(["", "", "", "", "", "", "", "", "", ""]);

  const changeStory = (e: FormEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setStory(inputValue)
  }

  const changeBefore = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    setChangeBeforeText(inputValue)
  }

  const changeAfter = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    setChangeAfterText(inputValue)
  }

  const changeKeywordBefore = (e: FormEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.currentTarget.value
    let newKeywords = keywordsBefore.concat()
    newKeywords[index] = inputValue
    setKeywordsBefore(newKeywords)
  }

  const changeKeywordAfter = (e: FormEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.currentTarget.value
    let newKeywords = keywordsAfter.concat()
    newKeywords[index] = inputValue
    setKeywordsAfter(newKeywords)
  }

  const exchangeStory = () => {
    setStory(story.replaceAll(changeBeforeText, changeAfterText))
    const matchNums: number = keywordsBefore.indexOf(changeBeforeText)
    if(matchNums !== -1){
      let newKeywords = keywordsAfter.concat()
      newKeywords[matchNums] = changeAfterText
      setKeywordsAfter(newKeywords)  
    }
  }

  return (
    <div>  
      <HStack spacing="2rem">
        <VStack w="50%">
          <Text m={4} fontSize="5xl">白怪談物語用えでぃた</Text>
          <Box w="100%">
            <Center mt={4} fontSize="3xl">怪談の文章</Center>
            <Textarea m={4} h={500} placeholder="文章いれる" value={story} onChange={changeStory} />
          </Box>
        </VStack>
        <VStack w="50%">
          <Box w="100%">
            <Center m={4} fontSize="3xl">変換内容</Center>
            <HStack m={4}>
              <Input m={4} placeholder="変換前" value={changeBeforeText} onChange={changeBefore}/>
              <Text fontSize="2xl">{"=>"}</Text>
              <Input m={4} placeholder="変換後" value={changeAfterText} onChange={changeAfter}/>
            </HStack>
            <Center>
              <Button colorScheme="teal" variant="outline" onClick={exchangeStory}>へんかん！</Button>
            </Center>

          </Box>
          <Box>
            <Center m={4} fontSize="3xl">きーわーど</Center>

            <HStack m={4}>
              <VStack m={4}>

                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>1</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[0]} onChange={(e) => { changeKeywordBefore(e, 0) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[0]} onChange={(e) => { changeKeywordAfter(e, 0) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>2</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[1]} onChange={(e) => { changeKeywordBefore(e, 1) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[1]} onChange={(e) => { changeKeywordAfter(e, 1) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>3</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[2]} onChange={(e) => { changeKeywordBefore(e, 2) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[2]} onChange={(e) => { changeKeywordAfter(e, 2) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>4</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[3]} onChange={(e) => { changeKeywordBefore(e, 3) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[3]} onChange={(e) => { changeKeywordAfter(e, 3) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>5</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[4]} onChange={(e) => { changeKeywordBefore(e, 4) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[4]} onChange={(e) => { changeKeywordAfter(e, 4) }}/>
                </HStack>

              </VStack>
              <VStack m={4}>

              <HStack my={1}>
                  <Text fontSize="xl" mx={2}>6</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[5]} onChange={(e) => { changeKeywordBefore(e, 5) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[5]} onChange={(e) => { changeKeywordAfter(e, 5) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>7</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[6]} onChange={(e) => { changeKeywordBefore(e, 6) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[6]} onChange={(e) => { changeKeywordAfter(e, 6) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>8</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[7]} onChange={(e) => { changeKeywordBefore(e, 7) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[7]} onChange={(e) => { changeKeywordAfter(e, 7) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={2}>9</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[8]} onChange={(e) => { changeKeywordBefore(e, 8) }}/>
                 <Text fontSize="2xl">{"=>"}</Text>
                 <Input mx={4} placeholder="変換後" value={keywordsAfter[8]} onChange={(e) => { changeKeywordAfter(e, 8) }}/>
                </HStack>
                <HStack my={1}>
                  <Text fontSize="xl" mx={1}>10</Text>
                  <Input mx={4} placeholder="変換前" value={keywordsBefore[9]} onChange={(e) => { changeKeywordBefore(e, 9) }}/>
                  <Text fontSize="2xl">{"=>"}</Text>
                  <Input mx={4} placeholder="変換後" value={keywordsAfter[9]} onChange={(e) => { changeKeywordAfter(e, 9) }}/>
                </HStack>

              </VStack>
            </HStack>

          </Box>
        </VStack>
      </HStack>
    </div>
  )
}

export default Home
