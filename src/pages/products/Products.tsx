import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png"}
        alt=""
      />
    ),
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(products);

  const handleDelete = (id: number) => {
    setRows((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  const handleAdd = (newProduct: any) => {
    setRows((prev) => [
      ...prev,
      {
        ...newProduct,
        id: prev.length
          ? Math.max(...prev.map((item) => item.id)) + 1
          : 1,
      },
    ]);

    setOpen(false);
  };

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>

        <button onClick={() => setOpen(true)}>
          Add New Products
        </button>
      </div>

      <DataTable
        slug="products"
        columns={columns}
        rows={rows}
      />

      {open && (
        <Add
          slug="products"
          columns={columns}
          setOpen={setOpen}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default Products;