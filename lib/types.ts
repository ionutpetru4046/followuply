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