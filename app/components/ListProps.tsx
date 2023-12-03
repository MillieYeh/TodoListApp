import { ReactNode } from "react";

interface ListProps {
  id: number;
  title: string;
  handleDelete: ReactNode;
  handleEdit: ReactNode;
  handleDoneTask: any;
  completed: any;
}

export default ListProps;
