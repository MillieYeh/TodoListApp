import { ReactNode } from "react";

interface ListProps {
  id: number;
  title: string;
  handleDelete: any;
  handleEdit: any;
  handleDoneTask: any;
  completed: any;
}

export default ListProps;
