import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import { v4 as uuidV4 } from 'uuid';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Login() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [id, setid] = useState("")

    const setUserId = () => {
        const newId = uuidV4();
        console.log("Setting UserId: ", newId)
        localStorage.setItem("userId", newId)
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Login
        </Typography>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        value={id}
                        onChange={(e) => setid(e.target.value)}
                        endAdornment={<InputAdornment position="end"><SendIcon onClick={() => setUserId()}></SendIcon></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        labelWidth={0}
                    />
                </FormControl>
            </CardContent>
        </Card>
    );
}