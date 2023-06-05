'use client';
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import AlbumCardComponent from "@/lib/component/Cards/AlbumCardComponent";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {AudiobookCardComponent} from "@/lib/component/Cards/AudiobookCardComponent";
import usePagination from "@/lib/hook/usePagination";

export const AudiobookCollapse: React.FC<any> = () => {
  const audiobookList = useSelector((state: any) => state.search.searchList.audiobooks);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;
  useEffect(()=> {
    console.info(audiobookList)
  }, [audiobookList])
  const changePagination = (e: any) => {
    goToPage(e, audiobookList.next);
  }
  return (
    <Collapse title="Libors de audios" subtitle="Resultados por audiobooknes">
      <Grid.Container gap={2}>
        {audiobookList.items !== undefined && audiobookList.items.map((i: any) => (
          <Grid key={i.id} xs={3} sm={3}>
            <AudiobookCardComponent item={i}/>
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(audiobookList.total/audiobookList.limit)} initialPage={1}/>
    </Collapse>
  );
};
