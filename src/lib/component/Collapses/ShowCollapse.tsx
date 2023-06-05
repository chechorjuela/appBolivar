'use client';
import {Collapse, Grid, Pagination} from "@nextui-org/react";
import AlbumCardComponent from "@/lib/component/Cards/AlbumCardComponent";
import {useSelector} from "react-redux";
import usePagination from "@/lib/hook/usePagination";
import {ShowCardComponent} from "@/lib/component/Cards/ShowCardComponent";

export const ShowCollapse: React.FC<any> = () => {
  const showList = useSelector((state: any) => state.search.searchList.shows);
  const {paginationData, goToPage} = usePagination();
  const {currentPage, totalPages, perPage, totalItems} = paginationData;
  const changePagination = (e: any) => {
    goToPage(e, showList.next);
  }

  return (
    <Collapse title="Shows" subtitle="Resultados por showes">
      <Grid.Container gap={2}>
        {showList.items !== undefined && showList.items.map((i: any) => (
          <Grid sm={3}>
            <ShowCardComponent item={i} />
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        page={currentPage}
        onChange={changePagination} total={Math.ceil(showList.total / showList.limit)} initialPage={1}/>
    </Collapse>
  );
};
