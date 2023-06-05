'use client';
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import AlbumCardComponent from "@/lib/component/Cards/AlbumCardComponent";
import {useSelector} from "react-redux";
import usePagination from "@/lib/hook/usePagination";
import {PlaylistCardComponent} from "@/lib/component/Cards/PlaylistCardComponent";

export const PlaylistCollapse: React.FC<any> = () => {
  const playlistList = useSelector((state: any) => state.search.searchList.playlists);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;
  const changePagination = (e: any) => {
    goToPage(e, playlistList.next);
  }
  return (
    <Collapse title="Lista de musica" subtitle="Resultados por playlistnes">
      <Grid.Container gap={2}>
        {playlistList.items !== undefined && playlistList.items.map((i: any) => (
          <Grid key={i.id} xs={3} sm={3}>
            <PlaylistCardComponent item={i} />
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(playlistList.total / playlistList.limit)} initialPage={1}/>
    </Collapse>
  );
};
