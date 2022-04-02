import React, { useEffect } from "react";
import Navbar from "../navbar";
import { connect } from "react-redux";
import * as actions from "../logic/action/report";
import * as selectors from "../logic/reducer";
import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  FilterPanel,
  FilterBuilderPopup,
  Scrolling,
} from 'devextreme-react/data-grid';


const Reports = ({ fetchingData, isCompletedGet, isLoadingUpdate }) => {

  useEffect(() => {
    fetchingData()
  }, [fetchingData])

  console.log('DATA ----REPORTS', isCompletedGet)
  console.log('DATA', isLoadingUpdate)
  return (
    <div>
      <Navbar />
      {
          <DataGrid
            id="gridContainer"
            columnsAutoWidth="true"
            dataSource={(isCompletedGet||{}).docs}
            keyExpr="_id"
            showBorders={true}
            style={{paddingTop:'100px'}}
          >
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <HeaderFilter visible={true} />
            <Scrolling mode="infinite" />
            <Column dataField="nombre" width={"auto"} caption="Nombre" />
            <Column dataField="telefono" width={"auto"} caption="Telefono" />
            <Column dataField="carnet" width={"auto"} caption="Carnet" />
            <Column dataField="carrera" width={"auto"} caption="Carrera" />
            <Column dataField="direccion" width={"auto"} caption="Direccion" />
            <Column dataField="fechaInscripcion" width={"auto"} caption="Fecha De Inscripcion" />
            <Column dataField="fechaNacimiento" width={"auto"}  caption="Fecha De nacimiento" />
            <Column dataField="genero" width={"auto"} caption="Femenino" />
            <Column dataField="generoPoesia" width={"auto"} caption="Genero Poesía" />
         
          </DataGrid>

      }
    </div>
  )
}

export default connect(
  (state) => ({
    isLoadingUpdate: selectors.getIsFetching(state),
    isCompletedGet: selectors.getIsData(state),
  }),
  (dispatch) => ({
    fetchingData() {
      dispatch(actions.startedFetchingData());
    },
  })
)(Reports);
