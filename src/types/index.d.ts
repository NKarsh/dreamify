export interface Dream {
  _id: string;
  userId: string;
  name: string;
  description: string;
  explanation?: string;
  date: Date;
}

export interface DateCount {
  date: string;
  count: number;
}
