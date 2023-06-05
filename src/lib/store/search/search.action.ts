import {SEARCH_REQUEST} from "@/lib/store/search/search.type";

export const searchRequest = (search: any) => ({
  type: SEARCH_REQUEST,
  payload: search,
});
