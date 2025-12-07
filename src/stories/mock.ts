import BooleanPredicate from "@/components/example-template/predicates/boolean-predicate";
import DatePredicate from "@/components/example-template/predicates/date-predicate";
import DateRangePredicate from "@/components/example-template/predicates/date-range-predicate";
import MultiSelectPredicate from "@/components/example-template/predicates/multi-select-predicate";
import NumberPredicate from "@/components/example-template/predicates/number-predicate";
import NumberRangePredicate from "@/components/example-template/predicates/number-range-predicate";
import SelectPredicate from "@/components/example-template/predicates/select-predicate";
import StringPredicate from "@/components/example-template/predicates/string-predicate";
import type { PredicateInstances } from "apgu-filters";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  age: number;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  orderCount: number;
  accountExpiry: Date;
  department: string;
  manager: string;
  projects: string[];
};

export const mockPredicates = [
  StringPredicate.meta({
    label: "Name"
  }).build("name"),
  StringPredicate.meta({
    label: "Email"
  }).build("email"),
  SelectPredicate.meta({
    label: "Role",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" },
      { label: "Manager", value: "manager" }
    ]
  }).build("role"),
  NumberPredicate.meta({
    label: "Age"
  }).build("age"),
  BooleanPredicate.meta({
    label: "Active Status"
  }).build("isActive"),
  DatePredicate.meta({
    label: "Created At"
  }).build("createdAt"),
  DatePredicate.meta({
    label: "Updated At"
  }).build("updatedAt"),
  DateRangePredicate.meta({
    label: "Last Login Range"
  }).build("lastLogin"),
  NumberRangePredicate.meta({
    label: "Order Count"
  }).build("orderCount"),
  DatePredicate.meta({
    label: "Account Expiry"
  }).build("accountExpiry"),
  SelectPredicate.meta({
    label: "Department",
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "Marketing", value: "marketing" },
      { label: "Sales", value: "sales" },
      { label: "Support", value: "support" }
    ]
  }).build("department"),
  SelectPredicate.meta({
    label: "Manager",
    options: [
      { label: "Sarah Johnson", value: "manager1" },
      { label: "Michael Chen", value: "manager2" },
      { label: "Emily Rodriguez", value: "manager3" }
    ]
  }).build("manager"),
  MultiSelectPredicate.meta({
    label: "Projects",
    options: [
      { label: "Project Alpha", value: "projectA" },
      { label: "Project Beta", value: "projectB" },
      { label: "Project Gamma", value: "projectC" },
      { label: "Project Delta", value: "projectD" }
    ]
  }).build("projects")
] satisfies PredicateInstances<User>;

