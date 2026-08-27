import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useState } from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (data: Record<string, string>) => void;
};

const Add = (props: Props) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    props.onAdd(formData);
  };

  return (
    <div className="add">
      <div className="modal">

        <span
          className="close"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>

        <h1>Add new {props.slug}</h1>

        <form onSubmit={handleSubmit}>
          {props.columns
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "img"
            )
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>

                <input
                  type={
                    column.type === "number"
                      ? "number"
                      : "text"
                  }
                  name={column.field}
                  placeholder={column.field}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

          <button type="submit">
            Add
          </button>
        </form>

      </div>
    </div>
  );
};

export default Add;