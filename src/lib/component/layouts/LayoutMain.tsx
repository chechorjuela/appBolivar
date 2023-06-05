'use client'
import Head from "next/head";
import NavbarMain from "@/lib/component/NavbarMain/NavbarMain";
import {Box} from '@mui/material';
import {Button, Col, Container, Row} from "@nextui-org/react";
import {getFromLocalStorage, removeFromLocalStorage} from "@/lib/utils/storageUitls";
import {useRouter} from 'next/navigation';
import {useEffect, useState} from "react";

interface Props {
  title?: string
}

// @ts-ignore
const LayoutMain: FC<Props> = ({children, title}) => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const closeSession = () => {
    setDisabled(true);
    removeFromLocalStorage('access_token');
    router.push('/login');
  }
  return (
    <>

      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        position="fixed"
        left={0}
        top={0}
        height="100vh"
        width="15%"
        bgcolor="#f8f8f8"
        borderRight="1px solid #ccc"
        padding={2}
      >
        <NavbarMain/>
      </Box>
      <Box
        position="fixed"
        left="15%"
        top={0}
        height="100vh"
        width="85%"
        padding={2}
        sx={{overflow: 'auto'}}
      >
        <Button
          disabled={disabled}
          css={{position: 'absolute', right: '0', top: '0', margin: '5px 5px'}}
          onClick={closeSession}
          flat={true}>
          Cerrar session
        </Button>
        <main>
          <Container gap={0}>
            <Row gap={1}>
              <Col>
                {children}
              </Col>
            </Row>
          </Container>
        </main>

      </Box>
    </>
  )
}

export default LayoutMain;
