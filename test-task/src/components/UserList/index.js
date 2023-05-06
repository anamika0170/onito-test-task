import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Checkbox, Table, TableBody, TableCell, TableRow } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./userlist.css";
import { Pagination } from "@mui/material";
import axios from "axios";
import DeleteAllData from "../../DeleteModal";



const UserList = () => {
  const [totalChecklist, setTotalChecklist] = React.useState(0);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const [rowData, setRowData]= React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [isRemove, setIsRemove]= React.useState(false)
  const [open, setOpen] = React.useState(false);
  
  
  const getData=async()=>{
  await axios.get('http://localhost:5000/api/users').then((res)=>{
    setRowData(res.data)
    console.log("rowData", res.data)
  })
  }

  const getRowId = (row) => row._id;

  
  React.useEffect(()=>{
    getData()
  },[])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = rowData.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  const CustomHeader = () => {
    return (
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",alignContent:"flex-end"}}>
        <GridToolbarExport />
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}/>
        <div>Total Selected Rows: {rowData.length}</div>
      </div>
    );
  };




  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
    } else {
      setSelectedIds((prevIds) => [...prevIds, id]);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const totalData = filteredData.map((row) => row._id); // Get all _id values
      setSelectedIds(totalData);
      setIsRemove(true)
    } else {
      setSelectedIds([]);
    }
  };

  console.log("selected ids", selectedIds)
  
  const columns = [
    {
      field: "checkbox",
      headerName: "", // Empty string to remove checkbox from header name
      width: 50,
      disableColumnMenu: true,
      sortable: false,
      filter: false,
      disableClickEventBubbling: true,
      renderHeader: (params) => ( // Use renderHeader to customize the header cell
       isRemove ? <div onClick={()=>setOpen(true)} className="deleteBtn">Delete</div> :  <Checkbox
       color="primary"
       indeterminate={
         selectedIds.length > 0 &&
         selectedIds.length < filteredData.length
       }
       checked={
         selectedIds.length > 0 &&
         selectedIds.length === filteredData.length
       }
       onChange={handleSelectAll}
     />
      ),
      renderCell: (params) => (
        <Checkbox
          color="primary"
          checked={selectedIds.includes(params.id)}
          onChange={() => handleSelect(params.id)}
        />
      ),
    },
    // { field: "_id", headerName: "ID", width: 10 },
    { field: "name", headerName: "Name", headerClass:"headerClass"},
    // { field: "dob", headerName: "DOB", width: 130 },
    {field:"age",headerName: "Age", headerClass:"headerClass"},
    // {field:"guardianD",headerName: "Guardian Details", width: 50 },
    { field: "sex", headerName: "Sex", headerClass:"headerClass" },
    { field: "mobile", headerName: "Mobile", headerClass:"headerClass" },
    { field: "govtid", headerName: "Goverment Id", headerClass:"headerClass" },
    { field: "email", headerName: "Email", headerClass:"headerClass" },
    { field: "emergency_mobile", headerName: "Emergency Conact No", headerClass:"headerClass"},
    { field: "address", headerName: "Address", headerClass:"headerClass" },
    { field: "city", headerName: "City", headerClass:"headerClass" },
    { field: "state", headerName: "State", headerClass:"headerClass" },
    { field: "country", headerName: "Country", headerClass:"headerClass" },
    { field: "pincode", headerName: "Pincode", headerClass:"headerClass" },
    { field: "occupation", headerName: "Occupation", headerClass:"headerClass" },
    { field: "religion", headerName: "Religion", headerClass:"headerClass" },
    { field: "meritalStatus", headerName: "Merital Status", headerClass:"headerClass" },
    { field: "nationality", headerName: "Nationality", headerClass:"headerClass" },
    { field: "blood_group", headerName: "Blood Group",headerClass:"headerClass" },
    
   
  ];
  


  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  const CustomSortIcon = () => {
    return <FilterAltIcon fontSize="small" />;
  };

  const CustomFilterIcon = () => {
    return <FilterAltIcon fontSize="small" />;
  };

  React.useEffect(() => {
    const totalData = filteredData.filter((row) => row.id !== "total");
    const totalChecklist = totalData.length;
    setTotalChecklist(totalChecklist);
  }, []);


  const CustomFooter = () => {
    const totalRows = filteredData.length;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ marginLeft: "16px" }}>Total rows: {totalRows}</div>
      </div>
    );
  };

React.useEffect(()=>{
  setRowData(filteredData)
},[])

  return (
    <>
   <div style={{textAlign:"end"}}>
   <input  type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}/>
   </div>
      <div >
      <DataGrid
        columns={columns}
        rows={filteredData}
        // pageSize={5}
        onRowClick={(params) => {
          setSelectedRow(params.id);
        }}
        getRowId={getRowId}
        components={{
          Toolbar: CustomToolbar,
          // Footer: CustomFooter,
          ColumnSortedAscendingIcon: CustomSortIcon,
          ColumnSortedDescendingIcon: CustomSortIcon,
          ColumnFilteredIcon:CustomFilterIcon
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <DeleteAllData open={open} setOpen={setOpen} setRowData={setRowData}/>
    </div>
    </>
  );
};
export default UserList;

