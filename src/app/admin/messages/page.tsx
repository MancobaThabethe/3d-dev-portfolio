import { requireAdmin } from "../../actions/auth"
import MessagesAdmin from "@/components/admin/messages-admin"

export default async function MessagesPage() {
  // This will redirect if not authenticated
  await requireAdmin()

  return <MessagesAdmin />
}
