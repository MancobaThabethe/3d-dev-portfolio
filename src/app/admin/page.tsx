import { requireAdmin } from "../actions/auth"
import AdminDashboard from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  // This will redirect if not authenticated
  await requireAdmin()

  return <AdminDashboard />
}
