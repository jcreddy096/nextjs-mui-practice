
export interface Task {
  id: string;
  title: string;
}

export interface Columns {
  [key: string]: Task[];
}
