export type TypeUserItem = {
  id: number,
	name: string,
	role: string,
	ctime: number
}

export type TypeItems = {
  total?: number,
	per_page: number,
	page?: number,
	limit?: number,
	offset?: number,
}