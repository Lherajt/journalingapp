import React from 'react'
import { Form, FormGroup, Label, Input,  Button } from 'reactstrap'

// destructuring props attemt
// export default function Journaling2({ questions, id }) {
export default function Journaling2(props) {

    const {id,
     question1,
    question2,
    question3,
    question4,
question5
} = props

    // console.log('questions: ', journaling1questions.question1)
    // console.log('id: ', id)
    console.log({props});

    return (
        <div className="container-fluid">
            <h1 className="text-center">Journaling2</h1>
            <h2 className="text-center">Best place to start ↓</h2>
        <p>{id}</p>
        <p>{question1}</p>


            {/* <Form inline>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        What kind of day are you having, and why?
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        List 5 things you are  most grateful for…
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        How would you feel if you lost the things you are grateful for?
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        Write a letter with advice to 5yo yourself…
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        What a perfect day would look like to you?
                    </Label>
                </FormGroup>
                {' '}

                <Button>
                    Submit
                </Button>
            </Form> */}

        </div>
    )
}
