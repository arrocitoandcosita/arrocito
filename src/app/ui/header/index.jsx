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
                    secondary={<Typography variant="span" >Daniela este querer cada vez se transforma en algo más <strong>TE QUIERO</strong></Typography>}
                />
            </div>
        

    )
}