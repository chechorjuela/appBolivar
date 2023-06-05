"use client"
import ClientOnlyWithAuth from "@/lib/component/ClientOnlyWithAuth/ClientOnlyWithAuth";
import LayoutMain from "@/lib/component/layouts/LayoutMain";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import {Autocomplete, FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Collapse, Grid, Loading} from "@nextui-org/react";
import {filterTypes} from "@/lib/settings/filterTypes";
import InputLabel from '@mui/material/InputLabel';
import {useDispatch, useSelector} from "react-redux";
import {useDebounce} from "@/lib/hook/useDebounce";
import {searchRequest} from "@/lib/store/search/search.action";
import {itemsMarket} from "@/lib/settings/itemsMarket";
import {isObjectEmpty, objectToArray} from "@/lib/utils/queryParams";
import {AlbumCollapse} from "@/lib/component/Collapses/AlbumCollapse";
import {ArtistCollapse} from "@/lib/component/Collapses/ArtistCollapse";
import {EpisodeCollapse} from "@/lib/component/Collapses/EpisodeCollapse";
import {PlaylistCollapse} from "@/lib/component/Collapses/PlaylistCollapse";
import {TracksCollapse} from "@/lib/component/Collapses/TracksCollapse";
import {ShowCollapse} from "@/lib/component/Collapses/ShowCollapse";
import {AudiobookCollapse} from "@/lib/component/Collapses/AudiobookCollapse";

function SearchPage() {
  const dispatch = useDispatch();
  const [boolSearch, setBoolSearch] = useState(false);
  const searchList = useSelector((state: any) => state.search.searchList)
  const loadingSearch = useSelector((state: any) => state.search.loadingRequest)
  const [searchFilter, setSearchFilter] = useState({
    q: '',
    type: [],
    market: '',
    include_external: ''
  })
  const searchQuery = useDebounce(searchFilter, 1500);

  useEffect(() => {
    if (searchFilter.q.length > 3) {
      setBoolSearch(true);
      dispatch(searchRequest(searchFilter))
    }
  }, [searchQuery]);

  const handleChange = (event: any | SelectChangeEvent) => {
    setSearchFilter({...searchFilter, [event.target.name]: event.target.value});
  };

  const handleChangeAutocomplate = (event: any, value: any) => {
    setSearchFilter({...searchFilter, ['type']: value});
  };

  const collapseSelected = (collapseTitle: string, objectCollapse: any) => {
    if(objectCollapse.items !== undefined){
      switch (collapseTitle) {
        case 'albums':
          return objectCollapse.items.length > 0 && <AlbumCollapse/>;
        case 'artists':
          return objectCollapse.items.length > 0 && <ArtistCollapse/>;
        case 'episodes':
          return objectCollapse.items.length > 0 && <EpisodeCollapse/>;
        case 'playlists':
          return objectCollapse.items.length > 0 && <PlaylistCollapse/>;
        case 'audiobooks':
          return objectCollapse.items.length > 0 && <AudiobookCollapse/>;
        case 'shows':
          return objectCollapse.items.length > 0 && <ShowCollapse/>;
        default:
          return objectCollapse.items.length > 0 && <TracksCollapse/>;
      }
    }

  };

  return (
    <ClientOnlyWithAuth>
      <LayoutMain>
        <Grid.Container>
          <Grid xs={12} sm={12}>
            <Grid.Container>
              <Grid xs={12} sm={12}>
                <h1>Search page Page</h1>
              </Grid>
              <Grid xs={5} sm={4}>
                <TextField
                  style={{ width: '100%' }}
                  id="q"
                  name="q"
                  value={searchFilter.q}
                  onChange={handleChange}
                  label="Buscar"
                  variant="standard"/>
              </Grid>
              <Grid xs={5}>
                <Autocomplete
                  style={{ width: '100%' }}
                  multiple
                  id="typeFilter"
                  value={searchFilter.type}
                  onChange={handleChangeAutocomplate}
                  options={filterTypes}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="type"
                      variant="standard"
                      label="Tipo de busqueda"
                      placeholder="Selecciona el tipo para buscar"
                    />
                  )}
                />
              </Grid>
              <Grid xs={2}>
                <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                  <InputLabel id="demo-simple-select-standard-label">Mercado</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={searchFilter.market}
                    name='market'
                    onChange={handleChange}
                    label="Mercado"
                  >
                    <MenuItem value="">
                      <em>Seleccione algun tipo de mercado</em>
                    </MenuItem>
                    {itemsMarket.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
            </Grid.Container>
          </Grid>
          {loadingSearch && (
            <Loading type="points" size="lg"/>
          )}
          {boolSearch && <Grid xs={12} sm={12}>
            <h1>Resultados: </h1>
          </Grid>}

          <Grid xs={12}>
            <Collapse.Group>
              {(!isObjectEmpty(searchList) && boolSearch && !loadingSearch) &&
                objectToArray(searchList).map((item, index) => collapseSelected(item, searchList[item]))}
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </LayoutMain>
    </ClientOnlyWithAuth>
  )
    ;
}

export default SearchPage;
