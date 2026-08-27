import { useState } from "react";
import "./posts.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";

const posts = [
  {
    id: 1,
    title: "Big Eid Sale 2026",
    author: "Admin",
    category: "Promotion",
    status: "Published",
    views: 1250,
    createdAt: "01.03.2026",
  },
  {
    id: 2,
    title: "New PlayStation 5 Available",
    author: "Admin",
    category: "Products",
    status: "Published",
    views: 980,
    createdAt: "03.03.2026",
  },
  {
    id: 3,
    title: "Samsung Smart TV Discount",
    author: "Marketing Team",
    category: "Offer",
    status: "Published",
    views: 750,
    createdAt: "05.03.2026",
  },
  {
    id: 4,
    title: "How to Choose the Right Laptop",
    author: "Tech Team",
    category: "Technology",
    status: "Published",
    views: 1430,
    createdAt: "07.03.2026",
  },
  {
    id: 5,
    title: "Free Delivery on Orders Over ৳5,000",
    author: "Admin",
    category: "Promotion",
    status: "Published",
    views: 2100,
    createdAt: "09.03.2026",
  },
  {
    id: 6,
    title: "New Apple Products Arriving Soon",
    author: "Admin",
    category: "Products",
    status: "Draft",
    views: 0,
    createdAt: "11.03.2026",
  },
  {
    id: 7,
    title: "Top 5 Gadgets for Students",
    author: "Tech Team",
    category: "Technology",
    status: "Published",
    views: 1890,
    createdAt: "13.03.2026",
  },
  {
    id: 8,
    title: "Weekend Special Discount",
    author: "Marketing Team",
    category: "Offer",
    status: "Scheduled",
    views: 0,
    createdAt: "15.03.2026",
  },
  {
    id: 9,
    title: "SuperShop Customer Rewards Program",
    author: "Admin",
    category: "Announcement",
    status: "Published",
    views: 1670,
    createdAt: "17.03.2026",
  },
  {
    id: 10,
    title: "New Electronics Collection",
    author: "Admin",
    category: "Products",
    status: "Draft",
    views: 0,
    createdAt: "19.03.2026",
  },
];

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "title",
    headerName: "Title",
    width: 280,
    type: "string",
  },
  {
    field: "author",
    headerName: "Author",
    width: 170,
    type: "string",
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    type: "string",
  },
  {
    field: "views",
    headerName: "Views",
    width: 120,
    type: "number",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 160,
    type: "string",
  },
];

const Posts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="posts">
      <div className="info">
        <h1>Posts</h1>

        <button onClick={() => setOpen(true)}>
          Add New Post
        </button>
      </div>

      <DataTable
        slug="posts"
        columns={columns}
        rows={posts}
      />

      {open && (
        <Add
          slug="post"
          columns={columns}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Posts;