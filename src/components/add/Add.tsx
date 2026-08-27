import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<Record<string, string>>({});

  const mutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const response = await fetch(
        `http://localhost:8800/api/${props.slug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`all${props.slug}`],
      });

      props.setOpen(false);
    },

    onError: (error) => {
      console.error("Add error:", error);
    },
  });

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

    mutation.mutate(formData);
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
                  type={column.type || "text"}
                  name={column.field}
                  placeholder={column.field}
                  onChange={handleChange}
                />
              </div>
            ))}

          <button
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Adding..." : "Send"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Add;