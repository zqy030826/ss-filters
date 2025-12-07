import BooleanPredicate from "@/components/admin-template/predicates/boolean-predicate";
import DatePredicate from "@/components/admin-template/predicates/date-predicate";
import DateRangePredicate from "@/components/admin-template/predicates/date-range-predicate";
import MultiSelectPredicate from "@/components/admin-template/predicates/multi-select-predicate";
import NumberPredicate from "@/components/admin-template/predicates/number-predicate";
import NumberRangePredicate from "@/components/admin-template/predicates/number-range-predicate";
import SelectPredicate from "@/components/admin-template/predicates/select-predicate";
import StringPredicate from "@/components/admin-template/predicates/string-predicate";
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
    age: 29,
    createdAt: new Date("2023-06-15"),
    updatedAt: new Date("2025-11-28"),
    lastLogin: new Date("2025-11-03"),
    orderCount: 156,
    accountExpiry: new Date("2026-06-15"),
    department: "engineering",
    manager: "manager1",
    projects: ["projectA", "projectD"]
  },
  {
    id: 2,
    name: "Bob Martinez",
    email: "bob.martinez@company.com",
    role: "editor",
    isActive: true,
    age: 34,
    createdAt: new Date("2023-03-22"),
    updatedAt: new Date("2025-11-27"),
    lastLogin: new Date("2025-11-04"),
    orderCount: 89,
    accountExpiry: new Date("2026-03-22"),
    department: "marketing",
    manager: "manager2",
    projects: ["projectB", "projectC"]
  },
  {
    id: 3,
    name: "Carol Zhang",
    email: "carol.zhang@company.com",
    role: "viewer",
    isActive: false,
    age: 28,
    createdAt: new Date("2023-09-10"),
    updatedAt: new Date("2025-10-15"),
    lastLogin: new Date("2025-10-15"),
    orderCount: 23,
    accountExpiry: new Date("2025-12-10"),
    department: "sales",
    manager: "manager3",
    projects: ["projectA"]
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    role: "manager",
    isActive: true,
    age: 41,
    createdAt: new Date("2023-01-05"),
    updatedAt: new Date("2025-11-29"),
    lastLogin: new Date("2025-11-05"),
    orderCount: 342,
    accountExpiry: new Date("2027-01-05"),
    department: "engineering",
    manager: "manager1",
    projects: ["projectA", "projectB", "projectD"]
  },
  {
    id: 5,
    name: "Emma Thompson",
    email: "emma.thompson@company.com",
    role: "editor",
    isActive: true,
    age: 31,
    createdAt: new Date("2023-07-18"),
    updatedAt: new Date("2025-11-26"),
    lastLogin: new Date("2025-11-02"),
    orderCount: 67,
    accountExpiry: new Date("2026-07-18"),
    department: "support",
    manager: "manager2",
    projects: ["projectC"]
  },
  {
    id: 6,
    name: "Frank Wilson",
    email: "frank.wilson@company.com",
    role: "viewer",
    isActive: true,
    age: 26,
    createdAt: new Date("2023-11-30"),
    updatedAt: new Date("2025-11-25"),
    lastLogin: new Date("2025-11-01"),
    orderCount: 12,
    accountExpiry: new Date("2026-11-30"),
    department: "marketing",
    manager: "manager3",
    projects: ["projectB"]
  },
  {
    id: 7,
    name: "Grace O'Brien",
    email: "grace.obrien@company.com",
    role: "admin",
    isActive: true,
    age: 38,
    createdAt: new Date("2023-02-14"),
    updatedAt: new Date("2025-11-30"),
    lastLogin: new Date("2025-11-05"),
    orderCount: 234,
    accountExpiry: new Date("2027-02-14"),
    department: "engineering",
    manager: "manager1",
    projects: ["projectA", "projectC", "projectD"]
  },
  {
    id: 8,
    name: "Henry Patel",
    email: "henry.patel@company.com",
    role: "manager",
    isActive: false,
    age: 45,
    createdAt: new Date("2023-04-08"),
    updatedAt: new Date("2025-09-20"),
    lastLogin: new Date("2025-09-20"),
    orderCount: 178,
    accountExpiry: new Date("2025-10-08"),
    department: "sales",
    manager: "manager2",
    projects: ["projectD"]
  },
  {
    id: 9,
    name: "Iris Nakamura",
    email: "iris.nakamura@company.com",
    role: "editor",
    isActive: true,
    age: 33,
    createdAt: new Date("2023-08-25"),
    updatedAt: new Date("2025-11-28"),
    lastLogin: new Date("2025-11-04"),
    orderCount: 145,
    accountExpiry: new Date("2026-08-25"),
    department: "support",
    manager: "manager3",
    projects: ["projectB", "projectC"]
  },
  {
    id: 10,
    name: "Jack Foster",
    email: "jack.foster@company.com",
    role: "viewer",
    isActive: true,
    age: 27,
    createdAt: new Date("2023-10-12"),
    updatedAt: new Date("2025-11-27"),
    lastLogin: new Date("2025-11-03"),
    orderCount: 45,
    accountExpiry: new Date("2026-10-12"),
    department: "marketing",
    manager: "manager1",
    projects: ["projectA", "projectB"]
  }
];