// Mock Data (10 realistic user records)
export const mockUsers: User[] = [
  {
    id: 1,
    name: "Alice Cooper",
    email: "alice.cooper@company.com",
    role: "admin",
    isActive: true,
    createdAt: new Date("2023-01-15T10:30:00Z"),
    updatedAt: new Date("2025-10-28T14:20:00Z"),
    lastLogin: new Date("2025-11-04T09:15:00Z"),
    orderCount: 156,
    age: 29,
    accountExpiry: new Date("2026-01-15T00:00:00Z"),
    department: "engineering",
    manager: "manager2",
    projects: ["projectA", "projectB"]
  },
  {
    id: 2,
    name: "Bob Martinez",
    email: "bob.martinez@company.com",
    role: "editor",
    isActive: true,
    age: 34,
    createdAt: new Date("2023-06-22T08:45:00Z"),
    updatedAt: new Date("2025-11-02T16:30:00Z"),
    lastLogin: new Date("2025-11-03T11:20:00Z"),
    orderCount: 89,
    accountExpiry: new Date("2026-06-22T00:00:00Z"),
    department: "marketing",
    manager: "manager1",
    projects: ["projectB", "projectC"]
  },
  {
    id: 3,
    name: "Carol Zhang",
    email: "carol.zhang@company.com",
    role: "viewer",
    age: 28,
    isActive: false,
    createdAt: new Date("2024-02-10T13:15:00Z"),
    updatedAt: new Date("2025-08-15T10:00:00Z"),
    lastLogin: new Date("2025-09-20T15:40:00Z"),
    orderCount: 23,
    accountExpiry: new Date("2025-12-10T00:00:00Z"),
    department: "sales",
    manager: "manager3",
    projects: ["projectC"]
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    role: "manager",
    age: 41,
    isActive: true,
    createdAt: new Date("2022-11-05T09:00:00Z"),
    updatedAt: new Date("2025-11-01T08:45:00Z"),
    lastLogin: new Date("2025-11-05T07:30:00Z"),
    orderCount: 342,
    accountExpiry: new Date("2027-11-05T00:00:00Z"),
    department: "engineering",
    manager: "manager2",
    projects: ["projectA", "projectD"]
  },
  {
    id: 5,
    name: "Emma Thompson",
    email: "emma.thompson@company.com",
    role: "editor",
    isActive: true,
    createdAt: new Date("2024-05-18T11:20:00Z"),
    updatedAt: new Date("2025-10-30T13:10:00Z"),
    lastLogin: new Date("2025-11-04T16:25:00Z"),
    age: 31,
    orderCount: 67,
    accountExpiry: new Date("2026-05-18T00:00:00Z"),
    department: "support",
    manager: "manager1",
    projects: ["projectB"]
  },
  {
    id: 6,
    name: "Frank Wilson",
    email: "frank.wilson@company.com",
    role: "viewer",
    isActive: true,
    age: 26,
    createdAt: new Date("2024-08-30T14:40:00Z"),
    updatedAt: new Date("2025-11-03T09:55:00Z"),
    lastLogin: new Date("2025-11-04T12:10:00Z"),
    orderCount: 12,
    accountExpiry: new Date("2026-08-30T00:00:00Z"),
    department: "marketing",
    manager: "manager1",
    projects: ["projectC"]
  },
  {
    id: 7,
    name: "Grace O'Brien",
    email: "grace.obrien@company.com",
    role: "admin",
    isActive: true,
    age: 38,
    createdAt: new Date("2023-03-12T10:00:00Z"),
    updatedAt: new Date("2025-11-04T11:30:00Z"),
    lastLogin: new Date("2025-11-05T08:00:00Z"),
    orderCount: 234,
    accountExpiry: new Date("2026-03-12T00:00:00Z"),
    department: "engineering",
    manager: "manager2",
    projects: ["projectA", "projectB", "projectD"]
  },
  {
    id: 8,
    name: "Henry Patel",
    email: "henry.patel@company.com",
    role: "manager",
    isActive: false,
    age: 45,
    createdAt: new Date("2023-09-20T15:30:00Z"),
    updatedAt: new Date("2025-07-10T14:15:00Z"),
    lastLogin: new Date("2025-07-10T17:45:00Z"),
    orderCount: 178,
    accountExpiry: new Date("2025-11-20T00:00:00Z"),
    department: "sales",
    manager: "manager3",
    projects: ["projectC", "projectD"]
  },
  {
    id: 9,
    name: "Iris Nakamura",
    email: "iris.nakamura@company.com",
    role: "editor",
    isActive: true,
    age: 30,
    createdAt: new Date("2024-01-08T12:45:00Z"),
    updatedAt: new Date("2025-11-02T10:20:00Z"),
    lastLogin: new Date("2025-11-02T14:30:00Z"),
    orderCount: 95,
    accountExpiry: new Date("2026-01-08T00:00:00Z"),
    department: "support",
    manager: "manager1",
    projects: ["projectA", "projectC"]
  },
  {
    id: 10,
    name: "Jack Anderson",
    email: "jack.anderson@company.com",
    role: "viewer",
    age: 27,
    isActive: true,
    createdAt: new Date("2024-07-14T09:30:00Z"),
    updatedAt: new Date("2025-10-25T15:40:00Z"),
    lastLogin: new Date("2025-10-28T10:15:00Z"),
    orderCount: 45,
    accountExpiry: new Date("2026-07-14T00:00:00Z"),
    department: "marketing",
    manager: "manager3",
    projects: ["projectB", "projectD"]
  }
];
