import { Box, Flex } from '@chakra-ui/layout';
import { Topbar } from 'src/components/Topbar';

function Layout({ children }) {
  const bgColor = '#F4F6F8';

  return (
    <Box bg={bgColor} minH="100Vh">
      <Topbar />
      <Flex pt="62px" flexDirection="column">
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;
