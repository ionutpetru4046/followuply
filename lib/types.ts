export type Reminder = {
    id: string;
    clientName: string;
    type: 'WhatsApp' | 'Email';
    dateTime: string; // ISO string
    message: string;
    status: 'upcoming' | 'overdue' | 'done';
};

export type ClientStatus = 
    | 'new'
    | 'contacted'
    | 'followed-up'
    | 'closed';

export type Client = {
   id: string;
   name: string;
   email: string;
   status: ClientStatus;
   nextFollowUp?: string; 
};