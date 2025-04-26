export interface task {
  text: string;
  id: string;
  active: boolean;
}
export interface taskprops {
  task: task;
  setChecked: Function;
  remove: Function;
}
export interface addprops {
  addTask: Function;
}
