import { Typography } from '@mui/material'
import styles from './card.module.css'

export default function Card ({urlImage,backgroundColor,index,texColor,text,backgroundColorText,right,top, left, bottom, width }){
    return(
        <div className={`${styles.description}`} style={{
            backgroundColor:backgroundColor,
            '--index': index,


            
            }}>
            <Typography 
                color={texColor} 
                variant="h2" 
                sx={{
                    boxShadow: backgroundColorText ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
                    backgroundColor: backgroundColorText ? 'rgba(255,255,255,0.5)' : 'transparent',
                    right: right && 0,
                    top: top && "0",
                    left : left && "0",
                    bottom : bottom && "0",
                    width: width ? width : "55%",
                }}
                >
                {text}
            </Typography>
            {urlImage && <img
                src={urlImage}
            />}
        </div>
    )
}   