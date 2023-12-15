import { Typography } from '@mui/material'
import styles from './card.module.css'

export default function Card ({urlImage,backgroundColor,index,texColor,text}){
    return(
        <div className={`${styles.description}`} style={{backgroundColor:backgroundColor,'--index': index}}>
            <Typography color={texColor} variant="h2" >
                {text}
            </Typography>
            <img
                src={urlImage}
            />
        </div>
    )
}   