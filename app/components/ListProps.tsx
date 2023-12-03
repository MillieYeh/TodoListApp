import { ReactNode } from "react"

interface ListProps {
  id: number, 
  title: string, 
  handleDelete: ReactNode, 
  handleEdit: ReactNode,
  handleDoneTask: ReactNode,
  completed: any
  }

  export default ListProps