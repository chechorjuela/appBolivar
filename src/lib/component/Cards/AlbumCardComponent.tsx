'use client'
import {Button, Card, Col, Row, Text} from "@nextui-org/react";

interface AlbumCardComponentProps {
  item: any; // Update the type of `item` based on your data structure
}

const AlbumCardComponent: React.FC<AlbumCardComponentProps> = ({item}) => {

  return (
    <Card css={{w: "100%", h: "300px", minWidth: "200px"}}>
      <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {item.name}
          </Text>
          {item.artists.map((a: any, index: number) => <Text key={index} size={16}  weight="bold" color="black">
              {a.name}
            </Text>
          )}
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
              Fecha:
            </Text>
            <Text color="#000" size={12}>
              {item.release_date}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="secondary">
                <Text
                  css={{color: "inherit"}}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Canciones. {item.total_tracks}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default AlbumCardComponent;
