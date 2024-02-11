import TableUserManagement from "../components/Cards/TableUserManagement";
import Dashboard from "../layouts/Dashboard";

export default function UserManagement()
{
  return(
    <Dashboard>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TableUserManagement />
        </div>
      </div>
    </Dashboard>
  )
}