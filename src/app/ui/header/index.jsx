import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import styles from './header.module.css'


export default function Header(){
    return (
            <div className={styles.header}>
                <ListItemText
                    disableTypography
                    inset
                    primary={<Typography variant="h1" >ARROCITO</Typography>}
                    secondary={<Typography variant="span" >Para Daniela de alguien que la aprecia</Typography>}
                />
            </div>
        

    )
}