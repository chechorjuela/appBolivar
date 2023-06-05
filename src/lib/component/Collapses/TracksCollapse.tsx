'use client';
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import AlbumCardComponent from "@/lib/component/Cards/AlbumCardComponent";
import {useSelector} from "react-redux";
import usePagination from "@/lib/hook/usePagination";
import {TrackCardComponent} from "@/lib/component/Cards/TrackCardComponent";

export const TracksCollapse: React.FC<any> = () => {
  const trackList = useSelector((state: any) => state.search.searchList.tracks);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;

  const changePagination = (e: any) => {
    goToPage(e, trackList.next);
  }

  return (
    <Collapse title="Pistas" subtitle="Resultados por tracknes">
      <Grid.Container gap={2}>
        {trackList.items !== undefined && trackList.items.map((i: any) => (
          <Grid key={i.id} xs={12} sm={12}>
            <TrackCardComponent item={i} />
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(trackList.total / trackList.limit)} initialPage={1}/>
    </Collapse>
  );
};
