import React, { useState, useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Navbarr from './Navbar'
import Journaling1 from './Journaling1'
import Journaling2 from './Journaling2'
import Journaling3 from './Journaling3'

export const JournalContext = React.createContext()



const LOCAL_STORAGE_KEY = 'journaling'


function Main() {

    const [journals, setJournals] = useState(defaultDays)


    // saving and loading journals in localStorage
    useEffect(() => {
        const journalJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (journalJSON != null) setJournals(JSON.parse(journalJSON))

    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(journals))

    }, [journals])









    // need to make this applicable to journaling2, 3, ... questions...
    function handleJournalChange(id, questions) {
        const newJournals = [...journals]
        const index = newJournals.findIndex(j => j.id === id)
        newJournals[index].journaling1questions = questions

        // const foundJournal = newJournals.find(j => j.id === id)
        // console.log('journal id: ', index);
        // newJournals[index] = [...newJournals[index], newJournals[index].journaling1questions = questions]
        
        setJournals(newJournals)
    }



    const JournalContextValue = {
        handleJournalChange
    }

    return (


        <BrowserRouter>
            <Navbarr />
            <JournalContext.Provider value={JournalContextValue}>
                <Routes>

                    <Route path="/" element={<Journaling1
                        questions={journals[0].journaling1questions}
                        // questions={[...journals[0]]}
                        id={journals[0].id} />}

                    >
                    </Route>

                    <Route path="/Journaling2" element={<Journaling2
                        // questions=
                        // {[...journals[1]]}
                        {...journals[0].journaling2questions}

                    id={journals[0].id}

                    />}


                    ></Route>

                    <Route path="/Journaling3" element={<Journaling3 />}>

                    </Route>


                </Routes>
            </JournalContext.Provider>
        </BrowserRouter>
    )
}


const defaultDays = [
    {
        id: uuidv4(),
        day: 'Day1',
        journaling1questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling2questions:
        {

            question1: 'j2Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling3questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        }




    },
    {
        id: uuidv4(),
        day: 'Day2',
        journaling1questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling2questions:
        {

            question1: 'Answear 1222',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling3questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        }


    }

]

export default Main