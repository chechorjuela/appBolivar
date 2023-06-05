import {Avatar, Button, Card, Col, Grid, Progress, Row, Text} from "@nextui-org/react";

export const ArtistCardComponent: React.FC<any> = ({item}) => {
  return (
    <Card css={{w: "100%", h: "300px"}}>
      <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
        <Col>

          <Avatar
            alt="nextui logo"
            src={item.images[0]?.url}
            width="12px"
            height="34px"
          />
          <Text size={12} weight="bold" transform="uppercase" color="bold">
            {item.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{p: 0}}>
        <Col>
          <Grid.Container xs={12}>
            <Grid>
              <Text color="primary">
                Popularidad.
              </Text>
              <Progress value={item.popularity} shadow color="primary" status="primary"/>
            </Grid>
          </Grid.Container>
        </Col>
        {/* <Card.Image
          src={item.images[0].url}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />*/}
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
            <Avatar.Group count={3}>
              {item.genres.map((name: any, index: number) => (
                <Avatar key={index} size="md" pointer text={name} stacked/>
              ))}
            </Avatar.Group>
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
