'use client';
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import AlbumCardComponent from "@/lib/component/Cards/AlbumCardComponent";
import {useDispatch, useSelector} from "react-redux";
import usePagination from "@/lib/hook/usePagination";
import {useEffect} from "react";

export const AlbumCollapse: React.FC<any> = () => {
  const dispatch = useDispatch();
  const albumList = useSelector((state: any) => state.search.searchList.albums);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;

  useEffect(() => {
  }, [albumList])
  const changePagination = (e: any) => {

    // @ts-ignore

    goToPage(e, albumList.next);
  }

  return (
    <Collapse title="Albumnes" subtitle="Resultados por albumnes">
      <Grid.Container gap={2}>

        {albumList.items !== undefined && albumList.items.map((i: any) => (
          <Grid key={i.id} xs={3} sm={3}>
            <AlbumCardComponent item={i}/>
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(albumList.total / albumList.limit)} initialPage={1}/>
    </Collapse>
  );
};
