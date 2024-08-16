export interface Dream {
  _id?: string;
  userId?: string;
  title: string;
  description: string;
  explanation?: string;
  date: Date;
}

export interface DateCount {
  date: string;
  count: number;
}
