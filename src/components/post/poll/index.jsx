import { useState } from "react"

export default function Poll({poll: pollData}){

    const [poll, settPoll] = useState(pollData)


    return(
        <div className="mt-3 grid gap-1">
            {!poll.voted && (
                <>

                  {poll.answers.map((answer) => (
                    <button onClick={() => {
                       settPoll({
                         ...poll,
                         voted: true,
                         votes: poll.votes + 1,
                         answers: poll.answers.map(a => {
                            if(a.id === answer.id){
                                return {
                                    ...a,
                                    votes: a.votes + 1
                                }
                            }
                             return a
                        })
                    })
                  }} 
                className="h-8 border border-[#1d9bf0] rounded-full text-[#1d9bf0] font-bold hover:bg-[#1d9bf020] transition-colors " key={answer.id}>
                    {answer.text}
                </button>
            ))}
            <div className="text-[#71767b] mt-2">
                {poll.votes} · 6 gün kaldı
            </div>

                </>
            )}
            {poll.voted && (
                <>
                    {poll.answers.map((answer) => (
                        <div className="h-8 flex items-center justify-between relative overflow-hidden rounded-md px-2">
                            <div className="absolute top-0 left-0 h-full bg-[#333639] opacity-50 " style={{width: ((answer.votes / poll.votes) * 100) + '%'}}/>
                            <span>{answer.text}</span>
                            <span>{((answer.votes / poll.votes) * 100).toFixed(1) + '%'}</span>
                        </div>
                    ))}
                </>
            )}
        </div>
    )

}