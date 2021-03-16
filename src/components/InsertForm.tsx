import React, {ChangeEvent, FormEvent, useState} from "react";

import { Input, Button} from "antd";

 

interface Props {

}

 

const StateHooksComponent: React.FC<Props> = ({}) => {

 

    const [name, setName] = useState<string>('');

 

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        console.log(name);

    };

 

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {

        setName(e.target.value);

    };

 

    return (

        <div>
                <Input type="text" placeholder="name" value={name} onChange={onNameChange} />

                <Button htmlType="submit" type="primary"> Submit </Button>
        </div>

    )

}

 

export default StateHooksComponent;