
import { createClient } from '@/utils/supabase/server';
import React from 'react'
import { columns } from './Columns';
import { DataTable } from './DataTable';

export interface BountyType {
  title: string;
  description: string;
  techStack?: string[];
  threadLink: string;
  githubRepo: string;
  amount: number;
  deadline: Date;
  status: string;
  id: string;
  interestedPeople: number;
  difficulty: string;
}

const Bounty = async () => {
  const supabase = createClient()
  const { data: bounties } = await supabase.from('bounties').select()
  console.log("postData", bounties);

  return (
    <div className='flex flex-col gap-10 mt-3 min-h-screen'>
      <div className='max-w-7xl overflow-hidden'>
        <DataTable columns={columns} data={bounties as BountyType[]} />
      </div>
    </div>
  )
}

export default Bounty