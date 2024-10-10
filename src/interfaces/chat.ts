export interface Message {
  role: "user" | "assistant"
  content: string
  analysis?: string
  data?: {
    name: string
    description: string
    values: Array<{
      month: string
      product: string
      units_sold: number
      total_revenue: number
    }>
  }
}
