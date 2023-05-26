export interface MockedDashboardData {
  name: string,
  value: string,
  iconType: string,
  difference?: number
}

export const mockedData: MockedDashboardData[] = [
  {
    name: "pets",
    value: "20",
    iconType: "",
    difference: 22
  },
  {
    name: "users",
    value: "250",
    iconType: "",
    difference: 55
  },
  {
    name: "photos",
    value: "500",
    iconType: "",
    difference: -12
  },
  {
    name: "visits",
    value: "2500",
    iconType: "",
    difference: 50
  }
];