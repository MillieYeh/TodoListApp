import { ReactNode } from "react";

export interface ListProps {
  items: any;
  updateTodosToShow: any;
  handleDeleteDoneTasks: any;
  clearList: any;
  handleEdit: any;
  handleDelete: any;
  handleDoneTask: any;
  todoitems: ItemsProps[];
}

export type ItemsProps = {
  handleEdit: any;
  handleDelete: any;
  handleDoneTask: any;
  completed: any;
  id: any;
  title: string;
};
