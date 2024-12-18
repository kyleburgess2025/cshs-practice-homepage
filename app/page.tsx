import { data } from "@/constants/data";
import {
  Card,
  Image,
  Text,
  Anchor,
  Group,
  CardSection,
  Flex,
  Center,
  Button,
} from "@mantine/core";

export default function Home() {
  return (
    <Flex direction="column" gap="lg" mt="xl">
      <Center>
        <Text fw={700} size="xl">
          CSHS Practice Problems
        </Text>
      </Center>
      <Flex justify="center" wrap="wrap" gap="md">
        {data.map((problem) => (
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            key={problem.name}
            w="25vw"
          >
            <CardSection mb="sm">
              <Image
                src={`/problem-images/${problem.image}`}
                height={160}
                alt="problem image"
              />
            </CardSection>

            <Text fw={500}>{problem.name}</Text>

            <Text size="sm" c="dimmed">
              {problem.description}
            </Text>

            <Group mt="sm" justify="space-between">
              <Anchor href={problem.link} w="45%">
                <Button w="100%">Challenge</Button>
              </Anchor>
              <Anchor href={problem.solution} w="45%">
                <Button w="100%">Solution</Button>
              </Anchor>
            </Group>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
