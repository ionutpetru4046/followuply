import { useState } from "react";
import { Client, ClientStatus } from "@/lib/types";

type Props = {
    onAdd: (client: Client) => void;
    onClose: () => void;
}

export default function AddClientModal({ onAdd, onClose }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<ClientStatus>('new');
    const [nextFollowUp, setNextFollowUp] = useState('');

    function handleSubmit(e: React.FormEvent) {
       e.preventDefault();
       
       if  (!name || !email) return;

       onAdd({
        id: crypto.randomUUID(),
        name,
        email,
        status,
        nextFollowUp: nextFollowUp || undefined,
       });

       onClose();
    }

    return (
       <div>
         <form onSubmit={handleSubmit}
           className="w-full max-w-md rounded-lg bg-white p-6 space-y-4" 
         >
           <h2 className="text-lg font-semibold">Add Client</h2>

           <input 
              className="w-full rounded border p-2" 
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}  
           />

           <input 
              className="w-full rounded border p-2"
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           />

           <select 
                className="w-full rounded border p-2"
                value={status}
                onChange={(e) => setStatus(e.target.value as ClientStatus)}
            >
                <option value="new"></option>
                <option value="contacted">Contacted</option>
                <option value="followed-up">Followed-up</option>
                <option value="closed">Closed</option>
           </select>

           <input 
              type="date"
              className="w-full rounded border p-2"
              value={nextFollowUp}
              onChange={(e) => setNextFollowUp(e.target.value)} 
           />

           <div className="flex justify-end gap-2">
            <button 
                type="button"
                onClick={onClose}
                className="rounded border px-4 py-2"
            >
               Cancel 
            </button>
            <button 
                type="submit"
                className="rounded bg-black px-4 py-2 text-white"
            >
               Add 
            </button>
           </div>
         </form>
       </div> 
    );
}