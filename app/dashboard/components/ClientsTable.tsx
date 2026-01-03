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
                   <th className=""></th> 
                   <th className=""></th> 
                   <th className=""></th> 
                   <th className=""></th> 
                </tr>
            </thead>
          </table>
       </div> 
    )
}