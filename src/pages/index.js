import { Heading, Center } from '@chakra-ui/react';
import Container from '../components/Grid/Container';
import Col from '../components/Grid/Col';

import Image from 'next/image';
import Head from 'next/head';

import Link from 'next/link';

const Home = () => {
  return (
    <Container>
      <Col colStart="1" colEnd="12">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Welcome to Next.js!</h1>

          <footer>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span>
                <Image
                  src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </footer>
        </main>
      </Col>
    </Container>
  );
};

export default Home;
