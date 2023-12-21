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
                    secondary={<Typography variant="span" >Daniela te <strong>QUIERO MUCHO </strong> sin importar el corto tiempo</Typography>}
                />
            </div>
        

    )
}