export function saveList(list: any[]) {
  localStorage.setItem("list", JSON.stringify(list));
}
export function getLocalList() {
  let list: string | null = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
}
