export interface Dream {
  _id?: string;
  name?: string;
  description: string;
  explaination?: string;
  date: Date;
}

export interface DateCount {
  date: string;
  count: number;
}
