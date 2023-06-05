import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {searchRequest} from "@/lib/store/search/search.action";
import queryString from "query-string";

type PaginationData = {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalItems: number;
};

type PaginationHook = {
  paginationData: PaginationData;
  goToPage: (pageNumber: number, urlParms: string) => void;
};

const usePagination = (): PaginationHook => {
  const dispatch = useDispatch();
  const [paginationData, setPaginationData] = useState<PaginationData>({
    currentPage: 1,
    totalPages: 1,
    perPage: 10,
    totalItems: 0,
  });


  const goToPage = (pageNumber: number, urlParms: string) => {
    const charthIndex = urlParms.indexOf('?');

    const urlSring = new String(urlParms);
    const queryParam = queryString.parse(urlSring.slice(charthIndex + 1, urlSring.length));
    const limitPage = queryParam.limit ? queryParam.limit : 20;
    // @ts-ignore
    const offsetPage = (pageNumber - 1) * parseInt(limitPage);
    const paramsPaginator = {
      query: queryParam.query,
      limit: queryParam.limit,
      offset: offsetPage,
      type: queryParam.type,
      locale: queryParam.locale
    }

    setPaginationData((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }));
    if (paramsPaginator !== null) {
      dispatch(searchRequest(paramsPaginator));
    }
  };

  return {paginationData, goToPage};
};

export default usePagination;
