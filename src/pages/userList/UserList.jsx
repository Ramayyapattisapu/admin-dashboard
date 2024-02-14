import React from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import profilePic from "../../images/profilePic.jpg"


const columns=  [
  { field: "id", headerName: "ID", width: 90 },
  { field: "username", headerName: "Username", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 200,
  }
];

const rows = [
  { id: 1, username: "Mercury", avatar: {profilePic}, email:"mercury@gmail.com", status: "active", transaction: "$12.00" },
  { id: 2, username: "Venus", avatar: {profilePic}, email:"venus@gmail.com", status: "active", transaction: "$12.00" },
  { id: 3, username: "Earth", avatar: {profilePic}, email:"earth@gmail.com", status: "active", transaction: "$12.00" },
  { id: 4, username: "Mars", avatar: {profilePic}, email:"mars@gmail.com", status: "active", transaction: "$12.00" },
  { id: 5, username: "Jupiter", avatar: {profilePic}, email:"jupiter@gmail.com", status: "active", transaction: "$12.00" },
  { id: 6, username: "Saturn", avatar: {profilePic}, email:"saturn@gmail.com", status: "active", transaction: "$12.00" },
  { id: 7, username: "Uranus", avatar: {profilePic}, email:"uranus@gmail.com", status: "active", transaction: "$12.00" },
  { id: 8, username: "Neptune", avatar: {profilePic}, email:"neptune@gmail.com", status: "active", transaction: "$12.00" },
  { id: 9, username: "Pluto", avatar: {profilePic}, email:"pluto@gmail.com", status: "active", transaction: "$12.00" },

];

export default function userList() {
  return (
    <div className="userList">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
