import { useState } from "react";
import "./orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";

const initialOrders = [
  {
    id: 1,
    customer: "Adnan Parvez",
    product: "PlayStation 5 Digital Edition",
    quantity: 1,
    total: "৳69,999",
    status: "Delivered",
    payment: "Paid",
    orderDate: "02.03.2026",
  },
  {
    id: 2,
    customer: "Nowshin Reza",
    product: "Dell Inspiron Laptop",
    quantity: 1,
    total: "৳74,999",
    status: "Processing",
    payment: "Paid",
    orderDate: "04.03.2026",
  },
  {
    id: 3,
    customer: "Areeb Zuhair",
    product: "Samsung 4K Smart TV",
    quantity: 1,
    total: "৳89,999",
    status: "Shipped",
    payment: "Paid",
    orderDate: "06.03.2026",
  },
  {
    id: 4,
    customer: "Sumaita Aleeza",
    product: "Apple iPhone 14 Pro Max",
    quantity: 1,
    total: "৳124,999",
    status: "Delivered",
    payment: "Paid",
    orderDate: "08.03.2026",
  },
  {
    id: 5,
    customer: "Moona",
    product: "Logitech MX Master 3",
    quantity: 2,
    total: "৳17,998",
    status: "Pending",
    payment: "Pending",
    orderDate: "10.03.2026",
  },
  {
    id: 6,
    customer: "Omi",
    product: "Toshiba Split AC 2 Ton",
    quantity: 1,
    total: "৳94,999",
    status: "Delivered",
    payment: "Paid",
    orderDate: "12.03.2026",
  },
  {
    id: 7,
    customer: "Afseen Aleeza",
    product: "Sony Bravia Smart TV",
    quantity: 1,
    total: "৳84,999",
    status: "Cancelled",
    payment: "Refunded",
    orderDate: "14.03.2026",
  },
  {
    id: 8,
    customer: "Nowrin Reza",
    product: "Rode Podcast Microphone",
    quantity: 1,
    total: "৳14,999",
    status: "Shipped",
    payment: "Paid",
    orderDate: "16.03.2026",
  },
  {
    id: 9,
    customer: "Kifaya Benta",
    product: "Acer Aspire Laptop",
    quantity: 1,
    total: "৳69,999",
    status: "Processing",
    payment: "Paid",
    orderDate: "18.03.2026",
  },
];

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Order ID",
    width: 100,
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 180,
    type: "string",
  },
  {
    field: "product",
    headerName: "Product",
    width: 280,
    type: "string",
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    type: "number",
  },
  {
    field: "total",
    headerName: "Total",
    width: 140,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    type: "string",
  },
  {
    field: "payment",
    headerName: "Payment",
    width: 130,
    type: "string",
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    width: 150,
    type: "string",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  const [rows, setRows] = useState(initialOrders);

  // DELETE
  const handleDelete = (id: number) => {
    setRows((prev) =>
      prev.filter((order) => order.id !== id)
    );
  };

  // ADD
  const handleAdd = (newOrder: Record<string, string>) => {
    setRows((prev) => [
      ...prev,
      {
        ...newOrder,
        id: prev.length
          ? Math.max(...prev.map((order) => order.id)) + 1
          : 1,
        quantity: Number(newOrder.quantity),
      },
    ]);

    setOpen(false);
  };

  return (
    <div className="orders">

      <div className="info">
        <h1>Orders</h1>

        <button onClick={() => setOpen(true)}>
          Add New Order
        </button>
      </div>

      <DataTable
        slug="orders"
        columns={columns}
        rows={rows}
        onDelete={handleDelete}
      />

      {open && (
        <Add
          slug="orders"
          columns={columns}
          setOpen={setOpen}
          onAdd={handleAdd}
        />
      )}

    </div>
  );
};

export default Orders;