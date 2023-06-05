import {Avatar, Card, Grid, Image, Text} from "@nextui-org/react";

export const TrackCardComponent: React.FC<any> = ({item}) => {
  console.info(item)
  return (
    <Card css={{w: "100%", h: "180px", minWidth: "200px"}}>

      <Card.Body>
        <Grid.Container>
          <Grid sm={2}>
            <Image
              src={item.album.images[0].url}
              alt="Default Image"
              width={80}
              height={80}
            />
          </Grid>
          <Grid sm={10}>
            <Grid.Container>
              <Grid sm={12}>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                  {item.name}
                </Text>
              </Grid>
              <Grid.Container>
                {item.artists.map((a: any, index: number) => <Grid sm={2}>
                    <Text key={index} size={16} weight="bold" color="black">
                      {a.name}
                    </Text>
                  </Grid>
                )}
              </Grid.Container>
            </Grid.Container>


          </Grid>
        </Grid.Container>

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

      </Card.Footer>
    </Card>
  )
    ;
};
