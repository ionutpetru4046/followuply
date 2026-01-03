export type Client = {
   id: string;
   name: string;
   email: string;
   status: 'new' | 'contacted' | 'followed-up' | 'closed';
   nextFollowUp?: string; 
};