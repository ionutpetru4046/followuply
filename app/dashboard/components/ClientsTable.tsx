import { Client } from "@/lib/types";

type Props = {
   clients: Client[]; 
};

export default function ClientsTable({ clients }: Props) {
    if (clients.length === 0) {
       return (
        <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">
            No Clients yet. Add your first client to start tracking follow-ups.
        </div>
       );
    }

    return (
       <div className="overflow-hidden rounded-lg border">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
                <tr>
                   <th className="px-4 py-3 text-left text-sm font-medium"></th> 
                   <th className="px-4 py-3 text-left text-sm font-medium"></th> 
                   <th className="px-4 py-3 text-left text-sm font-medium"></th> 
                   <th className="px-4 py-3 text-left text-sm font-medium">
                       Next Follow-up 
                    </th> 
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id} className="border-t">
                       <td className="px-4 py-3">{client.name}</td> 
                       <td className="px-4 py-3 text-gray-600">{client.email}</td> 
                       <td className="px-4 py-3 capitalize">{client.status}</td> 
                       <td className="px-4 py-3">
                           {client.nextFollowUp
                            ? new Date(client.nextFollowUp).toLocaleDateString()
                            : '_'} 
                        </td> 
                    </tr>
                ))}
            </tbody>
          </table>
       </div> 
    );
}