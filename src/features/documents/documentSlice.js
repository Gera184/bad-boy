import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeThunkRequest } from "../../services/makeRequest";

const FILTERS = ["All Documents", "Contract", "Receipts", "Others"];

const SEARCH_FIELDS = ["name", "id", "details"];

function getFilterFn(filter, searchKey) {
  switch (filter) {
    // for all docs
    case FILTERS[0]:
      return (item) =>
        !filter ? true : searchObject(item, searchKey, SEARCH_FIELDS);

    // for other
    case FILTERS[FILTERS.length - 1]:
      return (item) =>
        !FILTERS.slice(1, -1).includes(item.type) &&
        (!filter ? true : searchObject(item, searchKey, SEARCH_FIELDS));

    default:
      return (item) =>
        filter === item.type &&
        (!filter ? true : searchObject(item, searchKey, SEARCH_FIELDS));
  }
}

// search for searchKey substring in provided field keys of object
function searchObject(obj, searchKey, fields) {
  for (let field of fields) {
    if (
      obj?.hasOwnProperty(field) &&
      obj[field]?.toLowerCase().search(searchKey?.toLowerCase()) !== -1
    ) {
      return true;
    }
  }
  return false;
}

const initialState = {
  documents: [],
  _documents: [],
  filters: FILTERS,
  searchKey: "",
  newDocModel: false,
  selectedFilter: FILTERS[0],
  loading: false,
  error: "",
  addDocLoading: false,
  addDocError: null,
};

export const getDocuments = createAsyncThunk(
  "document/getDocuments",
  makeThunkRequest("/documents.json")
);
export const addNewDocument = createAsyncThunk(
  "document/addNewDocument",
  makeThunkRequest("/newDocument.json")
);
export const delDocument = createAsyncThunk(
  "document/delDocument",
  makeThunkRequest("/newDocument.json")
);

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    refilter: (state) => {
      const { selectedFilter, searchKey } = state;
      const filterFn = getFilterFn(selectedFilter, searchKey);

      state.documents = state._documents.filter(filterFn);
    },
    setFilter: (state, { payload }) => {
      state.selectedFilter = payload;
    },
    setSearchKey: (state, { payload }) => {
      state.searchKey = payload;
    },
    showNewDocModel: (state) => {
      state.newDocModel = true;
    },
    hideNewDocModel: (state) => {
      state.newDocModel = false;
    },
    deleteDocument: (state, { payload }) => {
      const { id } = payload;
      state._documents = state._documents.filter((doc) => doc.id !== id);
    },
    deleteDocumentMany: (state, { payload: { ids } }) => {
      const docMap = state._documents.reduce((map, item) => {
        map[item.id] = item;
        return map;
      }, {});

      ids?.forEach((id) => {
        delete docMap[id];
      });

      state._documents = Object.values(docMap);
    },
    selectAll: (state) => {
      state.documents = state.documents.map((doc) => ({
        ...doc,
        checked: true,
      }));
    },
    toggleCheck: (state, { payload: { id } }) => {
      id.checked = !id.checked;
    },
    togglCheckAll: (state, { payload: { checked } }) => {
      state.documents = state.documents.map((doc) => ({ ...doc, checked }));
    },
  },
  extraReducers: {
    [getDocuments.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getDocuments.rejected]: (state, { payload }) => {
      return { ...initialState, error: payload };
    },
    [getDocuments.fulfilled]: (state, { payload }) => {
      const { documents } = payload;
      let docList = documents.map((doc) => ({ ...doc, checked: false }));
      state._documents = docList;
      state.documents = docList;
      state.loading = false;
      state.error = null;
    },
    // add doc
    [addNewDocument.pending]: (state) => {
      state.addDocLoading = true;
      state.addDocError = null;
    },
    [addNewDocument.rejected]: (state, { payload }) => {
      state.addDocLoading = false;
      state.addDocError = payload;
    },
    [addNewDocument.fulfilled]: (state, { payload }) => {
      const { document } = payload;
      state._documents.push(document);
      state.newDocModel = false;
      state.addDocError = null;
      state.addDocLoading = false;
    },
  },
});

export const {
  refilter,
  setFilter,
  setSearchKey,
  showNewDocModel,
  hideNewDocModel,
  deleteDocument,
  selectAll,
  toggleCheck,
  togglCheckAll,
  deleteDocumentMany,
} = documentSlice.actions;
export default documentSlice.reducer;
