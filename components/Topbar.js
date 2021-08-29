import { Flex, Box } from '@chakra-ui/layout';

function Topbar() {
  const bgColor = '#FFF';
  const color = '#222';
  const borderColor = '#ddd';
  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={9999}
      bg={bgColor}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        maxW="1200px"
        margin="0 auto"
        h="60px"
        pt={4}
        pb={4}
        px={[4, 8]}
      >
        <Box>Heberth.dev</Box>
        <Box>Login</Box>
      </Flex>
    </Flex>
  );
}

export { Topbar };
