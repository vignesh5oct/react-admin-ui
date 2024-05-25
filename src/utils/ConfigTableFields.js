import noavatar from "../assests/noavatar.png"


export const usersColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar', headerName: 'Avatar', width: 100,
    renderCell: (params) => {
      return <img alt='user' src={params.row.image || noavatar} />
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   width: 200,
  //   type: "string",
  // },
  // {
  //   field: "verified",
  //   headerName: "Verified",
  //   width: 150,
  //   type: "boolean",
  // },
];

export const productsColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'thumbnail', headerName: 'Product', width: 100,
    renderCell: (params) => {
      return <img alt='user' src={params.row.thumbnail || noavatar} />
    }
  },
  {
    field: 'title',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: "stock",
    type: "string",
    headerName: "Stocks",
    width: 200,
  },
  {
    field: "availabilityStatus",
    type: "string",
    headerName: "Availability",
    width: 200,
  },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   width: 200,
  //   type: "string",
  // },
  // {
  //   field: "verified",
  //   headerName: "Verified",
  //   width: 150,
  //   type: "boolean",
  // },
];

