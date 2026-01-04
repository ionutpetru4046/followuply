import { Reminder } from "@/lib/types";

type Props = {
    reminders: Reminder[];
};

export default function SmartReminderPanel({ reminders }: Props) {
    if (reminders.length === 0) {
        return (
            <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">
                No reminders yet. Add clients or schedule follow-ups to get started.
            </div>
        );
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'overdue':
                return 'text-red-600';
            case 'upcoming':
                return 'text-yellow-500';
            case 'done':
                return 'text-green-600';
            default;
                return 'text-gray-600';
        }
    };

    return (
        <div>
           <table>
             <thead>
               <tr>
                 <th className="px-4 py-3 text-left text-sm font-medium">Client</th> 
                 <th className="px-4 py-3 text-left text-sm font-medium">Type</th> 
                 <th className="px-4 py-3 text-left text-sm font-medium">Date & Time</th> 
                 <th className="px-4 py-3 text-left text-sm font-medium">Message</th> 
                 <th className="px-4 py-3 text-left text-sm font-medium">Actions</th> 
               </tr>    
             </thead>
             <tbody>
                {reminders.map((reminder) => (
                    <tr key={reminder.id} className="border-t hover:bg-gray-50">
                       <td className=""></td> 
                       <td className=""></td> 
                       <td className=""></td> 
                    </tr>
                ))}
             </tbody>
           </table> 
        </div>
    )
}