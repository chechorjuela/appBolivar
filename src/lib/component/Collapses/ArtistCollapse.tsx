'use client';
import {useEffect} from "react";
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {ArtistCardComponent} from "@/lib/component/Cards/ArtistCardComponent";
import usePagination from "@/lib/hook/usePagination";

export const ArtistCollapse: React.FC<any> = () => {
  const artistList = useSelector((state: any) => state.search.searchList.artists);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;
  const changePagination = (e: any) => {
    goToPage(e, artistList.next);
  }
  return (
    <Collapse title="Artistas" subtitle="Resultados por artistas">
      <Grid.Container gap={2}>
        {artistList.items !== undefined && artistList.items.map((i: any) => (
          <Grid key={i.id} xs={3} sm={3}>
            <ArtistCardComponent item={i}/>
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(artistList.total / artistList.limit)} initialPage={1}/>
    </Collapse>
  );
};
