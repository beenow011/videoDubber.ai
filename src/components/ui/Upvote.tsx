'use client';
import { IconTriangleFilled } from '@tabler/icons-react'
import React, { useState } from 'react'

function Upvote() {
    const [upvotes, setUpVotes] = useState(0)
    const [upVoteFlag, setUpVoteFlag] = useState(false)
    const voteRun = () => {
        setUpVotes(prev => upVoteFlag ? prev - 1 : prev + 1)
        setUpVoteFlag(prev => !prev)
    }
    return (

        <div className={`flex justify-center rounded-md items-center h-12 w-64 gap-2 ${!upVoteFlag ? ' bg-gradient-to-r from-rose-400 to-red-500  text-white' : 'border border-rose-500 text-rose-500'}`} onClick={voteRun}>

            <IconTriangleFilled />
            <h1 className='font-bold text-xl cursor-pointer'>Upvote <span>{upvotes}</span></h1>

        </div>
    )
}

export default Upvote