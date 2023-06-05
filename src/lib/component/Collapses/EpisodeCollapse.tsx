'use client';
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import {useSelector} from "react-redux";
import usePagination from "@/lib/hook/usePagination";
import {EpisodeCardComponent} from "@/lib/component/Cards/EpisodeCardComponent";

export const EpisodeCollapse: React.FC<any> = () => {
  const episodeList = useSelector((state: any) => state.search.searchList.episodes);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;
  const changePagination = (e: any) => {
    goToPage(e, episodeList.next);
  }

  return (
    <Collapse title="Episodios" subtitle="Resultados por episodenes">
      <Grid.Container gap={2}>
        {episodeList.items !== undefined && episodeList.items.map((i: any) => (
          <Grid sm={3}>
            <EpisodeCardComponent item={i}/>
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(episodeList.total / episodeList.limit)} initialPage={1}/>
    </Collapse>
  );
};
