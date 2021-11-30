import { Container, Flex, Spinner, VStack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import Post from "./components/post";
import db from "./lib/firebase";

export default function Forum() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {}, []);

    return (
      <div>
        <Container maxW="md" centerContent p={8}>
        <VStack spacing={8} w="100%">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </VStack>
      </Container>
      </div>
    );
};