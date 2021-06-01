import { useEffect, useState } from "react";
import dataSource from "../dataSource.json";
import "../styles/SimpleTable.css";

export default function SimpleTable() {

    const [filter, setFilter] = useState({
        country: 'All',
        total: 0,
        agricultureNCPlus: 0,
        agricultureNC: 0,
        manufacturingAndEnergyProductionNCPlus: 0,
        manufacturingAndEnergyProductionNC: 0,
        constructionNCPlus: 0,
        constructionNC: 0,
        transportNCPlus: 0,
        transportNC: 0,
        wasteManagementNCPlus: 0,
        wasteManagementNC: 0,
        otherTertiaryAndHouseholdsNCPlus: 0,
        otherTertiaryAndHouseholdsNC: 0,
    });

    const [rows] = useState(dataSource);

    function filteredRows() {
        return rows.filter((row) => {
          if (filter.country != 'All' && row.country !== filter.country) return false;
          if (filter.total && row.total < filter.total) return false;
          if (filter.agricultureNCPlus && row.agricultureNCPlus < filter.agricultureNCPlus) return false;
          if (filter.agricultureNC && row.agricultureNC < filter.agricultureNC) return false;
          if (filter.manufacturingAndEnergyProductionNCPlus && row.manufacturingAndEnergyProductionNCPlus < filter.manufacturingAndEnergyProductionNCPlus) return false;
          if (filter.manufacturingAndEnergyProductionNC && row.manufacturingAndEnergyProductionNC < filter.manufacturingAndEnergyProductionNC) return false;
          if (filter.constructionNCPlus && row.constructionNCPlus < filter.constructionNCPlus) return false;
          if (filter.constructionNC && row.constructionNC < filter.constructionNC) return false;
          if (filter.transportNCPlus && row.transportNCPlus < filter.transportNCPlus) return false;
          if (filter.transportNC && row.transportNC < filter.transportNC) return false;
          if (filter.wasteManagementNCPlus && row.wasteManagementNCPlus < filter.wasteManagementNCPlus) return false;
          if (filter.wasteManagementNC && row.wasteManagementNC < filter.wasteManagementNC) return false;
          if (filter.otherTertiaryAndHouseholdsNCPlus && row.otherTertiaryAndHouseholdsNCPlus < filter.otherTertiaryAndHouseholdsNCPlus) return false;
          if (filter.otherTertiaryAndHouseholdsNC && row.otherTertiaryAndHouseholdsNC < filter.otherTertiaryAndHouseholdsNC) return false;
          return true;
        });
    }

    function handleCountry(e) {
        setFilter({ ...filter, country: e.target.value });
    }
    function handleTotal(e) {
        setFilter({ ...filter, total: e.target.value });
    }
    function handleAgricultureNCPlus(e) {
        setFilter({ ...filter, agricultureNCPlus: e.target.value });
    }
    function handleAgricultureNC(e) {
        setFilter({ ...filter, agricultureNC: e.target.value });
    }
    function handleManufacturingAndEnergyProductionNCPlus(e) {
        setFilter({ ...filter, manufacturingAndEnergyProductionNCPlus: e.target.value });
    }
    function handleManufacturingAndEnergyProductionNC(e) {
        setFilter({ ...filter, manufacturingAndEnergyProductionNC: e.target.value });
    }
    function handleConstructionNCPlus(e) {
        setFilter({ ...filter, constructionNCPlus: e.target.value });
    }
    function handleConstructionNC(e) {
        setFilter({ ...filter, constructionNC: e.target.value });
    }
    function handleTransportNCPlus(e) {
        setFilter({ ...filter, transportNCPlus: e.target.value });
    }
    function handleTransportNC(e) {
        setFilter({ ...filter, transportNC: e.target.value });
    }
    function handleWasteManagementNCPlus(e) {
        setFilter({ ...filter, wasteManagementNCPlus: e.target.value });
    }
    function handleWasteManagementNC(e) {
        setFilter({ ...filter, wasteManagementNC: e.target.value });
    }
    function handleOtherTertiaryAndHouseholdsNCPlus(e) {
        setFilter({ ...filter, otherTertiaryAndHouseholdsNCPlus: e.target.value });
    }
    function handleOtherTertiaryAndHouseholdsNC(e) {
        setFilter({ ...filter, otherTertiaryAndHouseholdsNC: e.target.value });
    }

    function createRows(rows) {
        return (
          <>
            {rows.map((row, index) => {
              return (
                <tr key={index}>
                  <th className="table-light" scope="row">{row.country}</th>
                  <td>{row.total}</td>
                  <td>{row.agricultureNCPlus}</td>
                  <td>{row.agricultureNC}</td>
                  <td>{row.manufacturingAndEnergyProductionNCPlus}</td>
                  <td>{row.manufacturingAndEnergyProductionNC}</td>
                  <td>{row.constructionNCPlus}</td>
                  <td>{row.constructionNC}</td>
                  <td>{row.transportNCPlus}</td>
                  <td>{row.transportNC}</td>
                  <td>{row.wasteManagementNCPlus}</td>
                  <td>{row.wasteManagementNC}</td>
                  <td>{row.otherTertiaryAndHouseholdsNCPlus}</td>
                  <td>{row.otherTertiaryAndHouseholdsNC}</td>
                  <td>{row.ecosystemTypes}</td>
                </tr>
              );
            })}
          </>
        );
    }

    return (
        <div className="container text-center my-3">
            <h1 className="mb-5">Simple Table</h1>
            <div className="container wrapper">
                <table id="table" className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr>
                            <th className="narrowColumnHeader" scope="col">Country</th>
                            <th className="columnHeader" scope="col">Total</th>
                            <th className="columnHeader" scope="col">Agriculture NC+</th>
                            <th className="columnHeader" scope="col">Agriculture NC</th>
                            <th className="wideColumnHeader" scope="col">Manufacturing And Energy Production NC+</th>
                            <th className="wideColumnHeader" scope="col">Manufacturing And Energy Production NC</th>
                            <th className="columnHeader" scope="col">Construction NC+</th>
                            <th className="columnHeader" scope="col">Construction NC</th>
                            <th className="columnHeader" scope="col">Transport NC+</th>
                            <th className="columnHeader" scope="col">Transport NC</th>
                            <th className="columnHeader" scope="col">Waste Management NC+</th>
                            <th className="columnHeader" scope="col">Waste Management NC</th>
                            <th className="wideColumnHeader" scope="col">Other Tertiary And Households NC+</th>
                            <th className="wideColumnHeader" scope="col">Other Tertiary And Households NC</th>
                            <th className="columnHeader" scope="col">Ecosystem Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-light">
                            <td>
                                <select
                                    id="fcountry"
                                    name="fcountry"
                                    className="form-select"
                                    placeholder="Select..."
                                    onChange={(e) => {
                                        handleCountry(e);
                                    }}
                                >
                                    <option value="All"></option>
                                    <option value="AT">AT</option>
                                    <option value="BE">BE</option>
                                    <option value="BG">BG</option>
                                    <option value="CZ">CZ</option>
                                    <option value="DE">DE</option>
                                    <option value="DK">DK</option>
                                    <option value="EE">EE</option>
                                    <option value="EL">EL</option>
                                    <option value="ES">ES</option>
                                    <option value="FI">FI</option>
                                    <option value="FR">FR</option>
                                    <option value="HR">HR</option>
                                    <option value="HU">HU</option>
                                    <option value="IE">IE</option>
                                    <option value="IT">IT</option>
                                    <option value="LT">LT</option>
                                    <option value="LU">LU</option>
                                    <option value="LV">LV</option>
                                    <option value="NL">NL</option>
                                    <option value="PL">PL</option>
                                    <option value="PT">PT</option>
                                    <option value="RO">RO</option>
                                    <option value="SE">SE</option>
                                    <option value="SI">SI</option>
                                    <option value="SK">SK</option>
                                    <option value="UK">UK</option>
                                    <option value="EU">EU</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="ftotal"
                                    name="ftotal"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleTotal(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fagricultureNCPlus"
                                    name="fagricultureNCPlus"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleAgricultureNCPlus(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fagricultureNC"
                                    name="fagricultureNC"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleAgricultureNC(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fmanufacturingAndEnergyProductionNCPlus"
                                    name="fmanufacturingAndEnergyProductionNCPlus"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleManufacturingAndEnergyProductionNCPlus(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fmanufacturingAndEnergyProductionNC"
                                    name="fmanufacturingAndEnergyProductionNC"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleManufacturingAndEnergyProductionNC(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fconstructionNCPlus"
                                    name="fconstructionNCPlus"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleConstructionNCPlus(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fconstructionNC"
                                    name="fconstructionNC"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleConstructionNC(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="ftransportNCPlus"
                                    name="ftransportNCPlus"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleTransportNCPlus(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="ftransportNC"
                                    name="ftransportNC"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleTransportNC(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fwasteManagementNCPlus"
                                    name="fwasteManagementNCPlus"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleWasteManagementNCPlus(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fwasteManagementNC"
                                    name="fwasteManagementNC"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleWasteManagementNC(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fotherTertiaryAndHouseholdsNCPlus"
                                    name="fotherTertiaryAndHouseholdsNCPlus"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleOtherTertiaryAndHouseholdsNCPlus(e);
                                    }}
                                ></input>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="fotherTertiaryAndHouseholdsNC"
                                    name="fotherTertiaryAndHouseholdsNC"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleOtherTertiaryAndHouseholdsNC(e);
                                    }}
                                ></input>
                            </td>
                            <td></td>
                        </tr>

                        {createRows(filteredRows())}
                    </tbody>
                </table>
            </div>
        </div>

    )
}