import { Card, Text } from "@nextui-org/react";
export const AudiobookCardComponent: React.FC<any> = ({item}) => {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
    >
      <Card.Body>
        <Text>A pressable card.</Text>
      </Card.Body>
    </Card>
  );
};
