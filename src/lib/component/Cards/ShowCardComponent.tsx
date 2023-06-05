'use client'
import {Button, Card, Col, Row, Text} from "@nextui-org/react";

export const ShowCardComponent: React.FC<any> = ({item}) => {
  console.info(item);
  const descriptionItem = () => {
    let description = new String(item.description);

    return description.length > 150 ? `${description.slice(0,150)}...` : description;
  }
  return (
    <Card css={{w: "100%", h: "300px", minWidth: "200px"}}>
      <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {item.name}
          </Text>

        </Col>
      </Card.Header>
      <Card.Body css={{p: 0}}>
        <Card.Image
          src={item.images[0].url}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {descriptionItem()}
            </Text>
          </Col>

        </Row>
      </Card.Footer>
    </Card>
  );
};
