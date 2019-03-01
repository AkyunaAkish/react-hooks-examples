import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

const val = `import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

function Counter({ initialCount }) {
    const [ count, setCount ] = useState(initialCount);

    return (
        <Paper className='counter'>
            <Typography component='h2' 
                        variant='h2' 
                        color='secondary'
                        gutterBottom>
                Count: { count }
            </Typography>
            
            <Button variant='contained' 
                    classes={{ root: 'button' }}
                    onClick={ () => setCount(initialCount) }
                    color='secondary'>
                Reset
            </Button>
            <Button variant='contained' 
                    classes={{ root: 'button' }}
                    onClick={ () => setCount(prevCount => prevCount + 1) }
                    color='secondary'>
                <Add />
            </Button>
            <Button variant='contained' 
                    classes={{ root: 'button' }}
                    onClick={ () => setCount(prevCount => prevCount - 1) }
                    color='secondary'>
                <Remove />
            </Button>
        </Paper>
    );
}

export default Counter;
`;

export default () => ( 
    <AceEditor mode='javascript'
               theme='solarized_dark'
               className='editor'
               fontSize={ 20 }
               onLoad={ (editor) => {
                  editor.getSession().setUseWorker(false)
               } }
               readOnly={ true }
               editorProps={{ $blockScrolling: true }}
               value={ val } /> 
);